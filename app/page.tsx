export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="brand">Tutorly</a>
          <div className="nav-links">
            <a href="#how-it-works">How it Works</a>
            <a href="#features">Features</a>
            <a href="#product">Platform</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="nav-actions">
            <a href="/login" className="btn btn-text">Log In</a>
            <a href="/signup" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Get Matched with the Right Tutor<br />
              <span className="text-primary">in Minutes</span>
            </h1>
            <p className="hero-subtitle">Personalized one-on-one learning with trusted tutors across the world.</p>
            <div className="hero-buttons">
              <a href="/signup" className="btn btn-primary btn-large">Get Started</a>
              <a href="#features" className="btn btn-secondary btn-large">Browse Tutors</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="macbook-mockup">
              <div className="macbook-lid">
                <div className="macbook-camera"></div>
                <div className="macbook-screen">
                  <img src="/Body(1).png" alt="Tutorly Platform Mockup" className="hero-mockup-img" />
                </div>
              </div>
              <div className="macbook-base">
                <div className="macbook-indent"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="trust-strip">
        <div className="container trust-container">
          <p className="trust-text">Trusted by students worldwide</p>
          <div className="trust-logos">
            <div className="logo-item"><i className="ph-fill ph-student"></i> Stanford</div>
            <div className="logo-item"><i className="ph-fill ph-book-open"></i> MIT Alumni</div>
            <div className="logo-item"><i className="ph-fill ph-buildings"></i> Cambridge</div>
            <div className="logo-item"><i className="ph-fill ph-graduation-cap"></i> Oxford</div>
            <div className="logo-item"><i className="ph-fill ph-globe"></i> Global Tutors</div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Start learning in 3 simple steps</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Tell us what you want to learn</h3>
              <p className="step-desc">Enter your subject, goals, and availability to help us find your perfect match.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Get matched with the right tutors</h3>
              <p className="step-desc">Our intelligent algorithm connects you with certified experts tailored to your needs.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Book and start learning</h3>
              <p className="step-desc">Schedule your first session instantly and connect inside our seamless learning room.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything you need to succeed</h2>
            <p className="section-subtitle">Built for a frictionless learning experience.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="ph ph-magic-wand"></i></div>
              <h3 className="feature-title">Smart tutor matching</h3>
              <p className="feature-desc">Skip the endless scrolling. We recommend the top 3 tutors for your specific goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="ph ph-seal-check"></i></div>
              <h3 className="feature-title">Verified tutors</h3>
              <p className="feature-desc">Every tutor passes a rigorous background check and subject proficiency test.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="ph ph-wallet"></i></div>
              <h3 className="feature-title">Flexible pricing</h3>
              <p className="feature-desc">Find quality education that fits your budget, with transparent per-hour rates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="ph ph-globe-hemisphere-west"></i></div>
              <h3 className="feature-title">Global availability</h3>
              <p className="feature-desc">Learn anytime, anywhere. Our tutors span across all major timezones.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="ph ph-play-circle"></i></div>
              <h3 className="feature-title">Trial sessions</h3>
              <p className="feature-desc">Not sure yet? Book a 30-minute trial session to see if it’s a perfect fit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="ph ph-video-camera"></i></div>
              <h3 className="feature-title">Built-in Video</h3>
              <p className="feature-desc">High-quality video calling with screen sharing and an interactive whiteboard.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="showcase section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Inside Tutorly</h2>
            <p className="section-subtitle">A modern platform designed for focus.</p>
          </div>
          <div className="showcase-gallery db-gallery">
            <div className="showcase-item large mockup-frame mock-dashboard">
              <div className="mock-header">
                <span className="mock-logo"></span>
                <div className="mock-tabs"><span className="active"></span><span></span><span></span></div>
                <span className="mock-user"></span>
              </div>
              <div className="mock-body">
                <div className="mock-main">
                  <div className="mock-title"></div>
                  <div className="mock-card">
                    <div className="mc-avatar"></div>
                    <div className="mc-lines">
                      <div className="l1"></div>
                      <div className="l2"></div>
                    </div>
                    <div className="mc-btn"></div>
                  </div>
                  <div className="mock-card">
                    <div className="mc-avatar"></div>
                    <div className="mc-lines">
                      <div className="l1"></div>
                      <div className="l2"></div>
                    </div>
                    <div className="mc-btn"></div>
                  </div>
                  <div className="mock-card">
                    <div className="mc-avatar"></div>
                    <div className="mc-lines">
                      <div className="l1"></div>
                      <div className="l2"></div>
                    </div>
                    <div className="mc-btn"></div>
                  </div>
                </div>
                <div className="mock-side">
                  <div className="mock-widget img-widget"></div>
                  <div className="mock-widget">
                    <div className="mw-head"></div>
                    <div className="mw-row">
                      <div className="mw-av"></div>
                      <div className="mw-l"></div>
                    </div>
                    <div className="mw-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-item mockup-frame mock-learning">
              <div className="mock-header">
                <span className="mock-logo"></span>
                <div className="mock-tabs"><span className="active"></span><span></span></div>
              </div>
              <div className="mock-body row-layout">
                <div className="mock-video-area">
                  <div className="video-overlay"><i className="ph-fill ph-play-circle"></i></div>
                </div>
                <div className="mock-course-sidebar">
                  <div className="cs-head"></div>
                  <div className="cs-item active"></div>
                  <div className="cs-item"></div>
                  <div className="cs-item"></div>
                  <div className="cs-item"></div>
                  <div className="cs-btn"></div>
                </div>
              </div>
            </div>
            <div className="showcase-item mockup-frame mock-session">
              <div className="mock-header">
                <span className="mock-logo"></span>
                <div className="mock-toolbar"><span></span><span></span><span></span></div>
                <div className="mock-endbtn"></div>
              </div>
              <div className="mock-body session-layout">
                <div className="main-video">
                  <div className="pip-video"></div>
                  <div className="bottom-tools">
                    <div className="tool-icon"></div>
                    <div className="tool-icon"></div>
                    <div className="tool-icon red"></div>
                    <div className="tool-icon"></div>
                  </div>
                </div>
                <div className="session-sidebar">
                  <div className="chat-head"></div>
                  <div className="chat-msgs">
                    <div className="msg other"></div>
                    <div className="msg other"></div>
                    <div className="msg me"></div>
                  </div>
                  <div className="chat-input"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="value section bg-dark text-white">
        <div className="container value-container">
          <div className="value-content">
            <h2 className="value-title">Not just more tutors.<br />The right ones.</h2>
            <ul className="value-list">
              <li>
                <i className="ph-fill ph-check-circle"></i>
                <span><strong>Intelligent recommendations</strong> tailored to your specific learning style.</span>
              </li>
              <li>
                <i className="ph-fill ph-check-circle"></i>
                <span><strong>Trust-first profiles</strong> featuring genuine student reviews and verified credentials.</span>
              </li>
              <li>
                <i className="ph-fill ph-check-circle"></i>
                <span><strong>No decision overload.</strong> We filter out the noise so you can focus on learning.</span>
              </li>
            </ul>
          </div>
          <div className="value-visual">
            <div className="trust-badge">
              <i className="ph-fill ph-shield-check"></i>
              <span>Tutorly Verified</span>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Loved by students</h2>
            <p className="section-subtitle">Don't just take our word for it.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
              <p className="quote">"I was struggling with Calculus. Tutorly matched me with Sarah in 5 minutes. My grades improved in just three weeks."</p>
              <div className="author">
                <div className="author-avatar u1"></div>
                <div className="author-info">
                  <h4>James L.</h4>
                  <span>High School Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
              <p className="quote">"The built-in video rooms and whiteboards make remote learning feel exactly like sitting next to a tutor."</p>
              <div className="author">
                <div className="author-avatar u2"></div>
                <div className="author-info">
                  <h4>Maria G.</h4>
                  <span>University Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
              <p className="quote">"As a professional learning to code, flexible scheduling is everything. The platform's booking flow is so smooth."</p>
              <div className="author">
                <div className="author-avatar u3"></div>
                <div className="author-info">
                  <h4>David K.</h4>
                  <span>Career Switcher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-section section">
        <div className="container cta-container">
          <h2 className="cta-title">Start learning today</h2>
          <p className="cta-subtitle">Find a tutor in minutes. Take your skills to the next level.</p>
          <a href="/signup" className="btn btn-primary btn-large">Get Started Now</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="logo">Tutorly</div>
            <p>Global platform connecting students with world-class tutors.</p>
            <div className="social-links">
              <a href="#"><i className="ph-fill ph-twitter-logo"></i></a>
              <a href="#"><i className="ph-fill ph-instagram-logo"></i></a>
              <a href="#"><i className="ph-fill ph-linkedin-logo"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#">Find Tutors</a>
              <a href="#">How it Works</a>
              <a href="#">Pricing</a>
              <a href="#">Reviews</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2026 Tutorly Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
