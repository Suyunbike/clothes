const items = document.querySelectorAll('.menu-item')
const images = document.querySelectorAll('img')

function clearAllCategory() {
    images.forEach(image => image.classList.remove('active'))
    items.forEach(item => item.classList.remove('active'))
}

function setActiveName(categoryName) {
    images.forEach(image => {
        if (image.dataset.name === categoryName) {
            image.classList.add('active')
        }
    })

    items.forEach(item => {
        if (item.dataset.name === categoryName) {
            item.classList.add('active')
        }
    })
}
items.forEach(button => {
    button.addEventListener('click', () => {
        clearAllCategory()
        setActiveName(button.dataset.name)
    })
})

clearAllCategory()
setActiveName('Krossi')