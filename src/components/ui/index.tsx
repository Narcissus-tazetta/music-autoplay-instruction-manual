import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "default" | "sm" | "icon";
}

export const Button = ({
    children,
    variant = "primary",
    size = "default",
    className = "",
    onClick,
    ...props
}: ButtonProps) => {
    const baseStyle =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50";
    const variants: Record<string, string> = {
        primary:
            "bg-slate-900 text-slate-50 hover:bg-slate-900/90 shadow dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        secondary:
            "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:text-slate-400",
        outline:
            "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100",
    };
    const sizes: Record<string, string> = {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        icon: "h-9 w-9",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "secondary" | "outline" | "destructive" | "guest" | "success" | "tech";
    className?: string;
}

export const Badge = ({ children, variant = "default", className = "" }: BadgeProps) => {
    const variants: Record<string, string> = {
        default: "border-transparent bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900",
        secondary: "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
        outline: "text-slate-950 border-slate-200 dark:text-slate-100 dark:border-slate-700",
        destructive: "border-transparent bg-red-500 text-slate-50 dark:bg-red-600 dark:text-slate-50",
        guest: "border-transparent bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
        tech: "border-transparent bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    };
    return (
        <div
            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300 ${variants[variant]} ${className}`}
        >
            {children}
        </div>
    );
};

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
    <div
        className={`rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 ${className}`}
    >
        {children}
    </div>
);

interface AlertProps {
    icon?: LucideIcon;
    title: string;
    children: React.ReactNode;
    variant?: "default" | "warning" | "danger" | "info";
}

export const Alert = ({ icon: Icon, title, children, variant = "default" }: AlertProps) => {
    const styles: Record<string, string> = {
        default:
            "bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100",
        warning:
            "bg-amber-50 border-amber-200 text-amber-900 [&>svg]:text-amber-600 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-100 dark:[&>svg]:text-amber-400",
        danger: "bg-red-50 border-red-200 text-red-900 [&>svg]:text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100 dark:[&>svg]:text-red-400",
        info: "bg-blue-50 border-blue-200 text-blue-900 [&>svg]:text-blue-600 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100 dark:[&>svg]:text-blue-400",
    };
    return (
        <div
            className={`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:[&>svg]:text-slate-50 ${styles[variant]}`}
        >
            {Icon && <Icon className="h-4 w-4" />}
            <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>
            <div className="text-sm opacity-90">{children}</div>
        </div>
    );
};

interface KbdProps {
    children: React.ReactNode;
}

export const Kbd = ({ children }: KbdProps) => (
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-500 shadow-[0px_1px_0px_0px_#e2e8f0] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:shadow-[0px_1px_0px_0px_#334155]">
        {children}
    </kbd>
);

interface CodeBlockProps {
    children: React.ReactNode;
}

export const CodeBlock = ({ children }: CodeBlockProps) => (
    <code className="relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
        {children}
    </code>
);
