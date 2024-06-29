const fs = require('fs');

const filePath = './data.json';

function readProducts() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function writeProducts(datas) {
    // Convert JavaScript object to formatted JSON string and write to file
    fs.writeFileSync(filePath, JSON.stringify(datas, null, 2));
}

function createProduct(name, price, quantity) {
    const products = readProducts();
    const newProduct = { id: Date.now(), name, price, quantity };
    products.push(newProduct);
    writeProducts(products);
    return newProduct;
}

function readProduct(id) {
    const products = readProducts();
    return products.find(product => product.id === id);
}

function updateProduct(id, updatedProduct) {
    const products = readProducts();
    const index = products.findIndex(product => product.id === id); // Find index of product by ID
    if (index !== -1) {
        // If product exists, update it by merging existing and updated product data
        products[index] = { ...products[index], ...updatedProduct };
        writeProducts(products);
        return products[index];
    } else {
        return 'Product not found';
    }
}

function deleteProduct(id) {
    let products = readProducts();
    const initialLength = products.length;
    products = products.filter(product => product.id !== id);
    if (products.length < initialLength) {
        writeProducts(products);
        return 'Product successfully deleted';
    } else {
        return 'Product not found';
    }
}

// Example usage of the functions
// console.log('Created product:', createProduct('Product 2', 200, 10));
console.log('Product:', readProduct(1719662720678));
console.log('Deleted product:', deleteProduct(1719662279494));
console.log('Updated product:', updateProduct(1719662741003, { price: 140, quantity: 14, name: 'Computer' }));
console.log(readProducts());
