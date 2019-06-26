class MenuMobile{
    constructor(event){
        this.event = event;
        console.log(this.event)
        this.button = document.querySelector('.button-mobile');
        this.menu = document.querySelector('.show-menu');
        this.button.addEventListener('click', ()=> {
            this.showMenu();
        })
    }
    showMenu(){
        this.menu.classList.toggle('hidden-menu');
    }
}

let menuBar = document.querySelectorAll('header').forEach(event => new MenuMobile(event));