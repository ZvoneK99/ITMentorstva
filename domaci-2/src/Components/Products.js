
import { useState } from 'react';

function Products(props) {

    let [products, setProducts] = useState({
    'iPhone 14': 1000,
     'iPhone 15': 1250,
      'Samsung S23S': 1100,
});

/*
    1. Input za unos imena proizvoda - newProductName, setNewProductName
    2. input za unos cijene - newProductPrice, setNewProductPrice
    3. button za kreiranje proizvoda - onClick: addProducts -> newProductName, newProductPrice push products
*/
    let [newProductName, setNewProductName] = useState();
    let [newProductPrice, setNewProductPrice] = useState();

function addProduct() {
        
    //console.log(newProductName,newProductPrice);
    if (!newProductName) {
        console.log("Niste unijeli ime!");
        return;
    }
    if (!newProductPrice) {
        console.log("Niste unijeli cijenu!");
        return;
    }

    console.log("Sve ste unijeli!");

    setProducts({
        ...products,
        [newProductName]: parseInt(newProductPrice)
    });
}

    return (
        <>

           {Object.entries(products).map(([phone, price]) => (
    <p key={phone}>
        {phone}, price: {price}, with tax: {CalculateTax(price, props.tax)}
    </p>
))}

    <div style={{margin: 20}}>
    <input type='text' placeholder='Unesi ime proizvoda' onInput={(e) => setNewProductName(e.target.value)}></input>
        <input type='number' placeholder='Unesi cijenu proizvoda' onInput={(e) => setNewProductPrice(e.target.value)}></input>
        <button onClick={addProduct}>Add new products!</button>

    </div>
        </>
    );
}






function CalculateTax(price, tax) {
    return price +(price*tax / 100);
}


export default Products;