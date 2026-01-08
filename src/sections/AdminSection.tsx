import { useEffect, useState } from "react";
import { Shield, Lock, Zap, Trash2, Database, AlertTriangle, Eye, X } from "lucide-react";
import { Card, CodeBlock } from "../components/ui";

interface PreviewState {
    title: string;
    src?: string;
}

export default function AdminSection() {
    const [preview, setPreview] = useState<PreviewState | null>(null);
    const [imgError, setImgError] = useState<boolean>(false);
    const adminPreviewSrc = `${import.meta.env.BASE_URL}assets/admin-login-preview.png`;

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setPreview(null);
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
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                    <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">管理者機能</h2>
            </div>

            <div id="admin-auth" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Lock className="h-5 w-5 text-slate-500" />
                    管理者認証
                </h3>
                <p className="text-slate-600 mb-3">
                    管理者専用のユーザー名とパスワードを用いて管理者モードにログインできます。
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 relative">
                    <button
                        type="button"
                        onClick={() => {
                            setImgError(false);
                            setPreview({ title: "管理者認証" });
                        }}
                        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-slate-900"
                        aria-label="管理者認証のプレビューを開く"
                    >
                        <Eye className="h-4 w-4" />
                    </button>
                    <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-slate-500 mt-0.5" />
                        <div className="text-xs text-slate-600">
                            <p className="font-medium mb-1">認証方式</p>
                            <p>Basic認証により、タイミングセーフな比較でユーザー名・パスワードを照合します。</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Database className="h-4 w-4 text-slate-500 mt-0.5" />
                        <div className="text-xs text-slate-600">
                            <p className="font-medium mb-1">環境変数（ログイン用）</p>
                            <p>
                                <CodeBlock>ADMIN_USER</CodeBlock> と <CodeBlock>ADMIN_PASSWORD</CodeBlock>{" "}
                                で設定されます。
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Lock className="h-4 w-4 text-slate-500 mt-0.5" />
                        <div className="text-xs text-slate-600">
                            <p className="font-medium mb-1">パスワード要件</p>
                            <ul className="list-disc pl-4 space-y-0.5">
                                <li>最低12文字以上</li>
                                <li>大文字・小文字・数字・特殊文字を各1つ以上含む</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                        <div className="text-xs text-slate-600">
                            <p className="font-medium mb-1">セキュリティ</p>
                            <p>これらの認証情報は秘密鍵と同様に重要です。絶対に公開しないでください。</p>
                        </div>
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
                            {!imgError ? (
                                // show image if available, otherwise fallback to placeholder on error
                                <img
                                    src={adminPreviewSrc}
                                    alt="管理者ログインプレビュー"
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

            <div id="admin-force" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-slate-500" />
                    強制削除権限
                </h3>
                <Card className="bg-red-50 border-red-100 p-5">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-white rounded-full text-red-600 shadow-sm mt-1">
                            <Trash2 className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-red-900 mb-1">あらゆる楽曲を削除可能</h4>
                            <p className="text-sm text-red-800 leading-relaxed mb-3">
                                管理者は、ユーザーが誰であるか、ログイン状態に関わらず、リスト内の楽曲を強制的に削除できます。
                            </p>
                            <ul className="text-xs text-red-800 list-disc pl-4 space-y-1 bg-white/50 p-3 rounded">
                                <li>不適切な動画の排除</li>
                                <li>再生トラブル時の強制スキップ</li>
                                <li>ゲストユーザーが間違えて追加した曲の削除代行</li>
                            </ul>
                            <div className="mt-3 p-3 bg-white/70 rounded border border-red-200">
                                <p className="text-xs text-red-900 font-medium mb-1">補足: ADMIN_SECRET</p>
                                <p className="text-xs text-red-800">
                                    管理者削除機能では <CodeBlock>ADMIN_SECRET</CodeBlock>{" "}
                                    環境変数（32文字以上）も使用されます。
                                    これはログイン認証とは別に、削除操作の権限確認用ハッシュの生成に利用されます。
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
