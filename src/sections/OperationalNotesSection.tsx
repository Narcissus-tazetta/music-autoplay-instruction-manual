import { AlertTriangle, Lock, Info, Puzzle, ExternalLink } from "lucide-react";
import { Alert, CodeBlock } from "../components/ui";

export default function OperationalNotesSection() {
    return (
        <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                運用上の注意点
            </h2>
            <div className="space-y-4">
                <Alert title="ゲストユーザーの削除不可" icon={AlertTriangle} variant="warning">
                    <p className="mb-2">
                        ログインしていないゲストユーザーが間違ったURLを追加してしまうと、
                        <span className="font-bold underline decoration-amber-300 underline-offset-2">
                            本人でも削除できません。
                        </span>
                    </p>
                    <p className="text-sm">
                        この場合、管理者が手動で削除する必要があります。リクエスト前に必ずログインすることを推奨します。
                    </p>
                </Alert>

                <Alert title="管理者認証情報のセキュリティ" icon={Lock} variant="danger">
                    <div className="space-y-2">
                        <p>管理者になるための認証情報は、以下の環境変数で設定されます：</p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>
                                <CodeBlock>ADMIN_USER</CodeBlock>: 管理者ユーザー名
                            </li>
                            <li>
                                <CodeBlock>ADMIN_PASSWORD</CodeBlock>:
                                管理者パスワード（12文字以上、大文字・小文字・数字・特殊文字を含む）
                            </li>
                            <li>
                                <CodeBlock>ADMIN_SECRET</CodeBlock>: 管理者削除権限用のシークレット（32文字以上）
                            </li>
                        </ul>
                        <p className="text-sm font-bold text-red-900 dark:text-red-300 pt-2">
                            ⚠️
                            これらの情報は秘密鍵と同様に重要です。公開リポジトリにコミットしたり、第三者に共有しないでください。
                        </p>
                    </div>
                </Alert>

                <Alert title="YouTube API制限" icon={Info} variant="info">
                    <p className="text-sm">
                        YouTubeの動画情報取得にはYouTube Data API v3を使用しています。
                        APIには1日あたりのクォータ制限があるため、大量のリクエストを短時間に行うと一時的に情報取得ができなくなる可能性があります。
                    </p>
                </Alert>

                <Alert title="ブラウザ拡張機能のインストール" icon={Puzzle} variant="info">
                    <p className="mb-2 text-sm">自動再生機能を利用するには、Chrome拡張機能のインストールが必須です。</p>
                    <ol className="text-sm list-decimal pl-5 space-y-1">
                        <li>
                            プロジェクトで <CodeBlock>bun run build:extension</CodeBlock> を実行
                        </li>
                        <li>Chromeの拡張機能管理画面（chrome://extensions/）を開く</li>
                        <li>「デベロッパーモード」を有効化</li>
                        <li>「パッケージ化されていない拡張機能を読み込む」をクリック</li>
                        <li>
                            <CodeBlock>youtube-auto-play/dist</CodeBlock> フォルダを選択
                        </li>
                    </ol>
                </Alert>
            </div>

            <footer className="mt-24 border-t dark:border-slate-700 pt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                <p className="flex items-center justify-center gap-4">
                    <span>&copy; Narcissus-tazetta</span>
                    <a
                        href="https://github.com/Narcissus-tazetta"
                        className="hover:text-slate-900 dark:hover:text-slate-100 flex items-center gap-1"
                    >
                        GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                </p>
            </footer>
        </section>
    );
}
