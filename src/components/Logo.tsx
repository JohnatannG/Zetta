import IconLogo from "../assets/IconLogo.png"

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
           <img 
            src={IconLogo} 
            alt="Icone do logo" 
            className="w-[2.5rem]"
        /> 
           <h1 className="text-white text-[1.3rem] font-bold">BarberZetta</h1>
        </div>
    )
}

export default Logo