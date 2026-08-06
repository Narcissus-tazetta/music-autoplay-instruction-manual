<script lang="ts">
    import { base } from "$app/paths";
    import type { MenuGroup } from "$lib/types";

    interface Props {
        open: boolean;
        activeSection: string;
        menuItems: MenuGroup[];
        scrollTo: (id: string) => void;
    }

    let { open, activeSection, menuItems, scrollTo }: Props = $props();
</script>

{#if open}
    <div class="fixed inset-0 z-30 overflow-y-auto bg-white px-6 pt-16 md:hidden dark:bg-slate-950">
        <nav class="space-y-6 pb-20">
            <a
                href="{base}/"
                class="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
                入口へ戻る
            </a>

            {#each menuItems as group (group.title)}
                {@const Icon = group.icon}
                <div>
                    <h4 class="mb-2 flex items-center text-lg font-bold dark:text-slate-100">
                        <Icon class="mr-2 h-5 w-5" />
                        {group.title}
                    </h4>
                    <div class="space-y-2 border-l-2 border-slate-100 pl-4 dark:border-slate-800">
                        {#each group.items as item (item.id)}
                            <button
                                onclick={() => scrollTo(item.id)}
                                aria-current={activeSection === item.id ? "true" : undefined}
                                class="block w-full rounded-md px-2 py-2 text-left transition-colors {activeSection ===
                                item.id
                                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
                                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'}"
                            >
                                {item.label}
                            </button>
                        {/each}
                    </div>
                </div>
            {/each}
        </nav>
    </div>
{/if}
