'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const STEPS = [
  { id: 'welcome', title: 'Welcome' },
  { id: 'subjects', title: 'Subjects & Style' },
  { id: 'pricing', title: 'Pricing & Availability' }
];

const SUBJECTS = ['Mathematics', 'Computer Science', 'Physics', 'Languages', 'Biology', 'Chemistry', 'History', 'Literature'];
const STYLES = ['Patient', 'Fast-Paced', 'Visual Learner', 'Concept Focused', 'Exam Driven'];
const AVAILABILITIES = ['Mornings', 'Afternoons', 'Evenings', 'Weekends Only', 'Anytime'];

export default function TutorOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedAvail, setSelectedAvail] = useState('');

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      window.location.href = '/tutor/dashboard';
    }
  };

  const toggleStyle = (style: string) => {
    setSelectedStyle(prev => prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-gray)', padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
          {STEPS.map((step, idx) => (
            <div key={idx} style={{ flex: 1, height: '6px', borderRadius: '3px', backgroundColor: idx <= currentStep ? 'var(--primary)' : 'var(--border-color)' }}></div>
          ))}
        </div>

        <Card style={{ padding: '40px' }}>
          {currentStep === 0 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '16px' }}>Become a Tutor</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Join thousands of experts sharing their knowledge globally. Set up your profile to start receiving booking requests from amazing students.
              </p>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>What’s your expertise?</h2>
              
              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '24px 0 12px' }}>Primary Subject</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {SUBJECTS.map(sub => (
                  <button 
                    key={sub} onClick={() => setSelectedSubject(sub)}
                    style={{ 
                      padding: '12px 24px', borderRadius: '12px', border: selectedSubject === sub ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      backgroundColor: selectedSubject === sub ? 'rgba(4, 102, 200, 0.05)' : 'white', cursor: 'pointer', fontWeight: 600, color: 'var(--neutral)',
                      transition: 'all 0.2s', outline: 'none'
                    }}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '24px 0 12px' }}>Teaching Methods (Select multiple)</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {STYLES.map(style => (
                  <button 
                    key={style} onClick={() => toggleStyle(style)}
                    style={{ 
                      padding: '10px 16px', borderRadius: '100px', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s',
                      backgroundColor: selectedStyle.includes(style) ? 'var(--primary)' : 'var(--bg-gray)',
                      color: selectedStyle.includes(style) ? 'white' : 'var(--text-muted)',
                      border: 'none', outline: 'none'
                    }}
                  >
                    {selectedStyle.includes(style) && <i className="ph-bold ph-check" style={{ marginRight: '6px' }}></i>}
                    {style}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>Set your rules</h2>
              
              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '24px 0 12px' }}>Hourly Rate ($)</h3>
              <input 
                type="number" placeholder="e.g. 45" 
                style={{ width: '100%', padding: '16px', fontSize: '18px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03)', outline: 'none', backgroundColor: 'var(--sys-on-primary-colour-role)' }}
              />

              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '24px 0 12px' }}>Typical Availability</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {AVAILABILITIES.map(av => (
                  <button 
                    key={av} onClick={() => setSelectedAvail(av)}
                    style={{ 
                      padding: '16px', borderRadius: '12px', border: selectedAvail === av ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      backgroundColor: selectedAvail === av ? 'rgba(4, 102, 200, 0.05)' : 'white', cursor: 'pointer', fontWeight: 600, color: 'var(--neutral)',
                      transition: 'all 0.2s', textAlign: 'center'
                    }}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', marginTop: '32px' }}>
            <button 
              onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
              style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', opacity: currentStep === 0 ? 0 : 1, fontWeight: 600 }}
              disabled={currentStep === 0}
            >
              Back
            </button>
            <Button size="large" onClick={nextStep} style={{ width: currentStep === 0 ? '100%' : 'auto' }}>
              {currentStep === 0 ? 'Setup Profile' : currentStep === STEPS.length - 1 ? 'Go to Dashboard' : 'Continue'}
            </Button>
          </div>
        </Card>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link href="/tutor/dashboard" style={{ color: 'var(--text-muted)', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>Skip for now</Link>
        </div>
      </div>
    </div>
  );
}
