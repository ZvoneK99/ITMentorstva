import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { emailValidate } from '../Validators/EmailValidator';
import { passwordValidate } from '../Validators/PasswordValidator';


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const formSubmitted = data => console.log(data);


    return (
        <div className='d-flex justify-content-center align-items-center flex-column min-vh-100 mb-2'>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(formSubmitted)}>

                <input {...register("email", emailValidate)} type="text" placeholder="Username" />
                {errors.email && <span>{errors.email.message}</span>}


                <input {...register("password", passwordValidate)} type="password" placeholder="Password" />
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
