


const Footer = () => {
    return (
        <div className="p-14 bg-white text-[#1E1E1E]">
            <div className="md:flex items-start justify-between">
                <div className="left flex flex-col justify-between max-md:mb-10">
                    <div className="">
                        <img className="w-[200px] mb-3" src="/logo1.png" alt="" />
                        <h1>The biggest, extraordinary and spread <br />out kpop music festival all around the world</h1>
                    </div>
                    <p className="mt-20 max-md:hidden">2023 &copy; Elegent</p>
                </div>
                <div>
                    <div className="flex items-start space-x-12">
                        <ul>
                            <li className="text-xl font-semibold pb-5">Menu</li>
                            <li>Home</li>
                            <li>Performance</li>
                            <li>Booking</li>
                            <li>Store</li>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li className="text-xl font-semibold pb-5">Help</li>
                            <li>Privacy & Policy</li>
                            <li>Term of Use</li>
                        </ul>
                        <ul>
                            <li className="text-xl font-semibold pb-5">Social</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer