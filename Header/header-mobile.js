class Mobile{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.button-mobile')
        this.links = document.querySelectorAll('.page-links')
        this.loginlinks = document.querySelectorAll('.login-links')

        this.button.addEventListener('click', ()=> {
            this.toggleMobileMenu();
        })

        document.addEventListener('click', event => {
            if (event.target.closest('.button-mobile')) return
            if (event.target.closest('nav')) return
            this.hideMobileMenu()
        })

        window.addEventListener('resize', () => this.hideMobileMenu());
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

let mobileButton = document.querySelectorAll('.button-mobile').forEach(event => new Mobile(event));