import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, DollarSign, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      icon: Search,
      title: "Invest",
      description:
        "Browse curated properties and purchase shares securely in minutes.",
    },
    {
      icon: TrendingUp,
      title: "Earn",
      description:
        "Receive passive income from rental yields and property appreciation.",
    },
    {
      icon: DollarSign,
      title: "Exit",
      description:
        "Sell your shares on our secondary market or benefit from the property sale.",
    },
  ];

  const stepImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    "https://plus.unsplash.com/premium_photo-1680230177520-e87271066e5d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFybmluZyUyMG1vbmV5fGVufDB8fDB8fHww",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqrzVbm85AeDe-O_iedT7SA-RsIcagol0mQ&s",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const stepTop = ref.offsetTop;
        const stepHeight = ref.offsetHeight;
        const stepMiddle = stepTop + stepHeight / 2;

        if (
          scrollPosition >= stepMiddle - 200 &&
          scrollPosition <= stepMiddle + 200
        ) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-48 px-4 sm:px-6 lg:px-8 bg-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight">
            Three Simple Steps
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Scrolling text content */}
          <div className="lg:w-1/2 space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                ref={(el) => (stepRefs.current[index] = el)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="min-h-[400px] flex flex-col lg:items-center" // ← Change to flex-col
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-full bg-primary-accent/20 flex items-center justify-center relative z-10 border-4 border-white">
                      <step.icon className="w-12 h-12 text-primary-accent z-600" />
                    </div>
                    <div className="absolute top-9 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-primary-accent/30 flex items-center justify-center font-bold text-primary-accent text-lg z-20">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-3 text-2xl text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile image - NOW OUTSIDE the flex gap-4 div */}
                <div className="lg:hidden mt-8 w-full">
                  <img
                    src={stepImages[index]}
                    alt={`Step ${index + 1}: ${step.title}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Sticky images */}
          <div className="lg:w-1/2 relative hidden lg:block">
            <div className="sticky top-40 h-[500px] hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={stepImages[activeStep]}
                  alt={`Step ${activeStep + 1}: ${steps[activeStep].title}`}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.05 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
