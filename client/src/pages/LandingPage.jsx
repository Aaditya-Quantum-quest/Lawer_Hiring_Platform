import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      {/* Main Content */}
      <main className="pt-24 min-h-[80vh]">
        {/* Hero Section */}
        <section className="relative bg-navy-gradient text-on-primary pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Subtle Watermark Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <span className="material-symbols-outlined fill-icon text-[400px] text-primary-fixed">balance</span>
          </div>
          <div className="relative max-w-screen-xl mx-auto z-10 text-center">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Find Verified Lawyers Across India's Courts
            </h1>
            <p className="font-body text-lg md:text-xl text-[var(--color-primary-fixed-dim)] mb-12 max-w-2xl mx-auto font-light">
              Connect with Bar Council verified advocates — Supreme Court to District Courts
            </p>
            {/* Search Card */}
            <div className="bg-[var(--color-surface-container-lowest)]/90 backdrop-blur-md rounded-lg ambient-shadow p-6 max-w-5xl mx-auto ghost-border">
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-left">
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface-variant block">Specialization</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-[var(--color-outline)]">work</span>
                    <select className="w-full bg-[var(--color-surface-container-highest)] border-0 rounded pl-10 pr-4 py-3 text-[var(--color-on-surface)] focus:ring-0 focus:border-b-2 focus:border-b-[var(--color-secondary-fixed-dim)] transition-all appearance-none outline-none">
                      <option disabled selected value="">Area of Law</option>
                      <option>Criminal Defense</option>
                      <option>Corporate Law</option>
                      <option>Family Law</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-[var(--color-outline)] pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface-variant block">Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-[var(--color-outline)]">location_on</span>
                    <input className="w-full bg-[var(--color-surface-container-highest)] border-0 rounded pl-10 pr-4 py-3 text-[var(--color-on-surface)] focus:ring-0 focus:border-b-2 focus:border-b-[var(--color-secondary-fixed-dim)] transition-all placeholder-[var(--color-outline)] outline-none" placeholder="City or Pin Code" type="text"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-on-surface-variant block">Court Level</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-[var(--color-outline)]">account_balance</span>
                    <select className="w-full bg-[var(--color-surface-container-highest)] border-0 rounded pl-10 pr-4 py-3 text-[var(--color-on-surface)] focus:ring-0 focus:border-b-2 focus:border-b-[var(--color-secondary-fixed-dim)] transition-all appearance-none outline-none">
                      <option disabled selected value="">Select Court</option>
                      <option>Supreme Court</option>
                      <option>High Court</option>
                      <option>District Court</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-[var(--color-outline)] pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <Link to="/search" className="w-full bg-[var(--color-secondary-fixed-dim)] text-[var(--color-on-secondary-fixed)] font-semibold py-3 px-6 rounded hover:bg-[var(--color-secondary-fixed)] transition-colors flex justify-center items-center h-[48px]">
                    <span className="material-symbols-outlined mr-2">search</span> Find a Lawyer
                  </Link>
                </div>
              </form>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-[var(--color-primary-fixed-dim)] font-body text-sm tracking-wide">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-[var(--color-secondary-fixed-dim)] fill-icon">verified_user</span>
                <span>5,000+ Verified Lawyers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-[var(--color-secondary-fixed-dim)] fill-icon">account_balance</span>
                <span>672+ Courts Listed</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
