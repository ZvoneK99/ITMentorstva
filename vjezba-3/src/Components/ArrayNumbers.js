

function ArrayNumbers() {
    const NUMBERS = [2, 4, 6, 1];

    return (
        <>
            <h1>Array of numbers</h1>
            {NUMBERS.map(((number, key) =>
                <p key={key}>Broj: {number}</p>
            ))}
        </>
    )
}

export default ArrayNumbers;