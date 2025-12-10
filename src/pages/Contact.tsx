import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Users,
  Stethoscope
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    toast.success('Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adresse",
      details: ["BP: 5484 Douala", "Quartier Nylon"],
      description: "Facilement accessible depuis le centre-ville"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Téléphone",
      details: ["+237 672 03 53 01", "+237 621 00 05 34"],
      description: "Disponible 24h/24 pour les urgences"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      details: ["contact@hopitaldiscrictnylon.com", "info@hopitaldiscrictnylon.com"],
      description: "Réponse sous 24h en moyenne"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Horaires",
      details: ["Urgences: 24h/24", "Consultations: 7h-17h"],
      description: "Service d'urgence permanent"
    }
  ];

  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      title: "Consultations Générales",
      description: "Médecine générale et spécialisée",
      horaires: "Lun-Ven: 7h-17h, Sam: 8h-12h"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Urgences",
      description: "Service d'urgence 24h/24",
      horaires: "24h/24 - 7j/7"
    },
    {
      icon: <Building className="h-8 w-8 text-purple-600" />,
      title: "Hospitalisation",
      description: "Services d'hospitalisation complète",
      horaires: "Admissions: 24h/24"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="font-medium text-gray-900">
                      {detail}
                    </p>
                  ))}
                </div>
                <CardDescription>{info.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+237 6XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <Label htmlFor="sujet">Sujet *</Label>
                  <Input
                    id="sujet"
                    name="sujet"
                    type="text"
                    required
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande en détail..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Services Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Informations Pratiques</CardTitle>
                <CardDescription>
                  Horaires et services disponibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <p className="text-sm text-blue-600 font-medium">
                          {service.horaires}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Urgences Médicales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-4">
                  En cas d'urgence médicale, contactez-nous immédiatement ou rendez-vous 
                  directement à notre service d'urgence ouvert 24h/24.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler les Urgences
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 mb-4">
                  L'hôpital est situé dans le quartier Nylon à Douala, facilement accessible 
                  par les transports en commun et avec un parking disponible.
                </p>
                <div className="space-y-2 text-sm text-green-700">
                  <p><strong>Repères:</strong> Près du marché de Nylon</p>
                  <p><strong>Transport:</strong> Taxi, bus urbain</p>
                  <p><strong>Parking:</strong> Gratuit pour les patients</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;