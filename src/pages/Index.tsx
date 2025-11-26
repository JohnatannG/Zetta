import '../index.css';
import Logo from "../components/Logo"
import CadastroForm from '../components/CadastroForm';

const Index = () => {
    return (
        <div className='container mx-auto p-5 flex flex-col space-y-6'>
            <div className="flex justify-center my-5">
                <Logo/>
            </div>
            <CadastroForm/>
        </div>
    )
}

export default Index