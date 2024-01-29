import { NavLink } from "react-router-dom";
import Container from "./Container";
import { Accessibility, Euro, Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#0F172A] border-t border-slate-600 py-10">
      <Container>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-white text-nowrap">
              Event <span className="text-[#07C1FB]">360</span>
            </h2>
          </div>
          <div>
            <h3 className="text-xl text-white pb-5">Product</h3>

            <ul className="text-[#E2E8F0] space-y-5">
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white pb-5">Solutions</h3>

            <ul className="text-[#E2E8F0] space-y-5">
              <li>Brainstorming</li>
              <li>Ideation</li>
              <li>Wireframing</li>
              <li>Research</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white pb-5">Resources</h3>

            <ul className="text-[#E2E8F0] space-y-5">
              <li>Help Center</li>
              <li>Blog</li>
              <li>Tutorials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white pb-5">Support</h3>

            <ul className="text-[#E2E8F0] space-y-5">
              <li>Contact Us</li>
              <li>Developers</li>
              <li>Documentation</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white pb-5">Company</h3>

            <ul className="text-[#E2E8F0] space-y-5">
              <li>About</li>
              <li>Press</li>
              <li>Events</li>
              <li>Request Demo</li>
            </ul>
          </div>
        </div>

{/* Footer bottom */}

        <div className="border-t border-slate-500 pt-8 mt-9 md:flex justify-between ">
           <div>
            <p className="text-white"> @ 2024. All rights reserved.</p>
           </div>
           <div className="text-white pt-5 md:pt-0 flex gap-8">

            <NavLink to="/">Terms</NavLink>
            <NavLink to="/">Privacy</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink className='flex gap-2' to="/"> <Globe/> EN</NavLink>
            <NavLink className='flex gap-2' to="/"> <Euro/> EUR</NavLink>
            <NavLink className='flex gap-2' to="/"> <Accessibility/> </NavLink>
           </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
