import { projects } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ProjectGallery } from "@/components/project-gallery"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata(props: ProjectPageProps) {
  const params = await props.params
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} | Aakanksha Tayade`,
    description: project.description,
  }
}

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex((p) => p.id === params.id)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]

  return (
    <div className="project-detail-page">
      {/* Back Navigation */}
      <nav className="project-nav">
        <Link href="/#portfolio" className="back-link">
          ← Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="project-header">
            <span className="project-category">{project.category}</span>
            <h1 className="project-name">{project.name}</h1>
            <p className="project-tagline">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="project-main-image relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>

      {/* Project Information */}
      <section className="project-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <h3>CLIENT</h3>
              <p>{project.client}</p>
            </div>
            <div className="info-item">
              <h3>YEAR</h3>
              <p>{project.year}</p>
            </div>
            <div className="info-item">
              <h3>LOCATION</h3>
              <p>{project.location}</p>
            </div>
            <div className="info-item">
              <h3>AREA</h3>
              <p>{project.area}</p>
            </div>
            <div className="info-item">
              <h3>SCOPE</h3>
              <p>{project.scope}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-gallery">
        <div className="container">
          <h2 className="gallery-title">Project Gallery</h2>
          <ProjectGallery images={project.images} projectName={project.name} />
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="project-nav-section">
        <div className="container">
          <div className="projects-navigation">
            <Link href={`/projects/${prevProject.id}`} className="nav-card nav-prev">
              <div className="nav-label">← Previous</div>
              <div className="nav-title">{prevProject.name}</div>
            </Link>

            <Link href="/#portfolio" className="nav-center">
              ALL PROJECTS
            </Link>

            <Link href={`/projects/${nextProject.id}`} className="nav-card nav-next">
              <div className="nav-label">Next →</div>
              <div className="nav-title">{nextProject.name}</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
