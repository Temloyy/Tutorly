import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const FEATURES = [
  { icon: 'ph-fill ph-magnifying-glass', title: 'Smart Tutor Discovery', desc: 'Find the perfect tutor with intelligent matching based on your subject, learning style, and availability.' },
  { icon: 'ph-fill ph-calendar-check', title: 'Seamless Booking', desc: 'Timezone-aware scheduling with calendar integration. Book trial or full sessions with just a few clicks.' },
  { icon: 'ph-fill ph-video-camera', title: 'Live Video Sessions', desc: 'High-quality 1-on-1 video sessions built directly into the platform. No third-party tools required.' },
  { icon: 'ph-fill ph-chat-circle-dots', title: 'Real-Time Messaging', desc: 'Stay connected with your tutor between sessions. Messages sync instantly with read receipts.' },
  { icon: 'ph-fill ph-credit-card', title: 'Secure Payments', desc: 'Pay per session or in packages. Powered by Stripe with automatic receipts and refund policies.' },
  { icon: 'ph-fill ph-star', title: 'Reviews & Trust Signals', desc: 'Transparent ratings from verified students. Only reviewable after a completed session.' },
  { icon: 'ph-fill ph-chart-line-up', title: 'Progress Tracking', desc: 'Track your learning journey with session history, goals, and weekly progress indicators.' },
  { icon: 'ph-fill ph-bell', title: 'Smart Notifications', desc: 'Get timely reminders for upcoming sessions, payment status, and new messages.' },
];

export default function FeaturesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-gray, #f7f8fb)' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--sys-on-primary-colour-role)', borderBottom: '1px solid var(--sys-color-grey03)', padding: '100px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--sys-primary-colour-role)', textTransform: 'uppercase', marginBottom: '20px' }}>Everything you need</p>
        <h1 style={{ fontSize: '56px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.1, maxWidth: '700px', margin: '0 auto 20px' }}>
          Built for learners. Designed for results.
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--sys-color-grey04)', marginBottom: '40px', maxWidth: '540px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Every feature on Tutorly is crafted to support an effective, trusted, and distraction-free learning experience.
        </p>
        <Link href="/signup"><Button style={{ padding: '18px 40px', fontSize: '16px', fontWeight: 700 }}>Get Started Free</Button></Link>
      </section>

      {/* Feature Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{ backgroundColor: 'var(--sys-on-primary-colour-role)', border: '1px solid var(--sys-color-grey03)', borderRadius: '16px', padding: '32px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: 'var(--sys-primary-container-colour-role)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className={f.icon} style={{ fontSize: '24px', color: 'var(--sys-primary-colour-role)' }}></i>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--sys-neutral-colour-role)', marginBottom: '10px', lineHeight: 1.3 }}>{f.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--sys-color-grey04)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--sys-primary-colour-role)', padding: '80px 24px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px' }}>Start learning smarter today.</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>Join thousands of students already improving with Tutorly.</p>
        <Link href="/signup"><Button style={{ backgroundColor: 'white', color: 'var(--sys-primary-colour-role)', padding: '18px 40px', fontSize: '16px', fontWeight: 700 }}>Create Free Account</Button></Link>
      </section>
    </div>
  );
}
