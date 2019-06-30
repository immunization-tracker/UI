// @@@@@@@@@@@@@@@@@@@@ Desktop Drop Menu @@@@@@@@@@@@@@@@@@@@
class Show{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.dropdown-button');
        this.links = document.querySelector('.dropdown-links');
        this.header = document.querySelector('header');
        
        this.button.addEventListener('click', ()=> {
            this.showLinks();
        })

        // Close menu if a click occurs outside of the element
        document.addEventListener('click', event => {
            if (event.target.closest('.dropdown')) return
            this.clickOutMenu()
        })

        // Close menu if browser resizes
        window.addEventListener('resize', () => this.clickOutMenu())

        // Close menu if user scrolls
        window.addEventListener('scroll', () => this.clickOutMenu())
    }
    showLinks(){
        this.links.classList.toggle('dropdown-hidden');
    }
    clickOutMenu(){
        this.links.classList.add('dropdown-hidden');
    }
}

// @@@@@@@@@@@@@@@@@@@@ Mobile Menu @@@@@@@@@@@@@@@@@@@@
class Mobile{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.button-mobile')
        this.links = document.querySelectorAll('.page-links')
        this.loginlinks = document.querySelectorAll('.login-links')

        this.button.addEventListener('click', ()=> {
            this.toggleMobileMenu();
        })

        // Close menu if a click occurs outside of the element
        document.addEventListener('click', event => {
            if (event.target.closest('.button-mobile')) return
            if (event.target.closest('nav')) return
            this.hideMobileMenu()
        })

        // Close menu if browser resizes
        window.addEventListener('resize', () => this.hideMobileMenu());

        // Close menu if user scrolls
        window.addEventListener('scroll', () => this.hideMobileMenu())
    }
    toggleMobileMenu(){
        this.links.forEach(link => link.classList.toggle('reveal-page-links'))
        this.loginlinks.forEach(link => link.classList.toggle('reveal-login-links'))
    }
    hideMobileMenu(){
        this.links.forEach(link => link.classList.remove('reveal-page-links'))
        this.loginlinks.forEach(link => link.classList.remove('reveal-login-links'))
    }

}

let loginButton = document.querySelectorAll('.dropdown').forEach(event => new Show(event));
let mobileButton = document.querySelectorAll('.button-mobile').forEach(event => new Mobile(event));

// @@@@@@@@@@@@@@@@@@@@ Hide Mobile Menu on Scroll Down, Appear on Scroll Up @@@@@@@@@@@@@@@@@@@@
let prevScroll = window.pageYOffset

window.addEventListener('scroll', () => {
    let displayValue = window.getComputedStyle(document.querySelector('.button-mobile')).getPropertyValue('display')
    if (displayValue === 'flex') {
        let menuHeight = document.querySelector('header').offsetHeight
        let currentScroll = window.pageYOffset
        if (prevScroll > currentScroll) document.querySelector('header').style.top='0px'
        else document.querySelector('header').style.top=`-${menuHeight}px`
        prevScroll=currentScroll
    }
    
})