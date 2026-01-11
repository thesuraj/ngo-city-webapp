import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Calendar, Award } from 'lucide-react';
import { oldPlaces, religiousPlaces, famousPersonalities } from '../mockHistory';

const Personalities = () => {
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
            Legacy <span className="text-amber-300">Makers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Celebrating the individuals who shaped our city's history
          </p>
        </div>
      </section>

      {/* Old Places Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Famous Personalities</h2>
            <p className="text-xl text-gray-600">Knows about the stars from land of 5 Rivers</p>
          </div>
        </div>
      </section> */}

     

      {/* Famous Personalities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legacy Makers</h2>
            <p className="text-xl text-gray-600">Celebrating the individuals who shaped our city's history</p>
          </div> */}

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

    </div>
  );
};

export default Personalities;
