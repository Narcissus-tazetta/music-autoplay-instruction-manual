import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui";
import ContactSection from "../sections/ContactSection";

export default function LandingPage() {
    const USER_DOC_URL =
        "https://docs.google.com/presentation/d/1hWra1a2wz4nR_77Xm88WEFgH6a44pA2ylEF0vrAIkFc/edit?usp=sharing";
    const ADMIN_DOC_URL =
        "https://docs.google.com/presentation/d/1RxfuYp7Ha9F12VKufR-qac9Jcy1WmUxfbwu1NVGqNW4/edit?usp=sharing";

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
            <main className="container max-w-4xl mx-auto py-10 md:py-14 md:px-12 px-4 space-y-8">
                <header className="space-y-3 pb-4 border-b border-slate-200">
                    <h1 className="text-3xl font-bold tracking-tight">利用ガイド</h1>
                    <p className="text-slate-600 text-sm md:text-base">
                        立場や用途に合わせて、以下のドキュメントから選択してください。
                    </p>
                    <p className="text-amber-700 text-sm">
                        ※「管理者（プログラミングわかる人向け）」は技術者向けです。
                    </p>
                </header>

                <div className="grid gap-4">
                    <Card className="border-slate-200">
                        <a
                            href={USER_DOC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">ユーザー用</div>
                                    <div className="text-xs text-slate-500">Google スライド（別タブで開く）</div>
                                </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-500" />
                        </a>
                    </Card>

                    <Card className="border-slate-200">
                        <a
                            href={ADMIN_DOC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">管理者用</div>
                                    <div className="text-xs text-slate-500">Google スライド（別タブで開く）</div>
                                </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-500" />
                        </a>
                    </Card>

                    <Card className="border-slate-200">
                        <Link
                            to="/admin"
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">管理者（プログラミングわかる人向け）</div>
                                    <div className="text-xs text-slate-500">このサイト（詳細仕様）</div>
                                </div>
                            </div>
                            <span className="text-xs text-slate-500">開く</span>
                        </Link>
                    </Card>
                </div>
                <ContactSection />
            </main>
        </div>
    );
}
