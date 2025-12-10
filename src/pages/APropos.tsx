import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  Heart,
  Building,
  UserCheck,
  Calendar
} from 'lucide-react';

const APropos = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Augmentation de 35%",
      description: "de l'activité mère-enfant en 6 mois"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "6 sur 7 recommandations",
      description: "réalisées lors de l'assemblée générale"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "2000+ personnes",
      description: "vaccinées contre la COVID-19"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Multiplication par 2",
      description: "des chirurgies majeures"
    }
  ];

  const vision = [
    {
      title: "Pôle Mère-Enfant",
      description: "Développement d'un service d'excellence pour la prise en charge de la mère et de l'enfant",
      icon: <Heart className="h-6 w-6 text-pink-600" />
    },
    {
      title: "Médecine Péri-opératoire",
      description: "Réponse complète aux besoins en traumatologie, urgences chirurgicales et obstétricales",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Maladies Infectieuses",
      description: "Prise en charge spécialisée dans le contexte de la transition épidémiologique",
      icon: <UserCheck className="h-6 w-6 text-green-600" />
    }
  ];

  const timeline = [
    {
      date: "Arrivée du Dr. Romuald",
      title: "Nouvelle Direction",
      description: "Mise en place d'une vision managériale d'excellence"
    },
    {
      date: "Février 2021",
      title: "Première Assemblée Générale",
      description: "Définition de 7 recommandations stratégiques"
    },
    {
      date: "Août 2021",
      title: "Bilan des Performances",
      description: "Réalisation de 6 recommandations sur 7 en 6 mois"
    },
    {
      date: "Aujourd'hui",
      title: "Pôle d'Excellence",
      description: "Reconnaissance comme hôpital de référence"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600">Excellence Managériale</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos de Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'histoire d'une transformation remarquable vers l'excellence hospitalière
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Faire de l'Hôpital de District de Nylon un pôle d'excellence et de référence 
              qui rationalise les procédures, donne de la lisibilité aux actions et optimise 
              l'offre de soins aux populations, tout en conservant une grille tarifaire 
              accessible aux plus démunis.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <Badge className="mb-4 bg-green-600">Leadership</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dr. Romuald Hentchoya HEMO
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Directeur de l'Hôpital de District de Nylon, le Dr. Romuald Hentchoya HEMO 
              a révolutionné la gestion hospitalière en s'éloignant de l'amateurisme 
              traditionnel pour développer une approche managériale moderne et efficace.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <span>Vision stratégique alignée sur les objectifs nationaux</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <span>Coordination exemplaire des équipes médicales</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <span>Amélioration de l'humanisation des soins</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Philosophie de Gestion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                "Une appropriation de la vision du chef de l'État Paul BIYA, mise en œuvre 
                par le ministre de la santé publique, pour transformer notre hôpital en 
                un véritable pôle d'excellence."
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-blue-900">Rationalisation des procédures</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-blue-900">Lisibilité des actions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-blue-900">Optimisation de l'offre de soins</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vision Strategy */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Vision Stratégique
            </h2>
            <p className="text-xl text-gray-600">
              Trois axes prioritaires pour une excellence médicale durable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vision.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets qui témoignent de notre transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre transformation
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <Badge variant="secondary">{event.date}</Badge>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {event.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos services d'excellence et faites partie de notre communauté 
            de soins de qualité accessible à tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/services">Découvrir Nos Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;