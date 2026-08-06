<script lang="ts">
    import { UserCheck, Trash2, CircleCheck, TriangleAlert } from "@lucide/svelte";
    import Card from "$lib/components/Card.svelte";
</script>

<section class="space-y-8 pt-8">
    <div class="flex items-center gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
        <div class="rounded-lg bg-blue-100 p-2 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            <UserCheck class="h-6 w-6" />
        </div>
        <h2 class="text-3xl font-bold tracking-tight">ログインユーザー限定機能</h2>
    </div>

    <div id="login-auth" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <UserCheck class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            ログイン方法
        </h3>
        <div class="space-y-3 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/40 dark:bg-blue-900/15">
            <div class="flex items-start gap-3">
                <div class="rounded-full bg-white p-2 shadow-sm dark:bg-slate-900">
                    <svg class="h-5 w-5" viewBox="0 0 24 24">
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
                <div class="flex-1">
                    <h4 class="mb-1 font-bold text-blue-900 dark:text-blue-300">Google OAuth 2.0</h4>
                    <p class="text-sm leading-relaxed text-blue-800 dark:text-blue-300">
                        Googleアカウントで安全にログインできます。 メールアドレスが確認済みのアカウントのみが利用可能です。
                    </p>
                </div>
            </div>
            <div class="rounded bg-white p-3 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                <p class="mb-1 font-medium">認証フロー</p>
                <ol class="list-decimal space-y-1 pl-4">
                    <li>「ログイン」ボタンをクリック</li>
                    <li>Googleの認証画面へリダイレクト</li>
                    <li>アカウントを選択して許可</li>
                    <li>アプリケーションに戻り、セッション確立</li>
                </ol>
            </div>
        </div>
    </div>

    <div id="login-delete" class="scroll-mt-24 space-y-4">
        <h3 class="flex items-center gap-2 text-xl font-semibold">
            <Trash2 class="h-5 w-5 text-slate-500 dark:text-slate-400" />
            自分のリクエスト削除
        </h3>

        <p class="mb-2 text-slate-600 dark:text-slate-400">ログイン中のユーザーは、以下の権限を持ちます。</p>

        <Card class="border-blue-200 bg-blue-50/50 p-6 dark:border-blue-900/40 dark:bg-blue-900/15">
            <div class="flex flex-col gap-4">
                <div>
                    <h4 class="mb-2 flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
                        <CircleCheck class="h-4 w-4" />
                        自己管理権限
                    </h4>
                    <p class="text-sm text-blue-800 dark:text-blue-300">
                        自分が追加した楽曲に限り、再生が始まる前であればリストから削除（キャンセル）できます。
                        <br />
                        <span class="mt-1 block text-xs opacity-80">
                            ※ サーバー側でユーザーID（ハッシュ）を照合し、一致した場合のみ実行されます。
                        </span>
                    </p>
                </div>

                <div class="rounded-lg border border-blue-100 bg-white p-4 shadow-sm dark:border-blue-900/40 dark:bg-slate-900">
                    <h5 class="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                        <TriangleAlert class="h-4 w-4 text-amber-500 dark:text-amber-400" />
                        仕様の注意点：ゲストユーザー
                    </h5>
                    <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        ログインせずに（ゲストとして）追加した楽曲は、
                        <span class="mx-1 font-bold text-red-600 underline decoration-red-200 underline-offset-4 dark:text-red-400"
                            >たとえ本人であっても後から削除できません。</span
                        >
                        間違えて追加した場合は、管理者に削除を依頼する必要があります。
                    </p>
                </div>
            </div>
        </Card>
    </div>
</section>
