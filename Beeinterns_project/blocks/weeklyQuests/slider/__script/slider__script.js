const sliderLine = document.querySelectorAll('.slider-line');

for (let i = 0; i < sliderLine.length; i++ ){
    init_slider(sliderLine[i], i);
}

function init_slider (sliderLine, numSlider) {
    let offSet = 0;
    let counter = 0;
    if (numSlider === 0){
        document.querySelector('.slider-next').addEventListener('click', () => {
            offSet += 270;
            if (offSet > 1080) {
                offSet = 0;
            }
            sliderLine.style.left = -offSet + 'px';
        })
        document.querySelector('.slider-prev').addEventListener('click', () => {
            offSet -= 270;
            if (offSet < 0) {
                offSet = 1080;
            }
            sliderLine.style.left = -offSet + 'px';
        })
    } else {
        document.querySelector('.slider-next-2').addEventListener('click',  () => {
        counter += 270;
        if(counter > 1080){
            counter = 0;
        }
        sliderLine.style.left = -counter + 'px';
        })
        document.querySelector('.slider-prev-2').addEventListener('click',  () => {
        counter -= 270;
        if (counter < 0) {
            counter = 1080;
        }
    sliderLine.style.left = -counter + 'px';
    })
  }
}