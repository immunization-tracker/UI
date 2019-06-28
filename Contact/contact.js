/***************************************** Button attributes object *************************************************** */
const btnAttrs = {
    width : 'auto',
    fontSize: '1.5rem',    
    'border-style': 'none',
    'border-radius': '50px',
    color: 'white',
    backgroundColor: '#32006e',
    padding: '15px 25px'
}


/***************************************** Counter function for numbering buttons - IIFE & closure *************************************************** */ 
const counter = (function() {
    let cnt = 1
    return function() { 
        return cnt++
    }
}())

/***************************************** Button class constructor *************************************************** */

class Button {
    constructor(button) {
        // Assign this.button to the element passed into the constructor
        this.button = button
        
        // Add numbered id attribute to this.button by calling counter function
        this.button.setAttribute('id', `btn-${counter()}`)
        
        // get / set button style attributes from the 'btnAttrs' object   
        button.style.width = btnAttrs.width
        button.style.fontSize = btnAttrs.fontSize
        button.style.borderStyle = btnAttrs['border-style']
        button.style.borderRadius = btnAttrs['border-radius']
        button.style.color = btnAttrs.color
        button.style.backgroundColor = btnAttrs.backgroundColor
        button.style.padding = btnAttrs.padding

    }
}

// Get DOM elements with class '.btn' and store them in 'buttons'
buttons = document.querySelectorAll('.btn')

// Iterate over the 'buttons' Nodelist and create a new object for each element
buttons.forEach(button => new Button(button))

