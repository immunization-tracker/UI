class ImageTab {
    constructor(element) {
  
      this.element = element;
  
      this.data = this.element.dataset.tab;
   
      this.imgText = document.querySelector(`.team-design[data-tab='${this.data}']`);
    
      this.textItem = new TabItemTeam(this.imgText);
  
      this.element.addEventListener('mouseover', () => this.select());
    };
  
    select() {
   
      const pictures = document.querySelectorAll('.person');
 
      Array.from(pictures).forEach(img => {
        img.classList.remove('person-selected');
      })
      

      this.element.classList.add('person-selected');
      
 
      this.textItem.select();
    }
  }
  
  class TabItemTeam {
    constructor(element) {
 
      this.element = element;

    }
  
    select() {
  
      const items = document.querySelectorAll('.team-design');
  
  
      Array.from(items).forEach(item => {
        item.classList.remove('text-selected');
      })
  
      this.element.classList.add('text-selected');
    }
  }
  

  
  let pictures = document.querySelectorAll('.team-members .pictures .person').forEach(img => new ImageTab(img));
  

