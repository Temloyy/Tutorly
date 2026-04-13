import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function TutorProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <Link href="/student/discover" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
        <i className="ph ph-arrow-left"></i> Back to search
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        
        {/* Tutor Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Dr. Sarah Jenkins <i className="ph-fill ph-seal-check" style={{ color: 'var(--primary)' }}></i>
              </h1>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '15px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><i className="ph-fill ph-star" style={{ color: '#f59e0b' }}></i> 5.0 (45 reviews)</span>
                <span>•</span>
                <span>Mathematics, Physics</span>
              </div>
            </div>
          </div>

          <Card>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--neutral)' }}>About me</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>
              I am a passionate educator with over 10 years of experience teaching complex mathematics and physics to students of all levels. I hold a Ph.D. in Theoretical Physics and have published multiple papers, but my true calling is demystifying hard concepts.
              <br /><br />
              My approach focuses on deep conceptual understanding rather than rote memorization. Whether you are preparing for AP exams, SATs, or college-level calculus, I can help you build the foundation needed to succeed.
            </p>
          </Card>

          <Card>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--neutral)' }}>Reviews</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 600 }}>James L.</div>
                  <div style={{ color: '#f59e0b', fontSize: '14px' }}>★★★★★</div>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>"Sarah explained integrals in a way that finally clicked for me. Highly recommended!"</p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 600 }}>Maria G.</div>
                  <div style={{ color: '#f59e0b', fontSize: '14px' }}>★★★★★</div>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>"She is incredibly patient and always has great examples prepared."</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Booking Widget */}
        <div style={{ position: 'sticky', top: '24px' }}>
          <Card style={{ border: '2px solid var(--primary)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>$45<span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: 500 }}> / hour</span></h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>Typically responds in 1 hour</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <Button size="large" style={{ width: '100%' }}>Book Session</Button>
              <Button size="large" variant="secondary" style={{ width: '100%' }}>Book Trial ($15)</Button>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Teaching Styles</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: 'var(--bg-gray)', borderRadius: '4px', fontWeight: 500 }}>Patient</span>
                <span style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: 'var(--bg-gray)', borderRadius: '4px', fontWeight: 500 }}>Exam Prep</span>
                <span style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: 'var(--bg-gray)', borderRadius: '4px', fontWeight: 500 }}>Visual</span>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '16px' }}>
              <Link href="#" style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', textAlign: 'center', display: 'block' }}>Send a Message</Link>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
