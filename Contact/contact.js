const btnAts = {
    'width' : 'auto',
    'font-size': '1.6rem',
    'border-style': 'none',
    'border-radius': '10px',
    'color': 'white',
    'background-color': '@purple',
    'margin-top': '25px',
    'padding': '15px'
}

class Button {
    constructor(button) {
        this.button = button
        button.style.width = btnAts['width']
        button.style.fontSize = 

    }
}

const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => new button(button))