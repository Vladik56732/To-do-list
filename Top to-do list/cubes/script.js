const list = document.querySelector('.list')

for (let i = 0; i < 5; i++) {
    createBlock(list, 1)
}

function createBlock(rootElement, level) {
    const lvl1 = document.createElement('div')
    if (level == 1) {
        lvl1.className = `lvl${level}`
    } else {
        lvl1.className = 'lvl'
    }
    rootElement.append(lvl1)

    const content = document.createElement('div')
    content.className = 'content'
    lvl1.append(content)

    const lvl1Text = document.createElement('p')
    lvl1Text.innerHTML = `Какой-то текст`
    content.append(lvl1Text)

    const controls = document.createElement('div')
    controls.className = 'controls'
    content.append(controls)

    const lvl1Plus = document.createElement('p')
    lvl1Plus.className = 'plus'
    lvl1Plus.innerHTML = '+'
    controls.append(lvl1Plus)

    lvl1Plus.addEventListener('click', () => {
        createBlock(lvl1, 2)
    })

    const lvl1Del = document.createElement('p')
    lvl1Del.className = 'del'
    lvl1Del.innerHTML = '&times;'
    controls.append(lvl1Del)

    lvl1Del.addEventListener('click', () => {
        lvl1.remove()
    })
}
