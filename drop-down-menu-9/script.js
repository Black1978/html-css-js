function ibg() {
    let ibg = document.querySelectorAll('.ibg')
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage =
                'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
        }
    }
}
ibg()
//---mobile menu-------------//
window.onload = function () {
    document.querySelector('.header-icon').onclick = function () {
        document.querySelector('.header-menu').classList.toggle('active')
        document.querySelector('.header-icon').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    }
}
//------------------------------//
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    },
}
let body = document.querySelector('body')
if (isMobile.any()) {
    body.classList.add('touch')
    let arrow = document.querySelectorAll('.arrow-mobile')

    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling.previousElementSibling
        let subMenu = arrow[i].nextElementSibling
        let thisArrow = arrow[i]

        thisLink.classList.add('parent')
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open')
            thisArrow.classList.toggle('active')
        })
    }
} else {
    body.classList.add('mouse')
}

//------------------------------//
//----------------accordion-----//

var boxes = Array.from(document.querySelectorAll('.accord-label'))
boxes.forEach((box) => {
    box.addEventListener('click', boxHandler)
})
function boxHandler(e) {
    e.preventDefault()
    var currentBox = e.target.closest('.accord-box')
    var currentContent = e.target.nextElementSibling
    currentBox.classList.toggle('active')
    if (currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
    } else {
        currentContent.style.maxHeight = 0
    }
}
//-----------------------------//
