
import React from "react";

interface ProductInterface {
    [key: string]: number
}

const products:ProductInterface = {
    'iPhone 14': 1000,
     'iPhone 15': 1250,
      'Samsung S23S': 1100,
     
};

function Products(props) {

    return (
        <>
            {Object.entries(products).map(([phone, price]) => {

                return (
                    <p key={phone}>
                        {phone}, price: {price}, with tax: {CalculateTax(price, props.tax)}
                    </p>
                );
            })}
        </>
    );
}

function CalculateTax(price:number, tax:number):number {
    return price +(price*tax / 100);
}

export default Products;