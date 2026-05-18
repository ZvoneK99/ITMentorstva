import gradovi from '../data/Gradovi.json';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
type FormValues = {
    grad: string;
};

const Home = () => {

    const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
    const [geoError, setGeoError] = useState<string | null>(null);

    const getAdress = (location: GeolocationPosition) => console.log(location);
    const adressForbidden = () => console.log("We got reject");


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getAdress, adressForbidden)
    }
    else {
        console.log("Not supported");
    }



    const validCities: string[] = gradovi.map((g: { name: string }) => g.name.toLowerCase());

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onFormSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    const isValidCityName = (name: string) => {
        return validCities.includes(name.toLowerCase());
    };

    return (
        <>
            <div
                className="text-white text-center py-5"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3">Dobrodošli na Home!</h1>

                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <input
                            {...register("grad", { validate: isValidCityName })}
                            type="text"
                            className={`form-control form-control-lg mb-1 ${errors.grad ? 'is-invalid' : ''}`}
                            placeholder="Unesite naziv grada..."
                        />
                        {errors.grad && (
                            <p className="text-warning mt-1">Grad nije pronađen!</p>
                        )}
                        <button type="submit" className="btn btn-light mt-2">Pretraži</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;