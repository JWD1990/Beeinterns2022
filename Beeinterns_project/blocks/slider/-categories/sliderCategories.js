//функция фильтра
function funCategoryFilter (){
    const  sliderCategoriesBth = document.querySelectorAll('.slider-categories-bth')
    const cards = document.querySelectorAll('.card')

    function filters(category, items){
        items.forEach((item) => {
            const isItemFilter = !item.classList.contains(category)
            let isShowAll = category === 'ALL'
            if (isItemFilter && !isShowAll){
                item.classList.add('hide')
            }else{
                item.classList.remove('hide')
            }
        })
    }

    sliderCategoriesBth.forEach((bth) =>{
        bth.addEventListener('click',() =>{
            const currentCategory = bth.dataset.filter
            filters(currentCategory, cards)
        })
    })
}

funCategoryFilter ()