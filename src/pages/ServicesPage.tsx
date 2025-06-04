import React from 'react';
import { NavLink } from 'react-router-dom';
import { Monitor, Code, Search, BarChart2, Database, Settings } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Solutions That Drive Real Results</h1>
            <p className="text-xl text-text-body">
              Comprehensive web services tailored to small business success
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Monitor size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Custom Web Development</h2>
              <p className="text-text-body mb-6">
                We create beautiful, functional websites that are tailored to your specific business needs. Our sites are designed to convert visitors into customers while providing an exceptional user experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Responsive design that works on all devices',
                  'Fast loading speeds for better user experience and SEO',
                  'Intuitive navigation and thoughtful user flows',
                  'Search engine optimization built in from the ground up',
                  'Secure, reliable hosting with regular backups',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Starting at:</span>
                <span className="text-xl font-bold text-primary">$3,000</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Web Development" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Content Section */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SEO & Content Strategy" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Search size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">SEO & Content Strategy</h2>
              <p className="text-text-body mb-6">
                We help your business get found online with data-driven SEO strategies and compelling content that speaks to your ideal customers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Comprehensive keyword research and competitive analysis',
                  'On-page optimization for higher rankings',
                  'Content strategy aligned with business goals',
                  'Local SEO to dominate in your geographic area',
                  'Regular reporting and strategy adjustments',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Starting at:</span>
                <span className="text-xl font-bold text-primary">$800/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Insights Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Database size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Analytics & Insights</h2>
              <p className="text-text-body mb-6">
                Understand how your website is performing and make data-driven decisions with our comprehensive analytics setup and regular reporting.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Professional analytics setup and configuration',
                  'Custom dashboards tailored to your business goals',
                  'Monthly performance reports with actionable insights',
                  'Conversion tracking to measure ROI',
                  'User behavior analysis to optimize your site',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Starting at:</span>
                <span className="text-xl font-bold text-primary">$500/month</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Analytics & Insights" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Service Packages</h2>
            <p>Choose the package that best fits your business needs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-white border border-gray-200"></th>
                  <th className="p-4 text-center bg-white border border-gray-200">
                    <div className="font-semibold text-lg">Starter</div>
                    <div className="text-primary font-bold mt-1">$1,000 - $3,000</div>
                  </th>
                  <th className="p-4 text-center bg-primary/5 border border-gray-200 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-4 rounded-full text-xs font-bold">Popular</div>
                    <div className="font-semibold text-lg">Growth</div>
                    <div className="text-primary font-bold mt-1">$3,000 - $6,000</div>
                  </th>
                  <th className="p-4 text-center bg-white border border-gray-200">
                    <div className="font-semibold text-lg">Premium</div>
                    <div className="text-primary font-bold mt-1">$6,000+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 bg-white border border-gray-200 font-medium">Responsive Website</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Basic (5 pages)</td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">Custom (10-15 pages)</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Advanced (15+ pages)</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border border-gray-200 font-medium">SEO Setup</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Basic</td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">Comprehensive</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Advanced</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border border-gray-200 font-medium">Content Creation</td>
                  <td className="p-4 text-center bg-white border border-gray-200">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">Basic (5 pages)</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Full Site + Blog</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border border-gray-200 font-medium">Analytics Setup</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Basic</td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">Advanced</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Comprehensive</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border border-gray-200 font-medium">Monthly Reporting</td>
                  <td className="p-4 text-center bg-white border border-gray-200">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">Basic</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Comprehensive</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border border-gray-200 font-medium">Ongoing SEO</td>
                  <td className="p-4 text-center bg-white border border-gray-200">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">Optional</td>
                  <td className="p-4 text-center bg-white border border-gray-200">Included</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border border-gray-200"></td>
                  <td className="p-4 text-center bg-white border border-gray-200">
                    <NavLink to="/contact" className="btn-secondary py-2 px-6">
                      Get Started
                    </NavLink>
                  </td>
                  <td className="p-4 text-center bg-primary/5 border border-gray-200">
                    <NavLink to="/contact" className="btn-primary py-2 px-6">
                      Get Started
                    </NavLink>
                  </td>
                  <td className="p-4 text-center bg-white border border-gray-200">
                    <NavLink to="/contact" className="btn-secondary py-2 px-6">
                      Get Started
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Service Is Right For You?</h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a free consultation to discuss your specific needs and goals. We'll help you choose the perfect solution for your business.
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

export default ServicesPage;