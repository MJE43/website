import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, BarChart, Code, Rocket } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Search,
      title: 'Discovery & Consultation',
      description:
        'We start by understanding your business goals, analyzing your competition, and defining what success looks like for your project.',
    },
    {
      icon: BarChart,
      title: 'Strategy Development',
      description:
        'We create a customized roadmap with timelines, budget planning, and clear KPIs to ensure your project delivers measurable results.',
    },
    {
      icon: Code,
      title: 'Design & Development',
      description:
        'Our team builds your solution using best practices, with regular feedback loops to ensure the final product matches your vision.',
    },
    {
      icon: Rocket,
      title: 'Launch & Optimization',
      description:
        'We meticulously test, launch, and then continuously monitor and improve your website to maximize performance and ROI.',
    },
  ];

  return (
    <div
      ref={ref}
      className="py-12 md:py-20"
    >
      <div className="container">
        <div className="section-title">
          <h2>Our Proven Process</h2>
          <p>A clear, transparent approach that delivers consistent results</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative md:grid md:grid-cols-5 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-700 ease-out delay-${index * 200}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div className="flex md:justify-center mb-4 md:mb-0">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg">
                    <step.icon size={24} />
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-4 card">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;