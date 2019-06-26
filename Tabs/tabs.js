class TabLink {
    constructor(link) {
      // Assign this.element to the passed in DOM element
      this.link = link
      
      // Get the custom data attribute on the Link
      this.data = link.dataset
      
      // Using the custom data attribute get the associated Item element
      this.item = document.querySelector(`.tabs-item[data-tab='${this.link.dataset.tab}']`)
      
      // Using the Item element, create a new instance of the TabItem class
      this.item = new TabItem(this.item)
      
      // Add a click event listener on this instance, calling the select method on click
      this.link.addEventListener('click', event => this.select())
    }
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link')
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach(link => link.classList.remove('tabs-link-selected'))
  
      // Add a class named "tabs-link-selected" to this link
      this.link.classList.add('tabs-link-selected')

      // Get the img element with the .selection-img class
      this.img = document.querySelector('.selection-img')

      // Set the img src attribute to the corresponding tabLink
      switch(this.link.innerHTML) {
        case 'PARENT':
          this.img.setAttribute('src', "../Images/hands.jpg")
          break;

        case 'PATIENT':
          this.img.setAttribute('src', '../Images/stethoscope.jpg')
          break;

        case 'PROVIDER':
          this.img.setAttribute('src', '../Images/pediatric.jpg')
          break;
      }
      
      // Call the select method on the item associated with this link
      this.item.select()
  
    }
  }
  
  class TabItem {
    constructor(item) {
      // Assign this.element to the passed in element
      this.item = item    
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item')
  
      // Remove the class "tabs-item-selected" from each element
      items.forEach(item => item.classList.remove('tabs-item-selected'))
      
      // Add a class named "tabs-item-selected" to this element
      this.item.classList.add('tabs-item-selected')
    }
  }
  
  
  // Get DOM elements and store them in links
  links = document.querySelectorAll('.tabs-link')
  
  // Iterate over the Nodelist and create a new object for each item in the Nodelist
  links.forEach(link => new TabLink(link))
  