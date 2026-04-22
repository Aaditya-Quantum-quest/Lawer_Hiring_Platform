import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-12 sm:mt-20 bg-[#f2f3f6] dark:bg-[#191c1e] text-[#1A2B5F] dark:text-[#dce1ff] font-sans text-sm tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 sm:px-6 lg:px-12 py-10 sm:py-16 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="font-serif text-lg text-[#1A2B5F] dark:text-[#f8f9fc] font-headline mb-4">The Digital Jurisconsult</div>
          <p className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 max-w-md leading-relaxed text-sm">
            © {new Date().getFullYear()} The Digital Jurisconsult. Institutional Precision. All Rights Reserved. Legal Disclaimer: Information is not legal advice.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-[var(--color-on-surface)] mb-2 sm:mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 hover:text-[#1A2B5F] dark:hover:text-[#f8f9fc] underline decoration-[#C9A84C] transition-colors duration-200">Supreme Court Resources</Link></li>
            <li><Link to="/" className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 hover:text-[#1A2B5F] dark:hover:text-[#f8f9fc] underline decoration-[#C9A84C] transition-colors duration-200">High Court Listings</Link></li>
            <li><Link to="/" className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 hover:text-[#1A2B5F] dark:hover:text-[#f8f9fc] underline decoration-[#C9A84C] transition-colors duration-200">Legal Aid Directory</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-on-surface mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 hover:text-[#1A2B5F] dark:hover:text-[#f8f9fc] underline decoration-[#C9A84C] transition-colors duration-200">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 hover:text-[#1A2B5F] dark:hover:text-[#f8f9fc] underline decoration-[#C9A84C] transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="/refund" className="text-[#191c1e]/60 dark:text-[#f8f9fc]/60 hover:text-[#1A2B5F] dark:hover:text-[#f8f9fc] underline decoration-[#C9A84C] transition-colors duration-200">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
