import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="h-full  flex items-center mt-6">

            {/* Blur */}
            <div
                style={{backgroundColor: "var(--primary)", opacity: "0.25"}}
                className="pointer-events-none absolute rounded-full w-[800px] h-[400px] blur-[200px] -top-[300px] left-1/2 -translate-x-1/2">
            </div>

            {/* Cadastro */}
            <div 
                className="lg:w-4/6 lg:mx-auto rounded-xl lg:p-9 p-6"
                style={{backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
  
                {/* Título */}
                <div className="flex justify-between items-center mb-3">
                    <h1 
                        style={{color: "var(--primary)"}}
                        className="text-primary text-2xl font-bold">
                            Login
                    </h1>
                    <Link to="/" className="text-[#217AFF] hover:underline text-sm">
                        Fazer Cadastro
                    </Link>
                </div>
  
                {/* Texto */}
                <p 
                style={{color: "var(--secondary)"}}
                className="text-gray-300 text-sm mb-6">
                    Gerencie clientes e vendas de forma simples e eficiente.
                </p>
  
                {/* Linha divisória */}
                <hr 
                    style={{color: "var(--border)"}}
                    className="mb-10" 
                />
  
                {/* Formulário */}
                <form className="space-y-4">

                    <input
                        type="email"
                        placeholder="E-mail"
                        style={{
                            backgroundColor: "var(--bg)",
                            border: "1px solid var(--border)",
                            color: "var(--border)"
                        }}
                        className="w-full rounded-[0.3rem] p-3 text-[0.8rem] text-white! placeholder-gray-500"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        style={{
                            backgroundColor: "var(--bg)",
                            border: "1px solid var(--border)",
                            color: "var(--border)"
                        }}
                        className="w-full rounded-[0.3rem] p-3 text-[0.8rem] text-white! placeholder-gray-500"
                    />

                    <button
                        type="submit"
                        style={{ backgroundColor: "var(--primary)" }}
                        className="w-full lg:w-40 py-2.5 mt-3 text-[0.8rem] text-white font-semibold cursor-pointer rounded-[0.3rem]"
                    >
                        Criar conta
                    </button>

                </form>

  
            </div>
        </div>
    );
}
  