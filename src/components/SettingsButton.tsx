import { Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import SettingsBar from "./SettingsBar";

interface SettingsButtonProps {
    className?: string;
    variant?: "primary" | "secondary" | "ghost" | "outline";
}

export default function SettingsButton({ className = "", variant = "ghost" }: SettingsButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    return (
        <div className={`relative ${className}`}>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="設定を開く"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50 ${
                    variant === "ghost"
                        ? "hover:bg-slate-100 hover:text-slate-900 text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:text-slate-400"
                        : variant === "outline"
                          ? "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                          : variant === "secondary"
                            ? "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80"
                            : "bg-slate-900 text-slate-50 hover:bg-slate-900/90 shadow dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90"
                } h-9 w-9`}
            >
                <Settings className="h-5 w-5" />
            </button>

            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute right-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    role="dialog"
                    aria-label="設定パネル"
                >
                    <SettingsBar onClose={() => setIsOpen(false)} />
                </div>
            )}
        </div>
    );
}
