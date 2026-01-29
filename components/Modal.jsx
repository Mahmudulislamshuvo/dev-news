"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  children,
  className: widthClass = "max-w-lg",
}) => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Handle Animation & Body Scroll Lock
  useEffect(() => {
    let scrollTimer;
    let visibilityTimer;

    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      scrollTimer = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 300);
      visibilityTimer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(visibilityTimer);
      // Failsafe to restore scroll if component unmounts unexpectedly
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // 3. Handle Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || (!isOpen && !isVisible)) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* --- BACKDROP (Black Overlay) --- */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose} // ব্যাকগ্রাউন্ডে ক্লিক করলে বন্ধ হবে
      />

      {/* --- MODAL CONTENT WRAPPER --- */}
      <div
        className={`relative w-full ${widthClass} transform rounded-2xl bg-[#10131b] border border-white/10 shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close Button (Optional - চাইলে মুছে দিতে পারেন) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 hover:bg-white/10 hover:text-white transition"
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

        {/* --- DYNAMIC CONTENT --- */}
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
