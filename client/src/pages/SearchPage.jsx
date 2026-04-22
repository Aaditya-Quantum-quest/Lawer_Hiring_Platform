import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  // Simple state for UI demonstration
  const [verifiedToggle, setVerifiedToggle] = useState(true);

  return (
    <main className="flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col lg:flex-row gap-8 pt-28 sm:pt-32">
      {/* Left Sidebar: Filters */}
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="lg:sticky top-32 bg-[var(--color-surface-container-lowest)] ambient-shadow rounded-lg p-6 ghost-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-xl text-[var(--color-primary-container)]">Refine Search</h2>
            <button className="text-[var(--color-on-tertiary-container)] text-sm font-medium hover:underline flex lg:hidden items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">filter_list</span> Filters
            </button>
            <button className="text-[var(--color-on-tertiary-container)] text-sm font-medium hover:underline hidden lg:block">Reset</button>
          </div>
          
          <div className="hidden lg:block space-y-6">
            {/* Specialization */}
          <div className="mb-6">
            <h3 className="font-body font-semibold text-sm text-[var(--color-on-surface)] mb-3">Specialization</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input defaultChecked className="rounded text-[var(--color-primary-container)] focus:ring-[var(--color-secondary-fixed-dim)] bg-[var(--color-surface-container-highest)] border-[var(--color-outline-variant)]/30 h-4 w-4" type="checkbox"/>
                <span className="text-sm text-[var(--color-on-surface-variant)] font-body">Corporate Law</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input className="rounded text-[var(--color-primary-container)] focus:ring-[var(--color-secondary-fixed-dim)] bg-[var(--color-surface-container-highest)] border-[var(--color-outline-variant)]/30 h-4 w-4" type="checkbox"/>
                <span className="text-sm text-[var(--color-on-surface-variant)] font-body">Intellectual Property</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input className="rounded text-[var(--color-primary-container)] focus:ring-[var(--color-secondary-fixed-dim)] bg-[var(--color-surface-container-highest)] border-[var(--color-outline-variant)]/30 h-4 w-4" type="checkbox"/>
                <span className="text-sm text-[var(--color-on-surface-variant)] font-body">Civil Litigation</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input className="rounded text-[var(--color-primary-container)] focus:ring-[var(--color-secondary-fixed-dim)] bg-[var(--color-surface-container-highest)] border-[var(--color-outline-variant)]/30 h-4 w-4" type="checkbox"/>
                <span className="text-sm text-[var(--color-on-surface-variant)] font-body">Tax Law</span>
              </label>
            </div>
          </div>
          {/* Court Level */}
          <div className="mb-6">
            <h3 className="font-body font-semibold text-sm text-[var(--color-on-surface)] mb-3">Court Level</h3>
            <select className="w-full rounded bg-[var(--color-surface-container-highest)] border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface-variant)] text-sm py-2 px-3 focus:ring-[var(--color-secondary-fixed-dim)] transition-colors outline-none">
              <option>Supreme Court</option>
              <option>High Court</option>
              <option>District Court</option>
              <option>Tribunals</option>
            </select>
          </div>
          {/* Experience */}
          <div className="mb-6">
            <h3 className="font-body font-semibold text-sm text-[var(--color-on-surface)] mb-3">Experience (Years)</h3>
            <input className="w-full h-1 bg-[var(--color-surface-variant)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary-container)]" max="40" min="0" type="range" defaultValue="15"/>
            <div className="flex justify-between text-xs text-[var(--color-on-surface-variant)] mt-2 font-mono">
              <span>0</span>
              <span>15+</span>
              <span>40</span>
            </div>
          </div>
          {/* Verified Toggle */}
          <div className="pt-4 border-t border-[var(--color-surface-variant)] flex items-center justify-between">
            <span className="font-body font-semibold text-sm text-[var(--color-on-surface)] flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--color-secondary-fixed-dim)] text-lg">verified</span>
              Verified Only
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input checked={verifiedToggle} onChange={() => setVerifiedToggle(!verifiedToggle)} className="sr-only peer" type="checkbox" value=""/>
              <div className="w-9 h-5 bg-[var(--color-surface-variant)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--color-primary-container)]"></div>
            </label>
          </div>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-grow w-full max-w-full lg:max-w-[calc(100%-20rem)] overflow-hidden">
        {/* Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-[var(--color-surface-container-low)] p-4 rounded-lg ghost-border">
          <p className="font-body text-[var(--color-on-surface-variant)] text-sm mb-4 sm:mb-0">
            Showing <span className="font-semibold text-[var(--color-primary-container)]">124</span> highly qualified legal professionals
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body text-[var(--color-on-surface-variant)]">Sort by:</span>
            <select className="rounded bg-[var(--color-surface-container-lowest)] border-none shadow-sm text-[var(--color-on-surface)] text-sm py-1.5 px-3 focus:ring-[var(--color-secondary-fixed-dim)] font-body outline-none">
              <option>Relevance</option>
              <option>Experience: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Fee: Low to High</option>
            </select>
          </div>
        </div>

        {/* Lawyer Cards List */}
        <div className="space-y-6">
          {/* Card 1 */}
          <article className="bg-[var(--color-surface-container-lowest)] ambient-shadow rounded-lg p-6 ghost-border relative overflow-hidden flex flex-col md:flex-row gap-6 hover:bg-[var(--color-surface-bright)] transition-colors duration-300">
            {/* Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-secondary-fixed-dim)]"></div>
            {/* Profile Photo & Badges */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--color-secondary-fixed-dim)] p-1">
                  <img alt="Adv. Alistair Sterling" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZyk0hHzurhLDAp6XtWUvmyLNuK9Y0oC-Cd2WRseohy0OFo1vZrG9MRcJ4bWBSsxHjVGcdaKJlal7sduoFBsyMq8h2TPkXcYMykxPS6YzqODKfzco9KFT2gbSCBetI0QXkrBt4d28mNqm935QAwDOYrUnqPRo_Tn9fmbA-DAjVJaz_yguvkI1hFG7cgjBgMVGbbr8lmkEg_sGvf7tuIKWz0GEAOx940IaagwxJspP2yHJKCrZwMd9SwRsJ2-eWmm-LXqFq7e5-z2iu"/>
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-[var(--color-tertiary-fixed-dim)] border-2 border-[var(--color-surface-container-lowest)] rounded-full" title="Available Now"></div>
              </div>
              <div className="mt-3 flex items-center gap-1 bg-[var(--color-surface-container-low)] px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[var(--color-secondary-fixed-dim)] text-[16px]">star</span>
                <span className="font-body text-sm font-semibold text-[var(--color-on-surface)]">4.9</span>
                <span className="font-body text-xs text-[var(--color-on-surface-variant)]">(142)</span>
              </div>
            </div>
            {/* Details */}
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-headline text-2xl text-[var(--color-primary-container)] font-semibold tracking-tight">Adv. Alistair Sterling</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-xs bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)] px-2 py-0.5 rounded">VAIN: AST-8924</span>
                    <span className="flex items-center gap-1 text-xs font-body text-[var(--color-on-surface-variant)]">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      New Delhi
                    </span>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="font-body text-sm text-[var(--color-on-surface-variant)]">Consultation Fee</div>
                  <div className="font-body font-semibold text-lg text-[var(--color-primary-container)]">₹5,000 <span className="text-xs font-normal">/hr</span></div>
                </div>
              </div>
              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-4 mt-3">
                <span className="font-body text-xs bg-[var(--color-surface-container)] text-[var(--color-on-tertiary-container)] px-2.5 py-1 rounded-full border border-[var(--color-on-tertiary-container)]/20">Corporate Law</span>
                <span className="font-body text-xs bg-[var(--color-surface-container)] text-[var(--color-on-tertiary-container)] px-2.5 py-1 rounded-full border border-[var(--color-on-tertiary-container)]/20">Mergers & Acquisitions</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 border-t border-[var(--color-surface-variant)] pt-4">
                <div>
                  <div className="font-body text-xs text-[var(--color-on-surface-variant)] mb-1 uppercase tracking-wider">Affiliated Courts</div>
                  <div className="font-body text-sm text-[var(--color-on-surface)]">Supreme Court of India, Delhi High Court</div>
                </div>
                <div>
                  <div className="font-body text-xs text-[var(--color-on-surface-variant)] mb-1 uppercase tracking-wider">Experience</div>
                  <div className="font-body text-sm text-[var(--color-on-surface)]">22 Years</div>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col justify-end gap-3 flex-shrink-0 md:w-40 border-t md:border-t-0 border-[var(--color-surface-variant)] pt-4 md:pt-0">
              <div className="text-left sm:hidden mb-2">
                <div className="font-body text-sm text-[var(--color-on-surface-variant)]">Consultation Fee</div>
                <div className="font-body font-semibold text-lg text-[var(--color-primary-container)]">₹5,000 <span className="text-xs font-normal">/hr</span></div>
              </div>
              <Link to="/lawyer/AST-8924" className="w-full text-center border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-body font-medium text-sm py-2 px-4 rounded hover:bg-[var(--color-surface-container-low)] transition-colors">View Profile</Link>
              <button className="w-full bg-[var(--color-secondary-fixed-dim)] text-[var(--color-on-secondary-fixed)] font-body font-semibold text-sm py-2 px-4 rounded hover:bg-[var(--color-secondary-fixed)] transition-colors">Book Now</button>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-[var(--color-surface-container-lowest)] ambient-shadow rounded-lg p-6 ghost-border relative overflow-hidden flex flex-col md:flex-row gap-6 hover:bg-[var(--color-surface-bright)] transition-colors duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-secondary-fixed-dim)]"></div>
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--color-secondary-fixed-dim)] p-1">
                  <img alt="Adv. Priya Sharma" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBerYOON8_GOiG6f8_5O4itbRy6VKNpUnk8S9GnrlmlixI4W-rvkGyzCtdTHaW-_PXNAY6lINeIV7_wBBbH9A87WTMYvbqKDs3R47N9u-24QkD-0vhdmikZIYWX8wQlJofErs7xs9idOdPIuL97Q7PeUvA52Vca_RvwcCqrTMj8WJmUb9AlbMxLlEbyepx1g9vIUr0fyv_j5oLRpAQtyUj5YmLhkT-576eS9GvnFumRTc3JI7puxGrR7umftH_7hG5Vb4U49rzhbtIg"/>
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-[var(--color-tertiary-fixed-dim)] border-2 border-[var(--color-surface-container-lowest)] rounded-full" title="Available Now"></div>
              </div>
              <div className="mt-3 flex items-center gap-1 bg-[var(--color-surface-container-low)] px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[var(--color-secondary-fixed-dim)] text-[16px]">star</span>
                <span className="font-body text-sm font-semibold text-[var(--color-on-surface)]">4.8</span>
                <span className="font-body text-xs text-[var(--color-on-surface-variant)]">(98)</span>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-headline text-2xl text-[var(--color-primary-container)] font-semibold tracking-tight">Adv. Priya Sharma</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-xs bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)] px-2 py-0.5 rounded">VAIN: PSH-4102</span>
                    <span className="flex items-center gap-1 text-xs font-body text-[var(--color-on-surface-variant)]">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Mumbai
                    </span>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="font-body text-sm text-[var(--color-on-surface-variant)]">Consultation Fee</div>
                  <div className="font-body font-semibold text-lg text-[var(--color-primary-container)]">₹3,500 <span className="text-xs font-normal">/hr</span></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 mt-3">
                <span className="font-body text-xs bg-[var(--color-surface-container)] text-[var(--color-on-tertiary-container)] px-2.5 py-1 rounded-full border border-[var(--color-on-tertiary-container)]/20">Intellectual Property</span>
                <span className="font-body text-xs bg-[var(--color-surface-container)] text-[var(--color-on-tertiary-container)] px-2.5 py-1 rounded-full border border-[var(--color-on-tertiary-container)]/20">Technology Law</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 border-t border-[var(--color-surface-variant)] pt-4">
                <div>
                  <div className="font-body text-xs text-[var(--color-on-surface-variant)] mb-1 uppercase tracking-wider">Affiliated Courts</div>
                  <div className="font-body text-sm text-[var(--color-on-surface)]">Bombay High Court, NCLT</div>
                </div>
                <div>
                  <div className="font-body text-xs text-[var(--color-on-surface-variant)] mb-1 uppercase tracking-wider">Experience</div>
                  <div className="font-body text-sm text-[var(--color-on-surface)]">14 Years</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col justify-end gap-3 flex-shrink-0 md:w-40 border-t md:border-t-0 border-[var(--color-surface-variant)] pt-4 md:pt-0">
              <div className="text-left sm:hidden mb-2">
                <div className="font-body text-sm text-[var(--color-on-surface-variant)]">Consultation Fee</div>
                <div className="font-body font-semibold text-lg text-[var(--color-primary-container)]">₹3,500 <span className="text-xs font-normal">/hr</span></div>
              </div>
              <Link to="/lawyer/PSH-4102" className="w-full text-center border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-body font-medium text-sm py-2 px-4 rounded hover:bg-[var(--color-surface-container-low)] transition-colors">View Profile</Link>
              <button className="w-full bg-[var(--color-secondary-fixed-dim)] text-[var(--color-on-secondary-fixed)] font-body font-semibold text-sm py-2 px-4 rounded hover:bg-[var(--color-secondary-fixed)] transition-colors">Book Now</button>
            </div>
          </article>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center items-center gap-2">
          <button className="p-2 text-[var(--color-outline)] hover:text-[var(--color-primary-container)] transition-colors disabled:opacity-50" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary)] font-body text-sm flex items-center justify-center">1</button>
          <button className="w-8 h-8 rounded-full text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-highest)] font-body text-sm flex items-center justify-center transition-colors">2</button>
          <button className="w-8 h-8 rounded-full text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-highest)] font-body text-sm flex items-center justify-center transition-colors">3</button>
          <span className="text-[var(--color-on-surface-variant)] px-1">...</span>
          <button className="w-8 h-8 rounded-full text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-highest)] font-body text-sm flex items-center justify-center transition-colors">12</button>
          <button className="p-2 text-[var(--color-outline)] hover:text-[var(--color-primary-container)] transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
