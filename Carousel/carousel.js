class Carousel {
    constructor(caro){
        this.caro = caro

    }

    autoPlay() {
        const images = document.querySelectorAll('.carousel img')

        if (index<images.length-1) {
            index++
        } else {
            index=0
        }

        images.forEach(img => img.classList.remove('img-reveal'))
        images[index].classList.add('img-reveal')
    }
}

let index = 0
let carousel = new Carousel(document.querySelector('.carousel'))

setInterval(() => carousel.autoPlay(), 30000)
