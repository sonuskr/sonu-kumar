// SEO Metadata Configuration

const seoMetadata = {
  // Basic Meta Tags
  title:
    "Sonu Kumar - Senior Full Stack Developer | Team Lead at Accenture | Java Spring Boot Angular React | 7.5+ Years Enterprise Experience",

  description:
    "Senior Full Stack Developer & Team Lead at Accenture with 7.5+ years enterprise experience. Expert in Java Spring Boot, Angular, React, TypeScript, Microservices, System Architecture, REST APIs, AWS, DevOps, CI/CD. Delivered scalable solutions for Fortune 500 clients: Mercedes-Benz, GE HealthCare, TIAA, flydubai, AAMC. Specializing in end-to-end development, code review, performance optimization. Available for remote work opportunities.",

  keywords:
    "Sonu Kumar, Senior Full Stack Developer, Team Lead, Accenture, Java, Spring Boot, Angular, React, TypeScript, JavaScript, HTML5, CSS3, Microservices, REST APIs, System Architecture, AWS, Azure, DevOps, CI/CD, Jenkins, Docker, MySQL, MongoDB, Oracle, Git, Maven, Agile, Scrum, Performance Optimization, Code Review, Mercedes-Benz, GE HealthCare, TIAA, flydubai, AAMC, LTIMindtree, Bangalore, Remote Work",

  author: "Sonu Kumar",

  // Open Graph Tags
  openGraph: {
    title:
      "Sonu Kumar - Senior Full Stack Developer | Team Lead at Accenture | Enterprise Solutions Expert",
    description:
      "Senior Full Stack Developer & Team Lead at Accenture with 7.5+ years enterprise experience. Expert in Java Spring Boot, Angular, React, TypeScript, Microservices, System Architecture. Delivered scalable solutions for Fortune 500 clients: Mercedes-Benz, GE HealthCare, TIAA, flydubai, AAMC. Available for remote work.",
    type: "profile",
    url: "https://sonuskr.github.io/sonuskr/",
    siteName: "Sonu Kumar - Portfolio",
  },

  // Technical Configuration
  canonical: "https://sonuskr.github.io/sonuskr/",
  themeColor: "#667eea",

  // Structured Data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sonu Kumar",
    jobTitle: "Packaged App Development Team Lead",
    description:
      "Senior Full Stack Developer and Team Lead at Accenture with 7.5+ years enterprise experience specializing in Java Spring Boot, Angular, React, TypeScript, Microservices, System Architecture, REST APIs, AWS Cloud Computing, DevOps, CI/CD pipelines, and performance optimization. Delivered scalable, high-availability solutions for Fortune 500 clients including Mercedes-Benz, GE HealthCare, TIAA, flydubai, and AAMC across Financial Services, Healthcare, Medical Education, Aviation, and Automotive industries.",
    url: "https://sonuskr.github.io/sonuskr/",
    sameAs: [
      "https://www.linkedin.com/in/sonuskr",
      "https://sonuskr.github.io/sonuskr/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Accenture",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Radharaman Institute of Technology & Science",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Microservices",
      "System Architecture",
      "REST APIs",
      "AWS",
      "Azure",
      "Cloud Computing",
      "DevOps",
      "CI/CD",
      "Docker",
      "Jenkins",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Git",
      "Maven",
      "Agile",
      "Scrum",
      "Team Leadership",
      "Performance Optimization",
      "Database Design",
      "API Integration",
      "Unit Testing",
      "Code Review",
      "SDLC",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "India",
    },
  },
};

// HTML escaping function to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Function to generate meta tags HTML
function generateMetaTags() {
  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(seoMetadata.title)}</title>
    <meta name="description" content="${escapeHtml(seoMetadata.description)}" />
    <meta name="keywords" content="${escapeHtml(seoMetadata.keywords)}" />
    <meta name="author" content="${escapeHtml(seoMetadata.author)}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${escapeHtml(seoMetadata.openGraph.title)}" />
    <meta property="og:description" content="${escapeHtml(seoMetadata.openGraph.description)}" />
    <meta property="og:type" content="${escapeHtml(seoMetadata.openGraph.type)}" />
    <meta property="og:url" content="${escapeHtml(seoMetadata.openGraph.url)}" />
    <meta property="og:site_name" content="${escapeHtml(seoMetadata.openGraph.siteName)}" />
    
    <!-- Technical Meta Tags -->
    <link rel="canonical" href="${escapeHtml(seoMetadata.canonical)}" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="theme-color" content="${escapeHtml(seoMetadata.themeColor)}" />
    <meta name="msapplication-TileColor" content="${escapeHtml(seoMetadata.themeColor)}" />
  `;
}

// Function to generate structured data script
function generateStructuredData() {
  const jsonString = JSON.stringify(seoMetadata.structuredData, null, 2)
    .replace(/</g, '\u003c')
    .replace(/>/g, '\u003e');
  return `
    <script type="application/ld+json">
      ${jsonString}
    </script>
  `;
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { seoMetadata, generateMetaTags, generateStructuredData };
}
