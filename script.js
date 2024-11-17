const products = [
    {id:1, name:'Dell Laptop', price: 599, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:2, name: 'HP Leptop', price:699, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:3, name: 'Microsoft Surface', price:799, image: 'https://m.media-amazon.com/images/I/61+-htrmJmL.jpg'},
    {id:4, name: 'Asus Laptop', price:899, image: 'https://m.media-amazon.com/images/I/61+-htrmJmL.jpg'},
    {id:5, name: 'HP 2 Laptop', price:599, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:6, name: 'Samsung Laptop', price:699, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:7, name:'Lenovo Laptop', price: 599, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:8, name: 'Apple Macbook', price:799, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:9, name: 'Toshiba Laptop', price:699, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},
    {id:10, name: 'Acer Laptop', price:399, image: 'https://www.bapcs.co.uk/wp-content/uploads/2021/01/sell-laptop-1.jpg'},    
]

const productList =document.getElementById("product-list")


const renderProducts =(filteredProducts =products) =>{
    productList.innerHTML= '';
    filteredProducts.forEach(product =>{
    const productDiv =document.createElement('div');
    productDiv.className ='product';
    productDiv.innerHTML=`
    <img src="${product.image} " alt="${product.name}">
    <h3> ${product.name} </h3>
    <p>Price: $ ${product.price} </p>
    <button onclick="addToCart(${product.id})">Add to cart</button>
    
    `
   
    productList.appendChild(productDiv)
})

}

const searchInp =document.getElementById("filter-input")
const userList =document.getElementById("userList")

searchInp.addEventListener('input', ()=>{
    let filtered = products.filter(el =>
        el.name.toLowerCase().includes(searchInp.value.toLowerCase()))
        display(filtered)
        display(items)
})

function display(items){
    userList.innerHTML = ''
    items.forEach(el=>{
        const li =document.createElement('li')
        li.textContent =`${el.name} ${el.image}`
        userList.appendChild(li)
        updateCart()
    
    })
}


let cart = []

const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!cart.includes(product)) {
        cart.push(product); 
    }
    renderCart();  
};

const removeFromCart = (productId) => {
    cart =cart.filter(item=> item.id !== productId);
    renderCart();
};


const renderCart = () => {
    const cartList =document.getElementById('cart-list');
    cartList.innerHTML = '';
    if(cart.length === 0) {
        cartList.innerHTML="<p>Your cart is empty</p>";
    }else{
        cart.forEach(item =>{
            const productDiv =document.createElement('div');
           
           productDiv.innerHTML= `
           <img src ="${item.image}" alt="${item.name}"/>
           <h3>${item.name}</h3>
           <p>price:$${item.price}</p>
           <button onclick="removeFromCart(${item.id})">Remove</button>
           `;
            cartList.appendChild(productDiv);
        })
    }

};

const filterProducts = () => {
    const searchTerm =document.getElementById('filter-input').value.toLowerCase();
    const filteredProducts =products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
}

document.getElementById('filter-input').addEventListener('input', filterProducts);

renderProducts()






