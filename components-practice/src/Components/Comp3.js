//Vježba 3 – Dinamički pozdrav
//Napravi niz imena: ['Ana', 'Marko', 'Ivana'].
//Prikaži: <p>Pozdrav, {ime}!</p> za svako ime.
//Dodaj key.

const namesArray = ['Zvone', 'Gabi', 'Ante'];

function Names() {
    return (
        <>
        {namesArray.map((name, index) => {
            return (
                <p key={index}>Pozdrav, {name}!</p>
            )
        })};
        </>
    );
}

export default Names;