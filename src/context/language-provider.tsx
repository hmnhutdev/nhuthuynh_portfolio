"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'vi';

type TranslationValue = string | Record<string, any>;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => TranslationValue;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero section
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Fullstack Web Developer',
    'hero.description': 'I build modern web applications with passion and attention to detail',
    'hero.cta': 'Get in touch',
    'hero.resume': 'Download CV',

    // About section
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate Full Stack Developer with expertise in building modern web applications using React, Node.js, CakePHP and other cutting-edge technologies.',

    // Skills section
    'skills.title': 'Skills & Technologies',
    'skills.description': 'Technologies I work with',

    // Projects section
    'projects.title': 'Projects',
    'projects.description': 'Key projects I\'ve worked on during my professional career',
    'projects.role': 'Role',
    'projects.teamSize': 'Team size',
    'projects.achievements': 'Key Achievements',
    'projects.technologies': 'Technologies Used',
    'projects.viewLive': 'Live Demo',
    'projects.viewCode': 'Source Code',
    'projects.chatSystem': {
      title: 'Chat System For Customer Support',
      role: 'Fullstack Web Developer',
      description: 'A comprehensive customer support chat system with real-time communication capabilities.',
      achievements: [
        'Resolved UI bugs and logical issues in chatbot systems to improve reliability and user experience',
        'Maintained and updated automated test scripts using PlaywrightJS',
        'Optimized system performance by reducing excel export time by 70%, decreasing page load time by 40%',
        'Implemented a queue system using Bull and Redis for efficient database operations',
        'Designed scheduled jobs using CakePHP Shell and cronjobs for batch processing',
        'Upgraded key components (MySQL, CakePHP, jQuery, Node.js, Socket.io) to latest stable versions'
      ]
    },
    'projects.databaseMgmt': {
      title: 'Internal Enterprise Database Management',
      role: 'Frontend Web Developer',
      description: 'Enterprise-level database management system with responsive UI and real-time data visualization.',
      achievements: [
        'Developed responsive user interfaces based on Figma designs using ReactJS (TypeScript)',
        'Integrated RESTful APIs with React Query and Recoil for efficient state management',
        'Wrote robust end-to-end automated tests using Cypress'
      ]
    },
    'projects.hydroPlant': {
      title: 'Management of Hydroelectric Plants',
      role: 'Junior Fullstack Web Developer',
      description: 'Monitoring and management system for hydroelectric power plants with real-time data visualization.',
      achievements: [
        'Built and integrated RESTful APIs with NodeJS and PostgreSQL',
        'Developed user interfaces using HTML5 and SCSS with ReactJS',
        'Implemented data visualizations with Chart.js for operational metrics'
      ]
    },

    // Blog section
    'blog.title': 'Blog',
    'blog.description': 'My thoughts and ideas',
    'blog.readMore': 'Read More',

    // Contact section
    'contact.title': 'Get In Touch',
    'contact.description': 'Feel free to contact me',
    'contact.nameLabel': 'Your Name',
    'contact.emailLabel': 'Your Email',
    'contact.messageLabel': 'Your Message',
    'contact.submitButton': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
  },
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.projects': 'Dự án',
    'nav.blog': 'Blog',
    'nav.contact': 'Liên hệ',

    // Hero section
    'hero.greeting': 'Xin chào, tôi là',
    'hero.role': 'Lập trình viên Fullstack',
    'hero.description': 'Tôi xây dựng các ứng dụng web hiện đại với đam mê và sự tỉ mỉ',
    'hero.cta': 'Liên hệ ngay',
    'hero.resume': 'Tải CV',

    // About section
    'about.title': 'Về Tôi',
    'about.description': 'Tôi là một lập trình viên Full Stack đầy nhiệt huyết với chuyên môn xây dựng các ứng dụng web hiện đại bằng React, Node.js, CakePHP và các công nghệ tiên tiến khác.',

    // Skills section
    'skills.title': 'Kỹ Năng & Công Nghệ',
    'skills.description': 'Các công nghệ tôi sử dụng',

    // Projects section
    'projects.title': 'Dự Án',
    'projects.description': 'Các dự án chính tôi đã tham gia trong quá trình làm việc',
    'projects.role': 'Vị trí',
    'projects.teamSize': 'Quy mô nhóm',
    'projects.achievements': 'Thành Tựu Chính',
    'projects.technologies': 'Công Nghệ Sử Dụng',
    'projects.viewLive': 'Xem Demo',
    'projects.viewCode': 'Mã nguồn',
    'projects.chatSystem': {
      title: 'Hệ Thống Chat Hỗ Trợ Khách Hàng',
      role: 'Lập Trình Viên Fullstack',
      description: 'Hệ thống chat hỗ trợ khách hàng với khả năng giao tiếp thời gian thực.',
      achievements: [
        'Sửa lỗi giao diện và logic trong hệ thống chatbot để cải thiện độ tin cậy và trải nghiệm người dùng',
        'Bảo trì và cập nhật các kịch bản kiểm thử tự động bằng PlaywrightJS',
        'Tối ưu hiệu suất hệ thống bằng cách giảm thời gian xuất Excel 70%, giảm thời gian tải trang 40%',
        'Triển khai hệ thống hàng đợi sử dụng Bull và Redis cho các thao tác cơ sở dữ liệu hiệu quả',
        'Thiết kế công việc định kỳ bằng CakePHP Shell và cronjobs để xử lý hàng loạt',
        'Nâng cấp các thành phần chính (MySQL, CakePHP, jQuery, Node.js, Socket.io) lên các phiên bản ổn định mới nhất'
      ]
    },
    'projects.databaseMgmt': {
      title: 'Quản Lý Cơ Sở Dữ Liệu Doanh Nghiệp',
      role: 'Lập Trình Viên Frontend',
      description: 'Hệ thống quản lý cơ sở dữ liệu cấp doanh nghiệp với giao diện đáp ứng và hiển thị dữ liệu thời gian thực.',
      achievements: [
        'Phát triển giao diện đáp ứng dựa trên thiết kế Figma sử dụng ReactJS (TypeScript)',
        'Tích hợp RESTful API với React Query và Recoil để quản lý trạng thái hiệu quả',
        'Viết kiểm thử tự động end-to-end bằng Cypress'
      ]
    },
    'projects.hydroPlant': {
      title: 'Quản Lý Nhà Máy Thủy Điện',
      role: 'Lập Trình Viên Fullstack Mới Vào Nghề',
      description: 'Hệ thống giám sát và quản lý nhà máy thủy điện với hiển thị dữ liệu thời gian thực.',
      achievements: [
        'Xây dựng và tích hợp RESTful API với NodeJS và PostgreSQL',
        'Phát triển giao diện người dùng sử dụng HTML5 và SCSS với ReactJS',
        'Triển khai biểu đồ dữ liệu với Chart.js cho các chỉ số vận hành'
      ]
    },

    // Blog section
    'blog.title': 'Blog',
    'blog.description': 'Suy nghĩ và ý tưởng của tôi',
    'blog.readMore': 'Đọc Thêm',

    // Contact section
    'contact.title': 'Liên Hệ',
    'contact.description': 'Hãy liên hệ với tôi',
    'contact.nameLabel': 'Tên của bạn',
    'contact.emailLabel': 'Email của bạn',
    'contact.messageLabel': 'Tin nhắn của bạn',
    'contact.submitButton': 'Gửi tin nhắn',
    'contact.success': 'Gửi tin nhắn thành công!',
    'contact.error': 'Lỗi khi gửi tin nhắn. Vui lòng thử lại.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      return savedLanguage || 'en';
    }
    return 'en';
  });

  // Update localStorage when language changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): TranslationValue => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];

      // Handle direct key access first (e.g., 'nav.home')
      if (key in value) {
        return value[key];
      }

      // Special case for project achievements which is an array
      if (key.endsWith('.achievements')) {
        const projectKey = key.replace('.achievements', '');
        const projectData = t(projectKey);
        if (projectData && typeof projectData === 'object' && 'achievements' in projectData) {
          return projectData.achievements;
        }
      }

      // Handle nested keys (e.g., 'projects.chatSystem.title')
      let current = value;
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          // If we can't find the translation, return the last part of the key as a fallback
          const fallback = keys[keys.length - 1];
          console.warn(`[${language}] Translation key '${key}' not found, using fallback: '${fallback}'`);
          return fallback;
        }
      }

      return current || key; // Return the key as fallback if value is undefined
    } catch (error) {
      console.error(`Error in translation for key '${key}':`, error);
      return key; // Return the key as fallback in case of errors
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
