import logo from "../assets/logo.png"
export const Feedbacks=(()=>{
    return (
        <div className="flex shadow-lg bg-red-50">
            <img src={logo} alt="logo of prodloop" />
            <div className="flex items-center pl-44">
               <h1 className='text-black font-semibold text-2xl border-b-4 '>Feedbacks</h1>
            </div>  
        </div>
    )
})