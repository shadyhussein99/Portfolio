// Technologies section in portfolio

function Technologies() {
    return <div className="mt-24">

        <h3 className="text-center text-xl text-heading px-8">Here are some technologies I like working with:</h3>

        <div className="grid grid-cols-3 px-16 items-end ">
            <img className=" w-20 technologies-img" src="../public/pics/react.png" alt="React" />
            <img className=" w-20 technologies-img" src="../public/pics/javascript.svg" alt="JavaScript" />
            <img className=" w-24 technologies-img" src="../public/pics/css3.svg" alt="CSS3" />
            <img className=" w-20 technologies-img" src="../public/pics/html5.svg" alt="HTML5" />    
            <img className=" w-20 technologies-img" src="../public/pics/material-ui.svg" alt="Material-UI" />
            <img className=" w-20 technologies-img" src="../public/pics/tailwind.svg" alt="Tailwind" />
            <img className=" w-16 technologies-img" src="../public/pics/bootstrap.svg" alt="Bootstrap" />
        </div>
    </div>
}

export default Technologies