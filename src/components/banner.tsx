import * as React from "react";
import Cta from './cta';

type Banner = {
  name?: string;
  secondaryColor: string;
  photo: string;
  mainPhone: string;
};


const Banner = (props: Banner) => {
  const { name, secondaryColor, photo, mainPhone } = props;

  return (
    <>
      <div
        className="hero text-5xl font-bold text-white p-10 flex items-center justify-center flex-row space-x-20 w-full drop-shadow-md bg-left" style={{ backgroundImage: `url(${photo})` }}>
          
        <div className="flex-col space-y-10 text-center">
          <div>{name}</div>
        </div>
        <div className="w-2/5 flex items-center justify-center flex-col space-y-4 rounded-lg text-3xl text-black">
          <div className="text-left">Welcome to</div>
          <div className="text-black text-3xl">{name}</div>
          <Cta buttonText="Make an Appointment" url="#appointment" color={secondaryColor}/>
          <div>or call</div>
          <Cta buttonText={mainPhone} url="#appointment" color={secondaryColor}/>
        </div>
      </div>
    </>
  );
};

export default Banner;
