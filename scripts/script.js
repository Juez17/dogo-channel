'use strict';

const saleSlides = document.querySelectorAll('.sale-slider__slide');
const questions = document.querySelectorAll('.faq-section__question-box');


for(const [index, question] of questions.entries()) {
    const arrow = question.querySelector('.arrow-down');
    question.addEventListener('click', ()=> {
        if(question.nextElementSibling.classList.contains('hidden')) {
            console.log('dziala')
            question.nextElementSibling.classList.remove('hidden');
            setTimeout(()=> {
                question.nextElementSibling.classList.add('faq-section__answer--active');
                arrow.classList.add('arrow-down--rotated');
            }, 1);
            // question.firstElementChild.classList.add('faq-section__question--active');
        }
        else {
            question.nextElementSibling.classList.remove('faq-section__answer--active');
            arrow.classList.remove('arrow-down--rotated');
            setTimeout(()=> {
                question.nextElementSibling.classList.add('hidden');
            }, 700);
            // question.firstElementChild.classList.remove('faq-section__question--active');
        }

    });
}

let counter = 0;

setTimeout(()=> {

},1000);

setInterval(()=> {
    if(counter === saleSlides.length -1) {
        console.log('if, counter = ' + counter)
        saleSlides[counter-1].style.opacity = '0';
        setTimeout(()=> {
            console.log(counter);
            saleSlides[counter-1].classList.add('hidden');
            saleSlides[counter].classList.remove('hidden');
            
            setTimeout(()=> {
                console.log(counter);
                saleSlides[counter].style.opacity = '1';
                counter = 0;
            }, 2000);
        }, 3000);
    }
    else if(counter < saleSlides.length - 1) {
        console.log('else if, counter = ' + counter)
        saleSlides[counter+1].style.opacity = '0';
        setTimeout(()=> {
            saleSlides[counter+1].classList.add('hidden');
            saleSlides[counter].classList.remove('hidden');
            
            setTimeout(()=> {
                saleSlides[counter].style.opacity = '1';
                counter++;
            }, 2000);
        }, 3000);
       
    }
    console.log('counter = ' + counter);
}, 10000);

// setTimeout(()=> {
//     saleSlides[1].style.opacity = '1';
//     console.log('opacity zmienione');


// }, 3000);

console.log(saleSlides);

