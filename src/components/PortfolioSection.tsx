import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Sparkles,
  X,
  ZoomIn,
  Play,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Video as VideoIcon,
  Image as ImageIcon
} from 'lucide-react';

interface ProjectVideo {
  id: number;
  src: string;
  title: string;
  category: string;
}

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const projectVideos: ProjectVideo[] = [
  { id: 1, src: '/videos/j1.mp4', title: 'Site Walkthrough 01', category: 'Structure & Framing' },
  { id: 2, src: '/videos/j2.mp4', title: 'Site Walkthrough 02', category: 'Construction Progress' },
  { id: 3, src: '/videos/j3.mp4', title: 'Site Walkthrough 03', category: 'Exterior Elevation' },
  { id: 4, src: '/videos/j4.mp4', title: 'Site Walkthrough 04', category: 'Masonry & Slab Work' },
  { id: 5, src: '/videos/j5.mp4', title: 'Site Walkthrough 05', category: 'Interior Framing' },
  { id: 6, src: '/videos/j6.mp4', title: 'Site Walkthrough 06', category: 'Plastering & Finishes' },
  { id: 7, src: '/videos/j7.mp4', title: 'Site Walkthrough 07', category: 'Site Inspection' },
  { id: 8, src: '/videos/j8.mp4', title: 'Site Walkthrough 08', category: 'Quality Supervision' },
];

