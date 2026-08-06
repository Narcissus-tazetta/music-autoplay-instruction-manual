<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        children?: Snippet;
    }

    let { class: className = "", children }: Props = $props();
</script>

<div
    class="rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 {className}"
>
    {@render children?.()}
</div>
