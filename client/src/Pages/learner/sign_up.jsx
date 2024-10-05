

function Sign_up() {



    return (
        <>

            <main className="flex font-semibold">

                <section className="intro w-1/2 bg-[#111A6F] h-screen flex flex-col justify-around items-center text-center">
                    <div className="intro-text h-1/2 flex flex-col items-center justify-center">
                        <h1 className="text-white text-[100px]">Hello .</h1>
                        <p className="text-white font-normal text-3xl my-5">You are just a few steps away from <br /> increasing your practical experience.</p>
                    </div>

                    <div className="log-faster flex flex-col items-center justify-center h-1/4">
                        <h5 className="text-white text-xl">Create account faster with ...</h5>
                        <button className="mt-5 bg-[#ffffff] text-[#64B5F6] border-0 rounded-lg px-5 py-0 text-lg">
                            <i className="fab fa-google mr-2"></i> Google
                        </button>
                    </div>

                    <div className="log-in-section h-1/4 w-full flex flex-col items-center justify-center">
                        <div className="line w-[80%] h-1 bg-[#64B5F6]"></div>
                        <h5 className="text-white text-xl my-5">if you have already an account ..!!!</h5>
                        <button className="log-in-btn bg-[#ffffff] text-[#111A6F] border-[#111A6F] border-2 rounded-lg px-5 py-0 text-lg">
                            Log in
                        </button>
                    </div>
                </section>

                <section className="info w-1/2 bg-[#64B5F6] h-screen flex flex-col items-center justify-center">
                    <div className="container h-4/5 flex flex-col items-center">
                        <div className="up h-1/6 flex justify-center items-center w-full">
                            <h3 className=" text-start text-[#111A6F] text-5xl w-[70%] mb-6">Sign up</h3>
                        </div>

                        <div className="down h-5/6 w-full">
                            <form className="flex flex-col items-center">
                                <label className="mb-3 text-[#111A6F] text-lg">
                                    User name
                                    <input type="text" className="block w-96 h-9 border-2 border-[#111A6F] rounded-lg mt-2 px-3" />
                                </label>
                                <label className="mb-3 text-[#111A6F] text-lg">
                                    Email
                                    <input type="text" className="block w-96 h-9 border-2 border-[#111A6F] rounded-lg mt-2 px-3" />
                                </label>
                                <label className="mb-3 text-[#111A6F] text-lg">
                                    Password
                                    <input type="text" className="block w-96 h-9 border-2 border-[#111A6F] rounded-lg mt-2 px-3" />
                                </label>
                                <label className="mb-3 text-[#111A6F] text-lg">
                                    Confirm Password
                                    <input type="text" className="block w-96 h-9 border-2 border-[#111A6F] rounded-lg mt-2 px-3" />
                                </label>
                                <button className="log-in-btn bg-[#ffffff] text-[#111A6F] border-[#111A6F] border-2 rounded-lg px-5 py-0 text-lg mt-5">
                                    Sign up
                                </button>

                                <div className="line-2 w-[80%] h-1 bg-[#111A6F] mt-9"></div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}


export default Sign_up;