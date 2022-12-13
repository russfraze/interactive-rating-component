
const ratingClick = (event) => {
    console.log(event.target.id)

    let rating = event.target.id

    let message = '' 

    switch(rating){
        case "1":
            message = 'You selected 1 out of 5'
        break
        case "2":
            message = 'You selected 2 out of 5'
        break
        case "3":
            message = 'You selected 3 out of 5'
        break
        case "4":
            message = 'You selected 4 out of 5'
        break
        case "5":
            message = 'You selected 5 out of 5'
    }
        
    document.querySelector('.submitted-panel__result').innerHTML = message

    document.getElementById(rating).classList.replace("rating-panel__btn", "rating-panel__btn--clicked")

    document.querySelectorAll(".rating-panel__btn--clicked").forEach(element => {
        if(element.id !== rating){
            element.classList.replace("rating-panel__btn--clicked", "rating-panel__btn")
        }
    })

}

document.querySelectorAll('.rating-panel__btn').forEach( btn => {
    btn.addEventListener('click', ratingClick)
})

const submitClick = () => {
    console.log('they done gone and clicked it')

    let submitted = true 

    if(submitted === true ){
        document.querySelector('.rating-panel').classList.replace("rating-panel", "hidden")
        document.querySelector('.submitted-panel').classList.replace("submitted-panel", "submitted-panel-visible")
        
    }
}


document.querySelector('.rating-panel__submit-btn').addEventListener('click', submitClick)

