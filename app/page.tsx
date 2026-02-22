"use client"

import { useEffect } from "react"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { AuthGuard } from "@/components/auth-guard"
import {
  DraftingCompass,
  Box,
  Layers,
  Layout,
  Monitor,
  Compass,
  Briefcase
} from "lucide-react"

export default function Home() {
  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob")
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Parallax Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset

      // Hero parallax
      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ; (text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`
        }
      })

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        const img = heroImg.querySelector('.hero-image') as HTMLElement
        if (img) {
          img.style.transform = `translateY(${scroll * 0.06}px) scale(${1 + scroll * 0.0003})`
        }
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
          ; (label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Simple reveal on enter (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text)
    })

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLAnchorElement
        const href = target.getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    // Mobile menu toggle logic
    const handleMobileToggleClick = (e: MouseEvent) => {
      e.stopPropagation();
      document.body.classList.toggle('mobile-open');
    }
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', handleMobileToggleClick);
    }

    const handleLinkClick = () => {
      document.body.classList.remove('mobile-open');
    }
    const navLinksList = document.querySelectorAll('.main-nav a');
    navLinksList.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    const handleOutsideClick = (e: MouseEvent) => {
      if (document.body.classList.contains('mobile-open') &&
        !(e.target as Element).closest('.main-nav') &&
        !(e.target as Element).closest('.mobile-toggle')) {
        document.body.classList.remove('mobile-open');
      }
    }
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener('click', handleOutsideClick)
      if (mobileToggle) mobileToggle.removeEventListener('click', handleMobileToggleClick)
      navLinksList.forEach(link => link.removeEventListener('click', handleLinkClick))
      observer.disconnect()
    }
  }, [])

  return (
    <AuthGuard>
      <div className="blob" id="cursor-blob"></div>

      <header className="main-header">
        <div className="logo">AAKANKSHA TAYADE ©26</div>

        <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav role="navigation" aria-label="Main navigation" className="main-nav">
          <ul className="nav-links">
            <li>
              <a href="#portfolio">Spaces</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero">
          <div className="hero-split">
            {/* Left: Text content */}
            <div className="hero-left">
              <div className="hero-left-inner">
                <p className="hero-eyebrow">Hi, I&apos;m</p>
                <div className="hero-accent-line"></div>
                <h1 className="hero-name">
                  <span className="hero-name-line">AAKANKSHA</span>
                  <span className="hero-name-line hero-name-outline">TAYADE</span>
                </h1>
                <p className="hero-role">Workplace Designer</p>
                <p className="hero-subtitle">
                  Designing workplaces that elevate people, productivity & culture — across 2M+ sq.ft. of commercial interiors.
                </p>
                <div className="hero-stats">
                  <div className="hero-stat">
                    <span className="hero-stat-number">16+</span>
                    <span className="hero-stat-label">Years</span>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat">
                    <span className="hero-stat-number">STUDIO</span>
                    <span className="hero-stat-label">PRACTICE</span>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat">
                    <span className="hero-stat-number">2M+</span>
                    <span className="hero-stat-label">Sq.Ft.</span>
                  </div>
                </div>
                <a href="#portfolio" className="hero-cta">
                  <span>VIEW WORK</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hero-right">
              <div className="hero-image-container" id="hero-img">
                <img
                  src="/projects/fractal/img-05.jpg"
                  alt="Interior Design by Aakanksha Tayade"
                  className="hero-image"
                />
                <div className="hero-image-overlay"></div>
                <div className="hero-image-label">
                  <span>FRACTAL TECH CAMPUS</span>
                  <span>BANGALORE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section id="about">
          <div className="container">
            <div className="about-content">
              <h2 className="about-heading">
                CREATING FUNCTIONAL AND AESTHETICALLY REFINED SPACES.
              </h2>
              <p className="about-description">
                With 16 years of experience in workplace and commercial interiors, I design spaces that feel calm, purposeful, and naturally balanced. My work focuses on creating thoughtful environments where aesthetics and function support each other — using clean layouts, subtle tones, and refined detailing to shape contemporary, welcoming workplaces. I take time to understand each client&apos;s vision and translate it into spaces that encourage focus, collaboration, and everyday ease. Through strategic space planning and a clear visual language, I aim to create interiors that feel intuitive, enduring, and genuinely aligned with how people work today.
              </p>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="scrolling-marquee">
          <div className="marquee-inner">
            <span className="huge-type outline-text">INTERIOR DESIGN — SPACE PLANNING — COMMERCIAL INTERIORS — PEOPLE-CENTRIC — </span>
            <span className="huge-type outline-text">INTERIOR DESIGN — SPACE PLANNING — COMMERCIAL INTERIORS — PEOPLE-CENTRIC — </span>
          </div>
        </div>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio">
          <ProjectsCarousel />
        </section>

        {/* EXPERTISE SECTION */}
        <section className="expertise-section">
          <div className="container" style={{ position: "relative" }}>
            <div className="expertise-bg-text">EXPERTISE</div>
            <h2 className="expertise-heading">CORE EXPERTISE</h2>
            <div className="expertise-grid">
              <div className="expertise-card group">
                <div className="expertise-number">01</div>
                <div className="expertise-content">
                  <h4>Workplace Design & Space Planning</h4>
                  <p>Functional workplace layouts driven by workflow analysis, user behavior, and spatial efficiency.</p>
                </div>
              </div>
              <div className="expertise-card group">
                <div className="expertise-number">02</div>
                <div className="expertise-content">
                  <h4>Concept Development & Design Strategy</h4>
                  <p>Creative ideation and design narratives that align with organizational identity.</p>
                </div>
              </div>
              <div className="expertise-card group">
                <div className="expertise-number">03</div>
                <div className="expertise-content">
                  <h4>CAD Drafting & Layout Planning</h4>
                  <p>End-to-end technical execution ensuring architecture-grade precision and quality delivery.</p>
                </div>
              </div>
              <div className="expertise-card group">
                <div className="expertise-number">04</div>
                <div className="expertise-content">
                  <h4>Refurbishment & Fit-Out Projects</h4>
                  <p>Comprehensive renovation and modernization for existing commercial environments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills-section">
          <div className="container">
            <h2 className="skills-heading">TECHNICAL SKILLS</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <DraftingCompass className="skill-icon" />
                <h4>AutoCAD</h4>
                <div className="skill-level">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill-card">
                <Box className="skill-icon" />
                <h4>Revit</h4>
                <div className="skill-level">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>


              <div className="skill-card">
                <Layout className="skill-icon" />
                <h4>Adobe Creative Suite</h4>
                <div className="skill-level">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-card">
                <Compass className="skill-icon" />
                <h4>Space Planning</h4>
                <div className="skill-level">
                  <div className="skill-progress" style={{ width: "100%" }}></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact">
          <div className="container">
            <div className="footer-cta">
              <a href="mailto:contact@aakanksha-tayade.com">GET IN TOUCH</a>
            </div>
            <div className="footer-cv">
              <a href="https://docs.google.com/presentation/d/1904aufx_Nq2rVSv_cuVenVwjhk4ZBkJS/edit?usp=sharing&ouid=116468548126241667113&rtpof=true&sd=true" className="hero-cta" target="_blank" rel="noopener noreferrer">
                <span>DOWNLOAD CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>
            <div className="divider"></div>
            <div className="footer-bottom">
              <div>© 2026 AAKANKSHA TAYADE</div>
              <div className="footer-links">
                <a href="https://www.linkedin.com/in/aakanksha-tayade-a03ab3164/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a href="mailto:contact@aakanksha-tayade.com">EMAIL</a>
                <span>+91 91674 81822</span>
              </div>
              <div>Workplace Designer</div>
            </div>
          </div>
        </footer>
      </main>
    </AuthGuard>
  )
}
