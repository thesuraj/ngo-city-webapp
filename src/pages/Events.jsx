import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Calendar, MapPin, Users, Clock, Search } from 'lucide-react';
import { events } from '../mock';

const Events = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(events.map(e => e.category))];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getProgressPercentage = (registered, needed) => {
    return (registered / needed) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer Events</h1>
          <p className="text-xl text-emerald-50">Find opportunities to make a difference in your community</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <Input 
                  placeholder="Search events..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className={selectedCategory === category ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={event.status === 'full' ? 'bg-red-500' : 'bg-emerald-500'}
                  >
                    {event.status === 'full' ? 'Full' : 'Open'}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">{event.title}</h3>
                </div>
                <Badge variant="outline" className="w-fit text-emerald-700 border-emerald-300">
                  {event.category}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2 text-emerald-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2 text-emerald-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={16} className="mr-2 text-emerald-600" />
                    {event.location}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="flex items-center text-gray-700">
                      <Users size={16} className="mr-1 text-emerald-600" />
                      Volunteers
                    </span>
                    <span className="font-semibold text-gray-900">
                      {event.volunteersRegistered} / {event.volunteersNeeded}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-600 h-2 rounded-full transition-all"
                      style={{ width: `${getProgressPercentage(event.volunteersRegistered, event.volunteersNeeded)}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => navigate(`/events/${event.id}`)}
                  disabled={event.status === 'full'}
                >
                  {event.status === 'full' ? 'Event Full' : 'View Details'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No events found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
