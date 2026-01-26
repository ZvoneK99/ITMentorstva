
import { useState } from 'react';

function Products(props) {

    let [products, setProducts] = useState({
    'iPhone 14': 1000,
     'iPhone 15': 1250,
      'Samsung S23S': 1100,
});


const DeleteProducts = () => {
    setProducts({});    
}

    return (
        <>
           {Object.entries(products).map(([phone, price]) => (
    <p key={phone}>
        {phone}, price: {price}, with tax: {CalculateTax(price, props.tax)}
    </p>
))}
    <button onClick={DeleteProducts}>Delete products</button>
        </>
    );
}

function CalculateTax(price, tax) {
    return price +(price*tax / 100);
}


export default Products;