// @@@@@@@@@@@@@@@@@@@@ Accordion @@@@@@@@@@@@@@@@@@@@
const expandBtn = document.querySelectorAll('.expand-btn')
const collapseBtn = document.querySelectorAll('.collapse-btn')

$(".accordion").on("click", ".accordion-header", function() {

    // if border is highlighted when clicked, close the panel and do nothing else
    if ($(this).hasClass('active-header')) {
        $(this).toggleClass("active-header").next().slideToggle()
        $(this).find('.expand-btn').toggleClass('hidden-btn')
        $(this).find('.collapse-btn').toggleClass('hidden-btn')
    } else { // otherwise, reset the other panels (collapse all) and then open clicked panel
        // resets all panels
        $('.accordion-header').removeClass("active-header").next().slideUp()
        expandBtn.forEach(item => item.classList.remove('hidden-btn'))
        collapseBtn.forEach(item => item.classList.add('hidden-btn'))
        // turn on panel
        $(this).toggleClass("active-header").next().slideToggle()
        $(this).find('.expand-btn').toggleClass('hidden-btn')
        $(this).find('.collapse-btn').toggleClass('hidden-btn')
    }
})

document.addEventListener('click', event => {
    if ((event.target.closest('.accordion-header')) || (event.target.closest('.accordion-content'))) return
    $('.accordion-header').removeClass("active-header").next().slideUp()
    expandBtn.forEach(item => item.classList.remove('hidden-btn'))
    collapseBtn.forEach(item => item.classList.add('hidden-btn'))
})

window.addEventListener('resize', event => {
    $('.accordion-header').removeClass("active-header").next().slideUp()
    expandBtn.forEach(item => item.classList.remove('hidden-btn'))
    collapseBtn.forEach(item => item.classList.add('hidden-btn'))
})

// @@@@@@@@@@@@@@@@@@@@ Search Bar @@@@@@@@@@@@@@@@@@@@
document.querySelector('.search-icon').addEventListener('click', () => alert('Search functionality currently down. Please try again later.'))

// @@@@@@@@@@@@@@@@@@@@ Night Mode @@@@@@@@@@@@@@@@@@@@
const nightModeButton = document.querySelector('.night-mode-button')
nightModeButton.addEventListener('click', () => {
    if (nightModeButton.textContent === 'Night Mode') {
        nightModeButton.textContent = 'Day Mode'
    } else {
        nightModeButton.textContent = 'Night Mode'
    }
    document.querySelector('body').classList.toggle('night-mode-toggle')
})