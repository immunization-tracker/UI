class Show{
    constructor(event){
        this.event = event;
        this.button = document.querySelector('.dropdown-button');
        console.log(this.button)
        this.links = document.querySelector('.dropdown-links');
        this.button.addEventListener('mouseover', ()=> {
            this.showLinks();
        })
        this.event.addEventListener('click', ()=> {
            this.hideLinks();
        })
    }
    showLinks(){
        this.links.style.display='flex';
    }
    hideLinks(){
        this.links.style.display='none';
    }
}


let loginButton = document.querySelectorAll('.dropdown').forEach(event => new Show(event));