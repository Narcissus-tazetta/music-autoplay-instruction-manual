<script lang="ts">
    import { base } from "$app/paths";
    import { Puzzle, RefreshCw, Info, TriangleAlert, Database, Lock, Zap, Shield, Keyboard } from "@lucide/svelte";
    import Alert from "$lib/components/Alert.svelte";
    import Card from "$lib/components/Card.svelte";
    import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Kbd from "$lib/components/Kbd.svelte";
    import PreviewButton from "$lib/components/PreviewButton.svelte";

    const assetBase = `${base}/assets/`;

    const shortcuts = [
        { key: "L", title: "自動再生を開始", description: "URLリストの先頭を開く" },
        { key: "X", title: "YouTube動画の再生/停止", description: "開いているYouTubeタブの動画を一時停止/再生" },
        { key: "P", title: "開発UIの切り替え", description: "ポップアップの隠しUI表示を切り替え" },
    ] as const;
</script>

<section class="space-y-8 pt-8">
    <div class="flex items-center gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
        <div class="rounded-lg bg-purple-100 p-2 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
            <Puzzle class="h-6 w-6" />
        </div>
        <h2 class="text-3xl font-bold tracking-tight">システム・拡張機能</h2>
    </div>

    <div id="sys-extension" class="scroll-mt-24 space-y-6">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <RefreshCw class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            Chrome拡張機能による制御
        </h3>

        <Alert title="自動再生の仕組み" icon={Info} variant="info">
            Chrome拡張機能がYouTubeページを監視し、動画終了を検知すると自動的に次の動画を開きます。
            前のタブは自動的に閉じられ、シームレスな連続再生を実現します。
        </Alert>

        <div class="grid gap-6 md:grid-cols-2">
            <Card class="relative space-y-4 p-4">
                <PreviewButton title="完全自動遷移" src="{assetBase}next-video.gif" />
                <h4 class="border-b pr-12 pb-2 font-medium dark:border-slate-800">完全自動遷移</h4>
                <ul class="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
                    <li>動画終了を検知して次の動画へ自動遷移</li>
                    <li>前のタブを自動クリーンアップ（閉じる）</li>
                    <li>再生・停止・シーク操作を全ユーザーに同期</li>
                    <li>
                        Chromeが起動している間バックグラウンドで動作（サービスワーカーとoffscreenは状況により停止/再開されます）
                    </li>
                </ul>
            </Card>

            <Card class="relative space-y-4 p-4">
                <PreviewButton title="広告検知・スキップ" src="{assetBase}ad.png" />
                <h4 class="border-b pr-12 pb-2 font-medium dark:border-slate-800">広告検知・スキップ</h4>
                <div class="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-900/15">
                    <div class="mb-2 flex items-center gap-2 text-sm font-bold text-amber-900 dark:text-amber-300">
                        <TriangleAlert class="h-4 w-4" />
                        Ad-block Logic
                    </div>
                    <ul class="list-disc space-y-1 pl-4 text-xs text-amber-800 dark:text-amber-300">
                        <li>動画広告を検知し、ステータスに反映</li>
                        <li>スキップ可能な広告は自動でスキップを試行</li>
                        <li>広告中は「広告再生中」と表示</li>
                        <li>広告終了後、通常の状態に自動復帰</li>
                    </ul>
                </div>
            </Card>

            <Card class="relative space-y-4 p-4">
                <PreviewButton title="状態監視" src="{assetBase}stop.png" />
                <h4 class="border-b pr-12 pb-2 font-medium dark:border-slate-800">状態監視</h4>
                <ul class="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
                    <li>再生/停止状態の監視</li>
                    <li>シーク（早送り・巻き戻し）の検知</li>
                    <li>バッファリング状態の追跡</li>
                    <li>タブの開閉を監視</li>
                </ul>
            </Card>

            <Card class="relative space-y-4 p-4">
                <PreviewButton title="リスト外動画の検知" src="{assetBase}out-of-list.png" />
                <h4 class="border-b pr-12 pb-2 font-medium dark:border-slate-800">リスト外動画の検知</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                    プレイリストに登録されていない動画が再生された場合、
                    <span class="mx-1 font-semibold text-purple-600 dark:text-purple-400">「リスト外 再生中」</span>
                    と表示され、紫色のステータスインジケーターで識別できます。
                </p>
            </Card>
        </div>
    </div>

    <div id="sys-server" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <Database class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            サーバーサイド制御
        </h3>
        <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-lg border bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <h4 class="mb-1 flex items-center gap-2 text-sm font-bold">
                    <Database class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    データの永続化
                </h4>
                <p class="mb-2 text-xs text-slate-600 dark:text-slate-400">
                    再生リストはJSONファイル（ローカル）またはMongoDBに保存できます。環境変数で保存先を切り替えられ、
                    開発環境はJSON、本番運用はMongoDBという使い分けができます。
                </p>
                <div class="space-y-2 rounded border bg-white p-2 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    <div>
                        <CodeBlock>data/musicRequests.json</CodeBlock>
                        <span class="ml-2 text-slate-400 dark:text-slate-500">— ファイルストア（ローカル）</span>
                    </div>
                    <div>
                        <CodeBlock>PERSISTENCE_PROVIDER=file</CodeBlock>
                        <span class="ml-2 text-slate-400 dark:text-slate-500">— デフォルト（JSONに保存）</span>
                    </div>
                    <div class="text-xs text-slate-400 dark:text-slate-500">
                        MongoDBに保存する場合は <CodeBlock>PERSISTENCE_PROVIDER=mongo</CodeBlock> と
                        <CodeBlock>MONGODB_URI</CodeBlock> が必要です（任意: <CodeBlock>MONGODB_DB_NAME</CodeBlock>,
                        <CodeBlock>MONGODB_COLLECTION</CodeBlock>）。
                    </div>
                </div>
            </div>
            <div class="rounded-lg border bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <h4 class="mb-1 flex items-center gap-2 text-sm font-bold">
                    <Lock class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    セッション管理
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-400">
                    ログイン状態は長期間保持されるCookieセッションで安全に管理されます。最大100年間有効です。
                </p>
            </div>
            <div class="rounded-lg border bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <h4 class="mb-1 flex items-center gap-2 text-sm font-bold">
                    <Zap class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    WebSocket通信
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-400">
                    Socket.IOによるリアルタイム双方向通信で、クライアント・サーバー・拡張機能の3者が連携します。
                </p>
            </div>
            <div class="rounded-lg border bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <h4 class="mb-1 flex items-center gap-2 text-sm font-bold">
                    <Shield class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    レート制限
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-400">
                    短時間の連投を防ぐため、IPアドレスごとにリクエスト回数を制限します（デフォルト: 60秒間で10回まで。
                    <CodeBlock>RATE_LIMIT_WINDOW_MS</CodeBlock> / <CodeBlock>RATE_LIMIT_MAX_ATTEMPTS</CodeBlock>
                    で変更可能）。
                </p>
            </div>
        </div>
    </div>

    <div id="sys-shortcuts" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <Keyboard class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            ショートカット
        </h3>
        <p class="mb-4 text-sm text-slate-600 dark:text-slate-400">Chrome拡張機能が提供するキーボードショートカット</p>

        <div class="space-y-3">
            <!-- Stacked on narrow screens: side-by-side squeezes the labels into two-line wraps. -->
            {#each shortcuts as shortcut (shortcut.key)}
                <div
                    class="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900"
                >
                    <div class="flex min-w-0 flex-col">
                        <span class="text-sm font-bold">{shortcut.title}</span>
                        <span class="text-xs text-slate-500 dark:text-slate-400">{shortcut.description}</span>
                    </div>
                    <div class="flex shrink-0 items-center gap-1.5">
                        <Kbd>Ctrl</Kbd>
                        <span class="text-slate-400 dark:text-slate-500">+</span>
                        <Kbd>Shift</Kbd>
                        <span class="text-slate-400 dark:text-slate-500">+</span>
                        <Kbd>{shortcut.key}</Kbd>
                    </div>
                </div>
            {/each}

            <div class="mt-2 rounded-lg border bg-slate-50 p-3 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                <p class="flex items-start gap-2">
                    <Info class="mt-0.5 h-3 w-3 shrink-0" />
                    <span class="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                        macOSでは <Kbd>Ctrl</Kbd> の代わりに <Kbd>Command (⌘)</Kbd> を使用します
                    </span>
                </p>
            </div>
        </div>
    </div>
</section>
