import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') === 'lawyer' ? 'lawyer' : 'client';
  
  const [role, setRole] = useState(initialRole);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation for register hook
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
      <div className="w-full max-w-md bg-[var(--color-surface-container-lowest)] rounded-lg p-8 sm:p-10 ambient-shadow ghost-border">
        
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-headline tracking-tight text-[var(--color-primary-container)]">Create an account</h1>
          <p className="font-body text-sm text-[var(--color-on-surface-variant)]">
            Join The Digital Jurisconsult as a Client or Lawyer
          </p>
        </div>

        <div className="mb-8 flex rounded bg-[var(--color-surface-container-high)] p-1">
          <button
            className={`flex-1 rounded py-2 text-sm font-label transition-colors ${role === 'client' ? 'bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] shadow-sm' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'}`}
            onClick={() => setRole('client')}
          >
            Client
          </button>
          <button
            className={`flex-1 rounded py-2 text-sm font-label transition-colors ${role === 'lawyer' ? 'bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] shadow-sm' : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'}`}
            onClick={() => setRole('lawyer')}
          >
            Lawyer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="font-label text-sm font-medium text-[var(--color-on-surface)]">Full Name</label>
            <input 
              type="text" 
              className="form-input-legal w-full bg-[var(--color-surface-container-highest)] border-0 rounded px-4 py-3 text-[var(--color-on-surface)] focus:ring-0 focus:bg-[var(--color-surface-container-lowest)] transition-all outline-none"
              placeholder={role === 'lawyer' ? "Adv. Rajesh Kumar" : "John Doe"}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-label text-sm font-medium text-[var(--color-on-surface)]">Email</label>
            <input 
              type="email" 
              className="form-input-legal w-full bg-[var(--color-surface-container-highest)] border-0 rounded px-4 py-3 text-[var(--color-on-surface)] focus:ring-0 focus:bg-[var(--color-surface-container-lowest)] transition-all outline-none"
              placeholder="m@example.com" 
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-label text-sm font-medium text-[var(--color-on-surface)]">Password</label>
            <input 
              type="password" 
              className="form-input-legal w-full bg-[var(--color-surface-container-highest)] border-0 rounded px-4 py-3 text-[var(--color-on-surface)] focus:ring-0 focus:bg-[var(--color-surface-container-lowest)] transition-all outline-none"
              required
            />
          </div>
          
          {role === 'lawyer' && (
            <div className="rounded border-l-4 border-[var(--color-secondary-fixed-dim)] bg-[var(--color-surface-container-low)] p-4 mt-2">
              <p className="font-body text-sm text-[var(--color-on-surface-variant)]">
                As a professional, you will be redirected to the Practitioner Registration flow to upload your Bar Council credentials after signup.
              </p>
            </div>
          )}

          <button type="submit" className="w-full btn-primary-gradient px-8 py-3.5 rounded font-label text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90 mt-4">
            {role === 'lawyer' ? 'Begin Registration' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-[var(--color-surface-variant)]">
          <p className="font-body text-sm text-[var(--color-on-surface-variant)]">
            Already have an account?{' '}
            <Link to="/login" className="text-[var(--color-primary)] hover:text-[var(--color-primary-container)] hover:underline font-semibold transition-colors">
              Log in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
