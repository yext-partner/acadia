import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Markdown from "markdown-to-jsx";
import * as React from "react";
import { JsonLd } from "react-schemaorg";
import { Dentist } from "schema-dts";
import Banner from "../components/banner";
import Doctors from "../components/doctors";
import FeaturedServices from "../components/featured-services";
import Footer from "../components/footer";
import Header from "../components/header";
import Insurances from "../components/insurances";
import OfferedServices from "../components/offered-services";
import Promo from "../components/promo";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "index-stream",
    filter: {
      entityIds: ["location"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "hours",
      "mainPhone",
      "geocodedCoordinate",
      "logo",
      "photoGallery",
      "insuranceAccepted",
      "websiteUrl",
      "c_primaryColor",
      "c_secondaryColor",
      "c_richTextDescription",
      "c_featuredServices.id",
      "c_featuredServices.name",
      "c_featuredServices.description",
      "c_featuredServices.slug",
      "c_offeredServices.name",
      "c_offeredServices.slug",
      "c_offeredServices.c_subTopics.name",
      "c_offeredServices.c_subTopics.slug",
      "c_relatedDoctors.name",
      "c_relatedDoctors.headshot",
      "c_relatedDoctors.slug",
      "c_promotion",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

//
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `index.html`;
};

//
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
    ],
  };
};

const Index: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    description,
    c_richTextDescription,
    hours,
    mainPhone,
    geocodedCoordinate,
    logo,
    photoGallery,
    insuranceAccepted,
    c_primaryColor,
    c_secondaryColor,
    websiteUrl,
    c_featuredServices,
    c_relatedDoctors,
    c_offeredServices,
    c_promotion,
  } = document;

  return (
    <>
      <body className="font-main">
        <JsonLd<Dentist>
          item={{
            "@context": "https://schema.org",
            "@type": "Dentist",
            name,
            address: address,
            description: description,
            openingHours: hours,
          }}
        />
        <Header site={_site}></Header>
        <Banner
          name={name}
          color={_site.c_secondaryColor}
          photo={photoGallery[0].image.url}
          mainPhone={mainPhone}
        ></Banner>
        {c_promotion && <Promo text={c_promotion}></Promo>}
        <div className="centered-container">
          <Doctors doctors={c_relatedDoctors}></Doctors>
          <FeaturedServices
            name={name}
            services={c_featuredServices}
            address={address}
            phone={mainPhone}
            backgroundColor={_site.c_secondaryColor}
          ></FeaturedServices>
          <OfferedServices
            services={c_offeredServices}
            color={_site.c_secondaryColor}
          ></OfferedServices>
          <Insurances list={insuranceAccepted}></Insurances>
          <div className="section space-y-5">
            <Markdown className="space-y-5">{c_richTextDescription}</Markdown>
          </div>
        </div>
        <Footer site={_site}></Footer>
      </body>
    </>
  );
};

export default Index;
