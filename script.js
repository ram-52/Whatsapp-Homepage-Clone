console.log(`hello world`);

const btns = document.querySelectorAll('button')
const mainEl = document.querySelector('main')
const header = document.querySelector('header')
const features = document.querySelector('#features')
const features_section = document.querySelector('.features-section')

btns.forEach((btn, idx) => applyCircleAni(btn, idx))


const childs = Array.from(features_section.children)

features.addEventListener('click', () => {
    header.classList.toggle('bg-white')    
    if(features_section.classList.contains('opacity-0')) {
        features_section.classList.remove('opacity-0')
        features_section.classList.add('opacity-100')
    } else if(features_section.classList.contains('opacity-100')) {
        features_section.classList.remove('opacity-100')
        features_section.classList.add('opacity-0')
    }

    childs.forEach(child => child.classList.toggle('add-cursor'))    
})

function applyCircleAni(btn, idx) {

    const circle = btns[idx].querySelector('.circle')
    btn.addEventListener('mouseenter', () => {
        circle.style.top = '-50%'
    })
    btn.addEventListener('mouseleave', () => {
        circle.style.top = '100%'
    })
}

function showImgs() {
    const imgEls = mainEl.querySelectorAll('img')
    setTimeout(() => imgEls[0].style.display = 'block', 500)
    setTimeout(() => imgEls[1].style.display = 'block', 1000)
    setTimeout(() => imgEls[2].style.display = 'block', 2500)
    setTimeout(() => imgEls[3].style.display = 'block', 3500)
    setTimeout(() => imgEls[4].style.display = 'block', 4500)
    setTimeout(() => imgEls[5].style.display = 'block', 5000)
    setTimeout(() => imgEls[6].style.display = 'block', 6000)
}

showImgs()


// Website Header Mechanism
window.addEventListener('scroll', () => addBorder())

function addBorder() {
    const posi = mainEl.getBoundingClientRect()
    if(posi.y < 96) {
        header.classList.add('add-border')
        header.style.opacity = '0.9'
    } else if(posi.y == 96) {
        header.classList.remove('add-border')
        header.style.opacity = '1'
    }
}