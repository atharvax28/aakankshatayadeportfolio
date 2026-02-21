"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"
import { ChevronLeft, ChevronRight } from "lucide-react"

const AUTO_SCROLL_INTERVAL = 5000 // 5 seconds

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const currentProject = projects[currentIndex]

  return (
    <section
      className="carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container carousel-container">
        {/* Header row: title + nav arrows */}
        <div className="carousel-header">
          <h2 className="carousel-section-title">SELECTED PROJECTS</h2>
          <div className="carousel-nav-arrows">
            <button
              onClick={prevSlide}
              className="carousel-arrow-btn"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="carousel-arrow-counter">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button
              onClick={nextSlide}
              className="carousel-arrow-btn"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Project Display */}
        <div className="carousel-content">
          {/* Left Panel - Project Info */}
          <div className="carousel-info">
            <div>
              <div className="carousel-category">
                <span className="category-badge">{currentProject.category}</span>
                <span className="year-badge">{currentProject.year}</span>
              </div>

              <Link href={`/projects/${currentProject.id}`}>
                <h2 className="carousel-title">{currentProject.name}</h2>
              </Link>

              <p className="carousel-description">{currentProject.description}</p>
            </div>

            <div className="project-details">
              <div className="detail-item">
                <p className="detail-label">CLIENT</p>
                <p className="detail-value">{currentProject.client}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">LOCATION</p>
                <p className="detail-value">{currentProject.location}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">AREA</p>
                <p className="detail-value">{currentProject.area}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">SCOPE</p>
                <p className="detail-value">{currentProject.scope}</p>
              </div>
            </div>

            <div className="carousel-actions-row">
              <Link href={`/projects/${currentProject.id}`} className="carousel-cta">
                VIEW FULL PROJECT →
              </Link>

              <div className="mobile-carousel-arrows">
                <button
                  onClick={prevSlide}
                  className="carousel-arrow-btn"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="carousel-arrow-btn"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="carousel-image-wrapper">
            <Link href={`/projects/${currentProject.id}`}>
              <Image
                key={currentProject.thumbnail}
                src={currentProject.thumbnail}
                alt={currentProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="carousel-image"
                priority
              />
            </Link>
          </div>

          <div className="mobile-only-project-title">
            <Link href={`/projects/${currentProject.id}`}>
              {currentProject.name}
            </Link>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
