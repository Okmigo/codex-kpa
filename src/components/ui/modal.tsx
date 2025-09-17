"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        className={cn(
          "relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-strong",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* Header */}
        {(title || true) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 id="modal-title" className="text-xl font-semibold text-ink">
                {title}
              </h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="ml-auto"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}



