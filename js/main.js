import { humn } from "./app/humn.js"


const NAME = ['Возвышение Хоруса', 'Лживые боги', 'Галактика в огне', 'Полёт Эйзенштейна', 'Фулгрим', 'Сошествие Ангелов', 'Легион', 'Битва за Бездну']
const PRICE = [2500, 2000, 2350, 1900, 2060, 1950, 1800, 1590]
const ID = [1, 2, 3, 4, 5, 6, 7, 8]

let productsDTO = full_catalog()
let userCart = []


function full_catalog () {
    let catalog = []
    for (let i = 0; i <= NAME.length - 1; i++) {
        catalog.push(one_part(i))        
    }
    return catalog
}

function one_part(I) {
    return {
        name : NAME[I],
        price : PRICE[I],
        id : ID[I],
        img : [I + 1],
        createCard: function() {
            return `<figure class="count-img">
                        <img src="img/${this.img}.jpg" alt="book" class="book" width="120px" height="200px">
                        <figcaption class="card-book" >
                            <p class="name-book">${this.name}\n</p>
                            <p class="price-book">Цена: ${this.price}</p>
                        </figcaption>
                        <button class="by-now"
                        data-id = "${this.id}"
                        data-name = "${this.name}"
                        data-img = "img/${this.img}.jpg"
                        data-price = "${this.price}">Купить</button>
                    </figure>`
        }
    }
}

function add_card() {
    let card = document.querySelector('#card')
    let oneCard = ''
    productsDTO.forEach (el => {
        oneCard += el.createCard()
    })
    card.innerHTML = oneCard
}

document.querySelector('#btn-basket').addEventListener('click', showBin)
document.querySelector('#krist').addEventListener('click', showBin)
document.querySelector('#backgroundBin').addEventListener('click', showBin)

function showBin() {
    document.querySelector('#bodyBin').classList.toggle('activeBin')   
    document.querySelector('#backgroundBin').classList.toggle('activeBackground')   
}

function addProd (prod) {
    let find = userCart.find(el => {
        return el.id === +prod.dataset['id']   
    })
    if (find) {
        find.quantity++
    }
    else {
        userCart.push ({
            name: prod.dataset ['name'],
            price: +prod.dataset['price'],
            id: +prod.dataset['id'],
            img: prod.dataset['img'],
            quantity: 1
        })
    }
    renderCart()
    total_price()
}
function delProduct(prod) {
    let find = userCart.find (el => {
        return el.id === +prod.dataset['id']
    })
    if (find.quantity > 1) {
        find.quantity--
    } else {
        userCart.splice (userCart.indexOf(find), 1)
    }
    renderCart()
    total_price()
}
 function renderCart() {   
    let oneSting = ''
    userCart.forEach (el => {
        oneSting += `<div class="one-element">
                        <img src=${el.img} alt="book" class="mini-book" width="60px" height="90px">
                        <span class="book">${el.name}</span>
                        <span class="prise" data-prise="${el.price}">Цена: ${el.price}р.</span>
                        <span class="product-quantity">Количество: ${el.quantity}</span>
                        <span class="product-price" data-pp = "${el.quantity*el.price}">Общая цена: ${el.quantity*el.price} р.</span>
                        <span class="element-krist" data-id = "${el.id}">&times;</span>
                    </div>`
    })
    document.querySelector('#countBin').innerHTML = oneSting
 }

 document.querySelector('#card').addEventListener('click', function(evt) {
    if (evt.target.classList.contains('by-now')) {
        addProd(evt.target)
    }
})
document.querySelector('#mainBin').addEventListener('click', function(evt) {
    if (evt.target.classList.contains('element-krist')) {
        delProduct(evt.target)
    }
})

function total_price() {
    let sum = 0
    document.querySelectorAll('.product-price').forEach(item => {
        sum += +item.dataset['pp']
    })

    document.querySelector('.total-prise-text').innerHTML = `${sum} рублей `     
   
}

function main() {    
    add_card()
    humn ()  
}

main()



