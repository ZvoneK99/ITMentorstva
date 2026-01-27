
//Napravi niz voća: ['jabuka', 'banana', 'kruška'].
//Prikazi svako voće u <li> unutar <ul>.
//Svaki <li> treba imati key.

const FruitsArray = ['apple', 'banana', 'peach'];

function Fruits() {
    return (
        <>
        <ul>
        {FruitsArray.map((fruit, index) => {return (
            <li key={index}>{fruit}</li>
        )})}
        </ul>
        </>

    );
}
export default Fruits;