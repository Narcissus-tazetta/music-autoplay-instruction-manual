import { Settings, Info, Database, RefreshCw } from "lucide-react";
import { Badge, Card } from "../components/ui";

export default function SettingsSection() {
    return (
        <section className="space-y-8 pt-8 border-t border-slate-200 mt-12">
            <div id="settings" className="scroll-mt-24 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <Settings className="h-6 w-6 text-slate-700" />
                    設定項目 (User Settings)
                </h2>
                <p className="text-slate-600 mb-4">
                    各ユーザーごとにカスタマイズ可能な設定です。設定はサーバーに保存され、複数のデバイス間で同期されます。
                </p>
                <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3 w-1/3">設定項目</th>
                                <th className="px-6 py-3">説明</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="bg-white">
                                <td className="px-6 py-4">
                                    <div className="font-mono text-indigo-600 font-semibold text-sm">ytStatusMode</div>
                                    <div className="text-xs text-slate-500 mt-1">ステータス表示モード</div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">
                                    <div className="space-y-2">
                                        <p>プレイヤーの状態表示形式を変更できます。</p>
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="tech">compact</Badge>
                                            <span className="text-xs text-slate-400">簡易表示（デフォルト）</span>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="tech">player</Badge>
                                            <span className="text-xs text-slate-400">プレイヤー風の詳細表示</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4">
                                    <div className="font-mono text-indigo-600 font-semibold text-sm">
                                        ytStatusVisible
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">ステータス表示/非表示</div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">
                                    <div className="space-y-2">
                                        <p>再生中の動画ステータスバーを表示するかどうかを切り替えます。</p>
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="success">true</Badge>
                                            <span className="text-xs text-slate-400">表示する（デフォルト）</span>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="secondary">false</Badge>
                                            <span className="text-xs text-slate-400">非表示にする</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="px-6 py-4 bg-slate-50 text-xs text-slate-600 border-t border-slate-200 space-y-2">
                        <p className="flex items-center gap-2">
                            <Database className="h-3 w-3" />
                            <span className="font-medium">保存場所:</span> サーバーサイド（ユーザーIDに紐付けて永続化）
                        </p>
                        <p className="flex items-center gap-2">
                            <RefreshCw className="h-3 w-3" />
                            <span className="font-medium">同期:</span>{" "}
                            ログイン時に自動的にサーバーから取得され、変更時はリアルタイムで保存されます
                        </p>
                    </div>
                </div>

                {/* ステータス表示の詳細 */}
                <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Info className="h-5 w-5 text-slate-500" />
                        ステータスバーの状態表示
                    </h3>
                    <p className="text-sm text-slate-600">
                        ステータスバーは現在のプレイヤーの状態をリアルタイムで表示します。
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-white border-emerald-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                                <span className="font-bold text-sm text-emerald-900">再生中</span>
                            </div>
                            <p className="text-xs text-emerald-800">通常の動画が再生されている状態</p>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-orange-50 to-white border-orange-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                                <span className="font-bold text-sm text-orange-900">一時停止</span>
                            </div>
                            <p className="text-xs text-orange-800">動画が停止している状態</p>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <span className="font-bold text-sm text-yellow-900">広告再生中</span>
                            </div>
                            <p className="text-xs text-yellow-800">YouTube広告が表示されている状態</p>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-blue-50 to-white border-blue-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="font-bold text-sm text-blue-900">次の動画に移動中</span>
                            </div>
                            <p className="text-xs text-blue-800">自動遷移の処理中</p>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                <span className="font-bold text-sm text-purple-900">外部動画再生中</span>
                            </div>
                            <p className="text-xs text-purple-800">リスト外の動画が再生されている</p>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-slate-50 to-white border-slate-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                                <span className="font-bold text-sm text-slate-900">タブが閉じられた</span>
                            </div>
                            <p className="text-xs text-slate-800">YouTubeタブが存在しない状態（30秒後に自動非表示）</p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
