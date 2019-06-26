class Carousel {
    constructor(caro){
        this.caro = caro
        this.firstImg = caro.querySelector('img')

        this.firstImg.classList.add('img-reveal')
    }

    showImg(param) {
        const images = document.querySelectorAll('.carousel img')
        const curIndex = index

        if ((index+param>=0) && (index+param<=2)) {
            index += param
        } else if (index+param>2) {
            index = 0
        } else if (index+param<0) {
            index = 2
        }

        images.forEach(img => img.classList.remove('img-reveal'))

        if (curIndex<index) {
            images[index].classList.add('img-reveal')
        } else {
            images[index].classList.add('img-reveal')
        }
        
    }
}

let index = 0
let carousel = new Carousel(document.querySelector('.carousel'))