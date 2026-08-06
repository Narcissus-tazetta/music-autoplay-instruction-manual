<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface Props extends HTMLButtonAttributes {
        variant?: "primary" | "secondary" | "ghost" | "outline";
        size?: "default" | "sm" | "icon";
        class?: string;
        children?: Snippet;
    }

    let { variant = "primary", size = "default", class: className = "", children, ...rest }: Props = $props();

    const base =
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary:
            "bg-slate-900 text-white hover:bg-slate-800 shadow-sm dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        outline:
            "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100",
    } as const;

    const sizes = {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        icon: "h-9 w-9",
    } as const;
</script>

<button class="{base} {variants[variant]} {sizes[size]} {className}" {...rest}>
    {@render children?.()}
</button>
