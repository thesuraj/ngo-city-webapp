import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Trash2, ArrowLeft } from 'lucide-react';
import { getMyRegistrations, removeRegistration } from '../mock';
import { useToast } from '../hooks/use-toast';

const MyVolunteering = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = () => {
    const myRegs = getMyRegistrations();
    setRegistrations(myRegs);
  };

  const handleCancelRegistration = (eventId, eventTitle) => {
    if (window.confirm(`Are you sure you want to cancel your registration for "${eventTitle}"?`)) {
      removeRegistration(eventId);
      loadRegistrations();
      toast({
        title: "Registration Cancelled",
        description: "Your registration has been cancelled successfully."
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Volunteering</h1>
          <p className="text-xl text-emerald-50">Track your volunteer activities and commitments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {registrations.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Registrations Yet</h3>
                <p className="text-gray-600 mb-8">
                  You haven't registered for any events yet. Browse our upcoming events and start making a difference!
                </p>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => navigate('/events')}
                >
                  Browse Events
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Upcoming Events</h2>
              <p className="text-gray-600">You're registered for {registrations.length} event{registrations.length !== 1 ? 's' : ''}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrations.map((registration) => (
                <Card key={registration.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl flex-1">{registration.eventTitle}</CardTitle>
                      <Badge className="bg-emerald-500">Registered</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar size={16} className="mr-2 text-emerald-600" />
                        {registration.eventDate}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin size={16} className="mr-2 text-emerald-600" />
                        {registration.eventLocation}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Your Information</h4>
                      <div className="text-sm space-y-1">
                        <p className="text-gray-700"><span className="font-medium">Name:</span> {registration.name}</p>
                        <p className="text-gray-700"><span className="font-medium">Email:</span> {registration.email}</p>
                        <p className="text-gray-700"><span className="font-medium">Phone:</span> {registration.phone}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        className="flex-1"
                        onClick={() => navigate(`/events/${registration.eventId}`)}
                      >
                        View Event
                      </Button>
                      <Button 
                        variant="destructive"
                        size="icon"
                        onClick={() => handleCancelRegistration(registration.eventId, registration.eventTitle)}
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVolunteering;
