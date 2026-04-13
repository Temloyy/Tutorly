import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const TUTORS = [
  { id: 1, name: 'Dr. Sarah Jenkins',  subjects: ['Math', 'Physics'],        rating: 4.8, reviews: 120, price: 45, available: true,  bio: 'PhD from MIT. 10+ years of experience making complex subjects approachable.', slug: 'dr-sarah-jenkins' },
  { id: 2, name: 'Marcus Chen',         subjects: ['Computer Science', 'AI'],  rating: 5.0, reviews: 84,  price: 90, available: true,  bio: 'Lead software engineer helping students master programming from first principles.', slug: 'marcus-chen' },
  { id: 3, name: 'Aisha Khan',          subjects: ['Biology', 'Chemistry'],    rating: 4.9, reviews: 156, price: 60, available: true,  bio: 'Passionate science educator with a love for visualizing complex biological systems.', slug: 'aisha-khan' },
  { id: 4, name: 'Prof. Elena Rossi',  subjects: ['Italian', 'Literature'],   rating: 4.9, reviews: 210, price: 55, available: false, bio: 'Native Italian speaker and published author. Teaches language through cultural storytelling.', slug: 'elena-rossi' },
  { id: 5, name: 'David Chen',          subjects: ['Piano', 'Music Theory'],   rating: 4.7, reviews: 45,  price: 70, available: true,  bio: 'Conservatory-trained pianist offering structured and creative music education.', slug: 'david-chen' },
  { id: 6, name: 'Julian Moore',       subjects: ['History', 'Economics'],    rating: 4.6, reviews: 32,  price: 40, available: false, bio: 'Former university lecturer with a passion for connecting historical events to modern life.', slug: 'julian-moore' },
];

const SUBJECTS = ['All', 'Math', 'Science', 'Languages', 'Technology', 'Music', 'History'];

export default function PublicTutors() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-gray, #f7f8fb)' }}>

      {/* Hero */}
      <section style={{ backgroundColor: 'var(--sys-on-primary-colour-role)', borderBottom: '1px solid var(--sys-color-grey03)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--sys-primary-colour-role)', textTransform: 'uppercase', marginBottom: '16px' }}>Our Educators</p>
          <h1 style={{ fontSize: '52px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.1 }}>
            Find the right tutor for you
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--sys-color-grey04)', marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
            Browse 120+ verified educators across every subject. Book a trial session before committing.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link href="/student/discover">
              <Button style={{ padding: '16px 32px', fontSize: '16px' }}>Start Search</Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>Join as Tutor</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Row */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 0' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {SUBJECTS.map(s => (
            <button key={s} style={{ padding: '8px 20px', borderRadius: '100px', border: '1px solid var(--sys-color-grey03)', backgroundColor: s === 'All' ? 'var(--sys-primary-colour-role)' : 'var(--sys-on-primary-colour-role)', color: s === 'All' ? 'white' : 'var(--sys-neutral-colour-role)', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              {s}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '14px', color: 'var(--sys-color-grey04)', alignSelf: 'center', fontWeight: 500 }}>120+ Tutors available</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 64px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {TUTORS.map(t => (
          <div key={t.id} style={{ backgroundColor: 'var(--sys-on-primary-colour-role)', border: '1px solid var(--sys-color-grey03)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--sys-primary-colour-role)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', flexShrink: 0 }}>
                  {t.name.split(' ').map(n => n[0]).slice(-2).join('')}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--sys-neutral-colour-role)', margin: '0 0 2px' }}>{t.name}</h3>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {t.subjects.map(s => (
                      <span key={s} style={{ fontSize: '12px', padding: '2px 8px', backgroundColor: 'var(--sys-primary-container-colour-role)', color: 'var(--sys-primary-colour-role)', borderRadius: '4px', fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: t.available ? '#22c55e' : '#9ca3af', display: 'inline-block' }}></span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--sys-color-grey04)', lineHeight: 1.6, margin: 0, flex: 1 }}>{t.bio}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: 'var(--sys-neutral-colour-role)' }}>
                <i className="ph-fill ph-star" style={{ color: '#f59e0b' }}></i> {t.rating}
              </span>
              <span style={{ color: 'var(--sys-color-grey04)' }}>({t.reviews} reviews)</span>
              <span style={{ marginLeft: 'auto', fontWeight: 800, fontSize: '18px', color: 'var(--sys-primary-colour-role)' }}>${t.price}<span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--sys-color-grey04)' }}>/hr</span></span>
            </div>

            <Link href={`/signup`} style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: '10px', backgroundColor: 'var(--sys-primary-colour-role)', color: 'white', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--sys-primary-colour-role)', padding: '80px 24px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px' }}>Ready to start learning?</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>Create a free account and book your first session today.</p>
        <Link href="/signup"><Button style={{ backgroundColor: 'white', color: 'var(--sys-primary-colour-role)', padding: '18px 40px', fontSize: '16px', fontWeight: 700 }}>Get Started Free</Button></Link>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--sys-on-primary-colour-role)', borderTop: '1px solid var(--sys-color-grey03)', padding: '32px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span style={{ fontWeight: 800, color: 'var(--sys-primary-colour-role)', fontSize: '18px' }}>Tutorly</span>
          <p style={{ fontSize: '13px', color: 'var(--sys-color-grey04)', margin: '4px 0 0' }}>© 2026 Tutorly. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['About Us', 'Become a Tutor', 'Help Center', 'Privacy Policy', 'Terms of Service'].map(l => (
            <Link key={l} href="#" style={{ fontSize: '13px', color: 'var(--sys-color-grey04)', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
