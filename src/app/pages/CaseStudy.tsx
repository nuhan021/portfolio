import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';

// Case study data - you can move this to a separate data file later
const caseStudies: Record<string, any> = {
  'joint-p2p': {
    title: 'Joint P2P',
    tagline: 'Decentralized Exchange & Instant Swap',
    year: '2023',
    role: 'Lead Flutter Developer',
    platforms: ['iOS', 'Android'],
    accentColor: '#589B8F',
    heroImage: '/images/Gemini_Generated_Image_a20ohna20ohna20o.png',
    stats: [
      { label: 'Downloads', value: '50K+' },
      { label: 'App Rating', value: '4.8/5' },
      { label: 'Countries', value: '120+' },
      { label: 'Daily Users', value: '12K+' }
    ],
    overview: [
      'Joint P2P is a revolutionary decentralized cryptocurrency exchange that enables users to trade digital assets directly with each other without intermediaries. Built for the modern crypto trader, it combines the security of blockchain technology with the ease of traditional fintech applications.',
      'As the lead Flutter developer, I architected and built the entire mobile application from the ground up, focusing on real-time transaction processing, secure wallet integration, and an intuitive user experience that makes cryptocurrency trading accessible to everyone.',
      'The application handles complex Web3 interactions while maintaining a simple, elegant interface that has attracted over 50,000 users across 120+ countries.'
    ],
    techStack: {
      'Architecture': 'Clean Architecture with feature-based modularization',
      'State Management': 'Riverpod 2.0 for dependency injection and state',
      'Web3 Integration': 'Web3dart for Ethereum blockchain interaction',
      'Backend': 'Firebase for user authentication and real-time notifications',
      'Local Storage': 'Hive for encrypted local wallet data',
      'API': 'REST + WebSocket for real-time price updates',
      'Testing': 'Unit, Widget, and Integration tests with 85% coverage'
    },
    features: [
      {
        title: 'Real-Time Trading',
        description: 'WebSocket-powered live price feeds with sub-second updates. Implemented custom stream management to handle 100+ simultaneous price streams without memory leaks.',
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
        technical: 'Built custom StreamController pooling system to efficiently manage WebSocket connections'
      },
      {
        title: 'Secure Wallet Integration',
        description: 'Multi-signature wallet support with biometric authentication. Integrated WalletConnect protocol for seamless connection to hardware wallets.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
        technical: 'Implemented AES-256 encryption for private key storage using platform channels'
      },
      {
        title: 'P2P Order Matching',
        description: 'Sophisticated order book UI with real-time matching algorithm visualization. Users can see their orders being matched in real-time with smooth animations.',
        image: 'https://images.unsplash.com/photo-1622986819498-60765a6e52c0?w=800',
        technical: 'Custom AnimatedList implementation with hero animations for order transitions'
      },
      {
        title: 'Transaction History',
        description: 'Comprehensive transaction tracking with blockchain explorer integration. One-tap transaction verification directly on the blockchain.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
        technical: 'Implemented pagination with infinite scroll using Riverpod AsyncNotifier'
      }
    ],
    challenges: [
      {
        title: 'Real-Time Data Synchronization',
        problem: 'Managing 100+ WebSocket connections for price feeds caused memory issues and battery drain.',
        solution: 'Implemented a connection pooling system that reuses WebSocket connections and intelligently throttles updates based on screen visibility. Reduced memory usage by 60% and improved battery life by 40%.',
        code: `class WebSocketPool {
  final Map<String, StreamController> _controllers = {};
  
  Stream<PriceUpdate> subscribe(String symbol) {
    return _controllers.putIfAbsent(
      symbol,
      () => _createController(symbol)
    ).stream;
  }
}`
      },
      {
        title: 'Blockchain Transaction Speed',
        problem: 'Ethereum transactions could take minutes to confirm, creating poor UX.',
        solution: 'Built optimistic UI updates with transaction pending states, integrated push notifications for confirmations, and implemented gas price estimation to help users get faster confirmations.',
        code: `// Optimistic transaction handling
await ref.read(transactionProvider.notifier)
  .submitTransaction(tx, optimistic: true);
  
// Show immediate feedback
showSuccessSnackbar('Transaction submitted');`
      },
      {
        title: 'Cross-Platform Biometric Auth',
        problem: 'iOS and Android have different biometric authentication APIs and behaviors.',
        solution: 'Created abstraction layer using Method Channels that provides unified API while handling platform-specific edge cases (FaceID failures, fingerprint fallbacks, etc.).',
        code: null
      }
    ],
    process: {
      timeline: '6 months from concept to launch',
      team: 'Solo developer with 2 backend engineers',
      methodology: 'Agile with 2-week sprints',
      testing: 'Comprehensive test suite: 200+ unit tests, 50+ widget tests, 20+ integration tests',
      cicd: 'GitHub Actions for automated testing and deployment to TestFlight/Play Store internal testing'
    },
    results: {
      metrics: [
        'Achieved 50,000+ downloads in first 6 months',
        '4.8/5 average rating on both app stores',
        '99.8% crash-free rate (Firebase Crashlytics)',
        'Average session duration: 8.5 minutes',
        'Daily active users: 12,000+',
        'Transaction success rate: 99.2%'
      ],
      testimonial: {
        quote: 'The mobile app exceeded all our expectations. The attention to performance and user experience is exceptional. Our users constantly praise how smooth and intuitive the trading experience is.',
        author: 'Michael Chen',
        role: 'CEO, Joint P2P'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600',
      'https://images.unsplash.com/photo-1622986819498-60765a6e52c0?w=600',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600'
    ],
    learnings: [
      'Deep dive into Web3 technology and blockchain fundamentals transformed my understanding of decentralized systems.',
      'Managing real-time data at scale requires careful architecture decisions early in the project.',
      'User trust is paramount in fintech - comprehensive error handling and transparent transaction states are non-negotiable.',
      'Performance optimization is an ongoing process, not a one-time task.'
    ],
    links: {
      figma: 'https://figma.com',
      playStore: 'https://play.google.com/store',
      github: 'https://github.com'
    }
  },
  'bitnob': {
    title: 'Bitnob',
    tagline: 'Bitcoin Utility & Fintech UI',
    year: '2023',
    role: 'Senior Flutter Developer',
    platforms: ['iOS', 'Android'],
    accentColor: '#4C4EA8',
    heroImage: 'https://images.unsplash.com/photo-1614787913638-65ff1dacc76e?w=1080',
    stats: [
      { label: 'Downloads', value: '100K+' },
      { label: 'App Rating', value: '4.9/5' },
      { label: 'Countries', value: '45+' },
      { label: 'Transactions', value: '$50M+' }
    ],
    overview: [
      'Bitnob is a Bitcoin-first fintech platform that makes cryptocurrency accessible to everyone in emerging markets. The app enables users to buy, sell, send, and spend Bitcoin with the same ease as traditional banking apps.',
      'I led the mobile development effort, implementing complex financial workflows, real-time Bitcoin price tracking, and seamless integration with payment processors across multiple countries.',
      'The application processes over $50M in transactions annually and has become a trusted platform for Bitcoin adoption in Africa.'
    ],
    // Add more fields similar to joint-p2p...
  },
  'qasah': {
    title: 'Qasah',
    tagline: 'Business Intelligence & Mobile UX Dashboards',
    year: '2024',
    role: 'Lead Mobile Developer',
    platforms: ['iOS'],
    accentColor: '#F69101',
    heroImage: 'https://images.unsplash.com/photo-1644143153646-f36282dfb953?w=1080',
    stats: [
      { label: 'Enterprise Users', value: '5K+' },
      { label: 'App Rating', value: '4.7/5' },
      { label: 'Data Points', value: '10M+' },
      { label: 'Dashboards', value: '500+' }
    ],
    overview: [
      'Qasah transforms complex business data into beautiful, actionable mobile dashboards. Built for executives and analysts who need real-time insights on the go.',
      'As lead mobile developer, I designed and implemented a highly customizable dashboard system that renders complex charts and data visualizations with exceptional performance.',
      'The application handles millions of data points while maintaining 60fps scrolling and sub-second chart rendering times.'
    ],
    // Add more fields...
  },
  'sippd-coffee': {
    title: 'Sippd Coffee',
    tagline: 'Premium Coffee Ordering & Delivery Experience',
    year: '2024',
    role: 'Lead Mobile Developer',
    platforms: ['iOS'],
    accentColor: '#F59E0B',
    heroImage: 'https://cdn.dribbble.com/userupload/46089271/file/7bb8ba4ff1d23533c60b22c955719a69.png?resize=752x&vertical=center',
    stats: [
      { label: 'Downloads', value: '10K+' },
      { label: 'App Rating', value: '4.9/5' },
      { label: 'Active Users', value: '2K+' },
      { label: 'Orders', value: '50K+' }
    ],
    overview: [
      'Sippd Coffee is a premium coffee ordering and delivery app designed to provide coffee lovers with the ultimate convenience. It features a seamless user experience for browsing menus, customizing drinks, and tracking orders in real-time.',
      'As the lead mobile developer, I focused on creating a fluid and responsive iOS application that handles complex order permutations and integrates sophisticated location-based services for precise delivery tracking.',
      'The app bridges the gap between artisanal coffee shops and digital convenience, ensuring every cup arrives exactly as intended.'
    ],
    techStack: {
      'Framework': 'Flutter',
      'Platform': 'iOS',
      'Features': 'Real-time Tracking, Geolocation, Payment Integration',
      'State Management': 'BLoC / Cubit',
      'Architecture': 'Clean Architecture'
    },
    features: [
      {
        title: 'Smart Menu Customization',
        description: 'Intuitive interface for customizing complex drink orders, from milk types to syrup shots and temperature preferences.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
        technical: 'Complex state management handling thousands of product variant combinations'
      },
      {
        title: 'Real-Time Order Tracking',
        description: 'Live map view showing the exact location of the delivery partner, with status updates from brewing to doorstep.',
        image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800',
        technical: 'WebSocket integration for live location updates and map polyline rendering'
      }
    ],
    challenges: [
      {
        title: 'Complex Order Modifiers',
        problem: 'Coffee customizable options create exponential complexity in order validation and pricing.',
        solution: 'Implemented a recursive composite pattern for product modifiers, allowing for infinite levels of customization while maintaining performant price calculations.',
        code: `class OrderModifier {
  final String id;
  final double price;
  final List<OrderModifier> subModifiers;

  double calculateTotal() {
    return price + subModifiers.fold(0, (sum, mod) => sum + mod.calculateTotal());
  }
}`
      }
    ],
    results: {
      metrics: [
        '10,000+ Downloads in first month',
        '4.9/5 App Store Rating',
        '95% Order Completion Rate',
        '15 mins Average Delivery Time'
      ],
      testimonial: {
        quote: 'Sippd Coffee has transformed how our customers order. The app is incredibly smooth and the tracking is spot on.',
        author: 'Sarah Jenkins',
        role: 'Operations Manager'
      }
    },
    links: {
      appStore: 'https://apps.apple.com/sg/app/sippd-coffee/id6752921147'
    }
  },
  'relaks-media': {
    title: 'Relaks Media',
    tagline: 'Comprehensive Media Streaming & Entertainment Platform',
    year: '2023',
    role: 'Lead Flutter Developer',
    platforms: ['Android'],
    accentColor: '#8B5CF6',
    heroImage: 'https://cdn.dribbble.com/userupload/43999464/file/original-f4edefb228235953cca2e2f15e1abf38.jpg?resize=752x&vertical=center',
    stats: [
      { label: 'Downloads', value: '50K+' },
      { label: 'Content', value: '10K+ Hrs' },
      { label: 'Rating', value: '4.5/5' },
      { label: 'Users', value: '25K+' }
    ],
    overview: [
      'Relaks Media is a one-stop entertainment hub offering a vast library of movies, series, and live TV channels. The platform focuses on delivering high-quality streaming experience with minimal buffering, even on low-bandwidth networks.',
      'I architected the media player engine to support adaptive bitrate streaming and built a robust caching system for offline viewing. The UI is designed for immersion, featuring dark mode by default and smooth transitions.',
      'The app has successfully engaged a large user base by providing a seamless entertainment experience across a wide range of Android devices.'
    ],
    techStack: {
      'Framework': 'Flutter',
      'Video Player': 'Chewie & Video Player',
      'State Management': 'Provider',
      'Backend': 'Firebase & Custom APIs',
      'Caching': 'Dio & Hive'
    },
    features: [
      {
        title: 'Adaptive Streaming',
        description: 'Smart video player that adjusts quality based on network conditions to ensure uninterrupted playback.',
        image: 'https://cdn.dribbble.com/userupload/43999464/file/original-f4edefb228235953cca2e2f15e1abf38.jpg?resize=752x&vertical=center',
        technical: 'HLS (HTTP Live Streaming) integration with custom buffer management logic'
      },
      {
        title: 'Offline Downloads',
        description: 'Secure encrypted download system allowing users to watch content without an internet connection.',
        image: 'https://cdn.dribbble.com/userupload/43999464/file/original-f4edefb228235953cca2e2f15e1abf38.jpg?resize=752x&vertical=center',
        technical: 'Encrypted local storage using AES-256 to prevent external file access'
      }
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.relaks.relaks_media'
    }
  },
  'meal-calculator': {
    title: 'Meal Calculator',
    tagline: 'Smart Nutrition Tracking & Meal Planning',
    year: '2022',
    role: 'Solo Developer',
    platforms: ['Android'],
    accentColor: '#10B981',
    heroImage: 'https://cdn.dribbble.com/userupload/44809589/file/af4a8b93017819aa719d458ade161f20.png?resize=1024x768&vertical=center',
    stats: [
      { label: 'Downloads', value: '5K+' },
      { label: 'Recipes', value: '1000+' },
      { label: 'Rating', value: '4.6/5' },
      { label: 'Users', value: '2K+' }
    ],
    overview: [
      'Meal Calculator simplifies the complexity of nutritional tracking. It helps users achieve their fitness goals by calculating calories, macros, and suggesting balanced meal plans tailored to individual dietary needs.',
      'I built this app to be fast, offline-first, and incredibly easy to use. It features a massive offline database of foods and an intelligent algorithm that recommends meals based on leftover calorie budgets.'
    ],
    techStack: {
      'Framework': 'Flutter',
      'Database': 'SQLite (Drift)',
      'State Management': 'Riverpod',
      'Charts': 'Fl_chart'
    },
    features: [
      {
        title: 'Macro Calculator',
        description: 'Real-time calculation of protein, carbs, and fats as users build their meals.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800',
        technical: 'Reactive state management updates charts and totals instantly upon data change'
      }
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.devTriple.meal_calculator'
    }
  },
  'roadsmart': {
    title: 'RoadSmart',
    tagline: 'Integrated Automotive Marketplace Ecosystem',
    year: '2024',
    role: 'Lead Developer',
    platforms: ['iOS', 'Android'],
    accentColor: '#EAB308',
    heroImage: 'https://cdn.dribbble.com/userupload/46400280/file/77a193bd4394a519e33aebe291e7d3d5.png?resize=1024x768&vertical=center',
    stats: [
      { label: 'Dealers', value: '200+' },
      { label: 'Listings', value: '5K+' },
      { label: 'Services', value: '50+' }
    ],
    overview: [
      'RoadSmart reimagines the automotive lifecycle by connecting car owners, dealerships, and service providers in a single unified platform. From buying a car to booking maintenance, RoadSmart handles it all.',
      'The project involved complex integration with legacy dealer management systems and real-time booking engines. I led the frontend team to deliver a consistent, high-performance experience across both mobile and web platforms.'
    ],
    techStack: {
      'Frontend': 'Flutter',
      'Backend': 'Laravel & NestJS',
      'Design': 'Figma',
      'Maps': 'Google Maps API'
    },
    features: [
      {
        title: 'Service Booking',
        description: 'End-to-end service appointment scheduling with real-time slot availability from workshops.',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
        technical: 'Custom calendar implementation synchronized with backend slot management'
      }
    ],
    links: {
      figma: 'https://www.figma.com/design/WxMMXllZ8HR2Rq3wwnEEPG/RoadSmart-Updated?node-id=0-1&p=f&t=XuqqDaTCjH74XsqV-0'
    }
  },
  'quikle': {
    title: 'Quikle',
    tagline: 'Multi-Role Hyperlocal Delivery Ecosystem',
    year: '2023',
    role: 'Solution Architect',
    platforms: ['iOS', 'Android'],
    accentColor: '#3B82F6',
    heroImage: 'https://cdn.dribbble.com/userupload/45415570/file/b8fb9bc217fc633c83c5035bca31469c.png?resize=1024x768&vertical=center',
    stats: [
      { label: 'Apps', value: '3' },
      { label: 'Roles', value: 'User, Vendor, Rider' },
      { label: 'Uptime', value: '99.9%' }
    ],
    overview: [
      'Quikle is a complex delivery ecosystem comprising three distinct applications: a Customer app for ordering, a Vendor app for business management, and a Rider app for logistics. It facilitates food, medicine, and grocery delivery with seamless coordination.',
      'I architected the shared codebase to maximize code reuse across the three apps while maintaining distinct features for each role. This approach reduced development time by 40% and ensured consistent branding.'
    ],
    techStack: {
      'Framework': 'Flutter',
      'Pattern': 'Monorepo-style structure',
      'Maps': 'Google Maps & Directions API',
      'Real-time': 'Socket.IO'
    },
    features: [
      {
        title: 'Live Logistics Tracking',
        description: 'Real-time tracking of riders with live path updates and ETA calculations.',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800',
        technical: 'Socket-based location stream interpolation for smooth marker movement'
      }
    ],
    links: {
      github: 'https://github.com/nuhan021/quikle_user',
      figma: 'https://www.figma.com/design/SJ334nLT0NFNIbPBQPLFGq/Quikle-App-UI?node-id=1-3&p=f&t=d9qieuN9NnupCaYo-0'
    }
  },
  'service-marketplace': {
    title: 'Service Marketplace',
    tagline: 'Community Events & Service Vendor Platform',
    year: '2023',
    role: 'Full Stack Flutter Dev',
    platforms: ['iOS', 'Android'],
    accentColor: '#EC4899',
    heroImage: 'https://cdn.dribbble.com/userupload/46005620/file/fdc506a749b44b32785ba8afb3bd1399.jpg?resize=1024x768&vertical=center',
    stats: [
      { label: 'Events', value: '100+' },
      { label: 'Vendors', value: '50+' }
    ],
    overview: [
      'This platform empowers local vendors to create and manage community events and service packages. Customers can discover local happenings, book services, and make secure payments directly through the app.',
      'Key focus areas included a robust calendar interface for event management and a secure payment flow using Stripe Connect to handle payouts to multiple vendors.'
    ],
    techStack: {
      'Framework': 'Flutter',
      'Payments': 'Stripe Connect',
      'Backend': 'Node.js',
      'Validation': 'Formz'
    },
    features: [
      {
        title: 'Vendor Dashboard',
        description: 'Comprehensive analytics and management tools for service providers.',
        image: 'https://cdn.dribbble.com/userupload/46005620/file/fdc506a749b44b32785ba8afb3bd1399.jpg?resize=1024x768&vertical=center',
        technical: 'Interactive charts and data tables optimized for mobile viewing'
      }
    ],
    links: {
      figma: 'https://www.figma.com/design/QwHBhlXnayd5o5NtnUJBCT/sireenshaban-%7C%7C-web_architect-%7C%7C-FO821A7A7BE82?node-id=0-1&t=6XKzbEDvxQOB1VOt-1'
    }
  },
  'pet-care': {
    title: 'Pet Care App',
    tagline: 'Holistic Health & Routine Management for Pets',
    year: '2023',
    role: 'UI/UX Engineer',
    platforms: ['iOS', 'Android'],
    accentColor: '#10B981',
    heroImage: 'https://cdn.dribbble.com/userupload/45826029/file/1172ba3b575bdf3ad1ab19cd9439cb61.jpg?resize=1024x769&vertical=center',
    overview: [
      'Designed to simplify pet ownership, this app helps users track vaccinations, vet appointments, and daily care routines. The interface is warm and inviting, using soft colors and illustrations to appeal to pet lovers.',
      'My role focused on implementing a pixel-perfect design from Figma, ensuring complex animations and transitions felt natural and playful.'
    ],
    techStack: {
      'Language': 'Dart',
      'UI Framework': 'Flutter',
      'Design System': 'Custom Material Theme'
    },
    links: {
      figma: 'https://www.figma.com/design/xqLxNwsuVe1cmCoyJXr1Wv/richardhan9%7C%7C-Bytescout%7C%7C-FO61AEA1E4782?node-id=1001-46&p=f&t=QNaWFan2jGqOfYj0-0'
    }
  },
  'smart-home': {
    title: 'ESP32 Smart Home',
    tagline: 'IoT Dashboard for Total Home Automation',
    year: '2024',
    role: 'IoT Engineer',
    platforms: ['IoT', 'Mobile'],
    accentColor: '#F97316',
    heroImage: 'https://cdn.dribbble.com/userupload/13918545/file/original-44eb0b36a75ab4ede89daf4d656efcb8.png?resize=1600x1156&vertical=center',
    stats: [
      { label: 'Devices', value: '100+' },
      { label: 'Latency', value: '<50ms' }
    ],
    overview: [
      'A powerful IoT solution capable of controlling over 100 appliances. Unlike simple on/off switches, this system supports complex states like variable fan speeds and dimmable lights via MQTT.',
      'The project bridges hardware and software, using an ESP32 microcontroller and a Flutter-based dashboard to provide real-time control and status feedback.'
    ],
    techStack: {
      'Hardware': 'ESP32',
      'Protocol': 'MQTT',
      'Frontend': 'Flutter',
      'Backend': 'Django'
    },
    links: {
      github: 'https://github.com/nuhan021/smart_home_ui'
    }
  },
  'ai-interview': {
    title: 'AI Interview Planner',
    tagline: 'Intelligent Recruitment & Scheduling Automation',
    year: '2024',
    role: 'Developer',
    platforms: ['Web', 'Mobile'],
    accentColor: '#8B5CF6',
    heroImage: 'https://cdn.dribbble.com/userupload/10115885/file/original-7e2f373a5c6595ba8231623749136431.png?resize=1024x768&vertical=center',
    overview: [
      'An AI-powered tool designed to streamline the hiring process. It automates interview scheduling, parses resumes, and even suggests interview questions based on candidate profiles.',
      'The interface focuses on clarity and efficiency, helping HR professionals save hours of manual work every week.'
    ],
    techStack: {
      'Frontend': 'Flutter Web',
      'AI Integration': 'OpenAI API',
      'Calendar': 'Syncfusion Scheduler'
    },
    links: {
      figma: 'https://www.figma.com/design/QVWHVrKjdkCSA93mIbBBBz/dtc6464%7C%7C-bytescout%7C%7CFO2D9A7CE842?node-id=2394-599&p=f&t=qFYFbT3G9ycDa4sy-0'
    }
  },
  'event-planner': {
    title: 'Event Planner',
    tagline: 'Personalized Event Management with Dual Interfaces',
    year: '2023',
    role: 'UI Developer',
    platforms: ['Mobile'],
    accentColor: '#F43F5E',
    heroImage: 'https://cdn.dribbble.com/userupload/46342354/file/5216f597be1791a4483482b38d6de9b7.png?resize=1024x768&vertical=center',
    overview: [
      'A unique event booking platform that offers distinct user interfaces tailored to different user demographics ("Male" vs "Female" themes) to test engagement strategies.',
      'The challenge was to build a single logic core that could seamlessly accept two completely different skinning systems without code duplication.'
    ],
    techStack: {
      'Theming': 'Dynamic Theme System',
      'Framework': 'Flutter'
    },
    links: {
      figma: 'https://www.figma.com/design/WK7YoPAUxGmzbCK6G8LxKz/Onurtaskiner-%7C%7C-dev_insider--FO72DAD2CB447?node-id=1-5&p=f&t=rUiSjQkISsSkz1yf-0'
    }
  },
  'easy-push-notification': {
    title: 'Easy Push Notification',
    tagline: 'Flutter Package for Instant Firebase Integration',
    year: '2023',
    role: 'Open Source Author',
    platforms: ['Package'],
    accentColor: '#8B5CF6',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1080',
    stats: [
      { label: 'Pub Points', value: '130/140' },
      { label: 'Likes', value: 'Trending' }
    ],
    overview: [
      'Setting up push notifications in Flutter can be tedious. I created `easy_push_notification` to solve this by wrapping the complex boilerplate of Firebase Messaging into a simple, one-line initialization.',
      'This package handles token management, background handling, and permission requests automatically.'
    ],
    techStack: {
      'Core': 'Dart',
      'Integration': 'Firebase Messaging'
    },
    links: {
      pubUrl: 'https://pub.dev/packages/easy_push_notification',
      github: 'https://github.com/nuhan021/easy_push_notification'
    }
  },
  'flutter-mvc-bloc': {
    title: 'Flutter MVC & BLoC CLI',
    tagline: 'Automated Architecture Generator',
    year: '2023',
    role: 'Tooling Developer',
    platforms: ['CLI'],
    accentColor: '#06B6D4',
    heroImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1080',
    overview: [
      'A developer tool written in Python to scaffold production-ready Flutter apps. It enforces a strict MVC + BLoC architecture with TDD support out of the box.',
      'This tool standardizes project structure across large teams, ensuring every new feature starts with the correct folder hierarchy and boilerplate code.'
    ],
    techStack: {
      'Language': 'Python',
      'Generator': 'Jinja2 Templates',
      'Target': 'Flutter / Dart'
    },
    links: {
      github: 'https://github.com/nuhan021/bloc_tdd_clean_arc'
    }
  },
  'todo-avatar': {
    title: 'Daily To-Do Avatar',
    tagline: 'Gamified Task Management for Kids',
    year: '2024',
    role: 'Game Developer',
    platforms: ['Mobile'],
    accentColor: '#EAB308',
    heroImage: 'https://cdn.dribbble.com/userupload/46207932/file/89f6c13067a711d47411437cc860d0c2.png?resize=1024x768&vertical=center',
    overview: [
      'Transforming chores into a game. This app rewards children with coins for completing daily tasks, which they can spend to unlock 3D items for their personal avatar.',
      'It combines standard to-do list functionality with a lightweight 3D character system to maintain high engagement levels among younger users.'
    ],
    techStack: {
      'Rendering': 'Flutter 3D / Rive',
      'Logic': 'Gamification Engine'
    },
    links: {
      figma: 'https://www.figma.com/design/FsqZ4JYOwSy2P0hFmVlBtx/Daily-To-do-Task-for-Kids-With-Fun?node-id=1-4&p=f&t=zYZxAWm81UGjfniS-0',
      github: 'https://github.com/nuhan021/shalana07'
    }
  },
  'flutter-nimo-cli': {
    title: 'Flutter Nimo CLI',
    tagline: 'Rapid Boilerplate Generation Utility',
    year: '2023',
    role: 'Tooling Developer',
    platforms: ['CLI'],
    accentColor: '#22C55E',
    heroImage: 'https://cdn.dribbble.com/userupload/29349527/file/original-b8399ecc091087aab14faf4eeb65cfda.png?resize=1024x768&vertical=center',
    overview: [
      'Another powerful CLI tool designed for speed. Nimo CLI focuses on generating modular boilerplates that allow developers to jump straight into business logic.',
      'It supports multiple architecture types and includes pre-configured CI/CD workflows.'
    ],
    techStack: {
      'Language': 'Python',
      'Usage': 'Command Line Interface'
    },
    links: {
      github: 'https://github.com/nuhan021/flutter_nimo_cli.git'
    }
  }
};

export function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const caseStudy = projectId ? caseStudies[projectId] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#010101] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Poppins'] font-bold text-white text-4xl mb-4">
            Case Study Not Found
          </h1>
          <button
            onClick={() => navigate('/work')}
            className="font-['IBM_Plex_Mono'] text-[#5E5E5E] hover:text-white transition-colors"
          >
            ← Back to Work
          </button>
        </div>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen bg-[#010101]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Back Button */}
      <motion.div
        className="fixed top-24 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-[#5E5E5E] hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title & Meta */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {caseStudy.platforms?.map((platform: string) => (
                  <span
                    key={platform}
                    className="font-['IBM_Plex_Mono'] text-xs text-white bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#5E5E5E]/30"
                  >
                    {platform}
                  </span>
                ))}
                <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm">
                  {caseStudy.year}
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm">
                  • {caseStudy.role}
                </span>
              </div>

              <h1 className="font-['Poppins'] font-bold text-white mb-4 uppercase leading-[0.9]" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
                {caseStudy.title}
              </h1>

              <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-xl md:text-2xl max-w-3xl">
                {caseStudy.tagline}
              </p>
            </div>

            {/* Stats Grid */}
            {caseStudy.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {caseStudy.stats.map((stat: any, index: number) => (
                  <motion.div
                    key={stat.label}
                    className="bg-[#1A1A1A] border border-[#5E5E5E]/20 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="font-['Poppins'] font-bold text-white text-3xl mb-2">
                      {stat.value}
                    </div>
                    <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Hero Image */}
            <motion.div
              className="relative aspect-[16/9] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: caseStudy.accentColor }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#5E5E5E]/20">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-8 uppercase">
              Project Overview
            </h2>
            <div className="space-y-6">
              {caseStudy.overview.map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#5E5E5E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-12 uppercase">
              Technical Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.techStack && Object.entries(caseStudy.techStack).map(([key, value]: [string, any], index: number) => (
                <motion.div
                  key={key}
                  className="bg-[#1A1A1A] border border-[#5E5E5E]/20 rounded-lg p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs uppercase mb-2">
                    {key}
                  </div>
                  <div className="font-['Source_Serif_4'] text-white text-base">
                    {value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-12 uppercase">
              Key Features
            </h2>
            <div className="space-y-20">
              {caseStudy.features && caseStudy.features.map((feature: any, index: number) => (
                <motion.div
                  key={feature.title}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex-1 w-full">
                    <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-4">
                      Feature {index + 1}
                    </div>
                    <h3 className="font-['Poppins'] font-semibold text-white text-2xl mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-base leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="bg-[#1A1A1A] border border-[#5E5E5E]/20 rounded-lg p-4">
                      <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs mb-2">
                        Technical Implementation
                      </div>
                      <p className="font-['IBM_Plex_Mono'] text-white text-sm">
                        {feature.technical}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1A1A1A]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      {caseStudy.challenges && (
        <section className="py-20 px-4 md:px-8 bg-[#0A0A0A]">
          <div className="max-w-[1000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-12 uppercase">
                Challenges & Solutions
              </h2>
              <div className="space-y-12">
                {caseStudy.challenges.map((challenge: any, index: number) => (
                  <motion.div
                    key={challenge.title}
                    className="bg-[#1A1A1A] border border-[#5E5E5E]/20 rounded-lg p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <h3 className="font-['Poppins'] font-semibold text-white text-xl mb-6">
                      {challenge.title}
                    </h3>

                    <div className="mb-6">
                      <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs uppercase mb-2">
                        Problem
                      </div>
                      <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-base leading-relaxed">
                        {challenge.problem}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs uppercase mb-2">
                        Solution
                      </div>
                      <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-base leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>

                    {challenge.code && (
                      <div className="bg-[#010101] border border-[#5E5E5E]/30 rounded-lg p-4 overflow-x-auto">
                        <pre className="font-['IBM_Plex_Mono'] text-[#FFFFFF]/80 text-sm">
                          <code>{challenge.code}</code>
                        </pre>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {caseStudy.results && (
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-12 uppercase">
                Results & Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm uppercase mb-6">
                    Key Metrics
                  </h3>
                  <ul className="space-y-4">
                    {caseStudy.results.metrics.map((metric: string, index: number) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 * index }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: caseStudy.accentColor }}
                        />
                        <span className="font-['Source_Serif_4'] text-white text-lg">
                          {metric}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#1A1A1A] border border-[#5E5E5E]/20 rounded-lg p-8">
                  <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs uppercase mb-4">
                    Client Testimonial
                  </div>
                  <p className="font-['Source_Serif_4'] text-white text-xl leading-relaxed mb-6 italic">
                    "{caseStudy.results.testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-['Poppins'] font-semibold text-white text-base">
                      {caseStudy.results.testimonial.author}
                    </div>
                    <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm">
                      {caseStudy.results.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Screenshots Gallery */}
      {caseStudy.screenshots && (
        <section className="py-20 px-4 md:px-8 bg-[#0A0A0A]">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-12 uppercase">
                Visual Showcase
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {caseStudy.screenshots.map((screenshot: string, index: number) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[9/16] rounded-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Learnings Section */}
      {caseStudy.learnings && (
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-[1000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-12 uppercase">
                Key Learnings
              </h2>
              <div className="space-y-6">
                {caseStudy.learnings.map((learning: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: caseStudy.accentColor }}
                    >
                      <span className="font-['IBM_Plex_Mono'] text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg leading-relaxed">
                      {learning}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Links Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#5E5E5E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Poppins'] font-bold text-white text-4xl mb-8 uppercase">
              Explore This Project
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.links.figma && (
                <a
                  href={caseStudy.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-sm text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-6 py-3 rounded-md transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Figma Design
                </a>
              )}
              {caseStudy.links.playStore && (
                <a
                  href={caseStudy.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-sm text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-6 py-3 rounded-md transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download on Play Store
                </a>
              )}
              {caseStudy.links.github && (
                <a
                  href={caseStudy.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-sm text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-6 py-3 rounded-md transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Cursor */}
      <CustomCursor
        isVisible={isHovered}
        cursorPosition={cursorPosition}
        variant="circle"
      />
    </div>
  );
}