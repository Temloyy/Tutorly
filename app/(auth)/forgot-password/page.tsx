'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './forgot-password.module.css';

type Step = 'email' | 'sent';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setStep('sent');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Link href="/login" className={styles.backBtn}>
          <i className="ph ph-arrow-left"></i> Back to Login
        </Link>

        {step === 'email' ? (
          <>
            <div className={styles.iconWrap}>
              <i className="ph-fill ph-lock-key" style={{ fontSize: '32px', color: 'var(--sys-primary-colour-role)' }}></i>
            </div>
            <h1 className={styles.title}>Forgot Password?</h1>
            <p className={styles.subtitle}>Enter the email address linked to your Tutorly account and we'll send a reset link.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">Email address <span className={styles.required}>*</span></label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? (
                  <><i className="ph ph-circle-notch" style={{ animation: 'spin 1s linear infinite', marginRight: '8px' }}></i>Sending…</>
                ) : 'Send Reset Link'}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className={styles.iconWrap} style={{ backgroundColor: '#dcfce7' }}>
              <i className="ph-fill ph-envelope-simple" style={{ fontSize: '32px', color: '#16a34a' }}></i>
            </div>
            <h1 className={styles.title}>Check your email</h1>
            <p className={styles.subtitle}>
              We sent a password reset link to <strong>{email}</strong>. It expires in 15 minutes.
            </p>
            <button className={styles.submitBtn} onClick={() => setStep('email')}>
              Try a different email
            </button>
            <p className={styles.helpText}>Didn't receive it? Check your spam folder or <button className={styles.linkBtn} onClick={() => { setLoading(false); setStep('email'); }}>resend</button>.</p>
          </>
        )}

        <p className={styles.footer}>
          Remember your password? <Link href="/login" className={styles.link}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
