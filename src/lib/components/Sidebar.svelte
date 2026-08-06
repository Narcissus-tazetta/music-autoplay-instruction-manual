<script lang="ts">
    import { base } from "$app/paths";
    import { Music2, Info } from "@lucide/svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import type { MenuGroup } from "$lib/types";

    interface Props {
        activeSection: string;
        menuItems: MenuGroup[];
        scrollTo: (id: string) => void;
    }

    let { activeSection, menuItems, scrollTo }: Props = $props();
</script>

<aside
    class="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto border-r border-slate-200 py-8 pr-6 md:block dark:border-slate-800"
>
    <div class="mb-8 flex items-center gap-2 px-2 text-xl font-bold text-slate-900 dark:text-slate-100">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Music2 class="h-5 w-5" />
        </div>
        Music-AutoPlay
    </div>

    <div class="mb-6 flex items-center gap-2 px-2">
        <a
            href="{base}/"
            class="inline-flex h-9 flex-1 items-center justify-center rounded-lg border border-slate-200 bg-transparent px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
            入口へ戻る
        </a>
        <ThemeToggle />
    </div>

    <nav class="space-y-6">
        <button
            onclick={() => scrollTo("intro")}
            aria-current={activeSection === "intro" ? "true" : undefined}
            class="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm font-medium transition-colors {activeSection ===
            'intro'
                ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
                : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50'}"
        >
            <Info class="h-4 w-4" /> はじめに
        </button>

        {#each menuItems as group (group.title)}
            {@const Icon = group.icon}
            <div class="space-y-2">
                <h4 class="flex items-center gap-2 px-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    <Icon class="h-4 w-4 text-slate-500 dark:text-slate-400" />
                    {group.title}
                </h4>
                <div class="ml-2 grid border-l border-slate-200 pl-4 text-sm dark:border-slate-800">
                    {#each group.items as item (item.id)}
                        <button
                            onclick={() => scrollTo(item.id)}
                            aria-current={activeSection === item.id ? "true" : undefined}
                            class="w-full rounded-md px-2 py-1.5 text-left transition-colors {activeSection ===
                            item.id
                                ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'}"
                        >
                            {item.label}
                        </button>
                    {/each}
                </div>
            </div>
        {/each}
    </nav>
</aside>
