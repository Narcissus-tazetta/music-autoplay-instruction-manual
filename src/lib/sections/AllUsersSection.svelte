<script lang="ts">
    import { base } from "$app/paths";
    import { Users, Search, ListVideo, RefreshCw, CircleCheck, Zap, Shield } from "@lucide/svelte";
    import Card from "$lib/components/Card.svelte";
    import PreviewButton from "$lib/components/PreviewButton.svelte";

    const assetBase = `${base}/assets/`;
</script>

<section class="space-y-8">
    <div class="flex items-center gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
        <div class="rounded-lg bg-indigo-100 p-2 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
            <Users class="h-6 w-6" />
        </div>
        <h2 class="text-3xl font-bold tracking-tight">全ユーザー向け機能</h2>
    </div>

    <div id="all-request" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <Search class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            楽曲リクエスト
        </h3>
        <p class="text-slate-600 dark:text-slate-400">
            YouTubeのURLを入力するだけで、簡単に再生キューに追加できます。 ログイン不要で誰でも利用可能です。
        </p>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
            <Card class="relative bg-slate-50 p-4 dark:bg-slate-800/50">
                <PreviewButton title="メタデータ自動取得" src="{assetBase}metadata.png" />
                <div
                    class="mb-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                    <RefreshCw class="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 class="mb-1 text-sm font-semibold">メタデータ自動取得</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                    タイトル、再生時間、チャンネル名などを自動で取得してリストに表示します。
                </p>
            </Card>

            <Card class="relative bg-slate-50 p-4 dark:bg-slate-800/50">
                <PreviewButton title="重複リクエスト防止" src="{assetBase}Duplication.png" />
                <div
                    class="mb-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                    <CircleCheck class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 class="mb-1 text-sm font-semibold">重複リクエスト防止</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                    既にリストにある楽曲は追加できません。
                    <br />
                    <span class="font-medium text-orange-500">「この楽曲はすでに〇番目に登録されています」</span>
                    と案内されます。
                </p>
            </Card>

            <Card class="relative bg-slate-50 p-4 dark:bg-slate-800/50">
                <PreviewButton title="レート制限 (Spam Protection)" src="{assetBase}rate-limited.png" />
                <div
                    class="mb-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                    <Zap class="h-4 w-4 text-amber-500 dark:text-amber-400" />
                </div>
                <h4 class="mb-1 text-sm font-semibold">レート制限 (Spam Protection)</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                    短時間の連投を防ぐため、リクエスト追加には回数制限があります。
                </p>
            </Card>

            <Card class="relative bg-slate-50 p-4 dark:bg-slate-800/50">
                <PreviewButton title="バリデーション" src="{assetBase}not-found.png" />
                <div
                    class="mb-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                    <Shield class="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 class="mb-1 text-sm font-semibold">バリデーション</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">無効なURLや存在しない動画IDは追加できません。</p>
            </Card>
        </div>
    </div>

    <div id="all-playlist" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <ListVideo class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            プレイリストと同期
        </h3>
        <div class="space-y-4 border-l-2 border-indigo-100 pl-4 dark:border-indigo-900/30">
            <div>
                <h4 class="mb-1 font-medium text-slate-900 dark:text-slate-100">リアルタイム閲覧</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                    現在の再生曲と、次に再生される曲のリストは
                    <span class="mx-1 font-semibold text-indigo-600 dark:text-indigo-400"
                        >全ユーザーでリアルタイムに同期</span
                    >
                    されます。プレイヤーの状態（再生中/一時停止）も反映されます。
                </p>
            </div>
            <div>
                <h4 class="mb-1 font-medium text-slate-900 dark:text-slate-100">動画詳細アクセス</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                    リスト内のタイトルをクリックすると、YouTubeの該当ページへ直接アクセス可能です。
                </p>
            </div>
            <div>
                <h4 class="mb-1 font-medium text-slate-900 dark:text-slate-100">リクエスト情報の表示</h4>
                <p class="mb-2 text-sm text-slate-600 dark:text-slate-400">各楽曲には以下の情報が表示されます：</p>
                <ul class="list-disc space-y-1 pl-5 text-xs text-slate-600 dark:text-slate-400">
                    <li>楽曲タイトルとチャンネル名</li>
                    <li>再生時間（動画の長さ）</li>
                    <li>リクエストした人（ログインユーザー名またはゲスト）</li>
                    <li>リクエスト日時</li>
                    <li>キュー内での順番（何番目に再生されるか）</li>
                </ul>
            </div>
        </div>
    </div>
</section>
