export interface Project {
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    accentColor: string;
    figmaUrl?: string;
    playStoreUrl?: string;
    appStoreUrl?: string;
    githubUrls?: string[];
    pubUrl?: string;
    platforms?: ('iOS' | 'Android')[];
    slug: string;
    status: 'published' | 'working' | 'others';
}

export const projects: Project[] = [
    {
        title: "Sippd Coffee",
        description: "Premium coffee ordering and delivery app with a seamless user experience. Features location-based services, real-time order tracking, and customizable drink preferences.",
        techStack: ["Flutter", "iOS", "Coffee Delivery", "Real-time Tracking"],
        imageUrl: "https://cdn.dribbble.com/userupload/46089271/file/7bb8ba4ff1d23533c60b22c955719a69.png?resize=752x&vertical=center",
        accentColor: "#F59E0B", // Amber 500
        appStoreUrl: "https://apps.apple.com/sg/app/sippd-coffee/id6752921147",
        platforms: ["iOS"],
        slug: "sippd-coffee",
        status: "published"
    },
    {
        title: "Relaks Media",
        description: "Comprehensive media streaming and entertainment platform. Browse, stream, and enjoy a wide variety of content with an intuitive and engaging user interface.",
        techStack: ["Flutter", "Android", "Media Streaming", "Entertainment"],
        imageUrl: "https://cdn.dribbble.com/userupload/43999464/file/original-f4edefb228235953cca2e2f15e1abf38.jpg?resize=752x&vertical=center",
        accentColor: "#8B5CF6", // Violet 500
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.relaks.relaks_media",
        platforms: ["Android"],
        slug: "relaks-media",
        status: "published"
    },
    {
        title: "Meal Calculator",
        description: "Smart nutrition tracking and meal planning application. Calculate calories, track macros, and plan balanced meals with intelligent dietary recommendations.",
        techStack: ["Flutter", "Android", "Health", "Nutrition Tracking"],
        imageUrl: "https://cdn.dribbble.com/userupload/44809589/file/af4a8b93017819aa719d458ade161f20.png?resize=1024x768&vertical=center",
        accentColor: "#10B981", // Emerald 500
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.devTriple.meal_calculator",
        platforms: ["Android"],
        slug: "meal-calculator",
        status: "published"
    },
    {
        title: "Integrated Automotive Marketplace",
        description: "RoadSmart is a comprehensive digital solution designed to streamline the automotive lifecycle. It bridges the gap between car owners, buyers, and service providers through a unified platform.",
        techStack: ["Flutter", "Laravel", "Figma", "Nest Js"],
        imageUrl: "https://cdn.dribbble.com/userupload/46400280/file/77a193bd4394a519e33aebe291e7d3d5.png?resize=1024x768&vertical=center",
        accentColor: "#EAB308", // Yellow 500
        figmaUrl: "https://www.figma.com/design/WxMMXllZ8HR2Rq3wwnEEPG/RoadSmart-Updated?node-id=0-1&p=f&t=XuqqDaTCjH74XsqV-0",
        slug: "roadsmart",
        status: "working"
    },
    {
        title: "Quikle - Multi-Role Delivery",
        description: "Food and medicine delivery platform with three distinct role-based applications: customer app for ordering, vendor app for sellers and medical shops, and rider app for delivery management.",
        techStack: ["Flutter", "Multi-role", "Delivery", "E-commerce"],
        imageUrl: "https://cdn.dribbble.com/userupload/45415570/file/b8fb9bc217fc633c83c5035bca31469c.png?resize=1024x768&vertical=center",
        accentColor: "#3B82F6", // Blue 500
        figmaUrl: "https://www.figma.com/design/SJ334nLT0NFNIbPBQPLFGq/Quikle-App-UI?node-id=1-3&p=f&t=d9qieuN9NnupCaYo-0",
        githubUrls: [
            "https://github.com/nuhan021/quikle_user",
            "https://github.com/nuhan021/quikle_vendor",
            "https://github.com/nuhan021/quikle_rider"
        ],
        slug: "quikle",
        status: "working"
    },
    {
        title: "Service Marketplace Platform",
        description: "Dual-role service platform where vendors create community events and packages, while customers browse and purchase services. Features Stripe payment integration.",
        techStack: ["Flutter", "Stripe", "Multi-role", "Events"],
        imageUrl: "https://cdn.dribbble.com/userupload/46005620/file/fdc506a749b44b32785ba8afb3bd1399.jpg?resize=1024x768&vertical=center",
        accentColor: "#EC4899", // Pink 500
        figmaUrl: "https://www.figma.com/design/QwHBhlXnayd5o5NtnUJBCT/sireenshaban-%7C%7C-web_architect-%7C%7C-FO821A7A7BE82?node-id=0-1&t=6XKzbEDvxQOB1VOt-1",
        slug: "service-marketplace",
        status: "working"
    },
    {
        title: "Pet Care Mobile App",
        description: "Comprehensive pet care application for managing pet health, appointments, and daily care routines. Features intuitive UI for tracking vet visits and vaccinations.",
        techStack: ["Flutter", "Mobile", "Pet Care", "UI/UX"],
        imageUrl: "https://cdn.dribbble.com/userupload/45826029/file/1172ba3b575bdf3ad1ab19cd9439cb61.jpg?resize=1024x769&vertical=center",
        accentColor: "#10B981", // Emerald 500
        figmaUrl: "https://www.figma.com/design/xqLxNwsuVe1cmCoyJXr1Wv/richardhan9%7C%7C-Bytescout%7C%7C-FO61AEA1E4782?node-id=1001-46&p=f&t=QNaWFan2jGqOfYj0-0",
        slug: "pet-care",
        status: "others"
    },
    {
        title: "ESP32-Based Smart Home",
        description: "IoT solution controlling 100+ appliances with fan speed control using MQTT protocol. Built with Flutter, Django backend, and Matter protocol support.",
        techStack: ["IoT", "Flutter", "Django", "MQTT", "ESP32"],
        imageUrl: "https://cdn.dribbble.com/userupload/13918545/file/original-44eb0b36a75ab4ede89daf4d656efcb8.png?resize=1600x1156&vertical=center",
        accentColor: "#F97316", // Orange 500
        githubUrls: ["https://github.com/nuhan021/smart_home_ui"],
        slug: "smart-home",
        status: "others"
    },
    {
        title: "AI Interview Planner",
        description: "Intelligent interview scheduling and planning application powered by AI. Streamlines the recruitment process with automated scheduling and candidate management.",
        techStack: ["Flutter", "AI", "Scheduling", "HR Tech"],
        imageUrl: "https://cdn.dribbble.com/userupload/10115885/file/original-7e2f373a5c6595ba8231623749136431.png?resize=1024x768&vertical=center",
        accentColor: "#8B5CF6", // Violet 500
        figmaUrl: "https://www.figma.com/design/QVWHVrKjdkCSA93mIbBBBz/dtc6464%7C%7C-bytescout%7C%7CFO2D9A7CE842?node-id=2394-599&p=f&t=qFYFbT3G9ycDa4sy-0",
        slug: "ai-interview",
        status: "others"
    },
    {
        title: "Event Planner - Gender-Based UI",
        description: "Customized event booking platform with distinct male and female interfaces. Users can plan and book personalized events tailored to their preferences.",
        techStack: ["Flutter", "Events", "Custom UI", "Booking"],
        imageUrl: "https://cdn.dribbble.com/userupload/46342354/file/5216f597be1791a4483482b38d6de9b7.png?resize=1024x768&vertical=center",
        accentColor: "#F43F5E", // Rose 500
        figmaUrl: "https://www.figma.com/design/WK7YoPAUxGmzbCK6G8LxKz/Onurtaskiner-%7C%7C-dev_insider--FO72DAD2CB447?node-id=1-5&p=f&t=rUiSjQkISsSkz1yf-0",
        slug: "event-planner",
        status: "others"
    },
    {
        title: "easy_push_notification",
        description: "Custom Flutter package for Firebase Push Notifications with one-line integration. Simplifies notification setup and reduces implementation time significantly.",
        techStack: ["Flutter", "Firebase", "Package"],
        imageUrl: "https://cdn.dribbble.com/userupload/46479630/file/592826ce529fb2536542ab3bcfd9d335.png?resize=1024x768&vertical=center",
        accentColor: "#8B5CF6", // Violet 500
        githubUrls: ["https://github.com/nuhan021/easy_push_notification"],
        pubUrl: "https://pub.dev/packages/easy_push_notification",
        slug: "easy-push-notification",
        status: "others"
    },
    {
        title: "Flutter MVC & BLoC CLI",
        description: "Python CLI tool to auto-generate clean Flutter project structures following MVC and BLoC patterns with TDD principles.",
        techStack: ["Flutter", "Python", "BLoC", "MVC"],
        imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1080",
        accentColor: "#06B6D4", // Cyan 500
        githubUrls: ["https://github.com/nuhan021/bloc_tdd_clean_arc", "https://github.com/nuhan021/getX_project_structure"],
        slug: "flutter-mvc-bloc",
        status: "others"
    },
    {
        title: "Daily To-Do Avatar App",
        description: "Gamified avatar editing app for children featuring coin-based purchasing system. Kids earn coins to unlock and customize avatar items.",
        techStack: ["Flutter", "3D Graphics", "Gamification", "Kids"],
        imageUrl: "https://cdn.dribbble.com/userupload/46207932/file/89f6c13067a711d47411437cc860d0c2.png?resize=1024x768&vertical=center",
        accentColor: "#EAB308", // Yellow 500
        figmaUrl: "https://www.figma.com/design/FsqZ4JYOwSy2P0hFmVlBtx/Daily-To-do-Task-for-Kids-With-Fun?node-id=1-4&p=f&t=zYZxAWm81UGjfniS-0",
        githubUrls: ["https://github.com/nuhan021/shalana07"],
        slug: "todo-avatar",
        status: "others"
    },
    {
        title: "Flutter Nimo CLI Tool",
        description: "Python CLI utility to generate modular Flutter boilerplates instantly. Accelerates project setup with pre-configured architecture patterns.",
        techStack: ["Flutter", "Python", "CLI", "Boilerplate"],
        imageUrl: "https://cdn.dribbble.com/userupload/29349527/file/original-b8399ecc091087aab14faf4eeb65cfda.png?resize=1024x768&vertical=center",
        accentColor: "#22C55E", // Green 500
        githubUrls: ["https://github.com/nuhan021/flutter_nimo_cli.git"],
        slug: "flutter-nimo-cli",
        status: "others"
    }
];
