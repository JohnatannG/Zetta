import '../index.css';
import Logo from "../components/Logo"
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className='container mx-auto p-5 flex flex-col space-y-6'>
            <div className="flex justify-center my-5">
                <Logo/>
            </div>
            <LoginForm/>
        </div>
    )
}

export default Login