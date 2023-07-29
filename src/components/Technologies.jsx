// Technologies section in portfolio

import React from "react"

function Technologies() {
    return <section className="mt-24 md:mt-40" id="technologies">

        <h3 className="text-center text-xl font-semibold text-heading px-8 md:text-2xl">Here are some technologies I like working with:</h3>

        <section className="grid grid-cols-3 px-16 items-end md:grid-cols-4 md:mx-16 lg:mx-48 xl:mx-80">
            <img className=" w-20 technologies-img md:w-24" src="/pics/react.png" alt="React-img" />                  
            <img className=" w-20 technologies-img md:w-24" src="/pics/javascript.svg" alt="JavaScript-img" />
            <img className=" w-20 technologies-img md:w-24" src="/pics/typescript.png" alt="TypeScript-img" />
            <img className=" w-24 technologies-img md:w-28" src="/pics/redux.png" alt="R-imgedux" />
            <img className=" w-24 technologies-img md:w-28" src="/pics/css3.svg" alt="CSS3-img" />
            <img className=" w-20 technologies-img md:w-24" src="/pics/html5.svg" alt="HTML5-img" />               
            <img className=" w-20 technologies-img md:w-24" src="/pics/tailwind.svg" alt="Tailwind-img" /> 
            <img className=" w-16 technologies-img md:w-20 pb-2" src="/pics/bootstrap.svg" alt="Bootstrap-img" />
            <img className=" w-20 technologies-img md:w-24" src="/pics/sass2.svg" alt="Sass-img" />
            <img className=" w-20 technologies-img md:w-24" src="/pics/git.svg" alt="Git-img" />               
        </section>
    </section>
}

export default Technologies