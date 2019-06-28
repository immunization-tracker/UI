class TabLink {
    constructor(link) {
      // Assigns 'this.element' to the passed in DOM element
      this.link = link
      
      // References the custom data attribute on the Link
      this.data = link.dataset
      
      // References the associated Item element from the custom data attribute
      this.item = document.querySelector(`.tabs-item[data-tab='${this.link.dataset.tab}']`)
      
      // Creates a new instance of the TabItem class
      this.item = new TabItem(this.item)
      
      // Click event handler, calls select()
      this.link.addEventListener('click', event => this.select())
    }
  
    select() {
      // References all elements with the class '.tabs-link' 
      const links = document.querySelectorAll('.tabs-link')
  
      // Removes the 'tabs-link-selected' class from all of the links
      links.forEach(link => link.classList.remove('tabs-link-selected'))
  
      // Adds a class named "tabs-link-selected" to this.link
      this.link.classList.add('tabs-link-selected')

      // Reference the img element with the class '.selection-img' 
      this.img = document.querySelector('.selection-img')

      // Sets the img src and alt attributes to the img that corresponds with the selected tabLink
      switch(this.link.innerHTML) {
        case 'PARENT':
          this.img.setAttribute('src', "../Images/Tabs/hands.jpg")
          this.img.setAttribute('alt', "childrens hands outreached and joining in a circle")
          break;

        case 'PATIENT':
          this.img.setAttribute('src', '../Images/Tabs/stethoscope.jpg')
          this.img.setAttribute('alt', "a teal stethoscope lying next to a large, red, heart shaped pin")
          break;

        case 'PROVIDER':
          this.img.setAttribute('src', '../Images/Tabs/pediatric.jpg')
          this.img.setAttribute('alt', "a smiling, female pediatrician talking with a young boy sitting on an exam table")
          break;
      }
      
      // Calls the select method on the item associated with this.link
      this.item.select()
  
    }
  }
  
  class TabItem {
    constructor(item) {
      // Assigns this.element to the passed in element
      this.item = item    
    }
  
    select() {
      // References all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item')
  
      // Removes the class "tabs-item-selected" from each element
      items.forEach(item => item.classList.remove('tabs-item-selected'))
      
      
      // Adds a class named "tabs-item-selected" to this element
      this.item.classList.add('tabs-item-selected')
    }
  }
  
  
  // Get DOM elements and store them in links
  links = document.querySelectorAll('.tabs-link')
  
  // Iterate over the Nodelist and create a new object for each item in the Nodelist
  links.forEach(link => new TabLink(link))
  