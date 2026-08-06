<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        variant?: "default" | "secondary" | "outline" | "destructive" | "guest" | "success" | "tech";
        class?: string;
        children?: Snippet;
    }

    let { variant = "default", class: className = "", children }: Props = $props();

    const variants = {
        default: "border-transparent bg-slate-900 text-white dark:bg-white dark:text-slate-900",
        secondary: "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
        outline: "border-slate-200 text-slate-900 dark:border-slate-700 dark:text-slate-100",
        destructive: "border-transparent bg-red-500 text-white dark:bg-red-600",
        guest: "border-transparent bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
        tech: "border border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    } as const;
</script>

<span
    class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold {variants[
        variant
    ]} {className}"
>
    {@render children?.()}
</span>
