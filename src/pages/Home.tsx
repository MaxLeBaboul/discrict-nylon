import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  Stethoscope,
  Baby,
  Activity,
  Shield
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Baby className="h-8 w-8 text-blue-600" />,
      title: "Pôle Mère-Enfant",
      description: "Soins spécialisés pour la mère et l'enfant avec 150 accouchements par mois"
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "Médecine Péri-opératoire",
      description: "Traumatologie, urgences chirurgicales et obstétricales"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Maladies Infectieuses",
      description: "Prise en charge spécialisée incluant la riposte COVID-19"
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "Cardiologie",
      description: "Service de cardiologie avec 28 hospitalisations sur 38"
    }
  ];

  const stats = [
    { number: "150", label: "Accouchements/mois", icon: <Baby className="h-6 w-6" /> },
    { number: "2000+", label: "Personnes vaccinées", icon: <Shield className="h-6 w-6" /> },
    { number: "72%", label: "Couverture vaccinale", icon: <Activity className="h-6 w-6" /> },
    { number: "24/7", label: "Service d'urgence", icon: <Clock className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
              Pôle d'Excellence et de Référence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hôpital de District de Nylon
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Soins de qualité, équipements modernes et personnel dévoué au service de votre santé à Douala, Cameroun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Urgences 24h/24
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/services" className="flex items-center">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Nos Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services d'Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois axes prioritaires pour une prise en charge complète et de qualité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600">Excellence Managériale</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Une Vision d'Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Sous la direction du Dr. Romuald Hentchoya HEMO, l'Hôpital de District de Nylon 
                s'est transformé en un pôle d'excellence qui rationalise les procédures, 
                donne de la lisibilité aux actions et optimise l'offre de soins aux populations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span>Plateau technique proche des hôpitaux généraux</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <span>Grille tarifaire accessible aux plus démunis</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-blue-600 mr-3" />
                  <span>Humanisation des soins et démarche qualité</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/a-propos">En savoir plus</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performances Récentes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold">Augmentation de 35%</p>
                  <p className="text-gray-600">de l'activité mère-enfant</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold">6 sur 7 recommandations</p>
                  <p className="text-gray-600">réalisées en 6 mois</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-semibold">Multiplication par 2</p>
                  <p className="text-gray-600">des chirurgies majeures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin de Soins Médicaux ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Notre équipe est disponible 24h/24 pour vos urgences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Appeler Maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;