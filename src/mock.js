// Mock data for NGO/Charity website

export const events = [
  {
    id: '1',
    title: 'Community Food Drive',
    description: 'Help us collect and distribute food to families in need. Join our monthly food drive and make a difference in your community.',
    date: '2025-09-15',
    time: '09:00 AM - 02:00 PM',
    location: 'Community Center, Downtown',
    image: 'https://images.unsplash.com/photo-1608535002897-27b2aa592456',
    volunteersNeeded: 25,
    volunteersRegistered: 18,
    category: 'Food & Nutrition',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Environmental Cleanup Drive',
    description: 'Join us for a city-wide environmental cleanup. Help keep our streets, parks, and waterways clean and beautiful.',
    date: '2025-09-20',
    time: '08:00 AM - 12:00 PM',
    location: 'Central Park',
    image: 'https://images.unsplash.com/photo-1758599668337-58bfa42683ce',
    volunteersNeeded: 40,
    volunteersRegistered: 32,
    category: 'Environment',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Education Support Program',
    description: 'Volunteer as a tutor to help underprivileged children with their studies. Make education accessible to all.',
    date: '2025-09-25',
    time: '03:00 PM - 06:00 PM',
    location: 'Learning Center, East Side',
    image: 'https://images.unsplash.com/photo-1615897570286-da936a5dfb81',
    volunteersNeeded: 15,
    volunteersRegistered: 12,
    category: 'Education',
    status: 'upcoming'
  },
  {
    id: '4',
    title: 'Medical Supply Distribution',
    description: 'Assist in organizing and distributing essential medical supplies to remote communities.',
    date: '2025-10-05',
    time: '10:00 AM - 04:00 PM',
    location: 'Health Center, West District',
    image: 'https://images.pexels.com/photos/9037596/pexels-photo-9037596.jpeg',
    volunteersNeeded: 20,
    volunteersRegistered: 8,
    category: 'Healthcare',
    status: 'upcoming'
  },
  {
    id: '5',
    title: 'Clothing Donation Drive',
    description: 'Help us collect, sort, and distribute clothing to families in need. Every contribution makes a difference.',
    date: '2025-10-10',
    time: '09:00 AM - 03:00 PM',
    location: 'Community Hall, North Area',
    image: 'https://images.unsplash.com/photo-1593113616828-6f22bca04804',
    volunteersNeeded: 30,
    volunteersRegistered: 15,
    category: 'Community Support',
    status: 'upcoming'
  },
  {
    id: '6',
    title: 'Senior Care Visit',
    description: 'Spend quality time with seniors at local care homes. Bring joy and companionship to those who need it most.',
    date: '2025-10-12',
    time: '02:00 PM - 05:00 PM',
    location: 'Sunshine Senior Home',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    volunteersNeeded: 10,
    volunteersRegistered: 10,
    category: 'Elder Care',
    status: 'full'
  }
];

export const stats = [
  { label: 'Active Volunteers', value: '2,500+' },
  { label: 'Events Completed', value: '150+' },
  { label: 'Lives Impacted', value: '10,000+' },
  { label: 'Communities Served', value: '25+' }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Regular Volunteer',
    text: 'Being part of this organization has been incredibly rewarding. I\'ve met amazing people and made a real difference in my community.',
    avatar: 'SJ'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Event Coordinator',
    text: 'The impact we create together is phenomenal. Every event brings new opportunities to help those in need.',
    avatar: 'MC'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Youth Volunteer',
    text: 'This organization taught me the value of giving back. It\'s not just about volunteering, it\'s about building a better future.',
    avatar: 'ER'
  }
];

// Store volunteer registrations in localStorage
export const getMyRegistrations = () => {
  const stored = localStorage.getItem('volunteerRegistrations');
  return stored ? JSON.parse(stored) : [];
};

export const addRegistration = (registration) => {
  const registrations = getMyRegistrations();
  const newRegistration = {
    ...registration,
    id: Date.now().toString(),
    registeredAt: new Date().toISOString()
  };
  registrations.push(newRegistration);
  localStorage.setItem('volunteerRegistrations', JSON.stringify(registrations));
  return newRegistration;
};

export const removeRegistration = (eventId) => {
  const registrations = getMyRegistrations();
  const filtered = registrations.filter(r => r.eventId !== eventId);
  localStorage.setItem('volunteerRegistrations', JSON.stringify(filtered));
};
