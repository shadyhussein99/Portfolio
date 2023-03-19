// Form section in portfolio

function Form() {
    return <div className="mt-28">

        <h3 className="text-xl text-heading text-center"> I would like to hear from you !</h3>

        <form className="mt-12" action="mailto:shadyhussein99@gmail.com">

            <div>

                <div className="mt-10 flex justify-center">
                    <label className="">Name:</label>
                    <input className="rounded-lg ml-4 w-64 col-span-2" type="text" />
                </div>

                <div className="mt-10 flex justify-center">
                    <label className="">Email:</label>
                    <input className="rounded-lg ml-4 w-64" type="email" />
                </div>

                <div className="mt-10 flex justify-center">
                    <label className="block">Message:</label>
                    <textarea className=" rounded-lg ml-2 w-64 h-60" rows="10" cols="40" />
                </div>

                <div className="flex justify-center">
                    <input className=" cursor-pointer w-64 bg-white mt-10 rounded-full py-2 text-black relative left-10 hover:bg-heading" type="submit" />
                </div>

            </div>

        </form>
    </div>
}

export default Form