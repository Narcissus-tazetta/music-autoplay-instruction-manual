<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<div
    class="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-100 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-indigo-900/60"
>
    {@render children()}
</div>
