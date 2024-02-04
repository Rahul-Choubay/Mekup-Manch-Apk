
export const boardExamData = [
  {
    id: 'Grils Mekup',
    title: 'Grils Mekup',
    classes: [
      {
        title: 'Primer',
        url: '/mekup/Primer',
        details: [
          { id: 1, title: 'Product Type 1', description: 'Smooth and hydrating primer for a flawless makeup base.', price: "300", brand: 'XYZ Cosmetics' },
          { id: 2, title: 'Product type 2', description: 'Matte finish primer to control oil and shine throughout the day.', price: "800", brand: 'ABC Beauty' },
        ]
      },
      {
        title: 'Eyeshadow Palette',
        url: '/mekup/EyeshadowPalette',
        details: [
          { id: 3, title: 'Product Type 3', description: 'Versatile eyeshadow palette with a range of colors for different eye looks.', price: "500", brand: 'PQR Makeup' },
          { id: 4, title: 'Product Type 4', description: 'Shimmer and matte eyeshadows for creating glamorous eye makeup.', price: "750", brand: 'LMN Beauty' },
        ]
      }
    ]
  },
  {
    id: 'Boys Mekup',
    title: 'Boys Mekup',
    classes: [
      {
        title: 'Tinted Moisturizer or BB Cream',
        url: '/mekup/TintedMoisturizerorBBCream',
        details: [
          { id: 1, title: 'Product type 1', description: 'Lightweight tinted moisturizer for a natural look and sun protection.', price: "300", brand: 'UV Shield' },
          { id: 2, title: 'Product type 2', description: 'BB Cream with added skincare benefits for a fresh and even skin tone.', price: "300", brand: 'Glow Essentials' },
        ]
      },
      {
        title: 'Concealer Stick',
        url: '/mekup/ConcealerStick',
        details: [
          { id: 3, title: 'Product type 3', description: 'Concealer stick to cover blemishes and imperfections.', price: "250", brand: 'Perfect Cover' },
          { id: 4, title: 'Product type 4', description: 'Long-wearing concealer for a flawless complexion.', price: "400", brand: 'HD Beauty' },
        ]
      }
    ]
  }
];


 export const paidBatch =[
   {
  id: 'Gov-Jop-Exam-Prep (Paid Batch)',
  title: 'Gov-JoB-Exam-Prep  (Paid Batch)',
  classes: [
    {
      title: 'SCC JOBS',
      url: '/classpage/sccjobs',
      lectures: [
        { id: 17, title: 'English - Grammar Basics', description: 'Introduction to grammar rules in the English language.' },
        { id: 18, title: 'English - Reading Comprehension', description: 'Improving reading comprehension skills.' },
        // Add more unique lectures for Class 6
      ]
    },
    {
      title: 'UPSE JOB',
      url: '/classpage/upsejob',
      lectures: [
        { id: 19, title: 'Hindi - Vyakaran (Grammar)', description: 'Understanding grammar rules in Hindi language.' },
        { id: 20, title: 'Hindi - Sahitya (Literature)', description: 'Exploring Hindi literature.' },
        // Add more unique lectures for Class 7
      ]
    },
    {
      title: 'UP POLICE',
      url: '/classpage/uppolice',
      lectures: [
        { id: 21, title: 'Math - Algebra Basics', description: 'Introduction to algebraic concepts in mathematics.' },
        { id: 22, title: 'Math - Geometry', description: 'Exploring geometric shapes and properties.' },
        // Add more unique lectures for Class 8
      ]
    },
    {
      title: 'Bihar Police',
      url: '/classpage/Biharpolice',
      lectures: [
        { id: 23, title: 'Science - Physics Fundamentals', description: 'Basic principles of physics.' },
        { id: 24, title: 'Science - Chemistry Basics', description: 'Introduction to fundamental concepts in chemistry.' },
        // Add more unique lectures for Class 9
      ]
    },
    {
      title: 'GATE',
      url: '/classpage/gate',
      lectures: [
        { id: 25, title: 'Social Studies - History', description: 'Exploring historical events and periods.' },
        { id: 26, title: 'Social Studies - Civics', description: 'Understanding the political and civic structure.' },
        // Add more unique lectures for Class 10
      ]
    },
  ],
},
{
  id: 'Coding-job-Exam-Prep  (Paid Batch)',
  title: 'Coding-job-Exam-Prep (Paid Batch)',
  classes: [
    {
      title: 'WEB Developers',
      url: '/classpage/WEBDevelopers',
      lectures: [
        { id: 1, title: 'Introduction to React', description: 'Basics of React and its importance.' },
        { id: 2, title: 'Component Lifecycle', description: 'Understanding the lifecycle of React components.' },
        { id: 3, title: 'State and Props', description: 'Deep dive into React state and props.' },
        { id: 4, title: 'Hooks in React', description: 'Understanding useState, useEffect, and custom hooks.' },
        { id: 5, title: 'Routing in React', description: 'Exploring React Router and its features.' },
      ]
    },
    {
      title: 'Software Developer',
      url: '/classpage/SoftwareDeveloper',
      lectures: [
        { id: 6, title: 'Advanced React Patterns', description: 'Exploring advanced patterns in React development.' },
        { id: 7, title: 'Redux Overview', description: 'Introduction to state management with Redux.' },
        { id: 8, title: 'Testing in React', description: 'Understanding testing strategies for React applications.' },
        { id: 9, title: 'Server-Side Rendering', description: 'Implementation of server-side rendering in React.' },
        { id: 10, title: 'React Performance Optimization', description: 'Optimizing React applications for better performance.' },
        { id: 17, title: 'Database Management with SQL', description: 'Fundamentals of relational databases and SQL.' },
        { id: 18, title: 'Backend Development with Node.js', description: 'Building server-side applications using Node.js.' },
        { id: 19, title: 'RESTful API Design', description: 'Design principles and best practices for RESTful APIs.' },
        { id: 20, title: 'Introduction to Docker', description: 'Containerization for scalable and portable software deployment.' },
        { id: 21, title: 'Version Control with Git', description: 'Mastering Git for collaborative software development.' },
      ]
    },
    {
      title: 'Android Developer',
      url: '/classpage/AndroidDeveloper',
      lectures: [
        { id: 11, title: 'Introduction to Android Development', description: 'Overview of Android architecture and development environment.' },
        { id: 12, title: 'User Interface Design in Android', description: 'Creating responsive and visually appealing UIs in Android.' },
        { id: 22, title: 'Working with Android Studio', description: 'Utilizing Android Studio for efficient app development.' },
        { id: 23, title: 'Data Storage in Android', description: 'Managing data storage options in Android applications.' },
        { id: 24, title: 'Networking in Android', description: 'Implementing network operations and APIs in Android apps.' },
        { id: 25, title: 'Introduction to Kotlin for Android', description: 'Fundamentals of Kotlin programming language for Android development.' },
        { id: 26, title: 'Firebase Integration', description: 'Integrating Firebase services for app development.' },
        // Add more unique lectures for Android Developer
      ]
    },
    {
      title: 'Flutter Developer',
      url: '/classpage/Flutter Developer',
      lectures: [
        { id: 13, title: 'Introduction to Flutter', description: 'Getting started with Flutter framework for cross-platform development.' },
        { id: 14, title: 'Flutter Widgets and UI Design', description: 'Exploring Flutter widgets and designing interactive UIs.' },
        { id: 27, title: 'State Management in Flutter', description: 'Understanding different state management techniques in Flutter.' },
        { id: 28, title: 'Flutter Animation', description: 'Creating smooth and engaging animations in Flutter applications.' },
        { id: 29, title: 'Flutter and Firebase Integration', description: 'Integrating Firebase services with Flutter for real-time features.' },
        { id: 30, title: 'Flutter Package Management', description: 'Using and managing packages in Flutter projects.' },
        // Add more unique lectures for Flutter Developer
      ]
    },
    {
      title: 'Web Designer',
      url: '/classpage/WebDesigner',
      lectures: [
        { id: 15, title: 'Fundamentals of Web Design', description: 'Basic principles and elements of effective web design.' },
        { id: 16, title: 'Responsive Web Design', description: 'Designing websites that adapt to various screen sizes and devices.' },
        { id: 31, title: 'HTML5 and CSS3 Essentials', description: 'Exploring the latest standards for web development.' },
        { id: 32, title: 'JavaScript for Designers', description: 'Introduction to essential JavaScript concepts for interactive web design.' },
        { id: 33, title: 'UI/UX Design Principles', description: 'Designing user-friendly and intuitive interfaces for better user experience.' },
        { id: 34, title: 'Web Accessibility', description: 'Ensuring web content is accessible to all users, including those with disabilities.' },
        // Add more unique lectures for Web Designer
      ]
      
    },
  ]
  },
];
 

export const dummyData = [
  { id: 1, question: 'What is your name?', answer: 'My name is Study House.' },
  { id: 2, question: 'How does AI work?', answer: 'AI works through algorithms and data.' },
  // Add more dummy data as needed
];
