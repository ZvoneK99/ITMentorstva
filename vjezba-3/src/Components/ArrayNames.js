

function ArrayNames() {
    const NAMES = ["Zvone", "Ante", "Pero"];

    return (
        <>
            <h1>Array of names</h1>

            {NAMES.map(((name, key) =>
                <p key={key}>{name}</p>
            ))}
        </>

    );
}
export default ArrayNames;