const NAME = ['Возвышение Хоруса', 'Лживые боги', 'Галактика в огне', 'Полёт Эйзенштейна', 'Фулгрим', 'Сошествие Ангелов', 'Легион', 'Битва за Бездну']
const PRICE = [2500, 2000, 2350, 1900, 2060, 1950, 1800, 1590]
const ID = [1, 2, 3, 4, 5, 6, 7, 8]


function full_catalog () {
    let catalog = []
    for (let i = 0; i <= NAME.length - 1; i++) {
        catalog.push(one_part(i))        
    }
    console.log(catalog);
}

function one_part(I) {
    let d = {
        name : NAME[I],
        price : PRICE[I],
        id : ID[I]
    }
    
    return d
}

function total_price() {
    let sum = 0
    PRICE.forEach(element => {sum += element})
    console.log('Общая цена:', sum, 'рублей');       
   
}

function add_card() {
    let card = document.querySelector('#card')
    for (let i = 0; i <= NAME.length - 1; i++) {
        card.innerHTML += `<figure class="count-img">
                            <img src="img/${i +1}.jpg" alt="book" class="book" width="120px" height="200px">
                            <figcaption class="card-book" >
                                <p class="name-book">${NAME[i]}\n</p>
                                <p class="price-book">Цена: ${PRICE[i]}</p>
                            </figcaption>
                            <button class="by-now">Купить</button>
                        </figure>`
    }
}

function humn(){
    let soupLeft = document.querySelector('.hymn-left')
    let soupRight = document.querySelector('.hymn-right')
    for (let i = 0; i <= 5; i++) {
        soupLeft.innerHTML += `<span class="humn-text">О, горячий суп наварили,</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">О, шикарный суп наварили</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">Суп, горячий суп,</span>
        <span class="humn-text">Ешь суп, горячий суп.</span>
        <span class="humn-text"></span>`

        soupRight.innerHTML += `<span class="humn-text">О, горячий суп наварили,</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">О, шикарный суп наварили</span>
        <span class="humn-text">О, великий суп наварили,</span>
        <span class="humn-text">Суп, горячий суп,</span>
        <span class="humn-text">Ешь суп, горячий суп.</span>
        <span class="humn-text"></span>`

    }
}

function main() {full_catalog()
    total_price()
    add_card()
    humn()}


main()



