// Social Media & SEO Optimization Metadata
const socialMetadata = {
  // High-ranking general keywords for better visibility
  generalKeywords: [
    "software developer", "full stack developer", "web developer", "programmer",
    "software engineer", "tech lead", "team lead", "senior developer",
    "javascript developer", "java developer", "react developer", "angular developer",
    "backend developer", "frontend developer", "fullstack engineer",
    "software architect", "technical lead", "development manager",
    "enterprise developer", "application developer", "systems developer",
    "Full Stack Java Spring Boot Angular Developer", "Full Stack Java Spring Boot React.js Developer",
    "Java Spring Boot Microservices with Angular Frontend", "React.js Frontend with Java Spring Boot Backend",
    "Enterprise Java Full Stack with Spring Boot and Angular 17+", "Scalable Full Stack Development using Java, Spring Boot, and React"
  ],

  // Industry & skill-based keywords
  industryKeywords: [
    "enterprise software", "web applications", "mobile applications",
    "cloud solutions", "microservices architecture", "api development",
    "database design", "system integration", "software consulting",
    "digital transformation", "technology solutions", "custom software",
    "scalable applications", "high performance systems", "agile development",
    "Java 21 Full Stack Developer with Spring Boot 3.x and Angular", "Spring Security and OAuth 2.0 in Java Full Stack Applications",
    "Microservices Architecture with Spring Boot and React/Angular", "RESTful API Design and Implementation with Java Spring Boot",
    "Hibernate ORM and Spring Data JPA for Java Full Stack", "Frontend Development with Angular, NgRx, and RxJs",
    "React.js State Management with Redux in Java Full Stack", "UI/UX Design Principles for Angular/React with Java Backend"
  ],

  // Location-based keywords for local SEO
  locationKeywords: [
    "bangalore developer", "india software developer", "remote developer",
    "freelance developer", "contract developer", "consultant developer",
    "offshore developer", "global developer", "international developer",
    "remote full stack developer India", "Java Spring Boot developer remote"
  ],

  // Social Media Optimized Content
  socialProfiles: {
    linkedin: {
      headline: "Senior Full Stack Developer | Java Spring Boot Angular React Expert | Enterprise Solutions | Remote Work Available",
      summary: "🚀 7.5+ years building enterprise applications for Fortune 500 companies\n💻 Expert in Java, Spring Boot, Angular, React, TypeScript\n🏢 Currently Team Lead at Accenture\n🌟 Delivered solutions for Mercedes-Benz, GE HealthCare, TIAA\n📍 Bangalore, India | Open to Remote Opportunities",
      skills: [
        "Full Stack Development", "Java Development", "Spring Boot", "Angular", "React",
        "TypeScript", "JavaScript", "Microservices", "REST APIs", "System Architecture",
        "AWS", "DevOps", "CI/CD", "Team Leadership", "Agile Development",
        "Spring Security", "OAuth 2.0", "Hibernate", "JPA", "NgRx", "RxJs", "Redux"
      ]
    },

    github: {
      bio: "Senior Full Stack Developer | Java Spring Boot Angular React | Enterprise Solutions Expert | 7.5+ Years Experience",
      topics: [
        "java", "spring-boot", "angular", "react", "typescript", "javascript",
        "microservices", "rest-api", "full-stack", "enterprise", "web-development"
      ]
    },

    twitter: {
      bio: "Senior Full Stack Developer 💻 | Java Spring Boot Angular React Expert 🚀 | Team Lead @Accenture | Enterprise Solutions | Remote Work Available 🌍",
      hashtags: [
        "#FullStackDeveloper", "#JavaDeveloper", "#SpringBoot", "#Angular", "#React",
        "#TypeScript", "#JavaScript", "#WebDevelopment", "#SoftwareDeveloper",
        "#TechLead", "#RemoteWork", "#Bangalore", "#India"
      ]
    }
  },

  // Enhanced Open Graph for better social sharing
  enhancedOpenGraph: {
    title: "Sonu Kumar - Senior Full Stack Developer | Enterprise Solutions Expert",
    description: "Senior Full Stack Developer with 7.5+ years experience. Expert in Java, Spring Boot, Angular, React. Delivered solutions for Fortune 500 companies. Available for remote work opportunities.",
    image: "https://sonuskr.github.io/sonuskr/profile-image.jpg", // Add your profile image
    imageAlt: "Sonu Kumar - Senior Full Stack Developer Profile",
    locale: "en_US",
    siteName: "Sonu Kumar - Professional Portfolio"
  },

  // Twitter Card optimization
  twitterCard: {
    card: "summary_large_image",
    site: "@sonuskr", // Add your Twitter handle
    creator: "@sonuskr",
    title: "Sonu Kumar - Senior Full Stack Developer | Java Spring Boot Angular React Expert",
    description: "Senior Full Stack Developer with 7.5+ years experience building enterprise applications. Expert in Java, Spring Boot, Angular, React, TypeScript. Available for remote work.",
    image: "https://sonuskr.github.io/sonuskr/profile-image.jpg"
  },

  // Schema.org enhanced for better search visibility
  enhancedSchema: {
    "@context": "https://schema.org",
    "@type": ["Person", "SoftwareApplication"],
    "name": "Sonu Kumar",
    "alternateName": ["Sonu Kumar Developer", "Sonu Kumar Software Engineer"],
    "jobTitle": ["Senior Full Stack Developer", "Team Lead", "Software Engineer"],
    "description": "Experienced Senior Full Stack Developer specializing in enterprise web applications, microservices architecture, and modern JavaScript frameworks. Expert in Java Spring Boot, Angular, React, and cloud technologies.",
    "url": "https://sonuskr.github.io/sonuskr/",
    "image": "https://sonuskr.github.io/sonuskr/profile-image.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/sonuskr",
      "https://github.com/sonuskr",
      "https://sonuskr.github.io/sonuskr/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Accenture",
      "url": "https://www.accenture.com"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Full Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Bangalore, India"
      },
      "skills": [
        "Java Development", "Spring Boot", "Angular", "React", "TypeScript",
        "JavaScript", "Full Stack Development", "Microservices", "REST APIs",
        "System Architecture", "Cloud Computing", "DevOps", "Team Leadership",
        "Spring Security", "OAuth 2.0", "Hibernate", "JPA", "NgRx", "RxJs", "Redux"
      ]
    },
    "knowsLanguage": ["English", "Hindi"],
    "nationality": "Indian",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    }
  }
};

