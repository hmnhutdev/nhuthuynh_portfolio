"use client";

import { useLanguage } from '@/context/language-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div 
            className="animate-on-scroll flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              {/* Replace with your actual profile image */}
              <div className="w-full h-full bg-muted rounded-full overflow-hidden">
                <Image 
                  src="/assets/images/avatar.jpg" 
                  alt="Profile" 
                  width={320} 
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <div className="animate-on-scroll space-y-4">
            <p className="text-lg">
              {t('about.description')}
            </p>
            
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Name:</span>
                <span>Minh Nhut Huynh</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:hmnhut.dev@gmail.com" className="text-primary hover:underline">
                  hmnhut.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <span>Can Tho, Vietnam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Experience:</span>
                <span>3+ Years</span>
              </div>
            </div>
            
            {/* Education & Experience */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="text-sm text-muted-foreground">2022 - Present</div>
                  <div className="font-medium">Fullstack Web Developer</div>
                  <div className="text-muted-foreground">IVS JSC</div>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="text-sm text-muted-foreground">2017 - 2021</div>
                  <div className="font-medium">Engineer of Information Technology</div>
                  <div className="text-muted-foreground">Can Tho University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
