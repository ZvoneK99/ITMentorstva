//Vježba 2 – Brojevi i kvadrati
//Napravi niz brojeva: [1,2,3,4,5].
//Prikaži ih u <p> tako da piše “Broj: X, Kvadrat: Y”.
//Koristi .map().

const numbersArray = [1,2,3,4,5];

function Numbers() {
    return (
        <>
        {numbersArray.map((number, index) => 
        {return (
            <p key={index}>Broj: {number}, Kvadrat: {number*number}</p>
        )})}
        </>
    );
}

export default Numbers;