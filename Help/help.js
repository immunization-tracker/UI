// @@@@@@@@@@@@@@@@@@@@ Accordion for Questions @@@@@@@@@@@@@@@@@@@@
class Accordion {
    constructor(accordion) {
        this.accordion = accordion
        this.autoClose = accordion.dataset.autoClose === 'true' ? true : false
        this.panels = accordion.querySelectorAll('.panel')
        this.panels.forEach(panel => new Panel(panel, this))

        document.addEventListener('click', event => {
            if (event.target.closest('.accordion')) return
            this.collapse()
        })
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
        this.panelBar = panel.querySelector('.panel-bar')

        this.panelBar.addEventListener('click', () => this.togglePanel())

        document.addEventListener('click', event => {
            if (event.target.closest('.accordion')) return
            this.openButton.classList.remove('hide-btn')
            this.closeButton.classList.add('hide-btn')
        })

    }
    
    togglePanel() {
        this.parentAccordion.collapse()
        this.panelContent.classList.toggle('toggle-on')
        this.openButton.classList.toggle('hide-btn')
        this.closeButton.classList.toggle('hide-btn')
    }
}
    
const accordions = document.querySelectorAll('[data-questions]')
accordions.forEach(accordion => new Accordion(accordion))

// @@@@@@@@@@@@@@@@@@@@ Search Bar @@@@@@@@@@@@@@@@@@@@
document.querySelector('.search-icon').addEventListener('click', () => alert('Search functionality currently down. Please try again later.'))

// @@@@@@@@@@@@@@@@@@@@ Night Mode @@@@@@@@@@@@@@@@@@@@
const nightModeButton = document.querySelector('.night-mode-button')
nightModeButton.addEventListener('click', () => {
    if (nightModeButton.textContent === 'Night Mode') {
        nightModeButton.textContent = 'Day Mode'
    } else {
        nightModeButton.textContent = 'Night Mode'
    }

    document.querySelector('body').classList.toggle('night-mode-toggle')
})