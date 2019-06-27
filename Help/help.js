// @@@@@@@@@@@@@@@@@@@@ Accordion for Questions @@@@@@@@@@@@@@@@@@@@
class Accordion {
    constructor(accordion) {
        this.accordion = accordion
        this.autoClose = accordion.dataset.autoClose === 'true' ? true : false
        this.panels = accordion.querySelectorAll('.panel')
        this.panels.forEach(panel => new Panel(panel, this))
    }
      
    collapse() {
        if (this.autoClose) {
            const currentPanel = this.accordion.querySelector('.panel-content.toggle-on')
            if (currentPanel) currentPanel.classList.remove('toggle-on')      
        }
    }
}
    
class Panel {
    constructor(panel, parentAccordion) {
        this.parentAccordion = parentAccordion
        this.openButton = panel.querySelector('.panel-btn-open')
        this.closeButton = panel.querySelector('.panel-btn-close')
        this.panelContent = panel.querySelector('.panel-content')
        this.closeButton.addEventListener('click', () => this.togglePanel())
    }
    
    togglePanel() {
        this.parentAccordion.collapse()
        this.panelContent.classList.toggle('toggle-on')
    }
}
    
const accordions = document.querySelectorAll('[data-accordion]')
accordions.forEach(accordion => new Accordion(accordion))