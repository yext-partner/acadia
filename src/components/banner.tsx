import * as React from "react";
import Cta from './cta';
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import { Image } from "@yext/pages/components";


interface BannerProps {
  name?: string;
  color?: string;
  photo?: any;
  mainPhone?: string;
}

const Banner = (props: BannerProps) => {
  const { name, color, photo, mainPhone } = props;

  return (
    <>
      <div className="flex justify-center md:justify-end items-center">
        {photo && <Image image={photo}></Image>}
        <div className="absolute md:pr-8 lg:pr-16">
          <div className="hidden md:flex flex-col space-y-4 rounded-lg text-black text-center">
            <div className="text-3xl text-left md:block ">Welcome to</div>
            <div className="font-bold first-letter:text-black text-4xl pb-3 md:block ">{name}</div>
            {(mainPhone && color) && <Cta buttonText={formatPhoneNumber(mainPhone)} url="#appointment" backgroundColor="" backgroundHover={color} fontColor="black" fontHoverColor="white"/>}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 space-y-5 justify-center items-center md:hidden ">
          <div className="text-left text-3xl font-semibold">Welcome to</div>
          <div className="font-bold first-letter:text-black text-4xl pb-3">{name}</div>
          {(mainPhone && color) && <Cta buttonText={formatPhoneNumber(mainPhone)} url="#appointment" backgroundColor="" backgroundHover={color} fontColor="black" fontHoverColor="white" display="text-center"/>}
        </div>
    </>
  );
};

export default Banner;
