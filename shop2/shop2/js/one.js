const ITEMS = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad']
const PRICES = [1000, 200, 20, 10, 25, 30, 18, 24]
const IDS = [1, 2, 3, 4, 5, 6, 7, 8]

let userCart = []

let productsDTO = createDTO ()

function createDTO () {
    let arr = []
    
    for (let i = 0; i < ITEMS.length; i++) {
        arr.push (createProduct (ITEMS[i], PRICES[i], IDS[i]))
    }
    return arr
}

function createProduct (name, price, id) {
    return {
        name: name,
        id: id,
        price: price,
        createTemplate: function() {
            return `
                <div class="product-item">
                    <img src="#" alt="img">
                    <div class="desc">
                        <h3>${this.name}</h3>
                        <p>${this.price}</p>
                        <button class="buy-btn"
                        data-id = "${this.id}"
                        data-name = "${this.name}"
                        data-price = "${this.price}">Купить</button>
                    </div>
                </div>
            `
        }
    }
}

function renderCatalog() {
    let htmlString = ''
    productsDTO.forEach (el => {
        htmlString += el.createTemplate()
    })
    document.querySelector('.products').innerHTML = htmlString
}

let btnCart = document.querySelector('.btn-cart')
btnCart.addEventListener ('click', showCart)

function showCart () {
    document.querySelector('.cart-block').classList.toggle('invisible')
}

function addProduct (prod) {
    let find = userCart.find (el => {
        return el.id === +prod.dataset['id']
    })
    if (find) {
        find.quantity++
    } else {
        userCart.push ({
            name: prod.dataset ['name'],
            price: +prod.dataset['price'],
            id: +prod.dataset['id'],
            quantity: 1
        })
    }
    renderCart()
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
}

function renderCart() {
    let htmlString = ''
    userCart.forEach (el => {
        htmlString += `
            <div class="cart-item">
                <div class="product-bio">
                    <img src="#" alt="cart-img">
                    <div class="product-desc">
                        <p class="product-title">${el.name}</p>
                        <p class="product-quantity">${el.quantity}</p>
                        <p class="product-single-price">${el.price}</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${el.quantity*el.price}</p>
                    <button class="del-btn"  data-id = "${el.id}">&times;</button>
                </div>
            </div>
        `
    })
    document.querySelector('.cart-block').innerHTML = htmlString
}

document.querySelector('.products').addEventListener('click', function(evt) {
    if (evt.target.classList.contains('buy-btn')) {
        addProduct(evt.target)
    }
})
document.querySelector('.cart-block').addEventListener('click', function(evt) {
    if (evt.target.classList.contains('del-btn')) {
        delProduct(evt.target)
    }
})

renderCatalog()



//oop

let store = {
    catalog: [],
    cart: [],
    _init: function() {
        this.createDTO()
        this.renderCatalog()
    },
    createDTO: function() {

    },
    _createProduct: function (name, price, id) {

    },
    renderCatalog: function() {

    }
    
}

//store._init()