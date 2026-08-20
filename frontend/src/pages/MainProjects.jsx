import { useState } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/main-projects/CTA";
import Cards from "../components/main-projects/Cards";

const MainProjects = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");

  return (
    <div className="w-full bg-white">

      {/* NAVBAR */}
      <Navbar />

       
  <div 
    className=" 
      mx-auto 
      flex 
      h-[343px] 
      w-[1200px] 
      max-w-full 
      flex-col 
      items-center 
      justify-center 
      mt-30 

      max-[767px]:h-auto 
      max-[767px]:w-full
      max-[767px]:px-5 
      max-[767px]:py-16 

      max-[480px]:px-4
      max-[480px]:py-12
    " 
  > 
 
    {/* Main Text */} 
 
    <div 
      className=" 
        flex 
        h-[152px] 
        w-[892px] 
        max-w-full 
        items-center 
        justify-center 
        text-center 
 
        max-[767px]:h-auto 
        max-[767px]:w-full 
      " 
    > 
      <h1 
        className=" 
          w-full 
          font-dm-sans 
          text-[70px] 
          font-bold 
          leading-[76px] 
          tracking-[-0.75px] 
          text-black 
 
          max-[767px]:text-[42px] 
          max-[767px]:leading-[46px] 
          max-[767px]:tracking-[-0.5px] 
 
          max-[480px]:text-[34px] 
          max-[480px]:leading-[38px] 
        " 
      > 
       Explore a Selection of 
 
        <br /> 
       Our Works 
      </h1> 
    </div> 
 
 
    {/* Supporting Text */} 
 
    <div 
      className=" 
        mt-6 
        flex 
        h-[76px] 
        w-[750px] 
        max-w-full 
        items-center 
        justify-center 
        text-center 
        -translate-y-5 
 
        max-[767px]:mt-8 
        max-[767px]:h-auto 
        max-[767px]:w-full 
        max-[767px]:translate-y-0 
      " 
    > 
      <p 
        className=" 
          w-full 
          font-dm-sans 
          text-[18px] 
          font-light 
          leading-[24px] 
          text-black/75 
 
          max-[767px]:text-[16px] 
          max-[767px]:leading-[22px] 
 
          max-[480px]:text-[15px] 
          max-[480px]:leading-[21px] 
        " 
      > 
       Explore how we transform ideas and business challenges into distinctive brands, websites, and digital solutions that help businesses stand out, connect better, and grow. 
      </p> 
    </div> 
 
  </div> 
 
<div 
  className=" 
    mx-auto 
    h-px 
    w-[1360px] 
    max-w-full 
    bg-black/15

    max-[767px]:mx-5
    max-[767px]:w-[calc(100%-40px)]
    max-[480px]:mx-4
    max-[480px]:w-[calc(100%-32px)]
  " 
/> 
 
 
{/* ===================================== 
    INDUSTRY FILTER 
===================================== */} 
 
<div 
  className=" 
    mx-auto 
    flex 
    h-[30px] 
    w-[1280px] 
    max-w-full 
    items-center 
    gap-3 
    px-2 
    mt-3

    max-[767px]:h-auto
    max-[767px]:w-full
    max-[767px]:px-5

    max-[480px]:px-4
  " 
> 
 
  {/* FILTER LABEL */} 
 
  <div 
    className=" 
      flex 
      h-[17px] 
      w-[132px] 
      shrink-0 
      items-center

      max-[767px]:w-auto
    " 
  > 
    <span 
      className=" 
        whitespace-nowrap 
        font-dm-sans 
        text-[10px] 
        font-normal 
        leading-[17px] 
        tracking-[0.8px] 
        text-black/60 
      " 
    > 
      FILTER BY INDUSTRY 
    </span> 
  </div> 
 
 
  {/* FILTER PILLS */} 
 
  <div 
    className=" 
      flex 
      h-[30px] 
      items-center 
      gap-2 
      overflow-x-auto 
      scrollbar-hide
      min-w-0
    " 
  > 

    {[
      "All",
      "F&B/Hospitality",
      "Real Estate",
      "Fitness & Wellness",
      "SaaS/Tech",
      "Healthcare",
      "Marketing",
      "D2C",
      "Fashion & Lifestyle",
      "Finance",
      "Institute",
    ].map((industry) => {
      const isActive = activeIndustry === industry;

      return (
        <button
          key={industry}
          onClick={() => setActiveIndustry(industry)}
          className={`
            flex
            h-[30px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            px-4
            font-dm-sans
            text-[11px]
            font-normal
            transition-colors
            duration-200

            ${
              isActive
                ? "border-black bg-black text-white"
                : "border-black/10 bg-white text-black/80"
            }
          `}
        >
          {industry}
        </button>
      );
    })}

  </div> 
 
</div> 

<div
  className="
    mx-auto
    grid
    w-full
    max-w-[1280px]
    grid-cols-1
    gap-x-5
    gap-y-12
    sm:grid-cols-2
    lg:grid-cols-3
    mt-20

    px-5

    max-[480px]:px-4
    max-[767px]:mt-12
    max-[480px]:mt-10

    lg:px-0
  "
>
  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130549/cottson.png"
    heading="Cottson Clothing: Custom Corporate Clothing"
    points={[
      "Fashion & Lifestyle",
      "Branding",
      "Website",
      "Client Portal"
    ]}
  />

  

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130566/nora.png"
    heading="Nora: Yoga & Pilates Studio"
    points={[
      "Fitness & Wellness",
      "Branding",
    ]}
  />

  
  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130578/umraj.png"
    heading="Umaraj: Ethic Men’s Wear"
    points={[
      "Fashion & Lifestyle",
      "Branding",
      "Website",
    ]}
  />

  
  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130590/p3.png"
    heading="Nitty Gritty Labz: Marketing Agency"
    points={[
      "Marketing",
      "Website",
     
    ]}
  />

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130601/p4.png"
    heading="Facilities Tours & Travels Pvt. Ltd."
    points={[
      "Travel",
      "Website",
      "CRM",
    ]}
  />

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130615/p5.png"
    heading="Coffee Theory"
    points={[
      "F&B/Hospitality",
      "Branding",
    
    ]}
  />

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130626/p6.png"
    heading="DataCircles: CRM & Invoicing Software"
    points={[
      "SaaS/Tech",
      "Branding",
      
    ]}
  />

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130637/p7.png"
    heading="Little Scholars"
    points={[
      "Institute",
      "Website",
      "Development",
    ]}
  />

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130647/p8.png"
    heading="Bacoola"
    points={[
      "Fashion & Lifestyle",
      "Branding",
      "E-Commerce Website",
      
    ]}
  />

  <Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130658/p9.png"
    heading="Dentora: Dental Clinic"
    points={[
      "Healthcare",
      "Branding",
      "Website",
      
    ]}
  />

  
<Cards
    image="https://res.cloudinary.com/ioempbte/image/upload/v1787130668/p10.png"
    heading="Palmore: Beachside Resort"
     points={[
      "F&B/Hospitality",
      "Branding",
      "Website & Landing Page"
     
    ]}
  />
   
 
</div> 
  
      {/* MAIN PROJECTS CONTENT */}  
      <main>  
        {/* Your projects sections will go here */}  
      </main>  
  
      {/* CTA */}  
      <CTA />  
  
      {/* FOOTER */}  
      <Footer />  
  
    </div>  
  );  
};  
  
export default MainProjects;