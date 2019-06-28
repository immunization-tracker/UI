/***************************************** Button attributes object *************************************************** */
const btnAttrs = {
    backgroundColor: '#4c1b87',        
    border: 'none',
    'border-radius': '10px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    margin: '25px',
    outline: 'none',
    padding: '18px',
    'text-align' : 'center',
    transition: '0.4s',
    width : '200px',
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
        button.style.backgroundColor = btnAttrs.backgroundColor
        button.style.border = btnAttrs.border
        button.style.borderRadius = btnAttrs['border-radius']
        button.style.color = btnAttrs.color
        button.style.cursor = btnAttrs.cursor
        button.style.fontSize = btnAttrs.fontSize
        button.style.margin = btnAttrs.margin
        button.style.outline = btnAttrs.outline
        button.style.padding = btnAttrs.padding
        button.style.textAlign = btnAttrs['text-align']
        button.style.transition = btnAttrs.transition
        button.style.width = btnAttrs.width        
    }

}

// Get DOM elements with class '.btn' and store them in 'buttons'
const buttons = document.querySelectorAll('.btn')

// Iterate over the 'buttons' Nodelist and create a new object for each element
buttons.forEach(button => new Button(button))

