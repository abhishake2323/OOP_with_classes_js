
//Part 1: Setting Up Classes
class ProductProperties {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }
    // Part 3: Static Methods and Properties
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

//Part 2: Adding Inheritance
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

// Part 4: Store Management

class StoreInventory {

    constructor(products = []) {

        this.products = products


    }

    addProduct(product) {
        this.products.push(product)

    }
    getInventoryValue() {
        let sum = 0;
        this.products.forEach(element => {
            sum = sum + element.getTotalValue()
        });
        return sum
    }

    findProductByName(name) {
        if (this.products.map((obj) => (obj.name)).includes(name)) { //return true if Name consists in any of elements in Object array 
            return this.products.filter( (x)=>(x.name===name))[0];
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
let bread = new PerishableProductProperties("bread", 2.5, 1, '2024-12-30');
let cheese = new PerishableProductProperties("cheese", 1.89, 1, '2024-12-30');


let store = new StoreInventory()
store.addProduct(soda)
store.addProduct(paper)
store.addProduct(pen)
store.addProduct(bread)
store.addProduct(cheese)

console.log("Total inventory value before applying discount : " + store.getInventoryValue())

ProductProperties.applyDiscount(store.products, 15)

console.log("Total inventory value after applying discount : " + store.getInventoryValue())

console.log("Finding a product by its name: 'paper' ,'banana','bread' : ")

console.log(store.findProductByName("paper"))
console.log(store.findProductByName("banana"))
console.log(store.findProductByName("bread"))