let cardsTitle = document.querySelectorAll('.card-item__title')
let cardsSubtitle = document.querySelectorAll('.card-item__subtitle')

cardsTitle.forEach((cardTitle) => {
    cardTitle.textContent =  cardTitle.textContent.toUpperCase();
})

cardsSubtitle.forEach((cardSubtitle) =>{
    if (cardSubtitle.textContent.length > 20){
        console.log(cardSubtitle.textContent)
        cardSubtitle.textContent = cardSubtitle.textContent.substr(0,20) + '...'
    }
})
