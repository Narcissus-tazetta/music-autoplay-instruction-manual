<script lang="ts">
    import { base } from "$app/paths";
    import { ExternalLink, FileText, ShieldCheck, ArrowRight } from "@lucide/svelte";
    import ContactSection from "$lib/sections/ContactSection.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";

    const USER_DOC_URL =
        "https://docs.google.com/presentation/d/1hWra1a2wz4nR_77Xm88WEFgH6a44pA2ylEF0vrAIkFc/edit?usp=sharing";
    const ADMIN_DOC_URL =
        "https://docs.google.com/presentation/d/1RxfuYp7Ha9F12VKufR-qac9Jcy1WmUxfbwu1NVGqNW4/edit?usp=sharing";

    const links = [
        {
            href: USER_DOC_URL,
            external: true,
            icon: FileText,
            tint: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800",
            title: "ユーザー用",
            subtitle: "Google スライド（別タブで開く）",
        },
        {
            href: ADMIN_DOC_URL,
            external: true,
            icon: ShieldCheck,
            tint: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",
            title: "管理者用",
            subtitle: "Google スライド（別タブで開く）",
        },
        {
            href: `${base}/admin`,
            external: false,
            icon: ShieldCheck,
            tint: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800",
            title: "管理者（プログラミングわかる人向け）",
            subtitle: "このサイト（詳細仕様）",
        },
    ];
</script>

<svelte:head>
    <title>MusicAutoPlay 利用ガイド</title>
</svelte:head>

<main class="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-16">
    <div class="mb-6 flex justify-end">
        <ThemeToggle />
    </div>

    <header class="mb-10 space-y-3">
        <p class="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">MUSIC-AUTOPLAY</p>
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-slate-100">
            利用ガイド
        </h1>
        <p class="text-base text-slate-600 dark:text-slate-400">
            立場や用途に合わせて、以下のドキュメントから選択してください。
        </p>
        <p class="text-sm text-amber-700 dark:text-amber-400">
            ※「管理者（プログラミングわかる人向け）」は技術者向けです。
        </p>
    </header>

    <div class="grid gap-3">
        {#each links as link (link.title)}
            {@const Icon = link.icon}
            <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
                <span class="flex items-center gap-3">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl border {link.tint}">
                        <Icon class="h-5 w-5" />
                    </span>
                    <span>
                        <span class="block font-semibold text-slate-900 dark:text-slate-100">{link.title}</span>
                        <span class="block text-xs text-slate-500 dark:text-slate-400">{link.subtitle}</span>
                    </span>
                </span>
                {#if link.external}
                    <ExternalLink
                        class="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    />
                {:else}
                    <ArrowRight
                        class="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    />
                {/if}
            </a>
        {/each}
    </div>

    <div class="mt-8">
        <ContactSection />
    </div>
</main>
