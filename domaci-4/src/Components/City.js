import { useState } from "react";


function City() {

    let [city, setCity] = useState();
    let [country, setCountry] = useState();
    let [temperature, setTemperature] = useState();

    function EnterName(e) {
        const name = e.target.value;

    }


    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column bg-dark">
            <div className="mt-2 border w-50 rounded card mx-auto bg-primary-subtle">
                <h5 className="text-center ">Please enter data</h5>
                <div className="mx-auto">
                    <input className="form-control m-3" type="text" placeholder="Enter city" />
                </div>
                <div className="mx-auto">
                    <input className="form-control m-3 rounded" type="text" placeholder="Enter country" />
                </div>
                <div className="mx-auto">
                    <input className="form-control m-3  rounded" type="number" placeholder="Enter temperature" />
                </div>
            </div>
            <div className="mt-2 border w-50 rounded card mx-auto bg-white">
                <h5 className="text-center">Enter data results</h5>

            </div>
        </div>
    );
}
export default City;