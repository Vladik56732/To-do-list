const toDoItems = document.querySelector('.to-do-items')
const input = document.querySelector('#input')
const trashIcon = document.querySelector('#trash')

input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addItem()
    }
})

function addItem() {
    if (input.value.trim() != '') {
        const divParent = document.createElement('div')
        const divChild = document.createElement('div')
        const checkIcon = document.createElement('i')
        const trashIcon = document.createElement('i')

        divParent.className = 'item'
        divParent.innerHTML = `<div>${input.value}</div>`

        checkIcon.className = 'fa-solid fa-circle-check'
        checkIcon.style.color = 'lightgray'
        checkIcon.addEventListener('click', () => {
            checkIcon.style.color = 'limegreen'
        })

        divChild.appendChild(checkIcon)

        trashIcon.className = 'fa-solid fa-trash'
        trashIcon.style.color = 'darkgray'
        trashIcon.addEventListener('click', () => {
            divParent.remove()
        })

        divChild.appendChild(trashIcon)

        divParent.appendChild(divChild)

        toDoItems.appendChild(divParent)

        input.value = ''
    }
}
