export const siteContent = {
  global: {
    siteName: "Ariel Pillemer",
    siteDescription: "Professional website design for healthcare professionals in the UK",
    error: {
      title: "404 - Page Not Found",
      description: "The page you're looking for doesn't exist.",
      heading: "404",
      subheading: "Well, this is awkward",
      message: "The page you're looking for seems to have gone missing.",
      cta: {
        text: "Back to Home",
        href: "/"
      }
    },
    navigation: {
      logo: "Ariel Pillemer",
      items: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/portfolio', label: 'Portfolio' },
      ],
      cta: {
        label: "Get Started",
        href: "/contact"
      }
    },
    footer: {
      description: "Professional websites for professionals.",
      services: {
        title: "Services",
        items: [
          { label: "Website Design", href: "/services" },
          { label: "Booking Systems", href: "/services" },
          { label: "Payment Integration", href: "/services" }
        ]
      },
      connect: {
        title: "Connect",
        items: [
          { label: "info@localhost.com", href: "mailto:info@localhost.com" },
          { label: "Get in Touch", href: "/contact" }
        ]
      },
      copyright: "© 2024 Ariel Pillemer. All rights reserved."
    },
  },
  
  home: {
    hero: {
      badge: "Professional Website Design",
      title: "Beautiful websites that help",
      titleHighlight: "professionals grow",
      description: "Clean, professional websites with integrated booking systems and online payments. Designed specifically for professionals who want to attract more clients.",
      cta: {
        primary: {
          text: "See What I Can Build",
          href: "/services"
        },
        secondary: {
          text: "View Examples",
          href: "/portfolio"
        }
      }
    },
    trust: {
      title: "TRUSTED BY MANY PROFESSIONALS",
      badges: [
        { text: "BACP" },
        { text: "BPS" },
        { text: "UKCP" },
        { text: "HCPC" }
      ]
    },
    valueProps: {
      title: "Everything your practice needs online",
      description: "From professional design to booking systems, I build websites that help therapists focus on what matters most - helping their clients.",
      cards: [
        {
          title: "Build Trust Instantly",
          description: "Clean, professional design that makes potential clients feel safe and confident about reaching out to you.",
          iconType: "ArrowRight",
          iconBgColor: "bg-blue-100",
          iconColor: "text-blue-600",
          linkText: "Learn more"
        },
        {
          title: "Simple Booking",
          description: "Integrated booking system that lets clients schedule appointments 24/7, reducing phone calls and admin work.",
          iconType: "Check",
          iconBgColor: "bg-green-100",
          iconColor: "text-green-600",
          linkText: "See demo"
        },
        {
          title: "Secure Payments",
          description: "Accept payments online with secure, GDPR-compliant payment processing. Get paid faster, reduce no-shows.",
          iconType: "Payment",
          iconBgColor: "bg-purple-100",
          iconColor: "text-purple-600",
          linkText: "Try it out"
        }
      ]
    },
    process: {
      title: "Simple process, professional results",
      description: "From initial consultation to launch, I handle everything so you can focus on your practice.",
      steps: [
        {
          number: "1",
          title: "Discovery Call",
          description: "We discuss your practice, goals, and what you need from your website. I'll show you examples and explain the process."
        },
        {
          number: "2",
          title: "Design & Build",
          description: "I create your website with your content, branding, and functionality. You'll see progress updates throughout the process."
        },
        {
          number: "3",
          title: "Launch & Support",
          description: "Your website goes live with full training on how to manage bookings and content. Ongoing support included."
        }
      ]
    },
    stats: {
      items: [
        { value: "5+", label: "Years Experience" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "24h", label: "Average Response" }
      ]
    },
    finalCta: {
      title: "Ready to grow your practice online?",
      description: "Let's build you a professional website that attracts more clients and makes running your practice easier.",
      cta: {
        primary: {
          text: "See What I Can Build",
          href: "/services"
        },
        secondary: {
          text: "Start Your Project",
          href: "/contact"
        }
      }
    }
  },
  
  about: {
    hero: {
      badge: "About Me",
      title: "Helping Healthcare Professionals",
      titleHighlight: "Thrive Online",
      description: "I specialize in creating beautiful, functional websites that help healthcare professionals showcase their practice and connect with more clients.",
    },
    sections: {
      approach: {
        title: "My Approach",
        content: [
          "With a deep understanding of the healthcare sector's unique needs, I create websites that prioritize professionalism, accessibility, and user experience. My goal is to help professionals establish a strong online presence while making it easy for potential clients to learn about their services and get in touch.",
          "Every website I build is tailored to the specific needs of healthcare professionals, incorporating essential features like secure contact forms, appointment scheduling, and HIPAA-compliant communication channels.",
        ],
      },
      // Add other about sections as needed
    },
  },
  
  services: {
    hero: {
      badge: "Professional Services",
      title: "Transform Your Practice with a",
      titleHighlight: "Professional Website",
      description: "From custom website design to complete practice management solutions, I help healthcare professionals establish a strong online presence.",
    },
    
    packages: {
      website: {
        title: "Professional Website",
        description: "Everything you need to establish your online presence",
        price: "£1,499",
        priceDetail: "one-time + optional maintenance",
        features: [
          "Custom professional website design",
          "Mobile responsive layout",
          "Search engine optimization (SEO)",
          "Contact form integration",
          "Social media integration",
          "Regular updates and maintenance",
          "Analytics and performance tracking",
          "Secure hosting setup",
          "Training on website management",
        ],
      },
      
      bookingSystem: {
        title: "Booking System Add-on",
        description: "Streamline your appointment management",
        price: "£499",
        priceDetail: "one-time + monthly fee",
        features: [
          "Online booking system integration",
          "Automated email confirmations",
          "Calendar synchronization",
          "Client reminder system",
          "Customizable booking rules",
          "Multiple practitioner support",
          "Appointment history tracking",
          "Client management system",
        ],
      },
      
      paymentSystem: {
        title: "Payment System Add-on",
        description: "Simplify your payment processing",
        price: "£399",
        priceDetail: "one-time + processing fees",
        features: [
          "Secure payment processing",
          "Multiple payment methods",
          "Automated invoicing",
          "Payment tracking",
          "Recurring payment setup",
          "Deposit handling",
          "Financial reporting",
          "Direct bank integration",
        ],
      },
    },
    
    process: {
      title: "How We'll Work Together",
      description: "A streamlined process to bring your vision to life, with clear communication every step of the way.",
      steps: [
        {
          number: "1",
          title: "Discovery & Planning",
          description: "We'll start with a detailed consultation to understand your practice, goals, and specific needs. You'll receive a comprehensive project plan and timeline.",
        },
        {
          number: "2",
          title: "Design & Development",
          description: "I'll create a custom design that reflects your professional brand, then build it using modern, reliable technology that's easy to maintain.",
        },
        {
          number: "3",
          title: "Integration & Testing",
          description: "All features will be thoroughly tested, including appointment booking, payments, and contact forms. We'll make sure everything works perfectly.",
        },
        {
          number: "4",
          title: "Launch & Support",
          description: "After final approval, your site goes live with my full support. I'll provide training on how to manage your new website and be available for ongoing assistance.",
        },
      ],
    },
    
    cta: {
      title: "Ready to Get Started?",
      description: "Let's discuss how I can help you create a professional online presence that grows your practice and supports your clients.",
      buttonText: "Schedule a Consultation",
    },
  },
};
