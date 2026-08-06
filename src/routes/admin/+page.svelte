<script lang="ts">
    import { onMount } from "svelte";
    import { Menu, X, Music, Users, UserCheck, Crown, Puzzle, Settings } from "@lucide/svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import MobileMenu from "$lib/components/MobileMenu.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import type { MenuGroup } from "$lib/types";
    import IntroSection from "$lib/sections/IntroSection.svelte";
    import AllUsersSection from "$lib/sections/AllUsersSection.svelte";
    import LoggedInUsersSection from "$lib/sections/LoggedInUsersSection.svelte";
    import AdminSection from "$lib/sections/AdminSection.svelte";
    import SystemExtensionSection from "$lib/sections/SystemExtensionSection.svelte";
    import SettingsSection from "$lib/sections/SettingsSection.svelte";
    import OperationalNotesSection from "$lib/sections/OperationalNotesSection.svelte";

    let activeSection = $state("intro");
    let isMobileMenuOpen = $state(false);

    const sectionIds = [
        "intro",
        "all-request",
        "all-playlist",
        "login-auth",
        "login-delete",
        "admin-auth",
        "admin-force",
        "sys-extension",
        "sys-server",
        "sys-shortcuts",
        "settings",
    ];

    const menuItems: MenuGroup[] = [
        {
            title: "All Users",
            icon: Users,
            items: [
                { id: "all-request", label: "楽曲リクエスト" },
                { id: "all-playlist", label: "プレイリスト閲覧" },
            ],
        },
        {
            title: "Logged-in Users",
            icon: UserCheck,
            items: [
                { id: "login-auth", label: "ログイン方法" },
                { id: "login-delete", label: "リクエスト削除" },
            ],
        },
        {
            title: "Admin Guide",
            icon: Crown,
            items: [
                { id: "admin-auth", label: "認証・権限" },
                { id: "admin-force", label: "強制管理" },
            ],
        },
        {
            title: "System & Extension",
            icon: Puzzle,
            items: [
                { id: "sys-extension", label: "自動再生制御" },
                { id: "sys-server", label: "サーバー制御" },
                { id: "sys-shortcuts", label: "ショートカット" },
            ],
        },
        {
            title: "Settings",
            icon: Settings,
            items: [{ id: "settings", label: "設定項目" }],
        },
    ];

    function scrollTo(id: string) {
        const element = document.getElementById(id);
        if (!element) return;
        activeSection = id;
        isMobileMenuOpen = false;
        requestAnimationFrame(() => element.scrollIntoView({ behavior: "smooth", block: "start" }));
    }

    onMount(() => {
        const handleScroll = () => {
            // At the very bottom the last section's top never reaches the trigger line,
            // so pin it explicitly instead of leaving the previous item highlighted.
            const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
            if (atBottom) {
                activeSection = sectionIds[sectionIds.length - 1];
                return;
            }

            // Otherwise the active section is the last one whose heading has passed the trigger line.
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (!element) continue;
                if (element.getBoundingClientRect().top <= 120) current = id;
            }
            activeSection = current;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<svelte:head>
    <title>MusicAutoPlay 取扱説明書</title>
</svelte:head>

<header
    class="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b bg-white/95 px-4 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95"
>
    <div class="flex items-center">
        <button
            type="button"
            aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
            class="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >
            {#if isMobileMenuOpen}
                <X class="h-5 w-5" />
            {:else}
                <Menu class="h-5 w-5" />
            {/if}
        </button>
        <div class="flex items-center gap-2 font-bold">
            <Music class="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span>MusicAutoPlay</span>
        </div>
    </div>
    <ThemeToggle />
</header>

<div class="mx-auto flex max-w-7xl">
    <Sidebar {activeSection} {menuItems} {scrollTo} />
    <MobileMenu open={isMobileMenuOpen} {activeSection} {menuItems} {scrollTo} />

    <main class="relative max-w-4xl flex-1 px-4 py-8 pb-32 md:px-12">
        <IntroSection />

        <div class="space-y-16">
            <AllUsersSection />
            <LoggedInUsersSection />
            <AdminSection />
            <SystemExtensionSection />
            <SettingsSection />
        </div>

        <OperationalNotesSection />
    </main>
</div>
