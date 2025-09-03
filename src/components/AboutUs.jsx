import React from "react";
import { 
  Users, 
  Target, 
  Award, 
  BarChart3, 
  Globe, 
  Shield,
  Heart,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 md:top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-2xl md:blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-20 md:top-40 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-2xl md:blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 md:bottom-20 left-8 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-700 rounded-full mix-blend-overlay filter blur-2xl md:blur-3xl opacity-30 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-16 md:pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            We Transform Retail Spaces
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Leading the merchandising industry with innovation, precision, and excellence for over a decade
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 md:p-6">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">250+</h3>
              <p className="text-sm md:text-base text-gray-600">Dedicated Team Members</p>
            </div>
            <div className="p-4 md:p-6">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Globe className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">1.2k+</h3>
              <p className="text-sm md:text-base text-gray-600">Stores Nationwide</p>
            </div>
            <div className="p-4 md:p-6">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Award className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">15+</h3>
              <p className="text-sm md:text-base text-gray-600">Industry Awards</p>
            </div>
            <div className="p-4 md:p-6">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <BarChart3 className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">98%</h3>
              <p className="text-sm md:text-base text-gray-600">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl md:rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-white shadow-lg md:shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our Work" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Our Story</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Founded in 2010, MSCO began with a simple mission: to revolutionize retail merchandising through innovative strategies and flawless execution. What started as a small team of passionate experts has grown into a industry leader serving major retailers across the nation.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Our journey has been guided by core values of integrity, excellence, and client success. We believe that exceptional merchandising isn't just about product placement—it's about creating immersive shopping experiences that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm md:text-base font-medium">Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm md:text-base font-medium">Innovation Focus</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm md:text-base font-medium">Client First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Target className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Excellence in Execution</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We don't just meet expectations—we exceed them. Every planogram, display, and merchandising solution is executed with precision and attention to detail.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Heart className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Client Partnership</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Your success is our success. We work collaboratively with our clients, becoming an extension of your team and invested in achieving your business goals.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Shield className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Integrity & Trust</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We build relationships on a foundation of honesty and transparency. Our clients trust us to represent their brands with the same care they would.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Retail Space?</h2>
          <p className="text-lg md:text-xl max-w-2xl md:max-w-3xl mx-auto mb-8 md:mb-10">
            Let's discuss how our merchandising expertise can elevate your brand and drive sales
          </p>
          <div className="flex flex-col sm:flex-row  gap-4">
            <Link to='/contact' className="bg-white text-blue-700 cursor-pointer font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
              Schedule a Consultation
            </Link>
            <Link to='/services' className="border-2 border-white cursor-pointer text-white font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-700 text-sm md:text-base">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;