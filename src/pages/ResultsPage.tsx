import React from 'react';
import { NavLink } from 'react-router-dom';
import TestimonialCard from '../components/ui/TestimonialCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';

interface CaseStudy {
  id: number;
  title: string;
  business: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  testimonial: {
    quote: string;
    name: string;
    position: string;
  };
}

const ResultsPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Local Restaurant Increases Online Orders by 120%",
      business: "Desert Bloom Cafe",
      industry: "Restaurant",
      challenge: "Desert Bloom Cafe had a basic website that wasn't mobile-friendly and lacked online ordering capabilities. Their visibility in local search was poor, resulting in missed opportunities for new customers.",
      solution: "We designed a responsive website with integrated online ordering, optimized for local SEO, and implemented a content strategy highlighting their unique farm-to-table menu.",
      results: [
        "120% increase in online orders",
        "45% increase in organic search traffic",
        "First page ranking for 'Tucson organic restaurant'",
        "35% increase in new customer acquisition"
      ],
      image: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: {
        quote: "Working with Webundance completely transformed our business. Not only do we have a beautiful website that showcases our food, but we're actually getting found online and taking more orders than ever before.",
        name: "Michael Ramirez",
        position: "Owner"
      }
    },
    {
      id: 2,
      title: "Fitness Studio Grows Membership by 85%",
      business: "Tucson Fitness Studio",
      industry: "Health & Fitness",
      challenge: "Tucson Fitness Studio had an outdated website that wasn't generating leads. They were struggling to compete with larger fitness chains in the area and needed a digital strategy to highlight their personalized approach.",
      solution: "We developed a modern website with class scheduling, membership sign-up, and testimonial features. We implemented local SEO and created targeted content marketing to reach their ideal customers.",
      results: [
        "85% increase in new memberships",
        "65% more leads through contact form",
        "3x increase in class bookings online",
        "First page ranking for 'personal training Tucson'"
      ],
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: {
        quote: "Since launching our new website and implementing the SEO strategy, we've seen a dramatic increase in inquiries and new memberships. The website perfectly captures our unique approach and has helped us stand out from the competition.",
        name: "Sarah Johnson",
        position: "Owner"
      }
    },
    {
      id: 3,
      title: "Handcrafted Goods Store Increases E-commerce Sales by 150%",
      business: "Sonoran Crafts",
      industry: "Retail",
      challenge: "Sonoran Crafts had a poorly performing e-commerce site with low conversion rates and high cart abandonment. Their products weren't being found in online searches, limiting their reach beyond local customers.",
      solution: "We rebuilt their e-commerce platform with optimized product pages, streamlined checkout, and improved product photography. We implemented an SEO strategy focused on handcrafted goods and local artisans.",
      results: [
        "150% increase in online sales",
        "40% reduction in cart abandonment",
        "75% increase in organic traffic",
        "Expanded customer base to nationwide"
      ],
      image: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: {
        quote: "Our e-commerce sales have exploded since working with Webundance. The new website is beautiful and really showcases our products. We're now shipping to customers across the country, which was something we never thought possible for our small shop.",
        name: "Jennifer Williams",
        position: "Founder"
      }
    }
  ];

  const additionalTestimonials = [
    {
      quote: "Webundance took the time to truly understand our business before making any recommendations. The results speak for themselves - our website now generates 5-7 quality leads every week.",
      name: "David Martinez",
      company: "Southwest Home Services",
      rating: 5
    },
    {
      quote: "We've tried working with other web developers in the past, but none delivered the results that Webundance has. They're truly focused on business outcomes, not just pretty designs.",
      name: "Lisa Thompson",
      company: "Tucson Family Law",
      rating: 5
    },
    {
      quote: "The SEO work has transformed our business. We're now ranking on the first page for all our target keywords, and the traffic is converting into real customers.",
      name: "Robert Jackson",
      company: "Sonoran Solar Solutions",
      rating: 5
    },
    {
      quote: "We appreciated the data-driven approach to our website redesign. Every decision was backed by research and focused on improving our conversion rates.",
      name: "Amanda Lewis",
      company: "Desert Pet Care",
      rating: 5
    },
    {
      quote: "Our new website perfectly captures our brand and has significantly improved our professional image. We've received countless compliments from clients.",
      name: "Thomas Wilson",
      company: "Architect Associates",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Proven Results for Small Businesses</h1>
            <p className="text-xl text-text-body">
              Real clients, real growth, real impact
            </p>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Impact By The Numbers</h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              We measure success through real business results. Here's what we've achieved for our clients on average:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <AnimatedCounter end={35} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Increase in Website Traffic</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={48} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Improved Conversion Rates</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={65} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Better Search Rankings</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={42} suffix="%" className="mb-3" />
              <p className="text-lg font-medium">Increase in Revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Case Studies</h2>
            <p>Real-world examples of how we've helped businesses grow</p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="order-2 lg:order-1">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-lg font-medium text-primary mb-6">{study.business}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                      <p className="text-text-body mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                      <p className="text-text-body mb-4">{study.solution}</p>
                      
                      <h4 className="text-lg font-semibold mb-2">The Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <blockquote className="border-l-4 border-primary pl-4 italic text-text-body">
                      "{study.testimonial.quote}"
                      <footer className="mt-2 not-italic">
                        <strong>{study.testimonial.name}</strong>, {study.testimonial.position}
                      </footer>
                    </blockquote>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      style={{ maxHeight: '500px' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Feedback from businesses we've helped succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See These Results for Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our data-driven approach can help you achieve similar growth.
            </p>
            <NavLink to="/contact" className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 group">
              Schedule a Free Consultation
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;