"use client";

import * as React from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  type: ToastType;
  title: string;
  description?: string;
  onClose: () => void;
  duration?: number;
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const toastStyles = {
  success: "border-accent bg-accent/10 text-accent",
  error: "border-warn bg-warn/10 text-warn",
  info: "border-brand bg-brand/10 text-brand",
};

export function Toast({ type, title, description, onClose, duration = 5000 }: ToastProps) {
  const Icon = toastIcons[type];

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border p-4 shadow-medium",
        toastStyles[type]
      )}
      role="alert"
      aria-live="polite"
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm">{title}</p>
        {description && (
          <p className="text-sm opacity-90 mt-1">{description}</p>
        )}
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="h-6 w-6 flex-shrink-0"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: Array<ToastProps & { id: string }>;
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
}



