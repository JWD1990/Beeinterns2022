const sliderLine = document.querySelectorAll('.slider-line');
const sliders = document.querySelector('.slider-line');
const sliderLineLength =  parseInt(sliders.offsetWidth);
const sliderStep = 270

for (let i = 0; i < sliderLine.length; i++ ){
    init_slider(sliderLine[i], i)
}

function init_slider (sliderLine, numSlider) {
    let offSet = 0
    let counter = 0
    if (numSlider === 0){
        document.querySelector('.slider-next').addEventListener('click', () => {
            offSet += sliderStep
            if (offSet > sliderLineLength ) {
                offSet = 0
            }
            sliderLine.style.left = -offSet + 'px'
        })
        document.querySelector('.slider-prev').addEventListener('click', () => {
            offSet -= sliderStep
            if (offSet < 0) {
                offSet = sliderLineLength
            }
            sliderLine.style.left = -offSet + 'px'
        })
    } else {
        document.querySelector('.slider-next-2').addEventListener('click',  () => {
        counter += 270
        if(counter > sliderLineLength ){
            counter = 0
        }
        sliderLine.style.left = -counter + 'px'
        })
        document.querySelector('.slider-prev-2').addEventListener('click',  () => {
        counter -= 270
        if (counter < 0) {
            counter = sliderLineLength
        }
    sliderLine.style.left = -counter + 'px'
    })
  }
}