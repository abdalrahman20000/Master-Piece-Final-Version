import logo from "../images/logo.png"
import uicoon from "../images/uicoon.png"

function Footer() {



    return (
        <>

            <footer className="bg-dark-blue flex flex-col items-center p-4">
                <div className="footer_logo w-1/5 mb-4">
                    <a href="#"><img src={logo} alt="Logo" className="w-12 rounded-full bg-light-blue p-1" /></a>
                </div>

                <nav className="flex flex-col items-center mb-4">
                    <ul className="flex flex-col items-center space-y-2 mb-2">
                        <li><a href="#" className="text-light-blue">Home</a></li>
                        <li><a href="#" className="text-light-blue">Session</a></li>
                        <li><a href="#" className="text-light-blue">Subscription</a></li>
                        <li><a href="#" className="text-light-blue">Contact</a></li>
                        <li><a href="#" className="text-light-blue">Library</a></li>
                    </ul>
                    <div className="text-white">© 2024 | All Rights Reserved</div>
                </nav>

                <div className="footer_icons flex justify-center space-x-3 w-full">
                    <div className="bg-light-blue rounded-full p-2">
                        <a href="#">
                        <i className="fa-brands fa-facebook text-white"></i>
                        </a>
                    </div>
                    <div className="bg-light-blue rounded-full p-2">
                        <a href="#">
                        <i className="fa-brands fa-instagram text-white"></i>
                        </a>
                    </div>
                    <div className="bg-light-blue rounded-full p-2">
                        <a href="#">
                        <i className="fa-solid fa-at text-white"></i>
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}


export default Footer;