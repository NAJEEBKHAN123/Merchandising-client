// components/NotFound.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <AlertTriangle 
              size={80} 
              className="text-yellow-500 mx-auto"
            />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              404
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Page non trouvée
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Désolé, nous n'avons pas pu trouver la page{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
              {location.pathname}
            </code>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm"
          >
            <Home size={20} className="mr-2" />
            Page d'accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Si vous pensez qu'il s'agit d'une erreur,{" "}
            <Link to="/contact" className="text-blue-600 hover:text-blue-500 font-medium">
              contactez-nous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;