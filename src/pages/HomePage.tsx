import React from 'react';
import { NavLink } from 'react-router-dom';
import { Monitor, BarChart2, Database, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import ProcessTimeline from '../components/sections/ProcessTimeline';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with Data-Driven Web Solutions
            </h1>
            <p className="text-xl text-text-body mb-8">
              Custom websites that drive 25% more traffic, boost rankings by 40%, and deliver measurable growth for small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact" className="btn-primary">
                Start Your Growth Journey
              </NavLink>
              <NavLink to="/results" className="btn-secondary">
                View Our Results
              </NavLink>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team working on website solutions" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <AnimatedCounter end={98} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Client Satisfaction</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={25} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Traffic Increase</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={40} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Ranking Improvement</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={85} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored for small business success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Custom, responsive websites built with SEO and conversion in mind. We create sites that look great and drive business results."
              icon={Monitor}
              link="/services"
            />
            <ServiceCard
              title="SEO & Content"
              description="Data-driven SEO strategies that improve visibility and drive qualified traffic to your business, with a focus on local search."
              icon={BarChart2}
              link="/services"
            />
            <ServiceCard
              title="Analytics & Insights"
              description="Clear, actionable reports and dashboards that help you understand your website performance and make informed decisions."
              icon={Database}
              link="/services"
            />
          </div>

          <div className="text-center mt-12">
            <NavLink to="/services" className="btn-primary">
              Explore All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from small businesses we've helped grow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Webundance transformed our online presence. Our website now generates 3x more leads and has significantly improved our local search rankings."
              name="Sarah Johnson"
              company="Tucson Fitness Studio"
              rating={5}
            />
            <TestimonialCard
              quote="The team was professional, responsive, and delivered a website that exceeded our expectations. Our traffic is up 30% in just two months."
              name="Michael Ramirez"
              company="Desert Bloom Cafe"
              rating={5}
            />
            <TestimonialCard
              quote="Working with Webundance was the best business decision we made last year. Our e-commerce sales have increased by 45% since our website redesign."
              name="Jennifer Williams"
              company="Sonoran Crafts"
              rating={5}
            />
          </div>

          <div className="text-center mt-12">
            <NavLink to="/results" className="btn-primary">
              Read More Success Stories
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-primary opacity-90 z-0"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a free consultation to discuss how we can help you achieve your digital goals.
            </p>
            <NavLink to="/contact" className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 group">
              Schedule Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;