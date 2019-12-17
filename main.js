setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 1001);

window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
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
        const coords = { y: currentTop };
        let t = Math.abs((s / 100) * 300)
        if (t > 900) { t = 700 }
        const tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}
