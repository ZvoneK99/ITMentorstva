
function ObjectArrayExercise() {

    const products = {
  "iPhone 14": 1000,
  "iPhone 15": 1250,
  "Samsung S23S": 1100
};

function ProductList(props) {
    return ( 
        <>
            {Object.entries(products).map(([key, price]) => (
                <p key={key}>{key}, ${price}</p>
            ))}
        </>
    );
}


function searchItem(e) {
    const item = e.target.value;
    const ProductIn = products.hasOwnProperty(item);
    console.log(ProductIn);
}

return (
    <>
      {ProductList()}
        <input onInput={searchItem}/>
    </>

)
}

export default ObjectArrayExercise;