<script lang="ts">
    import { Sun, Moon, Monitor } from "@lucide/svelte";
    import { themeStore, type Theme } from "$lib/stores/theme.svelte";

    let { class: className = "" }: { class?: string } = $props();

    const options: Array<{ value: Theme; label: string; icon: typeof Sun }> = [
        { value: "light", label: "ライト", icon: Sun },
        { value: "dark", label: "ダーク", icon: Moon },
        { value: "system", label: "システム", icon: Monitor },
    ];
</script>

<div
    role="radiogroup"
    aria-label="テーマ選択"
    class="inline-flex items-center gap-0.5 rounded-full border border-slate-200 bg-white p-0.5 shadow-sm dark:border-slate-800 dark:bg-slate-900 {className}"
>
    {#each options as option (option.value)}
        {@const Icon = option.icon}
        <button
            type="button"
            role="radio"
            aria-checked={themeStore.theme === option.value}
            aria-label={option.label}
            title={option.label}
            onclick={() => themeStore.set(option.value)}
            class="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 {themeStore.theme ===
            option.value
                ? 'bg-indigo-600 text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'}"
        >
            <Icon class="h-4 w-4" />
        </button>
    {/each}
</div>
