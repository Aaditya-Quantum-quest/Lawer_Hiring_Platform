import React from 'react';

const LawyerProfile = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row gap-12">
      {/* Left Column: Profile Canvas (65%) */}
      <div className="lg:w-[65%] space-y-16">
        {/* Hero / Brief Card */}
        <section className="bg-[var(--color-surface-container-lowest)] rounded-lg p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start shadow-[0_4px_20px_rgba(25,28,30,0.03)] border-[var(--color-outline-variant)]/15 border">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-surface-container-low)] rounded-bl-full -z-10 opacity-50"></div>
          {/* Profile Photo with Verified Ring */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-[var(--color-secondary-fixed-dim)] to-[var(--color-secondary-container)]">
              <img alt="Profile photo of Eleanor Vance" className="w-full h-full rounded-full object-cover border-4 border-[var(--color-surface-container-lowest)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrLpzl63kiqQQ8LQEgm0Ban_scjRdtPQvjWqCwaLw9bj0cwAVjcpluXOHS28AUmEGLnsT4JXdBzEMkT5OkLqEJ74s24x8O-Lx_PCK0Lni3BV7XzXM5V4y5MQmPfN6Ldnhb2UezNjRJVZDUmGNT4uhQQ_d1OMJD5jIG2MmYlDBG4lmFQrjrzGcfTpmHJyAoF2vxPzAj2v6RxiZRy7tRce8Bf0wdVZBdWmpcfsy4-w3qi8oBY7JyJhsBsCzEfUVr-RAXZOfABBUnHXY"/>
            </div>
            <div className="absolute bottom-2 right-2 bg-[var(--color-secondary-fixed-dim)] text-[var(--color-on-secondary-fixed)] rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined fill text-sm">verified</span>
            </div>
          </div>
          {/* Identity Details */}
          <div className="flex-grow pt-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)] font-mono text-xs px-2 py-1 rounded tracking-wider">VAIN-8492-AX</span>
              <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-on-tertiary-container)] bg-[var(--color-tertiary-fixed)]/20 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[14px]">how_to_reg</span> Verified in Person
              </span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl text-[var(--color-primary-container)] tracking-tight leading-none mb-4 relative inline-block">
              Eleanor Vance, Esq.
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--color-secondary-fixed-dim)]"></div>
            </h1>
            <p className="text-[var(--color-on-surface-variant)] text-lg font-headline italic mb-6">Senior Partner, Corporate Litigation & Appellate Advocacy</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[var(--color-outline)]">account_balance</span>
                <span>High Court Practitioner</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[var(--color-outline)]">location_on</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[var(--color-secondary-fixed-dim)] fill-icon">star</span>
                <span>4.9 (128 Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations (Tag Cloud) */}
        <section className="bg-[var(--color-surface-container-low)] rounded-lg p-8 pl-12 border-l-4 border-l-[var(--color-tertiary-fixed-dim)]">
          <h2 className="font-headline text-2xl text-[var(--color-on-surface)] mb-6 tracking-wide">Areas of Focus</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[var(--color-surface-container-lowest)] text-[var(--color-on-tertiary-container)] text-sm rounded border border-[var(--color-outline-variant)]/20 shadow-sm transition-colors hover:bg-[var(--color-tertiary-fixed)]/10">Corporate Litigation</span>
            <span className="px-4 py-2 bg-[var(--color-surface-container-lowest)] text-[var(--color-on-tertiary-container)] text-sm rounded border border-[var(--color-outline-variant)]/20 shadow-sm transition-colors hover:bg-[var(--color-tertiary-fixed)]/10">Mergers & Acquisitions</span>
            <span className="px-4 py-2 bg-[var(--color-surface-container-lowest)] text-[var(--color-on-tertiary-container)] text-sm rounded border border-[var(--color-outline-variant)]/20 shadow-sm transition-colors hover:bg-[var(--color-tertiary-fixed)]/10">Appellate Practice</span>
            <span className="px-4 py-2 bg-[var(--color-surface-container-lowest)] text-[var(--color-on-tertiary-container)] text-sm rounded border border-[var(--color-outline-variant)]/20 shadow-sm transition-colors hover:bg-[var(--color-tertiary-fixed)]/10">Intellectual Property</span>
            <span className="px-4 py-2 bg-[var(--color-surface-container-lowest)] text-[var(--color-on-tertiary-container)] text-sm rounded border border-[var(--color-outline-variant)]/20 shadow-sm transition-colors hover:bg-[var(--color-tertiary-fixed)]/10">Securities Fraud</span>
          </div>
        </section>

        {/* About / Bio */}
        <section className="pr-8">
          <h2 className="font-headline text-2xl text-[var(--color-on-surface)] mb-6 tracking-wide">Professional Summary</h2>
          <div className="prose max-w-none text-[var(--color-on-surface-variant)] text-base leading-relaxed space-y-4">
            <p>With over two decades of experience in high-stakes corporate litigation, Eleanor Vance brings a meticulous and authoritative approach to complex legal challenges. She has successfully represented Fortune 500 companies in multi-jurisdictional disputes and appellate proceedings before the High Court.</p>
            <p>Her practice is defined by a rigorous analytical methodology and a commitment to institutional integrity. Prior to entering private practice, Ms. Vance served as a judicial clerk in the Second Circuit Court of Appeals, providing her with invaluable insight into the adjudicative process at the highest levels.</p>
          </div>
        </section>
      </div>

      {/* Right Column: Sticky Booking Sidebar (35%) */}
      <aside className="lg:w-[35%] w-full relative">
        <div className="static lg:sticky top-auto lg:top-32 bg-[var(--color-surface-container-lowest)] rounded-lg shadow-[0_12px_40px_rgba(25,28,30,0.06)] border border-[var(--color-outline-variant)]/15 p-6 sm:p-8 flex flex-col gap-8">
          {/* Fee Header */}
          <div className="text-center pb-6 border-b border-[var(--color-surface-container-low)]">
            <p className="text-sm text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-2 font-medium">Initial Consultation</p>
            <div className="flex items-center justify-center gap-1 font-headline text-[var(--color-primary-container)]">
              <span className="text-2xl">₹</span>
              <span className="text-5xl">4500</span>
              <span className="text-lg text-[var(--color-on-surface-variant)] self-end mb-1">/ hr</span>
            </div>
          </div>
          {/* Modality Selector */}
          <div className="bg-[var(--color-surface-container-low)] p-1 rounded flex">
            <button className="flex-1 py-2 text-sm font-medium bg-[var(--color-surface-container-lowest)] text-[var(--color-primary-container)] shadow-sm rounded">Video Conference</button>
            <button className="flex-1 py-2 text-sm font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors rounded">In-Chamber</button>
          </div>
          {/* Simple Date/Time Selection placeholder */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg text-[var(--color-on-surface)]">Select Availability</h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Dates */}
              <div className="col-span-3 flex justify-between items-center mb-2 px-2">
                <button className="material-symbols-outlined text-[var(--color-outline)] hover:text-[var(--color-on-surface)]">chevron_left</button>
                <span className="font-medium text-sm text-[var(--color-on-surface)]">October 2024</span>
                <button className="material-symbols-outlined text-[var(--color-outline)] hover:text-[var(--color-on-surface)]">chevron_right</button>
              </div>
              {/* Days (Simplified) */}
              <button className="py-3 px-2 border border-[var(--color-outline-variant)]/30 rounded text-center hover:border-[var(--color-secondary-fixed-dim)] transition-colors bg-[var(--color-surface-container-low)]">
                <div className="text-xs text-[var(--color-on-surface-variant)] mb-1">Mon</div>
                <div className="font-medium text-[var(--color-on-surface)]">14</div>
              </button>
              <button className="py-3 px-2 border-2 border-[var(--color-secondary-fixed-dim)] rounded text-center bg-[var(--color-secondary-fixed)]/10">
                <div className="text-xs text-[var(--color-secondary-fixed-dim)] mb-1">Tue</div>
                <div className="font-medium text-[var(--color-primary-container)]">15</div>
              </button>
              <button className="py-3 px-2 border border-[var(--color-outline-variant)]/30 rounded text-center hover:border-[var(--color-secondary-fixed-dim)] transition-colors">
                <div className="text-xs text-[var(--color-on-surface-variant)] mb-1">Wed</div>
                <div className="font-medium text-[var(--color-on-surface)]">16</div>
              </button>
            </div>
            {/* Times */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="py-2 text-sm border border-[var(--color-outline-variant)]/30 rounded text-[var(--color-on-surface)] hover:border-[var(--color-primary-container)] transition-colors">10:00 AM</button>
              <button className="py-2 text-sm border-2 border-[var(--color-primary-container)] bg-[var(--color-primary-container)]/5 rounded text-[var(--color-primary-container)] font-medium">1:30 PM</button>
              <button className="py-2 text-sm border border-[var(--color-outline-variant)]/30 rounded text-[var(--color-on-surface)] hover:border-[var(--color-primary-container)] transition-colors">3:00 PM</button>
              <button className="py-2 text-sm border border-[var(--color-outline-variant)]/30 rounded text-[var(--color-outline)] bg-[var(--color-surface-container-low)] cursor-not-allowed line-through">4:30 PM</button>
            </div>
          </div>
          {/* CTA */}
          <button className="w-full bg-[var(--color-secondary-fixed-dim)] hover:bg-[var(--color-secondary-fixed)] text-[var(--color-on-secondary-fixed)] py-4 rounded font-serif text-lg tracking-wide transition-colors shadow-sm mt-4">
            Book Consultation
          </button>
          {/* Trust Signals */}
          <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-on-surface-variant)] mt-2">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>Secure Payment via JurisPay</span>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default LawyerProfile;
