const path = require("path")
const fs = require("fs");

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'product.json');

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        return cb(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile((prod) => {
            prod.push(this);
            fs.writeFile(p, JSON.stringify(prod), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}