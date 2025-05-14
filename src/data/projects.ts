export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'web' | 'mobile';
  image: string;
  tags: string[];
  techDetails?: {
    stack: string[];
    libraries: string[];
    architecture?: string;
    features: string[];
    documentation?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'web-1',
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with product catalog, shopping cart, and checkout functionality.',
    type: 'web',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    techDetails: {
      stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      libraries: ['Material-UI', 'Stripe API', 'JWT Authentication', 'Socket.io'],
      architecture: 'MERN Stack with RESTful API',
      features: ['User authentication', 'Product search & filtering', 'Shopping cart', 'Order management', 'Payment integration'],
      documentation: 'https://github.com/username/ecommerce-platform'
    }
  },
  {
    id: 'web-2',
    title: 'Task Management Dashboard',
    description: 'A collaborative task management tool with drag-and-drop interface, task assignments, and progress tracking.',
    type: 'web',
    image: 'https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'Firebase'],
    techDetails: {
      stack: ['React', 'TypeScript', 'Firebase', 'Cloud Functions'],
      libraries: ['React DnD', 'Chart.js', 'Tailwind CSS', 'React Query'],
      architecture: 'Client-side rendering with Firebase backend',
      features: ['Kanban board', 'Team collaboration', 'Real-time updates', 'Data visualization'],
      documentation: 'https://github.com/username/task-dashboard'
    }
  },
  {
    id: 'web-3',
    title: 'Weather Application',
    description: 'A weather forecast application with location search, detailed forecasts, and interactive visualizations.',
    type: 'web',
    image: 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Open Weather API', 'D3.js'],
    techDetails: {
      stack: ['React', 'JavaScript', 'Weather API', 'D3.js'],
      libraries: ['Axios', 'Moment.js', 'Recharts', 'Geolocation API'],
      architecture: 'Single Page Application',
      features: ['7-day forecast', 'Location search', 'Data visualization', 'Responsive design'],
      documentation: 'https://github.com/username/weather-app'
    }
  },
  {
    id: 'web-4',
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media platforms with performance metrics and audience insights.',
    type: 'web',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Vue.js', 'Chart.js', 'Social APIs'],
    techDetails: {
      stack: ['Vue.js', 'Vuex', 'Node.js', 'Social Media APIs'],
      libraries: ['Chart.js', 'Vue Router', 'Axios', 'Moment.js'],
      architecture: 'Vue.js with Vuex state management',
      features: ['Multi-platform analytics', 'Data export', 'Customizable widgets', 'Scheduled reports'],
      documentation: 'https://github.com/username/social-dashboard'
    }
  },
  {
    id: 'web-5',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and professional information.',
    type: 'web',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    techDetails: {
      stack: ['React', 'Tailwind CSS', 'JavaScript'],
      libraries: ['Framer Motion', 'React Router', 'EmailJS'],
      architecture: 'React Single Page Application',
      features: ['Project showcase', 'Responsive design', 'Contact form', 'Animations'],
      documentation: 'https://github.com/username/portfolio'
    }
  },
  {
    id: 'mobile-1',
    title: 'Fitness Tracker App',
    description: 'A mobile app for tracking workouts, setting fitness goals, and monitoring progress.',
    type: 'mobile',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Redux', 'HealthKit/Google Fit'],
    techDetails: {
      stack: ['React Native', 'Redux', 'TypeScript', 'Firebase'],
      libraries: ['React Navigation', 'Redux Toolkit', 'Victory Native', 'AsyncStorage'],
      architecture: 'Cross-platform mobile app with Redux state management',
      features: ['Workout tracking', 'Progress charts', 'Goal setting', 'Health API integration'],
      documentation: 'https://github.com/username/fitness-app'
    }
  },
  {
    id: 'mobile-2',
    title: 'Restaurant Finder App',
    description: 'A location-based app for discovering restaurants with reviews, menus, and reservations.',
    type: 'mobile',
    image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Google Maps API', 'Yelp API'],
    techDetails: {
      stack: ['React Native', 'JavaScript', 'Node.js', 'MongoDB'],
      libraries: ['React Navigation', 'Expo Location', 'Google Maps SDK', 'Yelp Fusion API'],
      architecture: 'Expo-based React Native application',
      features: ['Restaurant search', 'Reviews & ratings', 'Online reservations', 'Favorite restaurants'],
      documentation: 'https://github.com/username/restaurant-finder'
    }
  },
  {
    id: 'mobile-3',
    title: 'Language Learning App',
    description: 'An interactive language learning app with lessons, quizzes, and speech recognition.',
    type: 'mobile',
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Flutter', 'Dart', 'Firebase'],
    techDetails: {
      stack: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions'],
      libraries: ['Provider', 'Speech Recognition API', 'Firebase Auth', 'Cloud Firestore'],
      architecture: 'Flutter app with BLoC pattern',
      features: ['Interactive lessons', 'Speech recognition', 'Progress tracking', 'Offline mode'],
      documentation: 'https://github.com/username/language-learning-app'
    }
  }
];

export const skillCategories = [
  {
    category: 'Desenvolvimento Web',
    skills: [
      { name: 'React.js', level: 90 , className:"bg-gradient-to-r from-indigo-500 to-indigo-100"},
      { name: 'Nextjs.js', level: 85 , className:"bg-gradient-to-r from-green-50 to-stone-400"},
      { name: 'Spring Boot', level:60 , className:"bg-gradient-to-r from-green-500 to-emerald-500"},
      { name: 'Laravel', level:70, className:"bg-gradient-to-r from-red-500 to-red-300"}
    ]
  },
  {
    category: 'Desenvolvimento Dispositivos Móveis',
    skills: [
      { name: 'React Native', level: 90 , className:"bg-gradient-to-r from-indigo-500 to-blue-500"},
      // { name: 'Flutter', level: 80, className:"bg-gradient-to-r from-purple-500 to-green-500" },
      // { name: 'iOS Development', level: 70, className:"bg-gradient-to-r from-purple-500 to-green-500" },
      { name: 'Android Development', level: 65 , className:"bg-gradient-to-r from-green-500 to-emerald-500"},
      { name: 'Mobile UI/UX', level: 85, className:"bg-gradient-to-r from-red-500 to-yellow-500" },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 , className:"bg-gradient-to-r from-purple-500 to-green-500"},
      { name: 'Express', level: 85 , className:"bg-gradient-to-r from-purple-500 to-green-500"},
      { name: 'MongoDB', level: 80 , className:"bg-gradient-to-r from-purple-500 to-green-500"},
      { name: 'Firebase', level: 90 , className:"bg-gradient-to-r from-purple-500 to-green-500"},
      { name: 'GraphQL', level: 75 , className:"bg-gradient-to-r from-purple-500 to-green-500"},
      { name: 'REST APIs', level: 90 , className:"bg-gradient-to-r from-purple-500 to-green-500"},
    ]
  }
];

                          // activeCategory === 0 
                          //   ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                          //   : activeCategory === 1 
                          //     ? 'bg-gradient-to-r from-green-500 to-green-600'
                          //     : 'bg-gradient-to-r from-purple-500 to-green-500'