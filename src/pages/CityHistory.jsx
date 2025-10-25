import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Calendar, Award } from 'lucide-react';
import { oldPlaces, religiousPlaces, famousPersonalities } from '../mockHistory';

const CityHistory = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600941393513-a5224603246a)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/85 via-orange-900/75 to-amber-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            City <span className="text-amber-300">Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Discover the rich history, culture, and legacy of our city
          </p>
        </div>
      </section>

      {/* Old Places Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historical Places</h2>
            <p className="text-xl text-gray-600">Explore the architectural marvels that stand the test of time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oldPlaces.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">
                      {place.era}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{place.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <MapPin size={16} className="mr-2 text-amber-600" />
                      {place.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2 text-amber-600" />
                      Built: {place.yearBuilt}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 italic">{place.historicalSignificance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Religious Places Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Sites</h2>
            <p className="text-xl text-gray-600">Places of worship that reflect our spiritual heritage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religiousPlaces.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-600 text-white">
                      {place.religion}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{place.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <MapPin size={16} className="mr-2 text-emerald-600" />
                      {place.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2 text-emerald-600" />
                      Established: {place.established}
                    </div>
                  </div>

                  {place.features && place.features.length > 0 && (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {place.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Personalities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legacy Makers</h2>
            <p className="text-xl text-gray-600">Celebrating the individuals who shaped our city's history</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {famousPersonalities.map((person) => (
              <Card key={person.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                        <span className="text-4xl font-bold text-amber-800">{person.initials}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{person.name}</h3>
                        <div className="flex items-center gap-2 text-amber-600">
                          <Award size={18} />
                          <span className="font-semibold">{person.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{person.period}</p>
                      </div>

                      <p className="text-gray-700 mb-4">{person.description}</p>

                      <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Key Contributions:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {person.contributions.map((contribution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-amber-600 mr-2">•</span>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {person.legacy && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 italic">
                            <span className="font-semibold text-gray-900">Legacy:</span> {person.legacy}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historical Timeline</h2>
            <p className="text-xl text-gray-600">Key moments that shaped our city</p>
          </div>

          <div className="space-y-8">
            {[
              { year: '1200s', event: 'Foundation of the city by ancient settlers', description: 'The city was established as a trading hub' },
              { year: '1500s', event: 'Construction of major religious monuments', description: 'Era of spiritual and architectural development' },
              { year: '1800s', event: 'Colonial period and modernization', description: 'Introduction of modern infrastructure and institutions' },
              { year: '1947', event: 'Independence and new beginning', description: 'City played crucial role in independence movement' },
              { year: '2000s', event: 'Heritage conservation initiatives', description: 'Major efforts to preserve historical sites and culture' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-amber-600 text-white flex items-center justify-center">
                        <span className="text-sm font-bold text-center leading-tight">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityHistory;
