class Show{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.dropdown-button');
        this.links = document.querySelector('.dropdown-links');
        this.header = document.querySelector('header');
        
        this.button.addEventListener('click', ()=> {
            this.showLinks();
        })

        document.addEventListener('click', event => {
            if (event.target.closest('.dropdown')) return
            this.clickOutMenu()
        })

        window.addEventListener('resize', () => this.clickOutMenu());
    }
    showLinks(){
        this.links.classList.toggle('dropdown-hidden');
    }
    clickOutMenu(){
        this.links.classList.add('dropdown-hidden');
    }
}

let loginButton = document.querySelectorAll('.dropdown').forEach(event => new Show(event));