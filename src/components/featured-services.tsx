import * as React from "react";
import Cta from './cta';

const FeaturedServices = (props: any) => {
    const { name, services, address, phone } = props;
    services.forEach(function (service:any) {
        service.description = service.description.replace("{{name}}", name);
        service.description = service.description.replace("{{address.city}}", address.city);
        service.description = service.description.replace("{{address.region}}", address.region);
        service.description = service.description.replace("{{mainPhone}}", phone);
    });

    const serviceDivs = services.map((service:any) => (
        <div className="grid gap-y-10 border-2 p-8 rounded-xl bg-gray-200 drop-shadow-lg">
            <h3 className="text-2xl font-semibold text-center">{service.name}</h3>
            <div>{service.description}</div>
            <div className="text-center">
                <div className="hover:scale-105">
                    <Cta buttonText="More Information" url={service.slug} color="darkgrey"/>
                </div>
            </div>
        </div>
      ));


      return (
          <>
            <div className="section flex flex-col space-y-10">
                <h2 className="">Featured Services</h2>
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-x-10 px-4">
                    {serviceDivs}
                </div>
            </div>
          </>
        );
      };
  
  export default FeaturedServices;