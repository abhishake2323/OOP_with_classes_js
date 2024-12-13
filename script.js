

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


class ClassPropertiesInventory{

    constructor(products){
        this.products=  products
    }

    addProduct(product){
        this.products.push(product)

    }
    getInventoryValue(){
        return this.products.reduce( (x ,y ) => x.getTotalValue()+y.getTotalValue() );
    }

    findProductByName(name){
        if( this.products.includes(name)){
            return name;
        }
        else{
            return null;
        }
         
    }
}