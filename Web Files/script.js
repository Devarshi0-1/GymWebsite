let mainImages = document.getElementsByClassName('mainImages')
let addArrow = document.getElementsByClassName('addArrow')

mainImages[0].addEventListener('mouseover', () => {
    addArrow[0].classList.add('arrowIcon')
})

mainImages[1].addEventListener('mouseover', () => {
    addArrow[1].classList.add('arrowIcon')
})

mainImages[2].addEventListener('mouseover', () => {
    addArrow[2].classList.add('arrowIcon')
})

mainImages[0].addEventListener('mouseout', () => {
        addArrow[0].classList.remove('arrowIcon')
})

mainImages[1].addEventListener('mouseout', () => {
        addArrow[1].classList.remove('arrowIcon')
})

mainImages[2].addEventListener('mouseout', () => {
        addArrow[2].classList.remove('arrowIcon')
})

