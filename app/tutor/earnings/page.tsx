import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function TutorEarnings() {
  const stats = [
    { label: 'Total Earned', value: '$2,450', sub: 'All time', icon: 'ph-currency-dollar', color: 'var(--sys-primary-colour-role)' },
    { label: 'This Month',   value: '$450',   sub: 'April 2026', icon: 'ph-calendar', color: '#059669' },
    { label: 'Pending',      value: '$120',   sub: 'Being processed', icon: 'ph-clock', color: '#f59e0b' },
    { label: 'Sessions Done', value: '38',   sub: 'Total sessions', icon: 'ph-graduation-cap', color: 'var(--sys-secondary-colour-role)' },
  ];

  const transactions = [
    { id: 'TXN-001', student: 'Alex P.',    subject: 'Calculus',       date: 'Apr 10, 2026', amount: '$45', status: 'paid' },
    { id: 'TXN-002', student: 'Maria S.',   subject: 'Physics',        date: 'Apr 08, 2026', amount: '$65', status: 'paid' },
    { id: 'TXN-003', student: 'James K.',   subject: 'Linear Algebra', date: 'Apr 06, 2026', amount: '$45', status: 'paid' },
    { id: 'TXN-004', student: 'Priya N.',   subject: 'Calculus',       date: 'Apr 14, 2026', amount: '$45', status: 'pending' },
    { id: 'TXN-005', student: 'Liam O.',    subject: 'Statistics',     date: 'Apr 04, 2026', amount: '$30', status: 'paid' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--neutral)', letterSpacing: '-0.02em', marginBottom: '8px' }}>Earnings</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Track your income and payment history.</p>
        </div>
        <Button variant="secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ph ph-download-simple"></i> Export CSV
        </Button>
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {stats.map(s => (
          <Card key={s.label} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>
              <i className={`ph-bold ${s.icon}`} style={{ fontSize: '20px' }}></i>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--neutral)' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', opacity: 0.7 }}>{s.sub}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Payout CTA */}
      <Card style={{ background: 'linear-gradient(135deg, var(--sys-primary-colour-role), var(--sys-secondary-colour-role))', color: 'white', border: 'none', padding: '32px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>Ready to withdraw?</h2>
          <p style={{ opacity: 0.9, margin: 0 }}>Your available balance is <strong>$330</strong>. Withdrawals take 1–3 business days.</p>
        </div>
        <Button style={{ backgroundColor: 'white', color: 'var(--sys-primary-colour-role)', padding: '14px 28px', fontWeight: 700, whiteSpace: 'nowrap' }}>
          Withdraw Funds
        </Button>
      </Card>

      {/* Transaction Table */}
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--sys-color-grey03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--neutral)', margin: 0 }}>Transaction History</h2>
          <select style={{ padding: '8px 14px', border: '1px solid var(--sys-color-grey03)', borderRadius: '8px', fontSize: '14px', outline: 'none', backgroundColor: 'var(--sys-on-primary-colour-role)' }}>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>All Time</option>
          </select>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-gray)', borderBottom: '1px solid var(--sys-color-grey03)' }}>
              {['Transaction', 'Student', 'Subject', 'Date', 'Amount', 'Status'].map(h => (
                <th key={h} style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={t.id} style={{ borderBottom: i < transactions.length - 1 ? '1px solid var(--sys-color-grey03)' : 'none' }}>
                <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: 'var(--sys-color-grey04)' }}>{t.id}</td>
                <td style={{ padding: '16px 24px', fontSize: '15px', fontWeight: 600, color: 'var(--neutral)' }}>{t.student}</td>
                <td style={{ padding: '16px 24px', fontSize: '14px', color: 'var(--text-muted)' }}>{t.subject}</td>
                <td style={{ padding: '16px 24px', fontSize: '14px', color: 'var(--text-muted)' }}>{t.date}</td>
                <td style={{ padding: '16px 24px', fontSize: '16px', fontWeight: 800, color: 'var(--neutral)' }}>{t.amount}</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{
                    padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700,
                    backgroundColor: t.status === 'paid' ? '#dcfce7' : '#fef9c3',
                    color: t.status === 'paid' ? '#15803d' : '#a16207',
                  }}>
                    {t.status === 'paid' ? 'Paid' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
