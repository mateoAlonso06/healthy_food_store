"use strict";

import { fetchProducts, fetchProductById, addProduct, deleteProduct, updateProduct } from "./products.js";

const form = document.getElementById('#formProduct');
const productList = document.querySelector('.product-list');

async function displayProducts() {
    const products = await fetchProducts();

    productList.innerHTML = '';

    console.log(products);
    
    products.forEach(product => {
        // Crear el contenedor de la tarjeta del producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card'); 
    
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="category">${product.category}</p> 
            <p>${product.description}</p> 
            <p class="price">$${product.price}</p>
            <button class="show-details-button">Show Details</button> 
        `;
    
        // Añadir la tarjeta al contenedor de la lista de productos
        productList.appendChild(productDiv);
    });    
}

displayProducts();

async function addNewProduct() {
    form.addEventListener('submit', (e) => e.preventDefault()); 
    const newProduct = getFormDataValues(form);

    // Toda la informacion la debo obtener desde un formulario
    try {
        const response = new addProduct(newProduct);

        if (!response.ok) {
            throw new Error('The product could not be added');
        }
        // muestro en el html que el producto fue agregado con exito
    } catch (error) {
        // muestro un mensaje en el html
        console.log(error);
    }
}

function getFormDataValues(form) {
    // Esta funcion retorna los valores del form data
    const formData = new FormData(form);
    return {
        "name": formData.get('name'),
        "price": Number(formData.get('price')),
        "image": formData.get('image'),
        "description": formData.get('description'),
        "category": formData.get('category')
    }
}