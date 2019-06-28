const btnAttrs = {
    width : 'auto',
    fontSize: '1.5rem',    
    'border-style': 'none',
    'border-radius': '50px',
    color: 'white',
    backgroundColor: '#32006e',
    padding: '15px 25px'
}

const modalContent = {
    'support': {
        img: '../Images/Contact/contact.svg',
        alt: 'sillouhetted icon of a nurse',
        h1: 'CUSTOMER SUPPORT',
        p1: 'Thank you for using Immunization Tracker! <br> Please contact customer support:'
        p2: 

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

        // Create a new instance of Modal class
        this.modal = new Modal(this.modal)        
        
        // Click event handler, calls modal() 
        button.addEventListener('click', event => this.select())
    }

    select() {
        // Get DOM elements with class '.btn' and store them in 'buttons'
        const buttons = document.querySelectorAll('.btn')

        // Removes the class 'btn-clicked' attribute for each element in 'buttons'
        buttons.forEach(button => button.classList.remove('btn-clicked'))

        // Adds the class 'btn-clicked' attribute to the this.button element
        this.button.classList.add('btn-clicked')

        // Get button id
        const clicked = this.button.id 

        // Evaluate button id and call this.modal.select() passing the id value
        (clicked === 1) ? this.modal.select(1) : (clicked === 2) ? this.modal.select(2) : (clicked === 3) ? this.modal.select(3) : false
        
        
        }
    }


class Modal {
    constructor(modal) {
        // Assign this.modal to passed in element
        this.modal = modal
    }

    select(num) {
       switch(num) {
            case 1: 

                break;

            case 2:

                break;

            case 3:

                break;
    }
}



// Get DOM elements with class '.btn' and store them in 'buttons'
buttons = document.querySelectorAll('.btn')
// Iterate over the 'buttons' Nodelist and create a new object for each element
buttons.forEach(button => new Button(button))