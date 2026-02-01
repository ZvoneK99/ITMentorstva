import { useState } from "react";


function City() {

    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");
    let [temperature, setTemperature] = useState("");
    let [cities, setCities] = useState([]);
    function EnterCity(e) {
        const city = e.target.value;
        //console.log(city);
        setCity(city);
    }

    function EnterCountry(i) {
        const country = i.target.value;
        //console.log(country);
        setCountry(country);
    }

    function EnterTemperature(j) {
        const temperature = j.target.value;
        //console.log(temperature);
        setTemperature(temperature);
    }

    function AddToList() {
        setCities([
            ...cities,
            { city, country, temperature }
        ]);

    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column bg-dark">
            <div className="mt-2 border w-50 rounded card mx-auto bg-primary-subtle">
                <h5 className="text-center ">Please enter data</h5>
                <div className="mx-auto">
                    <input className="form-control m-3" type="text" placeholder="Enter city" onInput={(e) => EnterCity(e)} />
                </div>
                <div className="mx-auto">
                    <input className="form-control m-3 rounded" type="text" placeholder="Enter country" onInput={(i) => EnterCountry(i)} />
                </div>
                <div className="mx-auto">
                    <input className="form-control m-3  rounded" type="number" placeholder="Enter temperature" onInput={(j) => EnterTemperature(j)} />
                </div>
                <button className="btn btn-primary w-25 mx-auto" onClick={AddToList}>Add</button>
            </div>
            <div className="mt-2 border w-50 rounded card mx-auto bg-white">
                <h5 className="text-center">Current data result</h5>
                <div className="mx-auto">
                    <p className="fw-semibold">City: <span className="text-primary">{city}</span></p>
                    <hr />
                </div>
                <div className="mx-auto">
                    <p className="fw-semibold">Country: <span className="text-primary">{country}</span></p>
                    <hr />
                </div>
                <div className="mx-auto">
                    <p className="fw-semibold">Temperature: <span className="text-primary">{temperature} °C</span></p>
                    <hr />
                </div>
            </div>
            <div className="mt-2 border w-50 rounded card mx-auto bg-danger">
                <h5 className="text-center">Results</h5>
                <table className="">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Country</th>
                            <th>Temperature</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cities.map((item, index) => (
                            <tr key={index}>
                                <td>{item.city}</td>
                                <td>{item.country}</td>
                                <td>{item.temperature}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div >
    );
}
export default City;