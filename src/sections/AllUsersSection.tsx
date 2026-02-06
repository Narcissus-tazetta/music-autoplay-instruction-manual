import { useEffect, useState } from "react";
import { Users, Search, Youtube, RefreshCw, CheckCircle2, Zap, Shield, Eye, X } from "lucide-react";
import { Card } from "../components/ui";

interface PreviewState {
    title: string;
    src?: string;
}

export default function AllUsersSection() {
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
        <section className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-lg">
                    <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">全ユーザー向け機能</h2>
            </div>

            <div id="all-request" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Search className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    楽曲リクエスト
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                    YouTubeのURLを入力するだけで、簡単に再生キューに追加できます。 ログイン不要で誰でも利用可能です。
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Card className="p-4 bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 relative">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "メタデータ自動取得", src: `${assetBaseUrl}metadata.png` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 items-center gap-2 px-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-sm transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                            aria-label="画像を見る"
                        >
                            <Eye className="h-4 w-4" />
                            <span className="text-sm">画像を見る</span>
                        </button>

                        <div className="mb-2 bg-white dark:bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center border dark:border-slate-700 shadow-sm">
                            <RefreshCw className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-semibold text-sm mb-1">メタデータ自動取得</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            タイトル、再生時間、チャンネル名などを自動で取得してリストに表示します。
                        </p>
                    </Card>

                    <Card className="p-4 bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 relative">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "重複リクエスト防止", src: `${assetBaseUrl}Duplication.png` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 items-center gap-2 px-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-sm transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                            aria-label="画像を見る"
                        >
                            <Eye className="h-4 w-4" />
                            <span className="text-sm">画像を見る</span>
                        </button>

                        <div className="mb-2 bg-white dark:bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center border dark:border-slate-700 shadow-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-sm mb-1">重複リクエスト防止</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            既にリストにある楽曲は追加できません。
                            <br />
                            <span className="text-orange-400 font-medium">
                                「この楽曲はすでに〇番目に登録されています」
                            </span>
                            と案内されます。
                        </p>
                    </Card>

                    <Card className="p-4 bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 relative">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({
                                    title: "レート制限 (Spam Protection)",
                                    src: `${assetBaseUrl}rate-limited.png`,
                                });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 items-center gap-2 px-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-sm transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                            aria-label="画像を見る"
                        >
                            <Eye className="h-4 w-4" />
                            <span className="text-sm">画像を見る</span>
                        </button>

                        <div className="mb-2 bg-white dark:bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center border dark:border-slate-700 shadow-sm">
                            <Zap className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                        </div>
                        <h4 className="font-semibold text-sm mb-1">レート制限 (Spam Protection)</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            短時間の連投を防ぐため、リクエスト追加には回数制限があります。
                        </p>
                    </Card>

                    <Card className="p-4 bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 relative">
                        <button
                            type="button"
                            onClick={() => {
                                setImgError(false);
                                setPreview({ title: "バリデーション", src: `${assetBaseUrl}not-found.png` });
                            }}
                            className="absolute right-3 top-3 inline-flex h-9 items-center gap-2 px-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-sm transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                            aria-label="画像を見る"
                        >
                            <Eye className="h-4 w-4" />
                            <span className="text-sm">画像を見る</span>
                        </button>

                        <div className="mb-2 bg-white dark:bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center border dark:border-slate-700 shadow-sm">
                            <Shield className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        </div>
                        <h4 className="font-semibold text-sm mb-1">バリデーション</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            無効なURLや存在しない動画IDは追加できません。
                        </p>
                    </Card>
                </div>
            </div>

            <div id="all-playlist" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Youtube className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    プレイリストと同期
                </h3>
                <div className="pl-4 border-l-2 border-indigo-100 dark:border-indigo-900/30 space-y-4">
                    <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">リアルタイム閲覧</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            現在の再生曲と、次に再生される曲のリストは
                            <span className="font-semibold text-indigo-600 mx-1">全ユーザーでリアルタイムに同期</span>
                            されます。プレイヤーの状態（再生中/一時停止）も反映されます。
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">動画詳細アクセス</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            リスト内のタイトルをクリックすると、YouTubeの該当ページへ直接アクセス可能です。
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">リクエスト情報の表示</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            各楽曲には以下の情報が表示されます：
                        </p>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc pl-5 space-y-1">
                            <li>楽曲タイトルとチャンネル名</li>
                            <li>再生時間（動画の長さ）</li>
                            <li>リクエストした人（ログインユーザー名またはゲスト）</li>
                            <li>リクエスト日時</li>
                            <li>キュー内での順番（何番目に再生されるか）</li>
                        </ul>
                    </div>
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
                    <div className="w-full max-w-5xl rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold">
                                <Eye className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                                <span>{preview.title}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setPreview(null)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/50"
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
                                    className="w-full h-[420px] rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700 object-contain"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="w-full h-[420px] rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                    <span className="text-slate-400 dark:text-slate-500 text-sm">画像準備中</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
