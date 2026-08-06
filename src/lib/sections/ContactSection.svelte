<script lang="ts">
    import { Mail } from "@lucide/svelte";
    import SlackIcon from "$lib/icons/SlackIcon.svelte";
    import GithubIcon from "$lib/icons/GithubIcon.svelte";

    const contacts = [
        {
            icon: Mail,
            label: "メール",
            value: "Ibaragiakira2007@gmail.com",
            href: "mailto:Ibaragiakira2007@gmail.com",
            external: false,
            tint: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800",
        },
        {
            icon: SlackIcon,
            label: "Slack",
            value: "Prason",
            href: "https://n-highschool.slack.com/team/U04VDPX7ZHV",
            external: true,
            tint: "bg-slate-50 text-slate-700 border-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600",
        },
        {
            icon: GithubIcon,
            label: "GitHub",
            value: "narcissus-tazetta",
            href: "https://github.com/narcissus-tazetta",
            external: true,
            tint: "bg-slate-50 text-slate-700 border-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600",
        },
    ];
</script>

<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <header class="mb-4 space-y-1 border-b border-slate-200 pb-4 dark:border-slate-800">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">お問合せ</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
            困ったときはこちらからお問い合わせください。返信目安: 平日1〜3日
        </p>
    </header>

    <div class="space-y-1">
        {#each contacts as contact (contact.label)}
            {@const Icon = contact.icon}
            <a
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                class="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
                aria-label="{contact.label} を開く（{contact.value}）"
            >
                <span class="flex items-center gap-3">
                    <span class="flex h-8 w-8 items-center justify-center rounded-md border {contact.tint}">
                        <Icon class="h-4 w-4" />
                    </span>
                    <span>
                        <span class="block text-sm font-semibold text-slate-900 dark:text-slate-100"
                            >{contact.label}</span
                        >
                        <span class="block text-xs text-slate-500 dark:text-slate-400">{contact.value}</span>
                    </span>
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500">開く</span>
            </a>
        {/each}
    </div>
</div>
