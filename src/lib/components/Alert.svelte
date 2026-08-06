<script lang="ts">
    import type { Component, Snippet } from "svelte";

    interface Props {
        icon?: Component<{ class?: string }>;
        title: string;
        variant?: "default" | "warning" | "danger" | "info";
        children?: Snippet;
    }

    let { icon: Icon, title, variant = "default", children }: Props = $props();

    const styles = {
        default: "bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100",
        warning:
            "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-900/15 dark:border-amber-900/40 dark:text-amber-100",
        danger: "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/15 dark:border-red-900/40 dark:text-red-100",
        info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/15 dark:border-blue-900/40 dark:text-blue-100",
    } as const;

    const iconColor = {
        default: "text-slate-500 dark:text-slate-400",
        warning: "text-amber-600 dark:text-amber-400",
        danger: "text-red-600 dark:text-red-400",
        info: "text-blue-600 dark:text-blue-400",
    } as const;
</script>

<div class="relative w-full rounded-xl border p-4 {styles[variant]}">
    <div class="flex gap-3">
        {#if Icon}
            <Icon class="h-5 w-5 shrink-0 {iconColor[variant]}" />
        {/if}
        <div class="min-w-0 flex-1">
            <h5 class="mb-1 font-semibold leading-none tracking-tight">{title}</h5>
            <div class="text-sm opacity-90 leading-relaxed">
                {@render children?.()}
            </div>
        </div>
    </div>
</div>
