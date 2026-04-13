'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const STEPS = [
  { id: 'welcome', title: 'Welcome' },
  { id: 'subject', title: 'Subject' },
  { id: 'goals', title: 'Goals & Budget' }
];

const SUBJECTS = ['Mathematics', 'Computer Science', 'Physics', 'Languages', 'Biology', 'Chemistry', 'History', 'Literature'];
const GOALS = ['Exam Prep', 'Homework Help', 'Concept Mastery', 'Interview Prep'];
const BUDGETS = ['Under $20/hr', '$20 - $40/hr', '$40 - $60/hr', 'Over $60/hr'];

export default function StudentOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      window.location.href = '/student/dashboard';
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-gray)', padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
          {STEPS.map((step, idx) => (
            <div key={idx} style={{ flex: 1, height: '6px', borderRadius: '3px', backgroundColor: idx <= currentStep ? 'var(--primary)' : 'var(--border-color)' }}></div>
          ))}
        </div>

        <Card style={{ padding: '40px' }}>
          {currentStep === 0 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👋</div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '16px' }}>Welcome to Tutorly</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                We use an intelligent matching system to find the best tutors perfectly aligned with your unique learning style. Let's personalize your experience.
              </p>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>What do you want to learn?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Select your primary focus area.</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {SUBJECTS.map(sub => (
                  <button 
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    style={{ 
                      padding: '12px 24px', 
                      borderRadius: '12px', 
                      border: selectedSubject === sub ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      backgroundColor: selectedSubject === sub ? 'rgba(4, 102, 200, 0.05)' : 'white',
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: 'var(--neutral)',
                      transition: 'all 0.2s',
                      outline: 'none'
                    }}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>Goals & Budget</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Help us refine our search for you.</p>
              
              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '24px 0 12px' }}>Primary Goal</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {GOALS.map(goal => (
                  <button 
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    style={{ 
                      padding: '16px', borderRadius: '12px', textAlign: 'center',
                      border: selectedGoal === goal ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      backgroundColor: selectedGoal === goal ? 'rgba(4, 102, 200, 0.05)' : 'white',
                      cursor: 'pointer', fontWeight: 600, color: 'var(--neutral)', transition: 'all 0.2s'
                    }}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '24px 0 12px' }}>Hourly Budget</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {BUDGETS.map(bg => (
                  <button 
                    key={bg}
                    onClick={() => setSelectedBudget(bg)}
                    style={{ 
                      padding: '12px 20px', borderRadius: '100px',
                      border: selectedBudget === bg ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      backgroundColor: selectedBudget === bg ? 'var(--primary)' : 'white',
                      color: selectedBudget === bg ? 'white' : 'var(--neutral)',
                      cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s'
                    }}
                  >
                    {bg}
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
              {currentStep === 0 ? "Let's Get Started" : currentStep === STEPS.length - 1 ? 'Go to Dashboard' : 'Continue'}
            </Button>
          </div>
        </Card>
        
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link href="/student/dashboard" style={{ color: 'var(--text-muted)', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>Skip Onboarding</Link>
        </div>
      </div>
    </div>
  );
}
