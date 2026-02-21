"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface ProjectGalleryProps {
    images: string[]
    projectName: string
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return
            if (e.key === "Escape") closeModal()
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedImage])

    const openModal = (index: number) => {
        setSelectedImage(index)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setSelectedImage(null)
        document.body.style.overflow = "auto"
    }

    const nextImage = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation()
        setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null))
    }

    const prevImage = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation()
        setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
    }

    return (
        <>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item relative group cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={image}
                            alt={`${projectName} - Image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn size={48} className="text-white opacity-80" />
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                        onClick={closeModal}
                    >
                        <X size={36} />
                    </button>

                    {/* Previous Button */}
                    <button
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-2"
                        onClick={prevImage}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[selectedImage]}
                            alt={`${projectName} - Full view`}
                            fill
                            className="object-contain select-none"
                        />
                        {/* Image Counter */}
                        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white/60 font-[var(--syne)] text-[0.7875rem] tracking-widest">
                            {String(selectedImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-2"
                        onClick={nextImage}
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </>
    )
}
