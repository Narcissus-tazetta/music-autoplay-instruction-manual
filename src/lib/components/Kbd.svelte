<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children?: Snippet } = $props();
</script>

<kbd
    class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-500 shadow-[0px_1px_0px_0px_var(--color-slate-300)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:shadow-[0px_1px_0px_0px_var(--color-slate-600)]"
>
    {@render children?.()}
</kbd>
