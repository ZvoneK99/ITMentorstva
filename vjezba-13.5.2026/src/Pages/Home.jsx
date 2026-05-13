import gradovi from '../data/Gradovi.json';
import { useForm } from 'react-hook-form';


const Home = () => {

    const validCities = gradovi.map((g) => g.name.toLowerCase());

    const { register, handleSubmit, formState: { errors } } = useForm();


    // const ispisGrada = (grad) => {
    //     grad = grad.toLowerCase();
    //     const pronađen = gradovi.find((g) => g.name.toLowerCase() === grad);

    //     if (pronađen) {
    //         console.log("Grad pronađen: ", pronađen);
    //     } else {
    //         console.log("Grad nije pronađen: ", grad);
    //     }
    // };

    const onFormSubmit = (data) => {
        console.log(data);
    };

    const isValidCityName = (name) => {
        return validCities.includes(name.toLowerCase());
    };

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient text-white text-center py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="container">
                    <form onSubmit={handleSubmit((onFormSubmit))}>
                        <input {...register("grad", { validate: isValidCityName })} type="text" className="form-control form-control-lg mb-3" placeholder="Unesite naziv grada..." />
                    </form>
                    <h1 className="display-4 fw-bold mb-3">Dobrodošli na Home!</h1>
                    <p className="lead mb-4">Ovo je moderna React aplikacija sa Bootstrap stilom</p>
                </div>
            </div>



        </>
    );
}

export default Home;