import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import services from "../constants/servicesData";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  useEffect(() =>{
    window.scrollTo(0,0)
  })

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Service not found</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16 px-6 md:px-8">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-6xl  mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          {service.title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {service.tagline || "Professional solution for your needs"}
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            About this service
          </h2>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>

          {/* Key Points Section */}
          {service.features && service.features.length > 0 && (
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Key Features
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extra description field */}
          {service.extraDescription && (
            <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 mt-6">
              <h3 className="font-semibold text-gray-800 mb-2">More Details</h3>
              <p className="text-gray-700">{service.extraDescription}</p>
            </div>
          )}
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;