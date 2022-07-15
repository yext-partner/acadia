import * as React from "react";
import Cta from './cta';

const OfferedServices = (props: any) => {
    const { services } = props;

    services.sort();

    const serviceDivs = (services) => {
        return (
          <ul className="grid grid-cols-4 gap-y-7">
            {services.map((service) => (
              <li>
                <div className="font-semibold text-lg">{service.name}</div>
                <ul>
                  {service.c_subTopics && service.c_subTopics.length
                    ? service.c_subTopics.map((topic) => (
                        <li className="text-cyan-700">
                          <a href={topic.slug} className="hover:underline">{topic.name}</a>
                        </li>
                      ))
                    : null}
                </ul>
              </li>
            ))}
          </ul>
        );
      };


      return (
          <>
            <div className="section flex flex-col space-y-10">
                <h2 className="">Dental Services Offered</h2>
                <div className="">
                    {serviceDivs(services)}
                </div>
            </div>
          </>
        );
      };
  
  export default OfferedServices;