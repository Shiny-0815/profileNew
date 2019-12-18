setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 1001);

//为每个含data-x的添加offset类
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(() => {
    yyy()
}, 1000);
window.onscroll = function (x) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    yyy()
}
function yyy() {
    //高亮
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }

    specialTags[minIndex].classList.remove('offset')

    /*for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.remove('active')
    }
    specialTags[minIndex].classList.add('active')*/

    //找导航栏对应部分
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let bortherAndMe = li.parentNode.children
    for (let i = 0; i < bortherAndMe.length; i++) {
        bortherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

/*

let liTags = document.getElementsByClassName('menuTigger')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        brother.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        brother.classList.remove('active')
    }
}*/

let liTags = document.querySelectorAll('nav.menu >ul >li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}

//设置缓动
let aTags = document.querySelectorAll('nav.menu >ul >li >a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        const coords = { y: currentTop };//起始位置
        let t = Math.abs((s / 100) * 300)
        if (t > 900) { t = 700 }
        const tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start();//开始缓动
    }
}