// Generate comprehensive keywords for SEO
function generateSEOKeywords() {
  return [
    ...socialMetadata.generalKeywords,
    ...socialMetadata.industryKeywords,
    ...socialMetadata.locationKeywords
  ].join(", ");
}

// Generate social media meta tags
function generateSocialMetaTags() {
  const og = socialMetadata.enhancedOpenGraph;
  const twitter = socialMetadata.twitterCard;
  
  return `
    <!-- Enhanced Open Graph Tags -->
    <meta property="og:title" content="${og.title}" />
    <meta property="og:description" content="${og.description}" />
    <meta property="og:image" content="${og.image}" />
    <meta property="og:image:alt" content="${og.imageAlt}" />
    <meta property="og:url" content="https://sonuskr.github.io/sonuskr/" />
    <meta property="og:type" content="profile" />
    <meta property="og:locale" content="${og.locale}" />
    <meta property="og:site_name" content="${og.siteName}" />
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="${twitter.card}" />
    <meta name="twitter:site" content="${twitter.site}" />
    <meta name="twitter:creator" content="${twitter.creator}" />
    <meta name="twitter:title" content="${twitter.title}" />
    <meta name="twitter:description" content="${twitter.description}" />
    <meta name="twitter:image" content="${twitter.image}" />
    
    <!-- Additional Social Meta Tags -->
    <meta property="profile:first_name" content="Sonu" />
    <meta property="profile:last_name" content="Kumar" />
    <meta property="profile:username" content="sonuskr" />
    
    <!-- Enhanced Keywords -->
    <meta name="keywords" content="${generateSEOKeywords()}" />
  `;
}

// Generate enhanced structured data
function generateEnhancedStructuredData() {
  return `
    <script type="application/ld+json">
      ${JSON.stringify(socialMetadata.enhancedSchema, null, 2)}
    </script>
  `;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    socialMetadata, 
    generateSEOKeywords, 
    generateSocialMetaTags, 
    generateEnhancedStructuredData 
  };
}