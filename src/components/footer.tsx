import * as React from "react";
import { formatPhoneNumber } from 'react-phone-number-input';
import Markdown from 'markdown-to-jsx';

var currentTime = new Date()
var year = currentTime.getFullYear()

const Footer = (props:any) => {
  const { site } = props;
  const name = site.name 
  const footer = site.c_footer;
  const address = site.c_relatedFacility[0].address;
  const mainPhone = site.c_relatedFacility[0].mainPhone; 
  const services = site.c_relatedFacility[0].c_offeredServices;
  const primaryColor = site.c_primaryColor;
  const secondaryColor = site.c_secondaryColor;
  const accessibility = site.c_accessibilityDescription;

  const footerLinks = footer.map((link:any) => (
    <div>
      <a key="uRL" href={link.uRL} className="text-black no-underline hover:underline">
        {link.label}
      </a>
    </div>
  ));

  services.sort();
  const serviceDivs = services.map((service:any) => (
    <a className="text-black text-lg no-underline hover:underline" href={service.slug}>{service.name}</a>
  ));

  var localizedAccessibility = accessibility;
  localizedAccessibility = localizedAccessibility.replaceAll("{{name}}", name);
  localizedAccessibility = localizedAccessibility.replaceAll("{{address.city}}", address.city);
  localizedAccessibility = localizedAccessibility.replaceAll("{{address.region}}", address.region);
  localizedAccessibility = localizedAccessibility.replaceAll("{{mainPhone}}", formatPhoneNumber(mainPhone));

  return (
    <>
      <div className="bg-stone-300">
        <div className="centered-container pt-5">
          <footer className="space-y-5 ">
            <div id="Row 1 - Services" className="section space-y-5">
              <div className="text-2xl font-bold">Services We Offer</div>
              <div className="grid grid-cols-4 gap-y-2">
                {serviceDivs}
              </div>
            </div>
            <div className="section grid grid-cols-3">
              <div id="Row 2 - Address" className="space-y-2">
                <div className="text-xl font-bold">{name}</div>
                <div>
                  <p>{address.line1}</p>
                  <p>{address.line2}</p>
                  <p>{address.city}, {address.region}</p>
                </div>
              </div>
              <div id="Row 2 - Phone" className="text-xl font-bold">
                {formatPhoneNumber(mainPhone)}
              </div>
              <div id="Row 2 - Social" className="space-y-2">
                <div className="text-xl font-bold">Social Media</div>
                <div>
                  <span className="inline-flex  w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
                    <a className="text-black hover:text-blue-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-black hover:text-blue-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-black hover:text-blue-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="text-black hover:text-blue-500">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="section py-5 leading-8">
              <Markdown>{localizedAccessibility}</Markdown>
            </div>
            <div className="flex flex-col flex-wrap justify-center text-center p-5 gap-y-10 md:flex-col">
              <div className="flex justify-center space-x-5 underline">{footerLinks}</div>
            </div>
            <div className="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
              <div className="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
                <p className="mx-auto text-sm text-center text-black sm:text-left "> © {year} </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
