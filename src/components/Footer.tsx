import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Hôpital de District de Nylon</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Un pôle d'excellence et de référence offrant des soins de qualité 
              avec un plateau technique moderne et une grille tarifaire accessible.
            </p>
            <p className="text-sm text-gray-400">
              Sous la direction du Dr. Romuald Hentchoya HEMO
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/actualites" className="text-gray-300 hover:text-white transition-colors">Actualités</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">BP: 5484 Douala</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <div className="text-gray-300">
                  <p>+237 672 03 53 01</p>
                  <p>+237 621 00 05 34</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <div className="text-gray-300">
                  <p>contact@hopitaldiscrictnylon.com</p>
                  <p>info@hopitaldiscrictnylon.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-blue-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>24h/24 - 7j/7</p>
                  <p className="text-sm">Urgences</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Hôpital de District de Nylon. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;