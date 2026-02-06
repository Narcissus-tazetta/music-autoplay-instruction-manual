import { UserCheck, Trash2, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card } from "../components/ui";

export default function LoggedInUsersSection() {
    return (
        <section className="space-y-8 pt-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg">
                    <UserCheck className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">ログインユーザー限定機能</h2>
            </div>

            <div id="login-auth" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    ログイン方法
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Google OAuth 2.0</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                                Googleアカウントで安全にログインできます。
                                メールアドレスが確認済みのアカウントのみが利用可能です。
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded p-3 text-xs text-slate-600 dark:text-slate-400">
                        <p className="font-medium mb-1">認証フロー</p>
                        <ol className="list-decimal pl-4 space-y-1">
                            <li>「ログイン」ボタンをクリック</li>
                            <li>Googleの認証画面へリダイレクト</li>
                            <li>アカウントを選択して許可</li>
                            <li>アプリケーションに戻り、セッション確立</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div id="login-delete" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Trash2 className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    自分のリクエスト削除
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-2">
                    ログイン中のユーザーは、以下の権限を持ちます。
                </p>

                <Card className="p-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4" />
                                自己管理権限
                            </h4>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                自分が追加した楽曲に限り、再生が始まる前であればリストから削除（キャンセル）できます。
                                <br />
                                <span className="text-xs opacity-80 mt-1 block">
                                    ※ サーバー側でユーザーID（ハッシュ）を照合し、一致した場合のみ実行されます。
                                </span>
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                            <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                                仕様の注意点：ゲストユーザー
                            </h5>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                ログインせずに（ゲストとして）追加した楽曲は、
                                <span className="font-bold text-red-600 underline decoration-red-200 underline-offset-4 mx-1">
                                    たとえ本人であっても後から削除できません。
                                </span>
                                間違えて追加した場合は、管理者に削除を依頼する必要があります。
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
