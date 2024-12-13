

class ProductProperties {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price - (product.price * (discount / 100))
        });
    }
    getTotalValue() {

        return this.price * this.quantity
    }
    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}"`
    }

}


class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity)
        this.expirationDate = expirationDate;

    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity},Expiration Date: ${this.expirationDate}"`
    }

}


//instantiation

let milk = new PerishableProductProperties("Milk", 1.5, 4, new Date('2024-12-16').toISOString().slice(0, 10))
let eggs = new PerishableProductProperties("Eggs", 0.25, 6, new Date('2024-12-27').toISOString().slice(0, 10))


class StoreInventory {

    constructor(products=[]) {

        this.products = products


    }

    addProduct(product) {
        this.products.push(product)

    }
    getInventoryValue() {
        let sum=0;
        this.products.forEach(element => {
            sum= sum+element.getTotalValue()
        });
        return sum 
    }

    findProductByName(name) {
        if (this.products.map((obj) => (obj.name)).includes(name)) {
            return name;
        }
        else {
            return null;
        }

    }
}

//creating 5 products with 2 perishable products

let soda = new ProductProperties("sodacan", 2.5, 1);
let paper = new ProductProperties("paper", 1.2, 3);
let pen = new ProductProperties("pen", 4.2, 1);
let bread = new PerishableProductProperties("Bread", 2.5, 1, '2024-12-30');
let cheese = new PerishableProductProperties("Cheese", 1.89, 1, '2024-12-30');


let store = new StoreInventory( )
store.addProduct(soda)
store.addProduct(paper)
store.addProduct(pen)
store.addProduct(bread)
store.addProduct(cheese)