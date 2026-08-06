<script lang="ts">
    import { Shield, Lock, Zap, Trash2, Database, TriangleAlert } from "@lucide/svelte";
    import Card from "$lib/components/Card.svelte";
    import CodeBlock from "$lib/components/CodeBlock.svelte";
    import PreviewButton from "$lib/components/PreviewButton.svelte";
</script>

<section class="space-y-8 pt-8">
    <div class="flex items-center gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
        <div class="rounded-lg bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Shield class="h-6 w-6" />
        </div>
        <h2 class="text-3xl font-bold tracking-tight">管理者機能</h2>
    </div>

    <div id="admin-auth" class="relative scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <Lock class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            管理者認証
        </h3>
        <p class="mb-3 text-slate-600 dark:text-slate-400">
            管理者専用のユーザー名とパスワードを用いて管理者モードにログインできます。
        </p>
        <div class="relative space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
            <PreviewButton title="管理者認証" />
            <div class="flex items-start gap-2">
                <Shield class="mt-0.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <div class="text-xs text-slate-600 dark:text-slate-400">
                    <p class="mb-1 font-medium">認証方式</p>
                    <p>Basic認証により、タイミングセーフな比較でユーザー名・パスワードを照合します。</p>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <Database class="mt-0.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <div class="text-xs text-slate-600 dark:text-slate-400">
                    <p class="mb-1 font-medium">環境変数（ログイン用）</p>
                    <p><CodeBlock>ADMIN_USER</CodeBlock> と <CodeBlock>ADMIN_PASSWORD</CodeBlock> で設定されます。</p>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <Lock class="mt-0.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <div class="text-xs text-slate-600 dark:text-slate-400">
                    <p class="mb-1 font-medium">パスワード要件</p>
                    <ul class="list-disc space-y-0.5 pl-4">
                        <li>最低12文字以上</li>
                        <li>大文字・小文字・数字・特殊文字を各1つ以上含む</li>
                    </ul>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <TriangleAlert class="mt-0.5 h-4 w-4 text-amber-500 dark:text-amber-400" />
                <div class="text-xs text-slate-600 dark:text-slate-400">
                    <p class="mb-1 font-medium">セキュリティ</p>
                    <p>これらの認証情報は秘密鍵と同様に重要です。絶対に公開しないでください。</p>
                </div>
            </div>
        </div>
    </div>

    <div id="admin-force" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <Zap class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            強制削除権限
        </h3>
        <Card class="border-red-100 bg-red-50 p-5 dark:border-red-900/40 dark:bg-red-900/15">
            <div class="flex items-start gap-4">
                <div class="mt-1 rounded-full bg-white p-2 text-red-600 shadow-sm dark:bg-slate-900 dark:text-red-400">
                    <Trash2 class="h-5 w-5" />
                </div>
                <div>
                    <h4 class="mb-1 font-bold text-red-900 dark:text-red-300">あらゆる楽曲を削除可能</h4>
                    <p class="mb-3 text-sm leading-relaxed text-red-800 dark:text-red-300">
                        管理者は、ユーザーが誰であるか、ログイン状態に関わらず、リスト内の楽曲を強制的に削除できます。
                    </p>
                    <ul class="list-disc space-y-1 rounded bg-white/50 p-3 pl-4 text-xs text-red-800 dark:bg-slate-900/50 dark:text-red-300">
                        <li>不適切な動画の排除</li>
                        <li>再生トラブル時の強制スキップ</li>
                        <li>ゲストユーザーが間違えて追加した曲の削除代行</li>
                    </ul>
                    <div class="mt-3 rounded border border-red-200 bg-white/70 p-3 dark:border-red-900/40 dark:bg-slate-900/70">
                        <p class="mb-1 text-xs font-medium text-red-900 dark:text-red-300">補足: ADMIN_SECRET</p>
                        <p class="text-xs text-red-800 dark:text-red-300">
                            管理者削除機能では <CodeBlock>ADMIN_SECRET</CodeBlock> 環境変数（32文字以上）も使用されます。
                            これはログイン認証とは別に、削除操作の権限確認用ハッシュの生成に利用されます。
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</section>
