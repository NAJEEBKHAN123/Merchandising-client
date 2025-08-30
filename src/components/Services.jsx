import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../constants/servicesData";

const Services = () => {

  useEffect(() =>{
        window.scrollTo(0,0)
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-300 lg:pt-32 py-20">
        <div className="mx-auto px-2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold ">OUR SERVICES</h1>
          <p className="mt-4 text-xl  max-w-3xl mx-auto">
            Comprehensive retail merchandising solutions tailored to your
            business needs
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            {services.map((service, index) => (
             <Link to={`/services/${service.id}`}>
              <div
                key={index}
                className="relative group overflow-hidden  shadow-lg"
              >
                <div className="h-64 lg:h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-auto h-auto cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className=" bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl text-center font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
             </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to transform your retail space?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Contact us today to discuss how our services can benefit your
            business.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
