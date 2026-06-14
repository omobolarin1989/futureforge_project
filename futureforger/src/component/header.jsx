

function Header() {


    return(
        <div className="nav flex justify-between items-center lg:py-1 pt-7 pb-15 ">
         <div>   
            <a href="" className=""><img src="\src\images\image 8.png" alt="logo" className="lg:w-[245%] w-[244px]"/></a>
         </div>
        
        <navbar className="">
        <a href="" className="lg:hidden md:hidden sm:block"><img src="\src\images\Frame 2147226499.png" className="lg:w-[80%] w-[100%]"/></a>
        
        <ul className="flex hidden lg:flex lg:justify-center text-white lg:w-[420px] gap-[70px] lg:px-[4px]">

            <li>
                <a href="" className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">About</a>
            </li>

            <li>
                <a href="./" className="lg:text-[15px] font-[400] leading-[100%] tracking-[1%] hover:font-[700]">Tracks</a>
            </li>

            <li>
                <a href="./" className="lg:text-[15px] lg:font-[400] leading-[100%] tracking-[1%] lg:hover:font-[700]">Facilitators</a>
            </li>
        </ul>
        </navbar>

        <div className="header-button text-white  lg:flex hidden gap-[16px] ">
            <button className="lms border border-[#404040] lg:py-[9px] lg:w-[135px] font-[700]  rounded-3xl bg-transparent hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">Access LMS</button>
            <button className=" text-[16px] px-[24px] next-cohort  border border-[#404040] lg-[178px] py-2.5 font-[700] rounded-3xl hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">Join Next Cohort</button>
        </div>
        </div>
    )
}

export default Header