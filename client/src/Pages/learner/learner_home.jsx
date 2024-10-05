import uicon from "../../images/uicoon.png"
import logo from "../../images/logo.png"



function Home() {


    return (
        <>

            <main class="flex flex-col w-full items-center justify-center ">
                <div class="grid   gap-5 w-[80%] px-5 py-12">
                    {/* <!-- Welcome Message --> */}
                    <div class="col-start-1 col-end-6 row-start-1 row-end-2 h-14 bg-[#111A6F] rounded-[12px] flex items-center justify-center">
                        <h4 class="bg-[#64B5F6] text-[#111A6F] text-center text-lg w-[80%] px-4 py-2 rounded-xl">
                            Welcome back, Mentors are waiting for you
                        </h4>
                    </div>

                    {/* <!-- Search --> */}
                    <div class="col-start-1 col-end-6  row-start-2 row-end-3 h-14 bg-[#64B5F6] rounded-[12px] flex items-center justify-end">
                        <input type="text" placeholder="Search here..." class="bg-[#64B5F6] w-full h-full text-3xl text-[#111A6F] border-0 rounded-xl pl-4" />
                        <button class="bg-[#111A6F] text-white text-3xl w-1/5 h-full rounded-xl flex items-center justify-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    {/* <!-- Personal Info --> */}
                    <div class="col-start-6 col-end-11  row-start-1 row-end-6 bg-[#64B5F6] p-4 rounded-[12px] flex flex-col justify-between">
                        <div class="flex justify-center items-end">
                            <img src={uicon} alt="" class="w-28 border-4 border-[#ffffff] rounded-full" />

                            <div class="w-2/3 ml-6">
                                <h3 class="bg-white text-[#111A6F] p-3 rounded-md">User name...</h3>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-4 gap-2">
                            <div class="w-1/2">
                                <div class="bg-white text-[#111A6F] text-center p-2 rounded-md mb-2">
                                    <h3>Number of sessions</h3>
                                </div>
                                <div class="bg-white text-[#111A6F] flex items-center justify-center text-5xl h-40 rounded-md">
                                    <h3>99+</h3>
                                </div>
                            </div>
                            <div class="w-1/2">
                                <div class="bg-white text-[#111A6F] text-center p-2 rounded-md mb-2">
                                    <h3>Number of hours</h3>
                                </div>
                                <div class="bg-white text-[#111A6F] flex items-center justify-center text-5xl h-40 rounded-md">
                                    <h3>99+</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Certificate --> */}
                    <div class="   col-start-1 col-end-6  row-start-3 row-end-8 bg-[#111A6F] rounded-[12px] p-4 flex flex-col items-center overflow-hidden">
                        <h2 className='text-[#64B5F6] text-3xl text-center py-2 rounded-t-[12px] mb-2'>Progress</h2>
                        <div class="bg-[#64B5F6] text-center text-xl p-4 w-full h-3/4 rounded-3xl flex flex-col items-center">
                            <div className=" bg-[#111A6F] rounded-full p-1">
                                <img src={logo} alt="" class="w-20 rounded-full bg-white" />
                            </div>
                            <h5 class="text-xl mt-2">certificate of completion</h5>
                            <h4 class="text-2xl mt-1">User name</h4>
                            <p class="mt-2 text-center">
                                Accomplish more than 99 sessions and surpass
                                <br />
                                99 hours each in Topic 1, Topic 2, and Topic 3.
                            </p>
                            <div class="text-4xl text-start w-[80%] mt-4">
                                <i class="fa-solid fa-signature"></i>
                            </div>
                        </div>
                        <button class="bg-[#64B5F6] text-[#111A6F] border-0 rounded-md mt-4 px-4 py-1 text-md">
                            See more
                        </button>
                    </div>

                    {/* <!-- Subscribe --> */}
                    <div class="col-start-6 col-end-11  row-start-6 row-end-8  bg-[#64B5F6] p-4 rounded-[12px] flex flex-col items-center">
                        <h3 class="bg-[#111A6F] text-[#64B5F6] text-2xl px-6 py-2 rounded-xl">Premium</h3>
                        <div class="flex flex-col w-4/5 mt-4">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="bg-[#111A6F]  text-white text-center text-lg px-4 py-2 rounded-xl w-[75%]">Number of sessions allowed today :</h4>
                                <h4 class="text-[#64B5F6] bg-[#111A6F] text-center text-lg px-4 py-2 rounded-xl w-[20%]">99+</h4>
                            </div>
                            <div class="flex items-center justify-between">
                                <h4 class="bg-[#111A6F]  text-white text-center text-lg px-4 py-2 rounded-xl w-[70%] mr-2">Subscription is valid until :</h4>
                                <h4 class="text-[#64B5F6] bg-[#111A6F] text-lg px-4 py-2 rounded-xl w-[35%]">06/06/2024</h4>
                            </div>
                        </div>
                        <button class="bg-[#111A6F] text-[#64B5F6] border-0 rounded-md mt-4 px-4 py-2 text-lg">
                            Update Now !
                        </button>
                    </div>

                    {/* <!-- Schedule --> */}
                    <div class="col-span-10 row-span-4 bg-[#64B5F6] rounded-[12px] flex flex-col">
                        <div class="bg-[#111A6F] text-[#64B5F6] text-2xl text-center py-2 rounded-t-[12px]">
                            <h3>Schedule</h3>
                        </div>
                        <div class="flex  justify-center items-center p-2 overflow-x-scroll w-[1200px]">
                            {/* <!-- Repeat for each card --> */}
                            <div className=" flex">

                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>

                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>



                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                                <a href="" class="bg-[#111A6F] rounded-lg p-2 m-2 w-36">
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-center rounded-md p-1">
                                        <h3>05</h3>
                                    </div>
                                    <div class="bg-[#64B5F6] text-[#111A6F] text-left p-2 rounded-md mt-1">
                                        <h3>Session</h3>
                                        <h4>Mentor name</h4>
                                        <h4>Topic</h4>
                                        <h4>Time : <span>6 PM</span></h4>
                                    </div>
                                </a>


                            </div>


                            {/* <!-- Add more cards as needed --> */}
                        </div>
                    </div>

                    {/* <!-- Sessions Available --> */}
                    <div class="col-span-10 row-span-5 bg-[#64B5F6] rounded-[12px] flex flex-col">
                        <div class="bg-[#111A6F] text-[#64B5F6] text-2xl text-center py-2 rounded-t-[12px]">
                            <h3>Sessions available now</h3>
                        </div>

                        <div className=" flex  overflow-x-scroll w-[1200px] ">
                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>

                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>

                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>

                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>

                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>

                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>

                            <div class="flex flex-wrap justify-center items-center p-2">
                                {/* <!-- Repeat for each session card --> */}
                                <div class="bg-[#111A6F] rounded-lg px-1 py-4 m-2 w-48 text-center">
                                    <img src={uicon} alt="" class="mx-auto w-20 mb-4 border-2 border-[#64B5F6] rounded-[100%]" />
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Name : <span>Mentor name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Major : <span>Major name</span></h4>
                                    <h4 class="text-[#111A6F] bg-[#64B5F6] text-md rounded-[5px] px-1 m-2">Status : <span>Major name</span></h4>
                                    <div class="flex justify-center mt-4">
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                        <i class="fa-solid fa-star text-[#64B5F6] mx-1"></i>
                                    </div>
                                </div>
                                {/* <!-- Add more cards as needed --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Assignment --> */}
                    <div class="col-span-10 row-span-4 bg-[#64B5F6] rounded-[12px] flex flex-col">
                        <h3 class="bg-[#111A6F] text-[#64B5F6] text-2xl text-center py-2 rounded-t-[12px]">
                            Assignment
                        </h3>
                        <div class="flex w-[1200px] p-2 overflow-x-scroll">
                            {/* <!-- Repeat for each assignment card --> */}


                            <div className="flex">
                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>


                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>


                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>


                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                                <div class="bg-[#111A6F] rounded-lg p-4 m-2 w-80 text-center">
                                    <h3 class="text-[#111A6F] w-[50%] rounded-[5px] text-xl mb-2 bg-[#64B5F6]">assignment 1</h3>
                                    <p class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6]">details....................................... ...</p>
                                    <div class="flex justify-between items-center mt-2">
                                        <h4 class="text-[#111A6F] rounded-[5px] text-md bg-[#64B5F6] px-4 py-1">Link ........................ </h4>
                                        <button class="text-[#111A6F] rounded-[5px] bg-[#64B5F6] border-0  px-4 py-1 text-md">
                                            Send
                                        </button>
                                    </div>
                                </div>



                            </div>






                            {/* <!-- Add more cards as needed --> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;