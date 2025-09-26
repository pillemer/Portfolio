export const siteContent = {
  global: {
    siteName: "Ariel Pillemer",
    siteDescription: "Beautiful, calming websites for therapists in the UK",
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
      logo: "AP Forge",
      items: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        // { href: '/portfolio', label: 'Portfolio' }, TODO: Uncomment when portfolio is ready
      ],
      cta: {
        label: "Let's talk",
        href: "/contact"
      }
    },
    footer: {
      description: "Professional websites for professionals.",
      contact: {
        email: "info@apforge.co.uk"
      },
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
          { label: "Get in Touch", href: "/contact" }
        ]
      },
      legal: {
        title: "Legal",
        items: [
          { label: "Privacy Policy", href: "/privacy" }
        ]
      },
      copyright: "© 2024 AP Forge. All rights reserved."
    },
  },
  
  home: {
    hero: {
      badge: "Websites for UK Therapists",
      title: "Your website should feel as welcoming as",
      titleHighlight: "your therapy room",
      description: "Creating a safe, calming space is what you do best. But when it comes to websites, the tech side can feel overwhelming. I get it, and I'm here to help. Let me handle the design and technical stuff so your website actually reflects the warmth and professionalism of your practice.",
      cta: {
        primary: {
          text: "Let's chat about your website",
          href: "/contact"
        },
        secondary: {
          text: "See how I can help",
          href: "/services"
        }
      }
    },
    trust: {
      title: "TRUSTED BY THERAPISTS ACROSS THE UK",
      badges: [
        { text: "BACP" },
        { text: "BPS" },
        { text: "UKCP" },
        { text: "HCPC" }
      ]
    },
    valueProps: {
      title: "What you'll get",
      description: "I specialize in creating websites specifically for therapists. Your site will reflect the same warmth and professionalism as your in-person sessions.",
      cards: [
        {
          title: "A website that actually feels like you",
          description: "No more generic templates. Your site will reflect your personality and approach, so potential clients get a real sense of who you are before they even pick up the phone.",
          iconType: "Trust",
          iconBgColor: "bg-blue-100",
          iconColor: "text-blue-600",
          linkText: "Learn more"
        },
        {
          title: "More time for what matters",
          description: "Stop spending your evenings trying to figure out website stuff. I'll set everything up and show you a simple way to make updates. You'll get your weekends back.",
          iconType: "Check",
          iconBgColor: "bg-green-100",
          iconColor: "text-green-600",
          linkText: "See how"
        },
        {
          title: "That professional first impression",
          description: "Every detail, from the colors to the layout to the words, will help new visitors feel comfortable and build trust from the moment they land on your site.",
          iconType: "Payment",
          iconBgColor: "bg-purple-100",
          iconColor: "text-purple-600",
          linkText: "See features"
        }
      ]
    },
    process: {
      title: "Here's how we'll work together",
      description: "From our first chat to launch, I'll guide you through everything so you can focus on your practice.",
      steps: [
        {
          number: "1",
          title: "Discovery Call",
          description: "We'll have a relaxed conversation about your practice and what you want people to feel when they visit your site. I'll show you examples and explain how everything works."
        },
        {
          number: "2",
          title: "Design & Build",
          description: "I'll create your website with your content, photos, and personality in mind. You'll see updates along the way and can give feedback as we go."
        },
        {
          number: "3",
          title: "Launch & Support",
          description: "Your website goes live with full training on making simple updates. I'm always here if you need help with anything."
        }
      ]
    },
    stats: {
      items: [
        { value: "5+", label: "Years Experience" },
        { value: "100%", label: "Happy Clients" },
        { value: "24h", label: "Response Time" }
      ]
    },
    finalCta: {
      title: "Ready to get started?",
      description: "Your new website is just a conversation away. Let's set up a quick call to chat about your practice and what you'd like your website to do for you.",
      cta: {
        secondary: {
          text: "See Your Options",
          href: "/services"
        },
        primary: {
          text: "Let's talk",
          href: "/contact"
        }
      }
    }
  },
  
  about: {
    meta: {
      title: "About Me | Ariel Pillemer",
      description: "I specialize in creating beautiful, functional websites that help therapists showcase their practice and connect with more clients."
    },
    hero: {
      badge: "About Me",
      title: "Helping Therapists",
      titleHighlight: "Thrive Online",
      description: "I specialize in creating beautiful, functional websites that help therapists showcase their practice and connect with more clients.",
    },
    sections: {
      approach: {
        title: "My Approach",
        content: [
          "I understand that therapists need more than just a website, you need a digital space that feels as welcoming and professional as your therapy room. That's why I focus on creating sites that prioritize warmth, accessibility, and that all-important first impression.",
          "Every website I build includes the essentials therapists need: secure contact forms, easy appointment scheduling, and GDPR-compliant systems. But more importantly, each site is designed to help potential clients feel comfortable and confident about reaching out.",
        ]
      },
      expertise: {
        title: "What I Can Help You With",
        services: [
          {
            title: "Custom Website Design",
            description: "Websites that reflect your personality and approach, not generic templates"
          },
          {
            title: "Booking & Payments",
            description: "Simple systems that make it easy for clients to book and pay online"
          },
          {
            title: "Local SEO",
            description: "Help people in your area find you when they're looking for therapy"
          },
          {
            title: "Ongoing Support",
            description: "I'm here whenever you need updates, have questions, or want to add something new"
          }
        ]
      },
      why: {
        title: "Why Work With Me",
        content: [
          "I get it. you didn't train to become a therapist so you could spend your evenings wrestling with websites. You want to focus on your clients, not figure out technical stuff. That's exactly why I built this service.",
          "Whether you're just starting out or you've been in practice for years, I'll help you create a website that actually works for your business and feels authentically you."
        ]
      }
    },
  },
  
  services: {
    hero: {
      badge: "Professional Services",
      title: "Let's build you a website that",
      titleHighlight: "actually feels like you",
      description: "From custom website design to booking systems, I help therapists create an online presence that reflects the warmth and professionalism of their practice.",
    },
    
    packages: {
      website: {
        title: "Essential Practice Website",
        description: "Perfect for therapists who want a professional online presence",
        price: "£1,299",
        priceDetail: "one-time + optional £20/mo maintenance",
        features: [
          "5-page custom website that feels like you",
          "Mobile-friendly, calming design",
          "Help people find you online (SEO basics)",
          "Secure contact forms (GDPR compliant)",
          "All the legal stuff sorted (privacy policy, cookies)",
          "Professional email setup",
          "Reliable, secure hosting",
          "Ready in 3-4 weeks",
        ],
      },
      
      bookingSystem: {
        title: "Online Booking Add-on",
        description: "Let clients book appointments 24/7",
        price: "£499",
        priceDetail: "one-time",
        features: [
          "Online booking that works on all devices",
          "Automatic confirmation emails",
          "Syncs with your calendar",
          "Reminder emails for clients",
          "Set your own availability rules",
          "Works for multiple therapists",
          "Keep track of appointment history",
          "Simple client management",
        ],
      },
      
      paymentSystem: {
        title: "Payment System Add-on",
        description: "Get paid easily and securely",
        price: "£399",
        priceDetail: "one-time",
        features: [
          "Secure payment processing",
          "All major UK payment methods",
          "Automatic invoicing (VAT ready)",
          "Track all your payments",
          "Set up recurring payments",
          "Handle deposits easily",
          "Simple financial reports",
          "Works with UK banks",
        ],
      },
    },
    
    process: {
      title: "Here's how we'll work together",
      description: "A straightforward process with clear communication every step of the way.",
      steps: [
        {
          number: "1",
          title: "Discovery & Planning",
          description: "We'll start with a relaxed chat about your practice, what you need, and what you want people to feel when they visit your site. You'll get a clear plan and timeline.",
        },
        {
          number: "2",
          title: "Design & Development",
          description: "I'll create a design that feels authentically you, then build it using reliable, modern technology that won't give you headaches later.",
        },
        {
          number: "3",
          title: "Testing & Tweaking",
          description: "I'll test everything thoroughly, booking systems, contact forms, payments, and make sure it all works perfectly on phones, tablets, and computers.",
        },
        {
          number: "4",
          title: "Launch & Training",
          description: "Once you're happy with everything, your site goes live. I'll show you how to manage it yourself and be available whenever you need help.",
        },
      ],
    },
    
    cta: {
      title: "Ready to get started?",
      description: "Let's create a website that reflects your practice and helps the right clients find you.",
      buttonText: "Let's talk about your website",
    }
  },
  
  contact: {
    meta: {
        title: "Contact - Let's Build Your Perfect Therapist Website",
        description: "Get in touch to discuss your therapist website project. Free discovery call to understand your needs and show you what's possible."
    },
    header: {
        title: "Let's chat about your website",
        subtitle: "Tell me about your practice and we'll set up a time to talk about what you need."
    },
    steps: [
        {
            title: "About you",
            subtitle: "Let's start with the basics",
            icon: "👋"
        },
        {
            title: "Your practice",
            subtitle: "Help me understand what you need",
            icon: "🏥"
        },
        {
            title: "Project details",
            subtitle: "What would you like me to build?",
            icon: "💡"
        },
        {
          title: 'Summary',
          subtitle: "Review your information",
          icon: "📋"
        }
    ],
    practiceTypes: [
        'Individual Therapy',
        'Couples Counseling',
        'Family Therapy',
        'Group Therapy',
        'Clinical Psychology',
        'Counseling Psychology',
        'Other'
    ],
    practiceStages: [
        'Just starting out',
        'Established (1-3 years)',
        'Growing (3-10 years)',
        'Well-established (10+ years)'
    ],
    serviceOptions: [
        'New Website Design',
        'Website Redesign',
        'Online Booking System',
        'Payment Processing',
        'SEO Optimization',
        'Branding & Logo',
        'Content Writing',
        'Ongoing Maintenance'
    ],
    budgetRanges: [
        '£1,000 - £2,000',
        '£2,000 - £3,000',
        '£3,000 - £5,000',
        '£5,000+'
    ],
    timelineOptions: [
        'ASAP',
        'Within 1 month',
        '1-3 months',
        '3-6 months',
        'No rush'
    ],
    summary: {
        title: "Review Your Information",
        sections: {
            contact: {
                title: "Contact Details"
            },
            practice: {
                title: "Practice Information",
                website: "Current website:"
            },
            project: {
                title: "Project Requirements",
                timeline: "Timeline:",
                budget: "Budget:"
            },
            message: {
                title: "Additional Message"
            }
        }
    },
    successMessage: {
        title: "Thanks!",
        message: "I've got your details and will email you within 24 hours to set up our chat.",
        features: [
            "Response within 24 hours",
            "Free 30-minute discovery call"
        ]
    },
    nextSteps: {
        title: "What happens next?",
        steps: [
            "We'll have a 30-minute chat about your practice",
            "I'll show you examples and discuss what you need",
            "No pressure, just a friendly conversation about your project",
            "If we're a good fit, I'll send you a detailed proposal"
        ]
    },
    formLabels: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: {
            label: "Phone Number",
            optional: "(optional)"
        },
        currentWebsite: {
            label: "Current Website (optional)",
            hint: "If you have an existing website, I'd love to take a look",
            placeholder: "https://your-current-website.com"
        },
        practiceType: "What type of practice do you run?",
        practiceStage: "What stage is your practice at?",
        services: "What do you need help with? (Select all that apply)",
        timeline: "Timeline",
        budget: "Budget Range",
        message: {
            label: "Anything else you'd like me to know? (optional)",
            placeholder: "Tell me more about your project, any specific requirements, or questions you have..."
        }
    },
    formPlaceholders: {
        firstName: "Your first name",
        lastName: "Your last name",
        email: "your.email@example.com",
        phone: "07123 456789"
    },
    formSelects: {
        timeline: "Select timeline",
        budget: "Select budget"
    }
  },
  
  privacy: {
    meta: {
      title: "Privacy Policy | Ariel Pillemer",
      description: "How we collect, use, and protect your personal information when you visit our website or use our services."
    },
    header: {
      title: "Privacy Policy",
      lastUpdated: "September 22, 2025"
    },
    sections: {
      introduction: {
        title: "Introduction",
        content: [
          "This Privacy Policy explains how Ariel Pillemer (\"we\", \"our\", or \"us\") collects, uses, stores, and protects your personal information when you visit our website or use our services.",
          "We are committed to protecting your privacy and ensuring that your personal information is handled in accordance with the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.",
          "By using our website or services, you agree to the collection and use of information in accordance with this policy."
        ]
      },
      
      dataController: {
        title: "Data Controller",
        content: [
          "The data controller for your personal information is:",
          "Ariel Pillemer",
          "Location: E17, London, UK",
          "",
          "For any questions about this Privacy Policy or how we handle your personal data, please use our contact form."
        ]
      },
      
      dataCollection: {
        title: "What Information We Collect",
        content: [
          "We collect information you provide directly to us, including:",
          "",
          "Contact Form Information:",
          "• Your name (first and last name)",
          "• Email address",
          "• Phone number (optional)",
          "• Information about your practice",
          "• Project requirements and preferences",
          "• Any additional messages you choose to share",
          "",
          "Website Usage Information:",
          "• Your IP address",
          "• Browser type and version",
          "• Pages you visit on our site",
          "• Time spent on pages",
          "• Referring website information",
          "",
          "Cookies and Similar Technologies:",
          "We use cookies and similar tracking technologies. See our Cookie Policy section below for more details."
        ]
      },
      
      legalBasis: {
        title: "Legal Basis for Processing",
        content: [
          "We process your personal data under the following legal bases:",
          "",
          "Legitimate Interest: We process your contact information to respond to your inquiries and provide quotes for our services. This is necessary for our business operations.",
          "",
          "Consent: For any marketing communications or non-essential cookies, we will ask for your explicit consent.",
          "",
          "Contract: If you become a client, we process your data to fulfill our contractual obligations to provide web design services."
        ]
      },
      
      dataUse: {
        title: "How We Use Your Information",
        content: [
          "We use the information we collect to:",
          "",
          "• Respond to your inquiries and provide quotes",
          "• Communicate with you about our services",
          "• Provide and improve our website and services",
          "• Comply with legal obligations",
          "• Protect our rights and prevent fraud",
          "",
          "We do not sell, rent, or share your personal information with third parties for their marketing purposes."
        ]
      },
      
      dataSharing: {
        title: "Who We Share Your Information With",
        content: [
          "We may share your information with:",
          "",
          "Service Providers:",
          "• Formspree (contact form processing) - based in the US with adequate safeguards",
          "• Email service providers for communication",
          "• Website hosting providers (Vercel)",
          "",
          "Legal Requirements:",
          "We may disclose your information if required by law or to protect our rights.",
          "",
          "All third-party service providers are required to maintain the confidentiality and security of your personal information."
        ]
      },
      
      dataRetention: {
        title: "How Long We Keep Your Information",
        content: [
          "We retain your personal information for the following periods:",
          "",
          "• Contact form inquiries: 2 years from last contact",
          "• Client project data: 3 years after project completion",
          "• Website analytics: 26 months maximum",
          "",
          "After these periods, we will securely delete your information unless we have a legal obligation to retain it longer."
        ]
      },
      
      yourRights: {
        title: "Your Rights",
        content: [
          "Under UK GDPR, you have the following rights:",
          "",
          "Right of Access: Request a copy of the personal data we hold about you",
          "",
          "Right to Rectification: Request correction of inaccurate personal data",
          "",
          "Right to Erasure: Request deletion of your personal data",
          "",
          "Right to Restrict Processing: Request that we limit how we use your data",
          "",
          "Right to Data Portability: Request a copy of your data in a portable format",
          "",
          "Right to Object: Object to our processing of your personal data",
          "",
          "Right to Withdraw Consent: Where we rely on consent, you can withdraw it at any time",
          "",
          "To exercise any of these rights, please contact us using the details in the Data Controller section."
        ]
      },
      
      security: {
        title: "Data Security",
        content: [
          "We implement appropriate technical and organizational measures to protect your personal information, including:",
          "",
          "• SSL encryption for data transmission",
          "• Secure hosting with regular security updates",
          "• Access controls to limit who can view your data",
          "• Regular security assessments",
          "",
          "However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security."
        ]
      },
      
      cookies: {
        title: "Cookies Policy",
        content: [
          "Our website uses cookies to improve your experience. Cookies are small text files stored on your device.",
          "",
          "Types of Cookies We Use:",
          "",
          "Strictly Necessary Cookies:",
          "• Website functionality and security",
          "• Form submission and error handling",
          "",
          "Functional Cookies:",
          "• Google Fonts (may set cookies for font delivery)",
          "",
          "You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality."
        ]
      },
      
      international: {
        title: "International Transfers",
        content: [
          "Some of our service providers are located outside the UK/EEA:",
          "",
          "• Formspree (US): Uses Standard Contractual Clauses for data protection",
          "• Vercel (US): Implements appropriate safeguards for data transfers",
          "",
          "We ensure all international transfers comply with UK GDPR requirements and include appropriate safeguards."
        ]
      },
      
      children: {
        title: "Children's Privacy",
        content: [
          "Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children under 16.",
          "",
          "If you become aware that a child has provided personal information to us, please contact us immediately."
        ]
      },
      
      changes: {
        title: "Changes to This Policy",
        content: [
          "We may update this Privacy Policy from time to time. We will notify you of any changes by:",
          "",
          "• Posting the new Privacy Policy on this page",
          "• Updating the \"Last Updated\" date",
          "• Emailing existing clients about significant changes",
          "",
          "We encourage you to review this Privacy Policy periodically for any changes."
        ]
      },
      
      contact: {
        title: "Contact Us",
        content: [
          "If you have any questions about this Privacy Policy or our data practices, please contact us:",
          "",
          "Contact Form: Use the contact form on our website",
          "Location: E17, London, UK",
          "",
          "Data Protection Concerns:",
          "If you have concerns about how we handle your data, you can also contact the Information Commissioner's Office (ICO) at ico.org.uk"
        ]
      }
    }
  }
};