const projectImages: ProjectImage[] = [
  { id: 1, src: '/projects/project1.jpg', alt: 'Makan Constructions Project 1', title: 'Structural Development' },
  { id: 2, src: '/projects/project2.jpg', alt: 'Makan Constructions Project 2', title: 'Reinforcement & Framing' },
  { id: 3, src: '/projects/project3.jpg', alt: 'Makan Constructions Project 3', title: 'Elevation & Brickwork' },
  { id: 4, src: '/projects/project4.jpg', alt: 'Makan Constructions Project 4', title: 'Exterior Plaster Work' },
  { id: 5, src: '/projects/project5.jpg', alt: 'Makan Constructions Project 5', title: 'Dual-Storey Residential Site' }
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'images'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // Update active slide index based on carousel scroll position
  const handleCarouselScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    const cardWidth = 270; // approximate width + gap
    const index = Math.round(scrollLeft / cardWidth);
    const clamped = Math.max(0, Math.min(projectVideos.length - 1, index));
    setActiveVideoSlide(clamped);
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = 270;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveVideoSlide(index);
  };

  // Keyboard navigation for fullscreen video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedVideoIndex !== null) {
        if (e.key === 'Escape') {
          setSelectedVideoIndex(null);
        } else if (e.key === 'ArrowRight') {
          setSelectedVideoIndex((prev) =>
            prev !== null ? (prev + 1) % projectVideos.length : null
          );
        } else if (e.key === 'ArrowLeft') {
          setSelectedVideoIndex((prev) =>
            prev !== null ? (prev - 1 + projectVideos.length) % projectVideos.length : null
          );
        }
      } else if (selectedImage !== null && e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideoIndex, selectedImage]);

  // Request browser native fullscreen for modal
  const toggleNativeFullscreen = () => {
    if (!modalContainerRef.current) return;
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen?.().catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen?.().catch((err) => {
        console.warn('Exit fullscreen failed:', err);
      });
    }
  };

  return (
    <section id="portfolio" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-foreground/80 uppercase">
              Our Works &amp; Site Progress
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight mb-3">
            Crafted Structures &amp; <span className="text-gold-600">On-Site Highlights</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans max-w-lg mx-auto">
            Experience our craftsmanship through real on-site video walkthroughs and architectural construction milestones.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-7">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              All Works
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-gold-600 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <VideoIcon className="w-3.5 h-3.5" />
              Site Videos ({projectVideos.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('images')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'images'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Site Photos ({projectImages.length})
            </button>
          </div>
        </div>

        {/* =========================================================================
            1. ON-SITE VIDEOS CAROUSEL / SWIPE SHOWCASE
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="mb-16 sm:mb-20">
            {/* Subsection Heading & Carousel Controls */}
            <div className="flex items-center justify-between mb-5 sm:mb-6 px-1">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-600 animate-pulse"></span>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-900">
                    On-Site Video Walkthroughs
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-0.5">
                  Swipe or use arrows to browse clips • Tap any video to play full screen
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-sm hover:shadow transition-all active:scale-95"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-sm hover:shadow transition-all active:scale-95"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Video Cards Swipe Container */}
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projectVideos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideoIndex(index)}
                  className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[275px] h-[390px] sm:h-[440px] relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/90 bg-stone-900"
                >
                  {/* Video Thumbnail / Preview */}
                  <video
                    src={video.src}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Aesthetic Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-stone-950/40 pointer-events-none" />

                  {/* Top Badge Info */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-white/90 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md border border-white/20">
                      Clip {video.id} of {projectVideos.length}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-stone-900/60 backdrop-blur-sm text-gold-300">
                      9:16 HD
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-500/95 text-stone-950 flex items-center justify-center shadow-2xl shadow-gold-500/40 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-stone-950 translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Meta & Fullscreen CTA */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10 text-white">
                    <span className="text-[11px] font-medium text-gold-400 block tracking-wide uppercase">
                      {video.category}
                    </span>
                    <h4 className="font-sans font-bold text-base text-white truncate mt-0.5">
                      {video.title}
                    </h4>

                    <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-medium text-stone-300 group-hover:text-gold-300 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to play full screen</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {projectVideos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeVideoSlide === index
                      ? 'w-6 bg-gold-600'
                      : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            2. UNIFORM SITE PHOTOS GALLERY
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'images') && (
          <div>
            <div className="flex items-center justify-between mb-5 sm:mb-6 px-1">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-stone-900"></span>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-900">
                    Construction &amp; Site Progress Photos
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-0.5">
                  High-resolution photo documentation of on-site structural works
                </p>
              </div>
            </div>

            {/* Pure Uniform Image Grid (All cards identical size) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projectImages.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedImage(project.src)}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-200 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-200/80 h-[280px] sm:h-[340px] w-full"
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Clean Bottom Label */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent text-white pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold tracking-wide text-gold-300 uppercase block">
                      Phase 0{project.id}
                    </span>
                    <h5 className="text-sm font-bold truncate text-white">
                      {project.title}
                    </h5>
                  </div>

                  {/* Minimal Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 text-stone-900 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-gold-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          FULL-SCREEN VIDEO LIGHTBOX MODAL
          ========================================================================= */}
      {selectedVideoIndex !== null && (
        <div
          ref={modalContainerRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedVideoIndex(null)}
        >
          {/* Top Bar inside Modal */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-50 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-600 text-stone-950 uppercase tracking-wider">
                Clip {projectVideos[selectedVideoIndex].id} of {projectVideos.length}
              </span>
              <span className="font-sans text-xs sm:text-sm font-medium text-stone-300 hidden sm:inline">
                {projectVideos[selectedVideoIndex].title} — {projectVideos[selectedVideoIndex].category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Native Fullscreen Button */}
              <button
                type="button"
                onClick={toggleNativeFullscreen}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors shadow-lg"
                title="Toggle Fullscreen"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedVideoIndex(null)}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-red-500/80 text-white backdrop-blur-md transition-colors shadow-lg"
                title="Close Video"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideoIndex((prev) =>
                prev !== null ? (prev - 1 + projectVideos.length) % projectVideos.length : null
              );
            }}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all z-50 shadow-xl"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideoIndex((prev) =>
                prev !== null ? (prev + 1) % projectVideos.length : null
              );
            }}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all z-50 shadow-xl"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Video Player Container (Vertical aspect for 9:16 videos) */}
          <div
            className="relative h-[82vh] max-h-[88vh] aspect-[9/16] max-w-[92vw] flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-black border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              key={projectVideos[selectedVideoIndex].src}
              src={projectVideos[selectedVideoIndex].src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* =========================================================================
          IMAGE LIGHTBOX MODAL
          ========================================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-stone-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors z-50 shadow-lg"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Full-view Image Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Makan Constructions Full Preview"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
