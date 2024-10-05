

function Log_in() {



    return (
        <>

            <main className="flex flex-col font-semibold md:flex-row">
                {/* Info Section */}

                <section className="info w-full md:w-1/2 bg-[#64B5F6] h-screen flex flex-col items-center justify-center">
                    <div className="container h-4/5  flex flex-col justify-center items-center mt-24 md:mt-0">
                        <h3 className="text-[#111A6F] w-[55%] text-start text-4xl md:text-5xl  mb-8">Log in</h3>

                        <form className="flex flex-col items-center w-full max-w-sm">
                            <label className="mb-3 w-full text-[#111A6F] text-lg">
                                Email
                                <input type="text" className="block w-full h-9 border-2 border-[#111A6F] rounded-lg mt-2 px-3" />
                            </label>
                            <label className="mb-3 w-full text-[#111A6F] text-lg">
                                Password
                                <input type="text" className="block w-full h-9 border-2 border-[#111A6F] rounded-lg mt-2 px-3" />
                            </label>
                            <button className="log-in-btn bg-[#ffffff] border-2 border-[#111A6F] rounded-lg px-5 py-0 text-[#111A6F] text-lg mt-5">
                                Sign up
                            </button>
                        </form>

                        <div className="line-2 w-[80%] h-1 bg-[#111A6F] mt-20"></div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="intro w-full md:w-1/2 bg-[#111A6F] h-screen py-16 flex flex-col justify-around items-center text-center">
                    <div className="intro-text h-1/2 flex flex-col items-center justify-center">
                        <h1 className="text-white text-4xl md:text-6xl">Welcome back .</h1>
                        <p className="text-white text-lg md:text-2xl my-5">
                            You are just a few steps away from <br /> increasing your practical experience.
                        </p>
                    </div>

                    <div className="log-faster flex flex-col items-center justify-center h-1/4">
                        <h5 className="text-white text-xl">Create account faster with ...</h5>
                        <button className="mt-5 bg-[#ffffff] text-[#64B5F6] border-0 rounded-lg px-5 py-0 text-lg flex items-center">
                            <i class="fa-brands fa-google mr-1"></i> Google
                        </button>
                    </div>

                    <div className="log-in-section w-full h-1/4 flex flex-col items-center justify-center">
                        <div className="line w-[80%] h-1 mt-3 bg-[#64B5F6]"></div>
                        <h5 className="text-white text-xl my-5">if you have already an account ..!!!</h5>
                        <button className="log-in-btn bg-[#ffffff] text-[#111A6F] border-[#111A6F] border-2 rounded-lg px-5 py-0 text-lg">
                            Sign up
                        </button>
                    </div>
                </section>
            </main>



        </>
    )
}


export default Log_in;