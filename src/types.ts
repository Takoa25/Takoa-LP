import React from 'react';

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Content {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
      textLight: string;
      card: string;
      border: string;
      highlight: string;
      whatsapp: string;
      sidebarBackground: string;
      sidebarTitle: string;
      sidebarHighlight: string;
      menuHover: string;
      selection: string;
      contactButton: {
        bg: string;
        hover: string;
        text: string;
      };
    };
    fonts: {
      sans: string;
      heading: string;
    };
  };
  brand: {
    name: string;
    logoUrl: string;
    logoAlt: string;
  };
  navigation: NavLink[];
  homeHero: {
    title: string;
    subtitlePrefix: string;
    subtitleTexts: string[];
  };
  projectsTitle: string;
  projects: Project[];
  servicesSection: {
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      features: string[];
    }[];
  };
  processSection: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      image?: string;
    }[];
  };
  finalCta: {
    title: string;
    buttonText: string;
    whatsappNumber: string;
  };
  contact: {
    email: string;
    buttonText: string;
    defaultWhatsappMessage: string;
    social: SocialLink[];
  };
  footer: {
    copyright: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    acceptAllLabel: string;
    denyLabel: string;
    preferencesLabel: string;
    privacyPolicyLabel: string;
    preferences: {
      title: string;
      description: string;
      saveLabel: string;
      rejectLabel: string;
      categories: {
        id: string;
        title: string;
        description: string;
        required: boolean;
      }[];
    };
  };
  privacyPolicy: {
    title: string;
    introduction: string;
    sections: {
      title: string;
      content: string | string[]; // Can be a single paragraph or multiple bullet points/paragraphs
    }[];
    contact: {
      text: string;
      email: string;
    };
  };
  termsOfUse: {
    title: string;
    introduction: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
    contact: {
      text: string;
      email: string;
    };
  };
}
