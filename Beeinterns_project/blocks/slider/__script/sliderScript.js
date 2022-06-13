const sliderLine = document.querySelectorAll('.slider-line')
const sliders = document.querySelector('.slider-line')
const sliderLineLength = parseInt(sliders.offsetWidth)
const sliderStep = 270

for (let i = 0; i < sliderLine.length; i++ ){
    init_slider(sliderLine[i], i)
}

function init_slider (sliderLine, numSlider) {
    let counterFirst = 0
    let counterSecond = 0
    let counterThird = 0;
    if (numSlider === 0){
        document.querySelector('.slider-next').addEventListener('click', () => {
            counterFirst += sliderStep
            if (counterFirst > sliderLineLength ) {
                counterFirst = 0
            }
            sliderLine.style.left = -counterFirst + 'px'
        })
        document.querySelector('.slider-prev').addEventListener('click', () => {
            counterFirst -= sliderStep
            if (counterFirst < 0) {
                counterFirst = sliderLineLength
            }
            sliderLine.style.left = -counterFirst + 'px'
        })
    } else if (numSlider === 1){
        document.querySelector('.slider-next-2').addEventListener('click',  () => {
            counterSecond += sliderStep
        if(counterSecond > sliderLineLength ){
            counterSecond = 0
        }
        sliderLine.style.left = -counterSecond + 'px'
        })
        document.querySelector('.slider-prev-2').addEventListener('click',  () => {
            counterSecond -= sliderStep
        if (counterSecond < 0) {
            counterSecond = sliderLineLength
        }
    sliderLine.style.left = -counterSecond + 'px'
    })
  } else {
        document.querySelector('.slider-next-3').addEventListener('click',  () => {
            counterThird += sliderStep
            if(counterThird > sliderLineLength ){
                counterThird = 0
            }
            sliderLine.style.left = -counterThird + 'px'
        })
        document.querySelector('.slider-prev-3').addEventListener('click',  () => {
            counterThird -= sliderStep
            if (counterThird < 0) {
                counterThird = sliderLineLength
            }
            sliderLine.style.left = -counterThird + 'px'
        })
    }
}