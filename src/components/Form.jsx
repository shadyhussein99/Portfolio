// Form section in portfolio

import React from "react"

function Form() {
    return <section className="mt-28 md:mt-32">

        <h3 className="text-xl font-semibold text-heading text-center md:text-2xl"> I would like to hear from you !</h3>

        <form className="mt-12 md:mt-16" action="mailto:shadyhussein99@gmail.com" method="post">

            <section>
                <section className="mt-10 grid grid-cols-2 ">
                    <label className="col-span-1 text-right mr-28 ">Name:</label>
                    <input className="col-span-1 text-black rounded-lg -ml-20 pl-2 w-64" type="text" />
                </section>

                <section className="mt-10 grid grid-cols-2 ">
                    <label className="col-span-1 text-right mr-28 ">Email:</label>
                    <input className="col-span-1 text-black rounded-lg -ml-20 pl-2 w-64" type="email" />
                </section>

                <section className="mt-10 grid grid-cols-2 ">
                    <label className="col-span-1 text-right mr-28 ">Message:</label>
                    <textarea className=" col-span-1 text-black rounded-lg -ml-20 pl-2 w-64 h-60" rows="10" cols="40" />
                </section>

                <section className=" flex justify-center">
                    <button className=" w-64 bg-white mt-10 rounded-full py-2 text-black relative left-10 hover:bg-heading transition ease-out duration-300" type="submit">Submit</button>
                </section>
            </section>

        </form>
    </section>
}

export default Form