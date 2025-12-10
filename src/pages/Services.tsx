import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Baby, 
  Activity, 
  Shield, 
  Stethoscope,
  Users,
  Clock,
  Award,
  Microscope,
  Ambulance
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Baby className="h-12 w-12 text-pink-600" />,
      title: "Pôle Mère-Enfant",
      description: "Service spécialisé dans la prise en charge de la mère et de l'enfant",
      features: [
        "Consultations prénatales",
        "Accouchements (150/mois)",
        "Soins néonataux",
        "Suivi post-natal",
        "Planification familiale"
      ],
      stats: "150 accouchements/mois",
      color: "pink"
    },
    {
      icon: <Activity className="h-12 w-12 text-red-600" />,
      title: "Médecine Péri-opératoire",
      description: "Prise en charge complète des urgences chirurgicales et traumatologiques",
      features: [
        "Traumatologie",
        "Urgences chirurgicales",
        "Chirurgie obstétricale",
        "Anesthésie-réanimation",
        "Soins post-opératoires"
      ],
      stats: "Chirurgies x2 en 6 mois",
      color: "red"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Maladies Infectieuses",
      description: "Spécialisation dans la prise en charge des maladies infectieuses",
      features: [
        "Diagnostic infectieux",
        "Traitement spécialisé",
        "Riposte COVID-19",
        "Vaccination",
        "Prévention et contrôle"
      ],
      stats: "2000+ personnes vaccinées",
      color: "blue"
    },
    {
      icon: <Heart className="h-12 w-12 text-purple-600" />,
      title: "Cardiologie",
      description: "Service de cardiologie avec équipement moderne",
      features: [
        "Consultations cardiologiques",
        "ECG et échographie cardiaque",
        "Hospitalisation cardiologique",
        "Suivi des pathologies cardiaques",
        "Urgences cardiovasculaires"
      ],
      stats: "28 hospitalisations/38",
      color: "purple"
    }
  ];

  const additionalServices = [
    {
      icon: <Stethoscope className="h-8 w-8 text-green-600" />,
      title: "Médecine Générale",
      description: "Consultations et soins de médecine générale"
    },
    {
      icon: <Microscope className="h-8 w-8 text-indigo-600" />,
      title: "Laboratoire",
      description: "Analyses médicales et examens biologiques"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Service Haut Standing",
      description: "Hospitalisation de confort avec 37 hospitalisations"
    },
    {
      icon: <Ambulance className="h-8 w-8 text-red-600" />,
      title: "Urgences 24h/24",
      description: "Service d'urgence permanent"
    },
    {
      icon: <Activity className="h-8 w-8 text-teal-600" />,
      title: "Radiologie",
      description: "Imagerie médicale et radiologie"
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: "Pharmacie",
      description: "Pharmacie hospitalière et médicaments"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: "border-pink-200 bg-pink-50",
      red: "border-red-200 bg-red-50",
      blue: "border-blue-200 bg-blue-50",
      purple: "border-purple-200 bg-purple-50"
    };
    return colorMap[color as keyof typeof colorMap] || "border-gray-200 bg-gray-50";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600">Excellence Médicale</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un plateau technique moderne et une équipe qualifiée pour une prise en charge complète
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Trois Axes Prioritaires
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${getColorClasses(service.color)}`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2 w-fit mx-auto">
                    {service.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-60"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Services Complémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Nos Performances</h2>
            <p className="text-blue-100 text-lg">
              Des résultats qui témoignent de notre excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+35%</div>
              <div className="text-blue-200">Augmentation activité mère-enfant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6/7</div>
              <div className="text-blue-200">Recommandations réalisées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">x2</div>
              <div className="text-blue-200">Chirurgies majeures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">72%</div>
              <div className="text-blue-200">Couverture vaccinale personnel</div>
            </div>
          </div>
        </div>

        {/* Quality Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-green-600">Démarche Qualité</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Approche Qualité
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              L'Hôpital de District de Nylon s'engage dans une démarche qualité continue 
              pour améliorer l'humanisation des soins et optimiser l'offre de services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <span>Protocoles standardisés sur tous les services</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <span>Formation continue du personnel</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <span>Amélioration continue des processus</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">Tarification Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Malgré un plateau technique proche des hôpitaux généraux et des CHU, 
                nous maintenons une grille tarifaire accessible aux plus démunis.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span>Consultation générale</span>
                  <span className="font-semibold">Tarif social</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span>Accouchement</span>
                  <span className="font-semibold">Tarif accessible</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span>Urgences</span>
                  <span className="font-semibold">24h/24</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;