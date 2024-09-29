import { headerLogo } from "../assets/icons";
import { NavLinks } from "../constant";
import { hamburger } from "../assets/icons";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className=" bg-gray-200  padding-x   py-8   w-full ">
        <nav className=" flex justify-between items-center max-container">
          <Link to="/">
            <img src={headerLogo} alt="logo" />
          </Link>

          <ul className="flex-1  flex justify-center items-center  gap-16 max-lg:hidden font-poppins text-dark-black">
            {NavLinks.map((item) => (
              <li key={item.label} >
                {/* <Link
                  to={item.href}
                  className="font-poppins leading-normal text-dark-black"
                >
                  {item.label}
                </Link> */}
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
