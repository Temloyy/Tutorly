'use client';

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './results.module.css';

const ALL_TUTORS = [
  { id: 1, name: 'Dr. Aris Thorne',   title: 'PhD in Theoretical Physics',     tags: ['Physics', 'Calculus', 'Statistics'], rating: 4.9, reviews: 128, price: 65, available: 'AVAILABLE TODAY',   avatar: 'AT', verified: true },
  { id: 2, name: 'Elena Rodriguez',  title: 'Bilingual Education Specialist',  tags: ['Spanish', 'Literature'],              rating: 4.8, reviews: 94,  price: 45, available: 'NEXT: MON 9AM',    avatar: 'ER', verified: false },
  { id: 3, name: 'Marcus Chen',       title: 'Lead Software Engineer',          tags: ['Python', 'Algorithms', 'React'],       rating: 5.0, reviews: 210, price: 90, available: 'AVAILABLE TODAY',   avatar: 'MC', verified: false },
  { id: 4, name: 'Sarah Jenkins',     title: 'Creative Writing Coach',          tags: ['English', 'Poetry'],                   rating: 4.7, reviews: 56,  price: 55, available: 'AVAILABLE SAT',    avatar: 'SJ', verified: false },
  { id: 5, name: 'Dr. Elena Rossi',  title: 'Physics & Math',                  tags: ['Physics', 'Calculus'],                 rating: 4.9, reviews: 120, price: 25, available: 'AVAILABLE TODAY',   avatar: 'ER', verified: true },
  { id: 6, name: 'James Chen',        title: 'English Literature',              tags: ['English', 'Literature'],               rating: 4.8, reviews: 85,  price: 20, available: '',                 avatar: 'JC', verified: false },
  { id: 7, name: 'Sofia Martinez',   title: 'Spanish & Art',                   tags: ['Spanish', 'Art'],                      rating: 5.0, reviews: 50,  price: 30, available: 'AVAILABLE TODAY',   avatar: 'SM', verified: false },
];

const SUBJECTS = ['Mathematics', 'Physics', 'Chemistry', 'English', 'History', 'Computer Science', 'Spanish', 'Biology'];

function DiscoverResultsInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';

  const [subject, setSubject] = useState(query || 'Mathematics');
  const [minRate, setMinRate] = useState(5);
  const [maxRate, setMaxRate] = useState(100);
  const [minRating, setMinRating] = useState<'4.5' | '4.0' | 'any'>('4.0');
  const [availableToday, setAvailableToday] = useState(false);
  const [sortBy, setSortBy] = useState('Recommended');
  const [activeTags, setActiveTags] = useState<string[]>(query ? [query] : ['Mathematics']);
  const [page, setPage] = useState(1);

  const removeTag = (tag: string) => setActiveTags(prev => prev.filter(t => t !== tag));

  const handleApply = () => {
    if (!activeTags.includes(subject)) {
      setActiveTags([subject]);
    }
  };

  const filteredTutors = ALL_TUTORS.filter(t => {
    const ratingOk = minRating === 'any' ? true : minRating === '4.5' ? t.rating >= 4.5 : t.rating >= 4.0;
    const priceOk = t.price >= minRate && t.price <= maxRate;
    const availOk = !availableToday || t.available.includes('TODAY');
    return ratingOk && priceOk && availOk;
  });

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <p className={styles.filtersLabel}>FILTERS</p>
        <h2 className={styles.filtersHeading}>Refine Search</h2>

        <section className={styles.filterSection}>
          <h3 className={styles.filterSectionTitle}>SUBJECT</h3>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={subject}
              onChange={e => setSubject(e.target.value)}
            >
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
            <i className="ph ph-caret-down" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}></i>
          </div>
        </section>

        <section className={styles.filterSection}>
          <div className={styles.rateHeader}>
            <h3 className={styles.filterSectionTitle}>HOURLY RATE</h3>
            <span className={styles.rateRange}>${minRate} – ${maxRate}</span>
          </div>
          <div className={styles.rangeTrack}>
            <input type="range" min={5} max={200} value={minRate} onChange={e => setMinRate(Number(e.target.value))} className={styles.rangeInput} />
            <input type="range" min={5} max={200} value={maxRate} onChange={e => setMaxRate(Number(e.target.value))} className={styles.rangeInput} />
          </div>
        </section>

        <section className={styles.filterSection}>
          <h3 className={styles.filterSectionTitle}>MINIMUM RATING</h3>
          <div className={styles.radioGroup}>
            {(['4.5', '4.0', 'any'] as const).map(r => (
              <label key={r} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="minRating"
                  value={r}
                  checked={minRating === r}
                  onChange={() => setMinRating(r)}
                  className={styles.radioInput}
                />
                <span>{r === 'any' ? 'Any Rating' : `${r}+ Stars`}</span>
              </label>
            ))}
          </div>
        </section>

        <section className={styles.filterSection}>
          <div className={styles.toggleRow}>
            <span className={styles.toggleLabel}>Available Today</span>
            <button
              onClick={() => setAvailableToday(!availableToday)}
              className={`${styles.toggle} ${availableToday ? styles.toggleOn : ''}`}
              aria-checked={availableToday}
              role="switch"
            >
              <span className={styles.toggleThumb}></span>
            </button>
          </div>
        </section>

        <div className={styles.proCard}>
          <p className={styles.proEyebrow}>PRO MEMBERSHIP</p>
          <p className={styles.proHeading}>Get 20% off your first 5 sessions.</p>
          <button className={styles.proBtn}>Learn More</button>
        </div>

        <button className={styles.applyBtn} onClick={handleApply}>Apply Filters</button>
      </aside>

      {/* Main Results */}
      <main className={styles.main}>
        <div className={styles.resultsHeader}>
          <div>
            <p className={styles.resultsEyebrow}>SEARCH RESULTS</p>
            <h1 className={styles.resultsTitle}>
              {query ? `Showing ${filteredTutors.length}+ Tutors for ${query}` : `Discover ${filteredTutors.length}+ Verified Tutors`}
            </h1>
          </div>
          <div className={styles.sortRow}>
            <span className={styles.sortLabel}>Sort by:</span>
            <select className={styles.sortSelect} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>

        {activeTags.length > 0 && (
          <div className={styles.activeTags}>
            {activeTags.map(tag => (
              <span key={tag} className={styles.activeTag}>
                {tag}
                <button onClick={() => removeTag(tag)} className={styles.tagClose} aria-label={`Remove ${tag} filter`}>
                  <i className="ph-bold ph-x" style={{ fontSize: '11px' }}></i>
                </button>
              </span>
            ))}
          </div>
        )}

        <div className={styles.resultsGrid}>
          {filteredTutors.map(t => (
            <div key={t.id} className={styles.resultCard}>
              {t.available && (
                <div className={styles.availBanner}>
                  <span className={styles.availDot}></span>
                  {t.available}
                </div>
              )}

              <div className={styles.cardBody}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ position: 'relative' }}>
                    <div className={styles.avatar}>{t.avatar}</div>
                    {t.verified && (
                      <div className={styles.verifiedBadge}>
                        <i className="ph-fill ph-seal-check" style={{ fontSize: '10px' }}></i>
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h3 className={styles.tutorName}>{t.name}</h3>
                      {t.verified && <i className="ph-fill ph-seal-check" style={{ color: 'var(--sys-primary-colour-role)', fontSize: '16px' }}></i>}
                    </div>
                    <p className={styles.tutorTitle}>{t.title}</p>
                  </div>
                  <button className={styles.heartBtn} aria-label="Save tutor">
                    <i className="ph ph-heart" style={{ fontSize: '20px' }}></i>
                  </button>
                </div>

                <div className={styles.tagRow}>
                  {t.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.metaRow}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <i className="ph-fill ph-star" style={{ color: '#f59e0b', fontSize: '14px' }}></i>
                    <span className={styles.ratingNum}>{t.rating.toFixed(1)}</span>
                    <span className={styles.reviewCount}>({t.reviews} reviews)</span>
                  </div>
                  <span className={styles.dot}>•</span>
                  <span className={styles.price}>${t.price}/hr</span>
                </div>

                <div className={styles.cardActions}>
                  {t.available.includes('TODAY') && (
                    <span className={styles.availTodayTag}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', marginRight: '5px' }}></span>
                      Available Today
                    </span>
                  )}
                  <button className={styles.saveBtn}>Save</button>
                  <Link href={`/student/tutor/${t.id}`}>
                    <button className={styles.viewBtn}>View Profile</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* More tutors loading placeholder */}
          <div className={styles.loadingCard}>
            <i className="ph ph-graduation-cap" style={{ fontSize: '36px', color: 'var(--sys-color-grey03)' }}></i>
            <p className={styles.loadingText}>More tutors loading...</p>
            <p className={styles.loadingSubtext}>Check back soon for new experts.</p>
          </div>
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <button className={styles.pageBtn} disabled aria-label="Previous page">
            <i className="ph ph-caret-left"></i>
          </button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`${styles.pageBtn} ${page === p ? styles.pageBtnActive : ''}`} onClick={() => setPage(p)}>{p}</button>
          ))}
          <span className={styles.pageEllipsis}>...</span>
          <button className={styles.pageBtn} onClick={() => setPage(12)}>12</button>
          <button className={styles.pageBtn} aria-label="Next page">
            <i className="ph ph-caret-right"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default function DiscoverResults() {
  return (
    <Suspense fallback={<div style={{ padding: '48px', textAlign: 'center', color: 'var(--sys-color-grey04)' }}>Loading results...</div>}>
      <DiscoverResultsInner />
    </Suspense>
  );
}
