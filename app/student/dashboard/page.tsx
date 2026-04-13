import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function StudentDashboard() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--sys-color-grey04, #6b6b6b)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>Student Workspace</h3>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--neutral)', letterSpacing: '-0.02em', margin: 0 }}>Welcome back, Alex.</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '32px' }}>
        {/* Main Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* Upcoming Sessions */}
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--neutral)', margin: 0 }}>Upcoming Sessions</h2>
              <Link href="/student/sessions" style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>View All Calendar</Link>
            </div>
            <Card style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <img src="https://i.pravatar.cc/150?u=james" alt="James Chen" style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>James Chen</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--sys-color-grey04, #4b5563)', marginBottom: '8px' }}>
                      <i className="ph ph-calendar-blank"></i> Tomato • 4:00 PM
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--sys-color-grey05, #6b7280)' }}>Advanced Physics: Quantum Mechanics Prep</div>
                  </div>
                </div>
                <Button style={{ padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <i className="ph-fill ph-video-camera"></i> Join Session
                </Button>
              </div>
            </Card>
          </section>

          {/* Recommended Tutors */}
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--neutral)', margin: '0 0 4px' }}>Recommended Tutors</h2>
                <p style={{ fontSize: '14px', color: 'var(--sys-color-grey04, #6b7280)', margin: 0 }}>Based on your interest in Physics</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--sys-color-grey03, #e5e7eb)', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--neutral)' }}><i className="ph ph-caret-left"></i></button>
                <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--sys-color-grey03, #e5e7eb)', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--neutral)' }}><i className="ph ph-caret-right"></i></button>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <Card style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#00F0FF', color: '#004A4F', fontSize: '10px', fontWeight: 800, padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>TOP RATED</div>
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Dr. Sarah Jenkins" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>Dr. Sarah Jenkins</h3>
                <p style={{ fontSize: '13px', color: 'var(--sys-color-grey04, #4b5563)', margin: '0 0 12px' }}>PhD in Theoretical Physics • MIT</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--neutral)', fontWeight: 600, marginBottom: '24px' }}>
                  <span style={{ color: 'var(--primary)' }}><i className="ph-fill ph-star"></i> 4.9</span>
                  <span style={{ color: 'var(--sys-color-grey04, #6b7280)', fontWeight: 400 }}>124 Reviews</span>
                </div>
                <Link href="/student/tutor/1" style={{ marginTop: 'auto' }}>
                  <Button variant="secondary" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 600 }}>View Profile</Button>
                </Link>
              </Card>

              <Card style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', display: 'flex', flexDirection: 'column' }}>
                <img src="https://i.pravatar.cc/150?u=marcus" alt="Marcus Thorne" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>Marcus Thorne</h3>
                <p style={{ fontSize: '13px', color: 'var(--sys-color-grey04, #4b5563)', margin: '0 0 12px' }}>Masters in Applied Physics • Stanford</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--neutral)', fontWeight: 600, marginBottom: '24px' }}>
                  <span style={{ color: 'var(--primary)' }}><i className="ph-fill ph-star"></i> 4.8</span>
                  <span style={{ color: 'var(--sys-color-grey04, #6b7280)', fontWeight: 400 }}>86 Reviews</span>
                </div>
                <Link href="/student/tutor/2" style={{ marginTop: 'auto' }}>
                  <Button variant="secondary" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 600 }}>View Profile</Button>
                </Link>
              </Card>
            </div>
          </section>

          {/* Continue Learning */}
          <section>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--neutral)', margin: '0 0 16px' }}>Continue Learning</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Card style={{ padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <img src="https://i.pravatar.cc/150?u=sofia" alt="Sofia Martinez" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>Sofia Martinez</h3>
                    <p style={{ fontSize: '13px', color: 'var(--sys-color-grey04, #6b7280)', margin: 0 }}>Mathematics Specialist • Viewed 2h ago</p>
                  </div>
                </div>
                <i className="ph-bold ph-caret-right" style={{ color: 'var(--sys-color-grey03, #9ca3af)', fontSize: '20px' }}></i>
              </Card>

              <Card style={{ padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <img src="https://i.pravatar.cc/150?u=elena" alt="Dr. Elena Rossi" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>Dr. Elena Rossi</h3>
                    <p style={{ fontSize: '13px', color: 'var(--sys-color-grey04, #6b7280)', margin: 0 }}>History & Literature • Viewed Yesterday</p>
                  </div>
                </div>
                <i className="ph-bold ph-caret-right" style={{ color: 'var(--sys-color-grey03, #9ca3af)', fontSize: '20px' }}></i>
              </Card>
            </div>
          </section>

        </div>

        {/* Sidebar Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <Card style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--sys-color-grey04, #4b5563)', letterSpacing: '0.1em', margin: '0 0 20px', textTransform: 'uppercase' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <Link href="/student/discover" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', borderRadius: '8px', textDecoration: 'none', color: 'var(--neutral)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--sys-primary-container-colour-role, #e0f2fe)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ph-fill ph-magnifying-glass"></i>
                </div>
                <span style={{ fontWeight: 600, fontSize: '14px' }}>Find Tutors</span>
              </Link>
              
              <Link href="/student/sessions" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', borderRadius: '8px', textDecoration: 'none', color: 'var(--neutral)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--sys-primary-container-colour-role, #e0f2fe)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ph-fill ph-calendar-blank"></i>
                </div>
                <span style={{ fontWeight: 600, fontSize: '14px' }}>Manage Schedule</span>
              </Link>

              <Link href="/settings" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid var(--sys-color-grey03, #e5e7eb)', borderRadius: '8px', textDecoration: 'none', color: 'var(--neutral)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--sys-primary-container-colour-role, #e0f2fe)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ph-fill ph-credit-card"></i>
                </div>
                <span style={{ fontWeight: 600, fontSize: '14px' }}>Billing</span>
              </Link>

            </div>
          </Card>

          <Card style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid var(--sys-color-grey03, #e5e7eb)' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--sys-color-grey04, #4b5563)', letterSpacing: '0.1em', margin: '0 0 24px', textTransform: 'uppercase' }}>Weekly Goal</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', left: '9px', top: '20px', bottom: '20px', width: '2px', backgroundColor: '#e2e8f0', zIndex: 0 }}></div>
              
              <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1, marginBottom: '24px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className="ph-bold ph-check" style={{ fontSize: '12px' }}></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>Pre-Calculus (Mon)</h4>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#059669', letterSpacing: '0.05em' }}>COMPLETED</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1, marginBottom: '24px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></div>
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px', color: 'var(--neutral)' }}>Physics Lab (Tue)</h4>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>TOMORROW</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid #cbd5e1', flexShrink: 0, marginTop: '2px' }}></div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px', color: 'var(--sys-color-grey04, #6b7280)' }}>World History (Thu)</h4>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--sys-color-grey04, #9ca3af)', letterSpacing: '0.05em' }}>UPCOMING</span>
                </div>
              </div>

            </div>
          </Card>

          <Card style={{ padding: '32px 24px', borderRadius: '16px', backgroundColor: '#004AAD', color: 'white', border: 'none', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 12px', zIndex: 2, position: 'relative' }}>New: Study Guides</h3>
            <p style={{ opacity: 0.9, fontSize: '13px', lineHeight: 1.5, margin: '0 0 24px', maxWidth: '85%', zIndex: 2, position: 'relative' }}>
              Download our expert-curated physics notes for finals week.
            </p>
            <Link href="/resources" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 700, fontSize: '14px', textDecoration: 'none', zIndex: 2, position: 'relative' }}>
              Browse Resources <i className="ph-bold ph-arrow-right"></i>
            </Link>
            
            {/* Background decorative graphic */}
            <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', width: '120px', height: '120px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
          </Card>

        </div>
      </div>
    </div>
  );
}
