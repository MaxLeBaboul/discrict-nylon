import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ExternalLink } from 'lucide-react';

const Actualites = () => {
  const articles = [
    {
      id: 1,
      title: "L'excellence managériale du Dr. Romuald",
      excerpt: "Loin de l'amateurisme qui caractérise généralement la gestion des hôpitaux publics, l'Hôpital de District de Nylon développe une gestion qui rationalise les procédures...",
      date: "2024-01-15",
      author: "Cameroun Express",
      category: "Management",
      content: `Loin de l'amateurisme qui caractérise généralement la gestion des hôpitaux publics, l'Hôpital de District de Nylon, grâce à la maitrise managériale du Dr. Romuald Hentchoya HEMO, développe une gestion qui rationalise les procédures, donne de la lisibilité aux actions et optimalise l'offre de soins aux populations.

Depuis son arrivée à la tête de l'Hôpital de District de Nylon, le Dr. Romuald Hentchoya HEMO affiche un bilan très élogieux. Grace à lui, cette formation hospitalière est devenue un pôle d'excellence qui assume sa mission d'hôpital de référence avec un plateau technique proche de celui des hôpitaux généraux et des Centres Hospitaliers Universitaires, mais qui conserve une grille tarifaire accessible aux plus démunis.

Il est aujourd'hui admis et reconnu de tous que depuis l'arrivée du Dr. Romuald Hentchoya HEMO à la tête de l'hôpital de district de Nylon, l'organisation des services et la bonne coordination des équipes participent pleinement à l'amélioration de l'humanisation des soins et à la mise en place de la démarche qualité.

Sa vision qui est une appropriation de la vision du chef de l'Etat Paul BIYA et mis en œuvre par le ministre de la santé publique, se résume à faire de l'Hôpital de District de Nylon un pôle d'excellence et de référence qui se décline en trois axes prioritaires :

• Le développement du pôle de la mère et enfant
• Le développement de la médecine péri-opératoire comme réponse à tous les besoins de santé en termes de traumatologie, d'urgence chirurgicale et obstétricale
• Le développement de la prise en charge des maladies infectieuses à une époque où la pandémie de la Covid-19 est dans sa deuxième transition épidémiologique`,
      source: "https://camerounexpress.net/hopital-de-district-de-nylon-lexcellence-manageriale-du-dr-romuald/"
    },
    {
      id: 2,
      title: "Le directeur se réjouit de ses performances",
      excerpt: "Six mois après la première Assemblée générale, la direction de l'hôpital de district de Nylon a réussi à réaliser six sur sept recommandations fixées...",
      date: "2021-08-25",
      author: "Echo Santé",
      category: "Performances",
      content: `Six mois après la première Assemblée générale, organisée le 24 février dernier, la direction de l'hôpital de district de Nylon a réussi à réaliser six sur sept recommandations fixées au cours de cette rencontre.

Environ 150 accouchements par mois, 28 hospitalisations sur 38 en cardiologie, 37 hospitalisations en service haut standing pour seulement 2 décès au cours de ces 6 derniers mois, hausse de nouvelles hospitalisations, multiplication par deux des chirurgies majeures. Les chiffres sont éloquents.

Les performances de l'Hôpital de district de Nylon se sont nettement améliorées au cours des six derniers mois. Lors de la deuxième Assemblée générale de cette formation sanitaire, mercredi 25 août 2021, la direction a présenté au personnel, les performances de leur structure depuis l'arrivée du nouveau directeur général et du nouveau système managérial mis en place.

Le Dr Romuald Hentchoya, médecin en chef et directeur de l'hôpital de district de Nylon s'est réjoui des avancées enregistrées au cours de ces derniers mois. Les recommandations formulées lors de la dernière Assemblée générale ont été réalisées à plus de 90%.

Réalisations principales :
• Mise sur pied de protocoles sur l'ensemble des services
• Réactivation du dialogue sur la répartition des primes
• Mise en place d'un nouvel organigramme
• Création d'une plateforme de dialogue avec la communauté
• Création du bureau de la communication et de la participation communautaire
• Organisation de la semaine de l'unité avec des échanges fructueux

L'état actuel de la riposte à la Covid-19 indique plus de 2000 personnes vaccinées, un taux de couverture vaccinale du personnel de 72% pour la 1ère dose, des formations sur le renforcement de l'hygiène hospitalière et la mise en œuvre de la politique "wash".`,
      source: "https://echosante.info/hopital-district-de-nylon-le-directeur-se-rejouit-de-ses-performances/"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Actualités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez les dernières nouvelles et performances de l'Hôpital de District de Nylon
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                <CardDescription className="text-base">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <a 
                    href={article.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Source
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Articles */}
        <div className="space-y-12">
          {articles.map((article) => (
            <article key={`detail-${article.id}`} className="bg-white rounded-lg shadow-lg p-8">
              <header className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-600">{article.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <div className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{article.author}</span>
                  <a 
                    href={article.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Lire l'article complet
                  </a>
                </div>
              </header>
              
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('•')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('•'));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            {item.substring(2)}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actualites;