class Mobile{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.button-mobile')
        this.links = document.querySelectorAll('.page-links')
        this.loginlinks = document.querySelectorAll('.login-links')

        this.button.addEventListener('click', ()=> {
            this.showMobileMenu();
        })

    }
    showMobileMenu(){
        this.links.forEach(link => link.classList.toggle('reveal-page-links'))
        this.loginlinks.forEach(link => link.classList.toggle('reveal-login-links'))
    }
}

let mobileButton = document.querySelectorAll('.button-mobile').forEach(event => new Mobile(event));