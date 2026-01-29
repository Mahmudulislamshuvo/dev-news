"use client";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  children,
  className: widthClass = "max-w-lg",
}) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Modal Open/Close Animation
  useEffect(() => {
    let visibilityTimer;
    if (isOpen) {
      setIsVisible(true);
    } else {
      visibilityTimer = setTimeout(() => setIsVisible(false), 300);
    }
    return () => clearTimeout(visibilityTimer);
  }, [isOpen]);

  // Handle Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle Scroll Logic
  const handleScroll = () => {
    // 1. Set scrolling true immediately (Show bar)
    setIsScrolling(true);

    // 2. Clear previous timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // 3. Set timeout to hide bar after inactivity
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1500); // Wait 1.5 seconds before starting the fade out
  };

  if (!mounted || (!isOpen && !isVisible)) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <style jsx global>{`
        /* 1. Base State (Hidden/Transparent) */
        .custom-modal-scroll::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 10px;

          /* MAGIC PART: When the class is REMOVED, take 1 second to fade to transparent */
          transition: background-color 1s ease-out;
        }

        /* 2. Active State (Visible) */
        .custom-modal-scroll.scrolling::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);

          /* MAGIC PART: When class is ADDED, appear instantly (0s) */
          transition: background-color 0s;
        }

        /* 3. Track (Always Transparent) */
        .custom-modal-scroll::-webkit-scrollbar {
          width: 6px;
          background-color: transparent;
        }

        /* Firefox support (Transitions are limited in FF, but this sets logic) */
        .custom-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          transition: scrollbar-color 1s;
        }
        .custom-modal-scroll.scrolling {
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
          transition: scrollbar-color 0s;
        }
      `}</style>

      {/* --- BACKDROP --- */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* --- MODAL CONTENT WRAPPER --- */}
      <div
        className={`relative flex flex-col w-full ${widthClass} max-h-[90vh] transform rounded-2xl bg-[#10131b] border border-white/10 shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-1 text-zinc-400 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* CONTENT AREA */}
        <div
          className={`p-1 overflow-y-auto custom-modal-scroll ${isScrolling ? "scrolling" : ""}`}
          onScroll={handleScroll}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
