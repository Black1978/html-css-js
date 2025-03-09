window.onload = function () {
    document.querySelector('.header-icon').onclick = function () {
        document.querySelector('.header-menu').classList.toggle('active')
        document.querySelector('.header-icon').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    }
    const menuLinks = document.querySelectorAll(
        'a.menu-top-button-1, a.menu-top-button-2, a.menu-link, a.sub-menu-link'
    )
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', () => {
            document.querySelector('.header-menu').classList.toggle('active')
            document.querySelector('.header-icon').classList.toggle('active')
            document.querySelector('body').classList.toggle('lock')
        })
    })
}



function offset(el) {
    const rect = el.getBoundingClientRect()
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
const animItems = document.querySelectorAll('._anim-items')
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            if (
                scrollTop > animItemOffset - animItemPoint &&
                scrollTop < animItemOffset + animItemHeight
            ) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-rev-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}
