/***************************************** OBJECT: BUTTON ATTRIBUTES *************************************************** */

// Applied to each new Button
const btnAttrsObj = {
    backgroundColor: '#4c1b87',        
    border: 'none',
    'border-radius': '10px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    margin: '15px',
    outline: 'none',
    padding: '15px',
    'text-align' : 'center',
    transition: '0.4s',
    width : '200px',
}

const modalContentObj = {

    header: {
        contact: 'CONTACT US',
        cs: 'CUSTOMER SUPPORT SERVICES',
        ps: 'PROVIDER SUPPORT SERVICES'
    },

    content: {
        contact: `Thank you for using Immunization Tracker! Please feel free to reach out to us with any comments, questions, or concerns.`,
        cs: `Immunization Tracker Customer Support representatives are available on the following days and times: `, 
        ps: `Immunization Tracker Provider Support representatives are available on the following days and times: `,
        address: `CORPORATE HEADQUARTERS
                  Immunization Tracker Services Inc.
                  1973 42nd Ave West 
                  Seattle, WA 98109`,
        genInfo: `Toll-Free: 888-555-1111\nPhone: 206-555-1212\nEmail: info@immunizationtracker.net`,
        csPhn: `CUSTOMER SUPPORT SERVICES
                Phone: 888-555-1212
                Monday - Friday 8:00 AM - 9:00 PM PST`,
        psPhn: `PROVIDER SUPPORT SERVICES
                Phone: 800-555-2323
                Monday - Friday 8:00 AM - 9:00 PM PST`,    
    } 
}


/***************************************** ANONYMOUS FUNCTION: COUNTER *************************************************** */ 

// IIFE closure - assigns an individual ID number to each new button
const counter = (function() {
    let cnt = 1
    return function() { 
        return cnt++
    }
}())


/***************************************** BUTTON CLASS CONSTRUCTOR *************************************************** */

class Button {
    constructor(button) {
        // Assign this.button to the element passed into the constructor
        this.button = button;
        
        // Add id to button
        this.button.setAttribute('id', `btn-${counter()}`);
        
        // Get / set button style attributes 
        button.style.backgroundColor = btnAttrsObj.backgroundColor;
        button.style.border = btnAttrsObj.border;
        button.style.borderRadius = btnAttrsObj['border-radius'];
        button.style.color = btnAttrsObj.color;
        button.style.cursor = btnAttrsObj.cursor;
        button.style.fontSize = btnAttrsObj.fontSize;
        button.style.margin = btnAttrsObj.margin;
        button.style.outline = btnAttrsObj.outline;
        button.style.padding = btnAttrsObj.padding;
        button.style.textAlign = btnAttrsObj['text-align'];
        button.style.transition = btnAttrsObj.transition;
        button.style.width = btnAttrsObj.width;
    }    
}

// Get - '.btn' elements
const buttons = document.querySelectorAll('.btn')

// Create a new Button object for each element in buttons
buttons.forEach(button => {
    new Button(button);
    button.addEventListener('click', event => toggleModal());
})


/***************************************** MODAL *************************************************** */

// Construction **************************

// Get - modal, close button, and modal content area 
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const modalHeader = document.querySelector('.modal-header');

// Create header and paragraph elements
const eleH1= document.createElement('H1');
const eleP1 = document.createElement('P');
const eleP2 = document.createElement('P');

// Get content
let modal_HeadLine = modalContentObj['header']['contact'];
let modal_Paragraph1 = modalContentObj['content']['contact']
let modal_Paragraph2 = modalContentObj['content']['genInfo']

// // Set content to text nodes
// const txtH1 = document.createTextNode(modal_HeadLine);
// const txtP1 = document.createTextNode(modal_Paragraph1);
// const txtP2 = document.createTextNode(modal_Paragraph2);

// Append text nodes to elements
// eleH1.appendChild(txtH1);
// eleP1.appendChild(txtP1);
// eleP2.appendChild(txtP2);

eleH1.innerHTML = modal_HeadLine;
eleP1.innerHTML = modal_Paragraph1;
eleP2.innerHTML = modal_Paragraph2;

// Append elements to modal header 
modalHeader.appendChild(eleH1);
modalHeader.appendChild(eleP1);
modalHeader.appendChild(eleP2);


// Event handlers ************************ 

// close button & window click - calls toggleModal()
closeButton.addEventListener("click", event => toggleModal());
window.addEventListener("click", event => windowOnClick(event));


// Functions *****************************

// Toggle '.show-modal' in modal
function toggleModal() {
    modal.classList.toggle("show-modal");
}

// Hide modal on window click 
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}