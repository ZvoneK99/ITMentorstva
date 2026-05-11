import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const formSubmitted = data => console.log(data);


    return (
        <div className='d-flex justify-content-center align-items-center flex-column min-vh-100 mb-2'>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(formSubmitted)}>

                <input {...register("email", { required: true, maxLength: 20, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} type="text" placeholder="Username" />
                {errors.email?.type === 'required' && <span>Username is required!</span>}
                {errors.email?.type === 'maxLength' && <span>Username is too long!</span>}
                {errors.email?.type === 'pattern' && <span>Email not validate!</span>}


                <input {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    validate: value => value.trim() !== ''
                })} type="password" placeholder="Password" />
                {errors.password?.type === 'minLength' && <span>Password is too short!</span>}
                {errors.password?.type === 'maxLength' && <span>Password is too long!</span>}
                {errors.password?.type === 'required' && <span>Password is required!</span>}
                {errors.password?.type === 'validate' && <span>Password cannot hold empty space!</span>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
