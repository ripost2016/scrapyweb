const cheerio = require('cheerio');
const request = require('request');

request('https://www.ulabox.com/categoria/ginebra/955', (err, res, body) => {
    let $ = cheerio.load(body);
    let productos = $('.product-item');
    for (let i = 0; i < productos.length; i++) {
        let nombre = productos[i].attribs['data-product-name'];
        let precio = productos[i].attribs['data-price'];
        let marca = productos[i].attribs['data-product-brand'];
        let id = productos[i].attribs['data-product-id'];
        console.log(nombre, precio, marca, id);
    }
});


// axios.get('https://www.ulabox.com/categoria/ginebra/955').then(res => {
//     console.log(res);
//     let $ = cheerio.load(res);
//     let numItems = $('.product-item');
//     console.log(numItems);
// });