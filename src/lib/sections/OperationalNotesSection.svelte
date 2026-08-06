<script lang="ts">
    import { TriangleAlert, Lock, Info, Puzzle, ExternalLink } from "@lucide/svelte";
    import Alert from "$lib/components/Alert.svelte";
    import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<section class="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
    <h2 class="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight">
        <TriangleAlert class="h-6 w-6 text-amber-600 dark:text-amber-500" />
        運用上の注意点
    </h2>
    <div class="space-y-4">
        <Alert title="ゲストユーザーの削除不可" icon={TriangleAlert} variant="warning">
            <p class="mb-2">
                ログインしていないゲストユーザーが間違ったURLを追加してしまうと、
                <span class="font-bold underline decoration-amber-300 underline-offset-2">本人でも削除できません。</span>
            </p>
            <p class="text-sm">この場合、管理者が手動で削除する必要があります。リクエスト前に必ずログインすることを推奨します。</p>
        </Alert>

        <Alert title="管理者認証情報のセキュリティ" icon={Lock} variant="danger">
            <div class="space-y-2">
                <p>管理者になるための認証情報は、以下の環境変数で設定されます：</p>
                <ul class="list-disc space-y-1 pl-5 text-sm">
                    <li><CodeBlock>ADMIN_USER</CodeBlock>: 管理者ユーザー名</li>
                    <li>
                        <CodeBlock>ADMIN_PASSWORD</CodeBlock>: 管理者パスワード（12文字以上、大文字・小文字・数字・特殊文字を含む）
                    </li>
                    <li><CodeBlock>ADMIN_SECRET</CodeBlock>: 管理者削除権限用のシークレット（32文字以上）</li>
                </ul>
                <p class="pt-2 text-sm font-bold text-red-900 dark:text-red-300">
                    ⚠️ これらの情報は秘密鍵と同様に重要です。公開リポジトリにコミットしたり、第三者に共有しないでください。
                </p>
            </div>
        </Alert>

        <Alert title="YouTube API制限" icon={Info} variant="info">
            <p class="text-sm">
                YouTubeの動画情報取得にはYouTube Data API v3を使用しています。
                APIには1日あたりのクォータ制限があるため、大量のリクエストを短時間に行うと一時的に情報取得ができなくなる可能性があります。
            </p>
        </Alert>

        <Alert title="ブラウザ拡張機能のインストール" icon={Puzzle} variant="info">
            <p class="mb-2 text-sm">自動再生機能を利用するには、Chrome拡張機能のインストールが必須です。</p>
            <ol class="list-decimal space-y-1 pl-5 text-sm">
                <li>プロジェクトで <CodeBlock>bun run build:extension</CodeBlock> を実行</li>
                <li>Chromeの拡張機能管理画面（chrome://extensions/）を開く</li>
                <li>「デベロッパーモード」を有効化</li>
                <li>「パッケージ化されていない拡張機能を読み込む」をクリック</li>
                <li><CodeBlock>youtube-auto-play/dist</CodeBlock> フォルダを選択</li>
            </ol>
        </Alert>
    </div>

    <footer class="mt-24 border-t pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p class="flex items-center justify-center gap-4">
            <span>&copy; Narcissus-tazetta</span>
            <a
                href="https://github.com/Narcissus-tazetta"
                class="flex items-center gap-1 hover:text-slate-900 dark:hover:text-slate-100"
            >
                GitHub <ExternalLink class="h-3 w-3" />
            </a>
        </p>
    </footer>
</section>
