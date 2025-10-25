import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Heart, Users, Calendar, Target, ArrowRight } from 'lucide-react';
import { stats, testimonials } from '../mock';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1758599668429-121d54188b9c)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-teal-900/80 to-emerald-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Together We Create <span className="text-emerald-300">Lasting Change</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Join our community of volunteers making a real difference in people's lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg"
              onClick={() => navigate('/events')}
            >
              Browse Events <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              onClick={() => navigate('/my-volunteering')}
            >
              My Volunteering
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering communities through meaningful volunteer work and creating opportunities for positive social change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Compassion', desc: 'Caring for those in need with empathy and kindness' },
              { icon: Users, title: 'Community', desc: 'Building stronger communities together' },
              { icon: Calendar, title: 'Commitment', desc: 'Dedicated to consistent, impactful action' },
              { icon: Target, title: 'Impact', desc: 'Creating measurable, lasting change' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-emerald-100">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Stories</h2>
            <p className="text-xl text-gray-600">Hear from our amazing community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow border-emerald-100">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 bg-emerald-600 text-white">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of volunteers who are creating positive change in their communities
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            onClick={() => navigate('/events')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
