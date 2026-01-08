import { useEffect, useState } from "react";
import { Puzzle, RefreshCw, Info, AlertTriangle, Database, Lock, Zap, Shield, Keyboard, Eye, X } from "lucide-react";
import { Alert, Card, CodeBlock, Kbd } from "../components/ui";

interface PreviewState {
    title: string;
    src?: string;
}

export default function SystemExtensionSection() {
    const [preview, setPreview] = useState<PreviewState | null>(null);
    const [imgError, setImgError] = useState<boolean>(false);
    const assetBaseUrl = `${import.meta.env.BASE_URL}assets/`;

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setPreview(null);
                setImgError(false);
            }
        };

        if (preview) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => window.removeEventListener("keydown", onKeyDown);
    }, [preview]);

    return (
        <section className="space-y-8 pt-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                    <Puzzle className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">システム・拡張機能</h2>
            </div>

            <div id="sys-extension" className="scroll-mt-24 space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-slate-500" />
                    Chrome拡張機能による制御
                </h3>

                <Alert title="自動再生の仕組み" icon={Info} variant="info">
                    Chrome拡張機能がYouTubeページを監視し、動画終了を検知すると自動的に次の動画を開きます。
                    前のタブは自動的に閉じられ、シームレスな連続再生を実現します。
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-4 border-slate-200 relative space-y-4">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "完全自動遷移", src: `${assetBaseUrl}next-video.gif` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-slate-900"
                            aria-label="完全自動遷移のプレビューを開く"
                        >
                            <Eye className="h-4 w-4" />
                        </button>

                        <h4 className="font-medium border-b pb-2 pr-12">完全自動遷移</h4>
                        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                            <li>動画終了を検知して次の動画へ自動遷移</li>
                            <li>前のタブを自動クリーンアップ（閉じる）</li>
                            <li>再生・停止・シーク操作を全ユーザーに同期</li>
                            <li>
                                Chromeが起動している間バックグラウンドで動作（サービスワーカーは状況により停止/再開されます）
                            </li>
                        </ul>
                    </Card>

                    <Card className="p-4 border-slate-200 relative space-y-4">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "広告検知・スキップ", src: `${assetBaseUrl}ad.png` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-slate-900"
                            aria-label="広告検知・スキップのプレビューを開く"
                        >
                            <Eye className="h-4 w-4" />
                        </button>

                        <h4 className="font-medium border-b pb-2 pr-12">広告検知・スキップ</h4>
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                            <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold text-sm">
                                <AlertTriangle className="h-4 w-4" />
                                Ad-block Logic
                            </div>
                            <ul className="text-xs text-amber-800 space-y-1 list-disc pl-4">
                                <li>動画広告を検知し、ステータスに反映</li>
                                <li>スキップ可能な広告は自動でスキップを試行</li>
                                <li>広告中は「広告再生中」と表示</li>
                                <li>広告終了後、通常の状態に自動復帰</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className="p-4 border-slate-200 relative space-y-4">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "状態監視", src: `${assetBaseUrl}stop.png` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-slate-900"
                            aria-label="状態監視のプレビューを開く"
                        >
                            <Eye className="h-4 w-4" />
                        </button>

                        <h4 className="font-medium border-b pb-2 pr-12">状態監視</h4>
                        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                            <li>再生/停止状態の監視</li>
                            <li>シーク（早送り・巻き戻し）の検知</li>
                            <li>バッファリング状態の追跡</li>
                            <li>タブの開閉を監視</li>
                        </ul>
                    </Card>

                    <Card className="p-4 border-slate-200 relative space-y-4">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "リスト外動画の検知", src: `${assetBaseUrl}out-of-list.png` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-slate-900"
                            aria-label="リスト外動画の検知のプレビューを開く"
                        >
                            <Eye className="h-4 w-4" />
                        </button>

                        <h4 className="font-medium border-b pb-2 pr-12">リスト外動画の検知</h4>
                        <p className="text-sm text-slate-600">
                            プレイリストに登録されていない動画が再生された場合、
                            <span className="font-semibold text-purple-600 mx-1">「リスト外 再生中」</span>
                            と表示され、紫色のステータスインジケーターで識別できます。
                        </p>
                    </Card>
                </div>
            </div>

            {preview && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={preview.title}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setPreview(null);
                        }
                    }}
                >
                    <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                            <div className="flex items-center gap-2 text-slate-900 font-semibold">
                                <Eye className="h-4 w-4 text-slate-500" />
                                <span>{preview.title}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setPreview(null)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                aria-label="閉じる"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6">
                            {!imgError && preview.src ? (
                                <img
                                    src={preview.src}
                                    alt={preview.title}
                                    className="w-full h-[420px] rounded-xl bg-slate-100 border border-slate-200 object-contain"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="w-full h-[420px] rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                                    <span className="text-slate-400 text-sm">画像準備中</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div id="sys-server" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Database className="h-5 w-5 text-slate-500" />
                    サーバーサイド制御
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="border p-4 rounded-lg bg-slate-50">
                        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                            <Database className="h-4 w-4 text-indigo-600" />
                            データの永続化
                        </h4>
                        <p className="text-xs text-slate-600 mb-2">
                            再生リストはJSON形式でサーバー上に保存され、再起動時やクラッシュ時でもデータは保持されます。
                        </p>
                        <div className="text-xs text-slate-500 bg-white p-2 rounded border">
                            <code>data/musicRequests.json</code>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg bg-slate-50">
                        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                            <Lock className="h-4 w-4 text-indigo-600" />
                            セッション管理
                        </h4>
                        <p className="text-xs text-slate-600">
                            ログイン状態は長期間保持されるCookieセッションで安全に管理されます。最大100年間有効です。
                        </p>
                    </div>
                    <div className="border p-4 rounded-lg bg-slate-50">
                        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-indigo-600" />
                            WebSocket通信
                        </h4>
                        <p className="text-xs text-slate-600">
                            Socket.IOによるリアルタイム双方向通信で、クライアント・サーバー・拡張機能の3者が連携します。
                        </p>
                    </div>
                    <div className="border p-4 rounded-lg bg-slate-50">
                        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-indigo-600" />
                            レート制限
                        </h4>
                        <p className="text-xs text-slate-600">
                            短時間の連投を防ぐため、IPアドレスごとにリクエスト回数を制限します（デフォルト:
                            60秒間で10回まで。<CodeBlock>RATE_LIMIT_WINDOW_MS</CodeBlock> /{" "}
                            <CodeBlock>RATE_LIMIT_MAX_ATTEMPTS</CodeBlock> で変更可能）。
                        </p>
                    </div>
                </div>
            </div>

            <div id="sys-shortcuts" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Keyboard className="h-5 w-5 text-slate-500" />
                    ショートカット
                </h3>
                <p className="text-sm text-slate-600 mb-4">Chrome拡張機能が提供するキーボードショートカット</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm">
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">自動再生を開始</span>
                            <span className="text-xs text-slate-500">URLリストの先頭を開く</span>
                        </div>
                        <div className="flex gap-1">
                            <Kbd>Ctrl</Kbd>
                            <span className="text-slate-400 mx-1">+</span>
                            <Kbd>Shift</Kbd>
                            <span className="text-slate-400 mx-1">+</span>
                            <Kbd>L</Kbd>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm">
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">YouTube動画の再生/停止</span>
                            <span className="text-xs text-slate-500">開いているYouTubeタブの動画を一時停止/再生</span>
                        </div>
                        <div className="flex gap-1">
                            <Kbd>Ctrl</Kbd>
                            <span className="text-slate-400 mx-1">+</span>
                            <Kbd>Shift</Kbd>
                            <span className="text-slate-400 mx-1">+</span>
                            <Kbd>X</Kbd>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm">
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">開発UIの切り替え</span>
                            <span className="text-xs text-slate-500">ポップアップの隠しUI表示を切り替え</span>
                        </div>
                        <div className="flex gap-1">
                            <Kbd>Ctrl</Kbd>
                            <span className="text-slate-400 mx-1">+</span>
                            <Kbd>Shift</Kbd>
                            <span className="text-slate-400 mx-1">+</span>
                            <Kbd>P</Kbd>
                        </div>
                    </div>

                    <div className="mt-2 text-xs text-slate-500 bg-slate-50 p-3 rounded border">
                        <p className="flex items-center gap-2">
                            <Info className="h-3 w-3" />
                            macOSでは <Kbd>Ctrl</Kbd> の代わりに <Kbd>Command (⌘)</Kbd> を使用します
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
