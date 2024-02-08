const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const northwind = await cds.connect.to('northwind');

    this.on('READ', 'Products', async req => {
        return northwind.run(req.query);
    });

});