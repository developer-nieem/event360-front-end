import { NavLink } from "react-router-dom";
import Container from "./Container";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [responsive, setResponsive] = useState(false);

  const menuItem = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/admin">Dashboard</NavLink>
    </>
  );

  return (
    <div className="bg-[#02011B] py-6">
      <Container>
        <nav className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white text-nowrap">
              Event <span className="text-[#07C1FB]">360</span>
            </h2>
          </div>

          <div
            className={cn(`space-x-4 text-white hidden md:block `)}
          >
            {menuItem}
          </div>

          {/* responsive menu */}

          <div className="text-white md:hidden">
            <Menu onClick={() => setResponsive(!responsive)} />

           <div className={cn("hidden" , {"block":responsive})}>
           <div className="absolute flex flex-col bg-[#02011B] p-5 rounded-md right-0 top-20 gap-3 z-[9999] ">
            {menuItem}
            </div>
           </div>
          </div>

        </nav>

       
      </Container>
    </div>
  );
};

export default Navbar;
