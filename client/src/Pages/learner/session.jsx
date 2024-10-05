import uicon from "../../images/uicoon.png"
import logo from "../../images/logo.png"

function Sessions() {


    return (
        <>
            <main className="flex justify-center items-center ">
                <div className="grid grid-cols-[repeat(10,100px)] grid-rows-[repeat(10,120px)] gap-4 p-14">
                    <div className="search_input col-start-1 col-end-7 row-start-1 row-end-2 flex flex-col items-center">
                        <div className="  bg-light-blue w-full h-1/2 flex items-center justify-end rounded-lg p-4">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="bg-light-blue text-dark-blue text-2xl w-full h-full px-4 rounded-lg border-none outline-none placeholder:text-dark-blue"
                            />
                            <button className="bg-dark-blue text-white w-1/5 h-full flex items-center justify-center rounded-lg">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <div className="available_session col-start-1 col-end-7 row-start-2 row-end-11 w-full bg-dark-blue p-4 rounded-lg">
                        <h3 className="text-white text-xl text-center mb-4">Session available now</h3>
                        <div className="flex flex-col w-full items-center">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-light-blue p-4 mb-4 rounded-lg h-64 w-[800px] max-w-md">
                                    <div className="flex items-center mb-4">
                                        <img src={uicon} alt="Mentor" className="w-24 h-24 mr-4" />
                                        <div className="flex text-dark-blue">
                                            <h3 className="bg-white p-2 rounded-lg mr-2">Mentor name: <span></span></h3>
                                            <h3 className="bg-white p-2 rounded-lg">Major name: <span></span></h3>
                                        </div>
                                        <button className="bg-dark-blue text-white p-2 rounded-full ml-auto">
                                            <i class="fa-solid fa-heart"></i>
                                        </button>
                                    </div>
                                    <p className="bg-white text-dark-blue p-4 rounded-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. {item}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. {item}
                                        ...
                                    </p>
                                </div>
                            ))}
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button key={num} className="bg-light-blue text-dark-blue p-2 rounded-lg">{num}</button>
                                ))}
                                <button className="bg-light-blue text-dark-blue p-2 rounded-lg">...</button>
                            </div>
                        </div>
                    </div>

                    <div className="reserved_session col-start-7 col-end-11 row-start-1 row-end-6 bg-light-blue p-4 rounded-lg">
                        <h3 className="text-dark-blue text-xl text-center mb-4">Reserved Session</h3>
                        <div className="flex flex-col items-center">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-dark-blue p-4 mb-4 rounded-lg w-full max-w-md flex items-center">
                                    <img src={uicon} alt="Mentor" className="w-20 h-20 mr-4" />
                                    <div className="text-white">
                                        <h4 className="bg-white text-dark-blue p-2 rounded-lg">Mentor name <span></span></h4>
                                        <div className="flex items-center mt-2">
                                            <h4 className="bg-white text-dark-blue p-2 rounded-lg">Date: <span>30/12/2024</span></h4>
                                            <button className="bg-white text-dark-blue p-2 rounded-lg ml-4">See more</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button key={num} className="bg-dark-blue text-light-blue p-2 rounded-lg">{num}</button>
                                ))}
                                <button className="bg-dark-blue text-light-blue p-2 rounded-lg">...</button>
                            </div>
                        </div>
                    </div>

                    <div className="favorite_mentors col-start-7 col-end-11 row-start-6 row-end-11 bg-dark-blue p-4 rounded-lg">
                        <h3 className="text-white text-xl text-center mb-4">Favorite Mentors</h3>
                        <div className="flex flex-col items-center">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-light-blue p-4 mb-4 rounded-lg w-full max-w-md flex items-center">
                                    <img src={uicon} alt="Mentor" className="w-20 h-20 mr-4" />
                                    <div className="text-dark-blue">
                                        <h4 className="bg-white text-dark-blue p-2 rounded-lg">Mentor name <span></span></h4>
                                        <div className="flex items-center mt-2">
                                            <h4 className="bg-white text-dark-blue p-2 rounded-lg">Date: <span>30/12/2024</span></h4>
                                            <button className="bg-white text-dark-blue p-2 rounded-lg ml-4">See more</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button key={num} className="bg-light-blue text-dark-blue p-2 rounded-lg">{num}</button>
                                ))}
                                <button className="bg-light-blue text-dark-blue p-2 rounded-lg">...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Sessions;