import icon from "../assets/icon.png"
export const Header = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 border-b-2 border-blue-600">
            <div className="text-3xl font-bold flex"> 
                <img src={icon} alt="Prodloop icon" className="h-7 w-11 mt-3 mr-2" />
                <span className="text-black">prod</span>
                <span className="text-blue-600">loop</span>
            </div>
            <div className="flex space-x-4 text-black p-2 rounded-lg">
                <div className="px-3 py-1 hover:text-blue-700 rounded cursor-pointer">
                    Dashboard
                </div>
                <div className="px-3 py-1 hover:text-blue-700 rounded cursor-pointer">
                    Feedbacks
                </div>
                <div className="px-3 py-1 hover:text-blue-700 rounded cursor-pointer">
                    Alerts
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}