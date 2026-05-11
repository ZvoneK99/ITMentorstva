import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => console.log(data);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');



    return (
        <div className='d-flex justify-content-center align-items-center flex-column min-vh-100 mb-2'>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>

                <input {...register("firstname", { required: true, maxLength: 20 })} type="text" placeholder="Username" />
                {errors.firstname?.type === 'required' && <span>Username is required!</span>}
                {errors.firstname?.type === 'maxLength' && <span>Username is too long!</span>}


                <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" placeholder="Password" />
                {errors.password?.type === 'minLength' && <span>Password is too short!</span>}
                {errors.password?.type === 'maxLength' && <span>Password is too long!</span>}
                {errors.password?.type === 'required' && <span>Password is required!</span>}
                <button type="submit">Login</button>
                <p>{passwordError}</p>
            </form>
        </div>
    )
}

export default LoginForm;
