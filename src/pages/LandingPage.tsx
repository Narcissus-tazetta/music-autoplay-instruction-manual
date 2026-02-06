import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui";
import ContactSection from "../sections/ContactSection";
import SettingsButton from "../components/SettingsButton";

export default function LandingPage() {
    const USER_DOC_URL =
        "https://docs.google.com/presentation/d/1hWra1a2wz4nR_77Xm88WEFgH6a44pA2ylEF0vrAIkFc/edit?usp=sharing";
    const ADMIN_DOC_URL =
        "https://docs.google.com/presentation/d/1RxfuYp7Ha9F12VKufR-qac9Jcy1WmUxfbwu1NVGqNW4/edit?usp=sharing";

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900">
            <div className="fixed top-8 right-8 z-50">
                <SettingsButton />
            </div>

            <main className="container max-w-4xl mx-auto py-10 md:py-14 md:px-12 px-4 space-y-8">
                <header className="space-y-3 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <h1 className="text-3xl font-bold tracking-tight">利用ガイド</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                        立場や用途に合わせて、以下のドキュメントから選択してください。
                    </p>
                    <p className="text-amber-700 dark:text-amber-400 text-sm">
                        ※「管理者（プログラミングわかる人向け）」は技術者向けです。
                    </p>
                </header>

                <div className="grid gap-4">
                    <Card className="border-slate-200 dark:border-slate-700">
                        <a
                            href={USER_DOC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-800">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">ユーザー用</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        Google スライド（別タブで開く）
                                    </div>
                                </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </a>
                    </Card>

                    <Card className="border-slate-200 dark:border-slate-700">
                        <a
                            href={ADMIN_DOC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-emerald-800">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">管理者用</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        Google スライド（別タブで開く）
                                    </div>
                                </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </a>
                    </Card>

                    <Card className="border-slate-200 dark:border-slate-700">
                        <Link
                            to="/admin"
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 flex items-center justify-center border border-purple-100 dark:border-purple-800">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">管理者（プログラミングわかる人向け）</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        このサイト（詳細仕様）
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">開く</span>
                        </Link>
                    </Card>
                </div>
                <ContactSection />
            </main>
        </div>
    );
}
