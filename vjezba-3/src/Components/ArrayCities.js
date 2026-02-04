
function ArrayCities() {

    const CITIES = [
        { id: 1, city: "Zagreb", country: "Hrvatska" },
        { id: 2, city: "Split", country: "Hrvatska" },
        { id: 3, city: "Široki Brijeg", country: "BiH" }
    ];

    return (
        <>
            {CITIES.map((city => (
                <>
                    <div key={city.id}>
                        <p>{city.city} ({city.country})</p>
                    </div>
                </>
            )))}
        </>
    );
}

export default ArrayCities;