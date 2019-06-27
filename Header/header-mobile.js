class Mobile{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.button-mobile p');
        this.links = document.querySelectorAll('.page-links');
        this.button.addEventListener('click', ()=> {
            this.showMobileMenu();
        })

    }
    showMobileMenu(){
        this.links.forEach(link => link.classList.toggle('reveal-page-links'))
    }
}

let mobileButton = document.querySelectorAll('.button-mobile').forEach(event => new Mobile(event));