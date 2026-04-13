import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const PLANS = [
  {
    name: 'Pay As You Go',
    price: null,
    label: 'No monthly commitment',
    desc: 'Perfect for students who want flexibility. Pay only for the sessions you book.',
    cta: 'Browse Tutors',
    href: '/tutors',
    features: [
      'Access to all tutors',
      'Trial sessions available',
      'Real-time messaging',
      'Session recordings (7 days)',
      'Standard support',
    ],
    highlight: false,
  },
  {
    name: 'Pro Learner',
    price: '$49',
    label: 'per month',
    desc: 'Best for students who learn consistently. Save 20% on all sessions.',
    cta: 'Start Free Trial',
    href: '/signup',
    features: [
      'Everything in Pay As You Go',
      '20% off all session bookings',
      'Priority tutor matching',
      'Session recordings (30 days)',
      'Weekly progress reports',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Team / School',
    price: 'Custom',
    label: 'contact us',
    desc: "Tailored plans for schools, bootcamps, and organizations with multiple learners.",
    cta: 'Contact Sales',
    href: '/contact',
    features: [
      'Everything in Pro Learner',
      'Bulk session credits',
      'Admin dashboard',
      'Custom tutor vetting',
      'SSO & LMS integration',
      'Dedicated account manager',
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-gray, #f7f8fb)' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--sys-on-primary-colour-role)', borderBottom: '1px solid var(--sys-color-grey03)', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--sys-primary-colour-role)', textTransform: 'uppercase', marginBottom: '16px' }}>Pricing</p>
        <h1 style={{ fontSize: '52px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.1, maxWidth: '640px', margin: '0 auto 20px' }}>
          Simple, transparent pricing
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--sys-color-grey04)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
          No hidden fees. Pay per session or save with a monthly plan.
        </p>
      </section>

      {/* Plans */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'start' }}>
          {PLANS.map(p => (
            <div key={p.name} style={{
              backgroundColor: p.highlight ? 'var(--sys-primary-colour-role)' : 'var(--sys-on-primary-colour-role)',
              color: p.highlight ? 'white' : 'var(--sys-neutral-colour-role)',
              border: p.highlight ? 'none' : '1px solid var(--sys-color-grey03)',
              borderRadius: '20px',
              padding: '36px 32px',
              position: 'relative',
            }}>
              {p.highlight && (
                <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f59e0b', color: 'white', padding: '4px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 800, whiteSpace: 'nowrap' }}>MOST POPULAR</span>
              )}

              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', opacity: p.highlight ? 0.85 : 1, color: p.highlight ? 'white' : 'var(--sys-color-grey04)' }}>{p.name}</h3>

              <div style={{ margin: '0 0 8px' }}>
                {p.price ? (
                  <span style={{ fontSize: '44px', fontWeight: 800, lineHeight: 1 }}>{p.price}</span>
                ) : (
                  <span style={{ fontSize: '28px', fontWeight: 700, opacity: 0.7 }}>Free</span>
                )}
                <span style={{ fontSize: '14px', marginLeft: '6px', opacity: 0.7 }}>{p.label}</span>
              </div>

              <p style={{ fontSize: '14px', lineHeight: 1.6, margin: '0 0 28px', opacity: 0.8 }}>{p.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', opacity: 0.9 }}>
                    <i className="ph-fill ph-check-circle" style={{ color: p.highlight ? 'rgba(255,255,255,0.8)' : '#22c55e', fontSize: '18px', marginTop: '1px', flexShrink: 0 }}></i>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={p.href} style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '12px',
                  backgroundColor: p.highlight ? 'white' : 'var(--sys-primary-colour-role)',
                  color: p.highlight ? 'var(--sys-primary-colour-role)' : 'white',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                }}>
                  {p.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Note */}
      <section style={{ maxWidth: '640px', margin: '0 auto 80px', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', color: 'var(--sys-neutral-colour-role)' }}>Questions?</h2>
        <p style={{ fontSize: '16px', color: 'var(--sys-color-grey04)', lineHeight: 1.6, marginBottom: '24px' }}>All sessions require payment before confirmation. Failed payments will not create bookings. Refunds are processed within 3–5 business days per our refund policy.</p>
        <Link href="/signup"><Button variant="secondary">Talk to Support</Button></Link>
      </section>
    </div>
  );
}
