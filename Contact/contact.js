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
        cs: 'CUSTOMER SUPPORT',
        ps: 'PROVIDER SUPPORT'
    },

    content: {
        contact: `Thank you for using Immunization Tracker!\nPlease feel free to reach out to us with any comments, questions, or concerns.`,
        cs: `Representatives are available:\n\nMonday - Friday 8:00 AM - 9:00 PM PST`, 
        genInfo: `Toll-Free: 888-555-1111\nPhone: 206-555-1212\nEmail: info@immunizationtracker.net\n\nITS Inc.\n1973 42nd Ave West\nSeattle, WA 98109`,
        csPhn: `Toll Free: 888-555-1212`,
        psPhn: `Toll Free: 800-555-2323`,    
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
    button.addEventListener('click', event => {
        let ele = event.target;        
        let btnId = ele.id;
        buidlModal(btnId);
        toggleModal();
    });
})


/***************************************** MODAL *************************************************** */

// Construction **************************

// Get - modal, close button, and modal content area 
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const modalHeader = document.querySelector('.modal-header');
const modalContent = document.querySelector('.modal-content');

// Create header and paragraph elements
const eleH1= document.createElement('H1');
const eleP1 = document.createElement('P');
const eleP2 = document.createElement('P');

// Event handlers ************************ 

// close button & window click - calls toggleModal()
closeButton.addEventListener("click", event => toggleModal());
window.addEventListener("click", event => windowOnClick(event));


// Functions *****************************

// Build modal
function buidlModal(id) {
    // Determine content
    let headLine = "";
    let para1 = "";
    let para2 = "";
   
    if(id === 'btn-1') {
        headLine = 'contact';
        para1 = 'contact';
        para2 = 'genInfo';
    } else if(id === 'btn-2') {
        headLine = 'cs';
        para1 = 'csPhn';
        para2 = 'cs';
    } else {
        headLine = 'ps';
        para1 = 'psPhn';
        para2 = 'cs'
    }

    // Get modal content
    let modal_HeadLine = modalContentObj['header'][headLine];
    let modal_Paragraph1 = modalContentObj['content'][para1];
    let modal_Paragraph2 = modalContentObj['content'][para2];

    // Set content
    eleH1.innerHTML = modal_HeadLine;
    eleP1.innerHTML = modal_Paragraph1;
    eleP2.innerHTML = modal_Paragraph2;

    // Append elements to modal header 
    modalHeader.appendChild(eleH1);
    modalHeader.appendChild(eleP1);
    modalHeader.appendChild(eleP2);
}

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