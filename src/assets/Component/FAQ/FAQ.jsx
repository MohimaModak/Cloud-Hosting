import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./FAQ.css"

export default function FAQ() {

    useEffect(() => {
        AOS.init({
            duration: 1500, 
            easing: 'ease-out', 
            once: true, 
            delay: 100, 
        });
        AOS.refresh(); 
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section id='/Faq' className="py-24 px-16 bg faq relative text-slate-100">
        <div data-aos="fade-up">
            <div
                data-aos="fade-up" className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold">
                <span className='text-teal-300'> Frequently</span> Asked Questions
                </h2>
                <p className="mt-4 text-lg lg:text-xl my-10">
                    Get answers to the most common questions about InvestWise.
                </p>
            </div>

            <div className="mt-12 max-w-5xl mx-auto">
                {/* FAQ Item 1 */}
                <div
                    data-aos="fade-up" className="bg-slate-50 p-6 rounded-lg shadow-md mb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleToggle(1)}
                    >
                        <h3 className="text-xl font-semibold text-slate-800">
                            Is my data safe with CloudNest?
                        </h3>
                        <span className="text-slate-800">{activeIndex === 1 ? '-' : '+'}</span>
                    </div>
                    {activeIndex === 1 && (
                        <p className="mt-4 text-slate-800 font-medium">
                            Yes, we use military-grade encryption to ensure your data is secure.
                        </p>
                    )}
                </div>

                {/* FAQ Item 2 */}
                <div
                    data-aos="fade-up" className="bg-slate-50 p-6 rounded-lg shadow-md mb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleToggle(2)}
                    >
                        <h3 className="text-xl font-semibold text-slate-800">
                            Can I upgrade my plan later?
                        </h3>
                        <span className="text-slate-600">{activeIndex === 2 ? '-' : '+'}</span>
                    </div>
                    {activeIndex === 2 && (
                        <p className="mt-4 text-slate-800 font-medium">
                            Absolutely! You can upgrade your plan at any time.
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-12 text-center">
                <button className="inline-block px-6 py-3 bg-teal-300 font-bold text-blue-950 rounded-lg shadow-2xl hover:amber-800 transition">
                    View All FAQs
                </button>
            </div>

           
            <script type="application/ld+json">
                {`
        {
          
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is my data safe with CloudNest?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use military-grade encryption to ensure your data is secure."
              }
            },
            {
              "@type": "Question",
              "name": "Can I upgrade my plan later?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! You can upgrade your plan at any time."
              }
            }
          ]
        }
        `}
            </script>
            </div>
        </section>
    );
}
