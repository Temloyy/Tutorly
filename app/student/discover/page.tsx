'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './discover.module.css';

const TUTORS = [
  { id: 1, name: 'Dr. Sarah Jenkins', subjects: 'Math • Physics', avatar: 'SJ', rating: 4.8, reviews: 120, response: '95%', completion: '98%', price: 15, available: 'Available Today', verified: true },
  { id: 2, name: 'Mark Thompson',     subjects: 'Computer Science • Web Dev', avatar: 'MT', rating: 5.0, reviews: 84,  response: '100%', completion: '99%', price: 20, available: 'Available Today', verified: true },
  { id: 3, name: 'Prof. Elena Rossi', subjects: 'Italian • Literature',        avatar: 'ER', rating: 4.9, reviews: 210, response: '88%', completion: '95%', price: 18, available: 'Tomorrow 10:00 AM', verified: false },
  { id: 4, name: 'David Chen',         subjects: 'Piano • Music Theory',         avatar: 'DC', rating: 4.7, reviews: 45,  response: '92%', completion: '100%', price: 25, available: 'Available Today', verified: false },
  { id: 5, name: 'Aisha Khan',          subjects: 'Biology • Chemistry',          avatar: 'AK', rating: 4.9, reviews: 156, response: '97%', completion: '98%', price: 17, available: 'Available Today', verified: true },
  { id: 6, name: 'Julian Moore',       subjects: 'History • Economics',           avatar: 'JM', rating: 4.6, reviews: 32,  response: '85%', completion: '92%', price: 14, available: 'Available Thursday', verified: false },
];

const FILTER_PILLS = ['Subject', 'Price', 'Rating', 'Availability', 'Teaching Style'];

export default function DiscoverTutors() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Subject');
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/student/discover/results?q=${encodeURIComponent(search)}`);
    } else {
      router.push('/student/discover/results');
    }
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>Available Educators</p>
          <h1 className={styles.title}>Find Tutors</h1>
          <p className={styles.subtitle}>Browse and connect with tutors tailored to your needs</p>
        </div>
        <div className={styles.availableBadge}>
          <span className={styles.availableCount}>120+</span>
          <span className={styles.availableLabel}>TUTORS AVAILABLE</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <i className="ph ph-magnifying-glass" style={{ fontSize: '20px', color: 'var(--sys-color-grey04)', flexShrink: 0 }}></i>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search subjects, skills, or tutor names"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
        <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
      </div>

      {/* Filter Pills + Sort */}
      <div className={styles.filterRow}>
        <div className={styles.filterPills}>
          {FILTER_PILLS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`${styles.pill} ${activeFilter === f ? styles.pillActive : ''}`}
            >
              {f === 'Subject' && <i className="ph ph-book-open"></i>}
              {f === 'Price' && <i className="ph ph-tag"></i>}
              {f === 'Rating' && <i className="ph ph-star"></i>}
              {f === 'Availability' && <i className="ph ph-calendar"></i>}
              {f === 'Teaching Style' && <i className="ph ph-chalkboard-teacher"></i>}
              {f}
            </button>
          ))}
        </div>
        <div className={styles.sortRow}>
          <span className={styles.sortLabel}>Sort by:</span>
          <select className={styles.sortSelect}>
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Rating</option>
            <option>Most Reviews</option>
          </select>
        </div>
      </div>

      {/* Tutor Grid */}
      <div className={styles.grid}>
        {TUTORS.map(t => (
          <div key={t.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div style={{ position: 'relative' }}>
                  <div className={styles.avatar}>{t.avatar}</div>
                  {t.verified && (
                    <div className={styles.verifiedDot}>
                      <i className="ph-fill ph-seal-check" style={{ fontSize: '10px' }}></i>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className={styles.tutorName}>{t.name}</h3>
                  <span className={styles.tutorSubjects}>{t.subjects}</span>
                </div>
              </div>
              <button className={styles.saveBtn} aria-label="Save tutor">
                <i className="ph ph-bookmark-simple" style={{ fontSize: '18px' }}></i>
              </button>
            </div>

            <div className={styles.ratingRow}>
              <i className="ph-fill ph-star" style={{ color: '#f59e0b', fontSize: '14px' }}></i>
              <span className={styles.ratingNum}>{t.rating.toFixed(1)}</span>
              <span className={styles.reviewCount}>({t.reviews} reviews)</span>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>RESPONSE</span>
                <span className={styles.statValue}>{t.response} rate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>COMPLETION</span>
                <span className={styles.statValue}>{t.completion} rate</span>
              </div>
            </div>

            <div className={styles.pricingRow}>
              <div>
                <span className={styles.pricingLabel}>PRICING</span>
                <div className={styles.price}>
                  <span className={styles.priceNum}>${t.price}</span>
                  <span className={styles.priceUnit}> / session</span>
                </div>
              </div>
              <div className={styles.availBadge}>
                <span className={styles.availDot}></span>
                <span className={styles.availText}>{t.available}</span>
              </div>
            </div>

            <Link href={`/student/tutor/${t.id}`}>
              <button className={styles.viewProfileBtn}>View Profile</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className={styles.loadMore}>
        <button className={styles.loadMoreBtn}>Load More Tutors</button>
        <p className={styles.showingText}>Showing 6 of 124 available tutors</p>
      </div>
    </div>
  );
}
