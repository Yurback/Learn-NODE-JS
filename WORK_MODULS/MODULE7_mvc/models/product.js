const path = require("path")
const fs = require("fs");



const getProductsFromFile = (cb) => {
    const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'product.json');
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([], p);
        }
        return cb(JSON.parse(fileContent), p);
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile((prod, p) => {
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