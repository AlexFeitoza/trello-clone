
const Header = () => {
    return (
        <div className="bg-[#1d2125] w-100vw h-12 p-3 border-b bordered-box flex flex-row justify-between border-b-[#9fadbc29]">
                <div className="left justify-center items-center flex ">
                    <h3 className="text-slate-50">Trello Clone</h3>
                </div>

                <div className="rigth flex items-center space-x-4">
                    <span>Remote Dev</span>
                    <img className="rounded-full" src="https://placehold.co/28x28/png" alt="" />
                </div>
        </div>
    )
}

export default Header