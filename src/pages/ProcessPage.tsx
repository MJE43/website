import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProcessTimeline from '../components/sections/ProcessTimeline';

interface FAQItem {
  question: string;
  answer: string;
}

const ProcessPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How long does it typically take to build a website?",
      answer: "Our typical website project timeline is 4-8 weeks from start to finish, depending on the complexity of the project and how quickly we receive feedback and content. Simple brochure sites may take as little as 3-4 weeks, while more complex sites with custom functionality may take 8-12 weeks."
    },
    {
      question: "What information do you need from me to get started?",
      answer: "To get started, we'll need information about your business goals, target audience, brand guidelines (if you have them), content for the website (or we can help create it), and examples of websites you like. During our discovery phase, we'll provide a detailed questionnaire to gather all necessary information."
    },
    {
      question: "How much input will I have during the design process?",
      answer: "You'll have significant input throughout the entire process. We believe in collaboration and will seek your feedback at each stage. After our initial discovery, we'll present design concepts, and you'll have the opportunity to provide feedback before we proceed with development."
    },
    {
      question: "What happens after my website launches?",
      answer: "After launch, we provide a 30-day support period to address any issues that may arise. We also offer website maintenance packages and ongoing SEO services to ensure your site continues to perform well and grow with your business."
    },
    {
      question: "How do you measure the success of a website?",
      answer: "We measure success based on the specific goals established during our strategy phase. This typically includes metrics like increased traffic, improved conversion rates, higher search engine rankings, and ultimately, more leads or sales for your business. We provide regular reports to track these metrics."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer several website maintenance packages to keep your site secure, updated, and performing optimally. These include regular software updates, security monitoring, performance optimization, content updates, and technical support."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">A Proven Process for Digital Success</h1>
            <p className="text-xl text-text-body">
              From consultation to continuous growth, our structured approach ensures measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Process Details */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">1. Discovery & Consultation</h3>
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      We begin by understanding your business, goals, and challenges. This crucial first step ensures that every decision we make is aligned with your business objectives.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Initial meeting to understand your needs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Comprehensive business goals assessment</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Competitive analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Project scoping and requirements gathering</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Discovery & Consultation" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">2. Strategy Development</h3>
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Strategy Development" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <p className="mb-4">
                      Based on our findings, we develop a comprehensive strategy tailored to your specific needs. This roadmap will guide the entire project and establish clear metrics for success.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Custom roadmap creation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Timeline establishment</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Budget planning</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>KPI definition and measurement plan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">3. Design & Development</h3>
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      With a solid strategy in place, our team brings your vision to life through thoughtful design and robust development, always keeping your business goals at the forefront.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Wireframing and information architecture</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Design mockups and visual direction</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Development sprints with regular milestones</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Client feedback loops throughout</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Design & Development" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">4. Launch & Optimization</h3>
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Launch & Optimization" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <p className="mb-4">
                      After thorough testing, we launch your solution and continue to monitor and optimize performance to ensure you're getting the best possible results.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Comprehensive testing and quality assurance</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Launch preparation and execution</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Performance monitoring and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>Ongoing improvements and optimizations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our process and approach</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className={`w-full text-left p-5 flex justify-between items-center ${
                    openFAQ === index ? 'bg-primary text-white rounded-t-lg' : 'bg-white rounded-lg'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFAQ === index && (
                  <div className="bg-white p-5 rounded-b-lg shadow-md">
                    <p className="text-text-body">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our proven process can help your business achieve its digital goals.
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

export default ProcessPage;