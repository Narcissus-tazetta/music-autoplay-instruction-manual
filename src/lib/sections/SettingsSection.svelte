<script lang="ts">
    import { Settings, Info, Database, RefreshCw } from "@lucide/svelte";
    import Badge from "$lib/components/Badge.svelte";
    import Card from "$lib/components/Card.svelte";

    const settings = [
        {
            key: "ytStatusMode",
            label: "ステータス表示モード",
            description: "プレイヤーの状態表示形式を変更できます。",
            values: [
                { name: "compact", variant: "tech", note: "簡易表示（デフォルト）" },
                { name: "player", variant: "tech", note: "プレイヤー風の詳細表示" },
            ],
        },
        {
            key: "ytStatusVisible",
            label: "ステータス表示/非表示",
            description: "再生中の動画ステータスバーを表示するかどうかを切り替えます。",
            values: [
                { name: "true", variant: "success", note: "表示する（デフォルト）" },
                { name: "false", variant: "secondary", note: "非表示にする" },
            ],
        },
    ] as const;

    const statuses = [
        { label: "再生中", desc: "通常の動画が再生されている状態", dot: "bg-emerald-600", tint: "from-emerald-50 dark:from-emerald-900/20 border-emerald-200 dark:border-emerald-900/40", text: "text-emerald-900 dark:text-emerald-200", body: "text-emerald-800 dark:text-emerald-300" },
        { label: "一時停止", desc: "動画が停止している状態", dot: "bg-orange-600", tint: "from-orange-50 dark:from-orange-900/20 border-orange-200 dark:border-orange-900/40", text: "text-orange-900 dark:text-orange-200", body: "text-orange-800 dark:text-orange-300" },
        { label: "広告再生中", desc: "YouTube広告が表示されている状態", dot: "bg-yellow-500", tint: "from-yellow-50 dark:from-yellow-900/20 border-yellow-200 dark:border-yellow-900/40", text: "text-yellow-900 dark:text-yellow-200", body: "text-yellow-800 dark:text-yellow-300" },
        { label: "次の動画に移動中", desc: "自動遷移の処理中", dot: "bg-blue-500", tint: "from-blue-50 dark:from-blue-900/20 border-blue-200 dark:border-blue-900/40", text: "text-blue-900 dark:text-blue-200", body: "text-blue-800 dark:text-blue-300" },
        { label: "外部動画再生中", desc: "リスト外の動画が再生されている", dot: "bg-purple-500", tint: "from-purple-50 dark:from-purple-900/20 border-purple-200 dark:border-purple-900/40", text: "text-purple-900 dark:text-purple-200", body: "text-purple-800 dark:text-purple-300" },
        { label: "タブが閉じられた", desc: "YouTubeタブが存在しない状態（30秒後に自動非表示）", dot: "bg-slate-500", tint: "from-slate-50 dark:from-slate-800 border-slate-200 dark:border-slate-700", text: "text-slate-900 dark:text-slate-200", body: "text-slate-800 dark:text-slate-300" },
    ];
</script>

<section class="mt-12 space-y-8 border-t border-slate-200 pt-8 dark:border-slate-800">
    <div id="settings" class="scroll-mt-24 space-y-6">
        <h2 class="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Settings class="h-6 w-6 text-slate-700 dark:text-slate-300" />
            設定項目 (User Settings)
        </h2>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
            各ユーザーごとにカスタマイズ可能な設定です。設定はサーバーに保存され、複数のデバイス間で同期されます。
        </p>

        <div class="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
            <!-- Narrow screens: the two-column table collapses badly, so stack each setting instead. -->
            <div class="divide-y divide-slate-200 md:hidden dark:divide-slate-800">
                {#each settings as setting (setting.key)}
                    <div class="space-y-3 bg-white p-4 dark:bg-slate-900">
                        <div>
                            <div class="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                {setting.key}
                            </div>
                            <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{setting.label}</div>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-300">{setting.description}</p>
                        <div class="space-y-1.5">
                            {#each setting.values as value (value.name)}
                                <div class="flex flex-wrap items-center gap-2">
                                    <Badge variant={value.variant}>{value.name}</Badge>
                                    <span class="text-xs text-slate-500 dark:text-slate-400">{value.note}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>

            <table class="hidden w-full text-left text-sm md:table">
                <thead class="border-b border-slate-200 bg-slate-100 font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                    <tr>
                        <th class="w-1/3 px-6 py-3">設定項目</th>
                        <th class="px-6 py-3">説明</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    {#each settings as setting (setting.key)}
                        <tr class="bg-white align-top dark:bg-slate-900">
                            <td class="px-6 py-4">
                                <div class="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                    {setting.key}
                                </div>
                                <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{setting.label}</div>
                            </td>
                            <td class="px-6 py-4 text-slate-600 dark:text-slate-300">
                                <div class="space-y-2">
                                    <p>{setting.description}</p>
                                    {#each setting.values as value (value.name)}
                                        <div class="flex flex-wrap items-center gap-2">
                                            <Badge variant={value.variant}>{value.name}</Badge>
                                            <span class="text-xs text-slate-400">{value.note}</span>
                                        </div>
                                    {/each}
                                </div>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>

            <div class="space-y-2 border-t border-slate-200 bg-slate-50 px-4 py-4 text-xs text-slate-600 md:px-6 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                <p class="flex items-start gap-2">
                    <Database class="mt-0.5 h-3 w-3 shrink-0" />
                    <span><span class="font-medium">保存場所:</span> サーバーサイド（ユーザーIDに紐付けて永続化）</span>
                </p>
                <p class="flex items-start gap-2">
                    <RefreshCw class="mt-0.5 h-3 w-3 shrink-0" />
                    <span>
                        <span class="font-medium">同期:</span>
                        ログイン時に自動的にサーバーから取得され、変更時はリアルタイムで保存されます
                    </span>
                </p>
            </div>
        </div>

        <div class="mt-8 space-y-4">
            <h3 class="flex items-center gap-2 text-lg font-semibold">
                <Info class="h-5 w-5 text-slate-500 dark:text-slate-400" />
                ステータスバーの状態表示
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
                ステータスバーは現在のプレイヤーの状態をリアルタイムで表示します。
            </p>
            <div class="grid gap-3 md:grid-cols-2">
                {#each statuses as status (status.label)}
                    <Card class="bg-gradient-to-br to-white p-4 dark:to-slate-900 {status.tint}">
                        <div class="mb-2 flex items-center gap-2">
                            <div class="h-3 w-3 rounded-full {status.dot}"></div>
                            <span class="text-sm font-bold {status.text}">{status.label}</span>
                        </div>
                        <p class="text-xs {status.body}">{status.desc}</p>
                    </Card>
                {/each}
            </div>
        </div>
    </div>
</section>
