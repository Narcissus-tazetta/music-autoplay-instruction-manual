import { Mail, Slack, Github } from "lucide-react";
import { Card } from "../components/ui";

export default function ContactSection() {
    return (
        <Card className="border-slate-200 dark:border-slate-700">
            <div className="p-4 space-y-3">
                <header className="space-y-3 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <h2 className="text-lg font-semibold">お問合せ</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        困ったときはこちらからお問い合わせください。返信目安: 平日1〜3日
                    </p>
                </header>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-800">
                                <Mail className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="font-semibold">メール</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                    akira_23s1101758@nnn.ed.jp
                                </div>
                            </div>
                        </div>
                        <a
                            href="mailto:akira_23s1101758@nnn.ed.jp"
                            className="text-xs text-slate-500 dark:text-slate-400"
                            aria-label="メールを開く（akira_23s1101758@nnn.ed.jp）"
                        >
                            開く
                        </a>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center border border-slate-100 dark:border-slate-600">
                                <Slack className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="font-semibold">Slack</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Prason</div>
                            </div>
                        </div>
                        <a
                            href="https://n-highschool.slack.com/team/U04VDPX7ZHV"
                            className="text-xs text-slate-500 dark:text-slate-400"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Slack を開く（n-highschool.slack.com）"
                        >
                            開く
                        </a>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center border border-slate-100 dark:border-slate-600">
                                <Github className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="font-semibold">GitHub</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">narcissus-tazetta</div>
                            </div>
                        </div>
                        <a
                            href="https://github.com/narcissus-tazetta"
                            className="text-xs text-slate-500 dark:text-slate-400"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub を開く（narcissus-tazetta）"
                        >
                            開く
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    );
}
