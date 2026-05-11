import { useState } from 'react';


const LoginForm = () => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.trim() === '') {
            alert('Password cannot be empty');
            return;
        } else {
            setPassword(password);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;
