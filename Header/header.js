class Show{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.dropdown-button');
        this.links = document.querySelector('.dropdown-links');
        this.header = document.querySelector('header');
        this.button.addEventListener('click', ()=> {
            this.showLinks();
        })
    }
    showLinks(){
        this.links.classList.toggle('dropdown-hidden');
    }
}

let loginButton = document.querySelectorAll('.dropdown').forEach(event => new Show(event));