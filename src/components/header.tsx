import * as React from "react";
import Cta from "../components/cta";
import { Image } from "@yext/pages/components";


export interface HeaderProps {
  _site?: any;
}

const Header = (props: HeaderProps) => {

  const { _site } = props;
  const name = _site.name 
  const address = _site.c_relatedFacility[0].address;
  const logo = _site.logo.image;
  const primaryColor = _site.c_primaryColor;
  const secondaryColor = _site.c_secondaryColor;


  return (
    <>
      <div style={{ background: primaryColor ? primaryColor: '#000000' }}>
        <div className="centered-container">
          <nav className="py-6 flex items-center justify-between text-white">
            <div className="flex items-center space-x-5">
              {logo && <a className="hover:no-underline" href="/"><Image image={logo} layout="fixed" width={120} height={120}></Image></a>}
              <a className="link hidden md:block hover:no-underline" href="/about-your-dentist">About Your Dentist</a>
              <a className="link hidden md:block hover:no-underline" href="/payment-options">Payment Options</a>
              <a className="link hidden md:block hover:no-underline" href="/new-patients">New Patients</a>
            </div>
            {address && 
            <div className="hidden sm:block">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.city}, {address.region}</p>
            </div>}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
