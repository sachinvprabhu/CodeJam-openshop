const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const northwind = await cds.connect.to('northwind');

    this.on('READ', 'Products', async req => {
        return northwind.run(req.query);
    });

    this.on('checkPrice','Products',async req => {
        
        let product = await northwind.run( req.query );
        let discount = (product.UnitsInStock > 20)? 5 : 0;
        return {
            Price : product.UnitPrice * req.data.units,
            FinalPrice: product.UnitPrice * req.data.units * (1 - discount/100),
            Discount : discount
        };
    });
});