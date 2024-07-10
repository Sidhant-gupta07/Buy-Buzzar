import React from "react";
import img1 from "../../assets/GalleryImg/img1.jpg"
import img2 from "../../assets/GalleryImg/img2.jpg"
import img3 from "../../assets/GalleryImg/img3.webp"
import img4 from "../../assets/GalleryImg/img4.avif"
import img5 from "../../assets/GalleryImg/img5.jpg"
import img6 from "../../assets/GalleryImg/img6.webp"
const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Deal's with Customer Priority
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            The Buy Buzzar Group is one of India's leading digital e-commerce 
            entities and includes group companies Buy Buzzar, 
            Myntra, Buy Buzzar Wholesale, Buy Buzzar Health + and 
            Cleartrip. The Group is also a majority 
            shareholder in PhonePe, one of the leading 
            Payments Apps in India.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                src={img3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-y-3 transition duration-500">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={img4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
