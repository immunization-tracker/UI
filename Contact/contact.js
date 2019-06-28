const btnAttrs = {
    width : 'auto',
    fontSize: '1.5rem',    
    'border-style': 'none',
    'border-radius': '50px',
    color: 'white',
    backgroundColor: '#5d348b',
    padding: '15px 25px'
}

const modalContent = {
    'support': {
        
    }
}

// Counter function for numbering buttons - IIFE Closure
const counter = (function() {
    let cnt = 1
    return function() { 
        return cnt++
    }
}())


class Button {
    constructor(button) {
        // Assign this.button to the element passed into the constructor
        this.button = button
        
        // get / set button style attributes from the 'btnAttrs' object   
        button.style.width = btnAttrs.width
        button.style.fontSize = btnAttrs.fontSize
        button.style.borderStyle = btnAttrs['border-style']
        button.style.borderRadius = btnAttrs['border-radius']
        button.style.color = btnAttrs.color
        button.style.backgroundColor = btnAttrs.backgroundColor
        button.style.padding = btnAttrs.padding

        // Add numbered id attribute to this.button by calling counter function
        this.button.setAttribute('id', `btn-${counter()}`) 
        
        // Click event handler, calls modal() 
        button.addEventListener('click', event => this.modal())
    }

    modal() {
        // Get DOM elements with class '.btn' and store them in 'buttons'
        const buttons = document.querySelectorAll('.btn')

        // Removes the class 'btn-clicked' attribute for each element in 'buttons'
        buttons.forEach(button => button.classList.remove('btn-clicked'))

        // Adds the class 'btn-clicked' attribute to the this.button element
        this.button.classList.add('btn-clicked')        
    }

}



// Get DOM elements with class '.btn' and store them in 'buttons'
buttons = document.querySelectorAll('.btn')
// Iterate over the 'buttons' Nodelist and create a new object for each element
buttons.forEach(button => new Button(button))