class Person{
    constructor(event){
        this.event = event;
        this.image = document.querySelectorAll('.person img');
        this.text = document.querySelectorAll('.team-design');
        Array.from(this.image).forEach( image =>{
            image.addEventListener('mouseover',()=> this.showText() )
        })
    }
    showText(){
        Array.from(this.text).forEach( text => {
            text.classList.toggle('hidden-text')
        }) 
    }
}


let person = document.querySelectorAll('.team-members').forEach(event => new Person(event));

