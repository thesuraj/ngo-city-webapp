import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Users, Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import { events, addRegistration } from '../mock';
import { useToast } from '../hooks/use-toast';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const event = events.find(e => e.id === id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h2>
          <Button onClick={() => navigate('/events')}>Back to Events</Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Add registration to localStorage
    addRegistration({
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventLocation: event.location,
      ...formData
    });

    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "You've been registered for this event. Check your email for confirmation."
    });
  };

  const getProgressPercentage = (registered, needed) => {
    return (registered / needed) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-4"
            onClick={() => navigate('/events')}
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Events
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={event.status === 'full' ? 'bg-red-500' : 'bg-emerald-500'}>
                    {event.status === 'full' ? 'Full' : 'Open'}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-3">{event.title}</CardTitle>
                    <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                      {event.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Event</h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Calendar size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Date</div>
                      <div className="text-gray-600">{event.date}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Clock size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Time</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <MapPin size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">{event.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Users size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Volunteers</div>
                      <div className="text-gray-600">{event.volunteersRegistered} / {event.volunteersNeeded}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Registration Progress</span>
                    <span className="text-sm text-gray-600">
                      {Math.round(getProgressPercentage(event.volunteersRegistered, event.volunteersNeeded))}% Full
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-emerald-600 h-3 rounded-full transition-all"
                      style={{ width: `${getProgressPercentage(event.volunteersRegistered, event.volunteersNeeded)}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>
                  {isSubmitted ? 'Registration Confirmed!' : 'Register for This Event'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <p className="text-gray-700 mb-6">
                      Thank you for registering! We'll send you a confirmation email with event details.
                    </p>
                    <Button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 mb-3"
                      onClick={() => navigate('/my-volunteering')}
                    >
                      View My Registrations
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate('/events')}
                    >
                      Browse More Events
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Why do you want to volunteer? (Optional)</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Share your motivation..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      disabled={event.status === 'full'}
                    >
                      {event.status === 'full' ? 'Event Full' : 'Register Now'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
