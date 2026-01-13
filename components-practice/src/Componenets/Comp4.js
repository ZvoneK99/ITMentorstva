

function Price({price, tax}) {

    const priceWithTax = price+(price*tax/100);


    return <h1>Price with tax: {priceWithTax}</h1>;
}

export default Price;