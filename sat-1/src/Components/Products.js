
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
    let [result, setResult] = useState();
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



    function searchProduct(e) {
        let searchTerm = e.target.value.toLowerCase(); //Ovo korisnik pretrazuje i prebacimo ga u lower Case
        console.log("Pretraga za pojam " + searchTerm);
        let exist = false;
        let keys = Object.keys(products); //Napraviti array od kljuceva poroducts-a
        for (let i = 0; i < keys.length; i++) {
            const keysLower = keys[i].toLowerCase();
            if (keysLower === searchTerm) {
                exist = true;
                break;
            }
        }
        if (exist) {
            console.log("Pronašli smo proizvod!");
            setResult("Pronašli smo proizvod!");
        }
        else {
            console.log("Nismo pronašli proizvod!");
            setResult("Nismo pronašli proizvod!");

        }
    }


    return (
        <>


            <div className='d-flex justify-content-center'>
                {Object.entries(products).map(([phone, price]) => (
                    <div className='m-2'>
                        <h5>{phone}</h5>
                        <p>Price: ${price}, price with tax ${CalculateTax(price, props.tax)}</p>
                    </div>

                ))
                }
            </div>


            <div>
                <hr />
                <h3>Dodavanje proizvoda</h3>
                <div className='mt-2'>
                    <input className='form-control' type='text' placeholder='Unesi ime proizvoda' onInput={(e) => setNewProductName(e.target.value)}></input>
                </div>
                <div className='mt-2'>
                    <input className='form-control' type='number' placeholder='Unesi cijenu proizvoda' onInput={(e) => setNewProductPrice(e.target.value)}></input>
                </div>
                <button className='btn btn-primary mt-2' onClick={addProduct}>Add new products!</button><br />
                <button className='btn btn-danger mt-2' onClick={() => setProducts({})}>Delete products</button>

                <hr />
                <div>
                    <div>
                        <p>{result}</p>
                        <input className='form-control' placeholder='Pretrazi objekt' onInput={searchProduct} />
                    </div>
                </div>
            </div>
        </>
    );
}





function CalculateTax(price, tax) {
    return price + (price * tax / 100);
}


export default Products;