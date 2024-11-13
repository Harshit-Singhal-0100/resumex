// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Resume AI Builder</h1>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Create Your Perfect Resume with AI</h2>
          <p>Build a professional resume in minutes, powered by artificial intelligence.</p>
          <a href="#get-started" className="btn-primary">Get Started</a>
          <a href="#get-started" className="btn-primary">Find Jobs</a>
          <a href="#get-started" className="btn-primary">Demo Vedio🎥</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-brain"></i> {/* Example icon */}
          </div>
          <h3>AI-Driven Suggestions</h3>
          <p>Our AI engine provides smart suggestions to help craft the perfect resume.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-palette"></i> {/* Example icon */}
          </div>
          <h3>Customizable Templates</h3>
          <p>Choose from a variety of professional resume templates tailored for your career.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-download"></i> {/* Example icon */}
          </div>
          <h3>Instant Export</h3>
          <p>Download your resume in PDF or Word format with a single click.</p>
        </div>
      </div>
    </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <h2>How It Works</h2>
        <p>Follow these simple steps to create your resume:</p>
        <ul>
          <li>1. Fill out your personal details.</li>
          <li>2. Choose a template and style.</li>
          <li>3. Let our AI suggest skills and experience to enhance your resume.</li>
          <li>4. Download and share your professional resume instantly!</li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are passionate about empowering job seekers with AI-driven tools to create standout resumes.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <a href="mailto:contact@resumeai.com" className="btn-primary">Email Us</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Resume AI Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
