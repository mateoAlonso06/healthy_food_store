"use strict";
const baseURL = 'https://674cb69b54e1fca9290d5f6a.mockapi.io/products';

export async function fetchProducts() {
    try {
        const response = await fetch(baseURL);
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function fetchProductById(id) {
    try {
        const response = await fetch(`${baseURL}/${id}`);
        if (!response.ok) {
            throw new Error('Error fetching product');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function addProduct(product) {
    try {
        const response = await fetch(baseURL, {
            "method": 'POST',
            "headers": {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('Error adding product');
        }
    } catch (error) {
        console.error(error);
    }
}

export async function deleteProduct(id) {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            "method": 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error deleting product');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateProduct(id, updatedProduct) {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            "method": 'PUT',
            "headers": {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify(updatedProduct)
        });
        if (!response.ok) {
            throw new Error('Error updating product');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
