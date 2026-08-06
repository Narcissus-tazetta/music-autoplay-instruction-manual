<script lang="ts">
    import { Eye, X } from "@lucide/svelte";

    interface Props {
        title: string;
        src?: string;
        class?: string;
    }

    let { title, src, class: className = "" }: Props = $props();

    let open = $state(false);
    let imgError = $state(false);

    function show() {
        imgError = false;
        open = true;
    }

    function hide() {
        open = false;
    }

    function onKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") hide();
    }
</script>

<button
    type="button"
    onclick={show}
    aria-label="画像を見る"
    class="absolute right-3 top-3 inline-flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-slate-600 shadow-sm transition-colors hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100 {className}"
>
    <Eye class="h-4 w-4" />
    <span class="text-sm">画像を見る</span>
</button>

{#if open}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabindex="-1"
        onkeydown={onKeydown}
        onmousedown={(event) => {
            if (event.target === event.currentTarget) hide();
        }}
    >
        <div
            class="w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >
            <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                <div class="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                    <Eye class="h-4 w-4 text-slate-500 dark:text-slate-400" />
                    <span>{title}</span>
                </div>
                <button
                    type="button"
                    onclick={hide}
                    aria-label="閉じる"
                    class="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                    <X class="h-5 w-5" />
                </button>
            </div>

            <div class="p-6">
                {#if src && !imgError}
                    <img
                        {src}
                        alt={title}
                        class="h-[420px] w-full rounded-xl border border-slate-200 bg-slate-100 object-contain dark:border-slate-800 dark:bg-slate-800"
                        onerror={() => (imgError = true)}
                    />
                {:else}
                    <div
                        class="flex h-[420px] w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
                    >
                        <span class="text-sm text-slate-400 dark:text-slate-500">画像準備中</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
