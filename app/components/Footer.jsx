import React from 'react'

const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Programs", "About", "Contact", "FAQs"]
        },
        {
            title: "Need Help?",
            links: [
                "Admissions Information",
                "School Policies",
                "Fees & Payment Methods",
                "Academic Calendar",
                "Contact Us"
            ]

        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];

    return (
        <div className="px-15">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <a href="https://disneyvictorsjuniorschool.com">
                        <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* <!-- DV monogram --> */}
                            <path d="M20 15V35M20 15L30 25L40 15V35M20 20L25 25L20 30" stroke="#1D4ED8" stroke-width="3" />
                            <circle cx="50" cy="25" r="15" stroke="#1D4ED8" stroke-width="2" fill="none" />
                            <path d="M45 20L55 25L45 30" stroke="#1D4ED8" stroke-width="2" />

                            {/* <!-- Text --> */}
                            <g font-family="Arial, sans-serif" fill="#1E3A8A">
                                <text x="75" y="25" font-size="16" font-weight="bold">DISNEY VICTORS</text>
                                <text x="75" y="40" font-size="12">JUNIOR SCHOOL</text>
                            </g>

                            {/* <!-- Decorative line --> */}
                            <path d="M75 28H185" stroke="#1D4ED8" stroke-width="0.5" />
                        </svg>
                    </a>
                    <p className="max-w-[410px] mt-6">Disney Victors Junior School is committed to nurturing young minds through quality education, strong values, and a supportive learning environment. We strive to inspire excellence, creativity, and character in every child as they grow into confident and responsible learners.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <a href="https://prebuiltui.com">Disney Victors Junior</a> All Right Reserved.
            </p>
        </div>
    );
};

export default Footer