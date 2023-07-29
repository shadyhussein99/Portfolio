// Title of portfolio

function Title() {
    return <header className=" mt-20 md:flex md:justify-center md:items-end" id="title">

        <section className="flex justify-center">
            <img className=" rounded-full w-40 md:h-48" src="/pics/personal.jpg" alt="personal-pic" />
        </section>

        <section className="text-center mt-8 md:pl-12 md:text-left">
            <p>Hi, my name is</p>
            <h1 className=" text-heading text-2xl font-semibold py-3 md:text-3xl">Shady Hussein</h1>
            <p>I'm a frontend web developer at <span className="text-heading font-semibold">Blue Sun Automation</span></p>
            <em><p className="font-semibold mt-6 mb-8">You can find a sample of my work on Github</p></em>
            <a href="/pdf-files/Shady-Hussein-Frontend-Resume.pdf" download className=" bg-white text-black px-8 py-3 rounded-full hover:bg-heading transition ease-out duration-300">Download CV</a>
        </section>

    </header>
}

export default Title