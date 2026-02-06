import { Server } from "lucide-react";
import { Alert } from "../components/ui";

export default function IntroSection() {
    return (
        <section id="intro" className="mb-16">
            <div className="space-y-4 mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900 dark:text-slate-100">
                    取扱説明書
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                    YouTube自動再生・リアルタイム同期システム「music-auto-play」の機能仕様書・マニュアル
                </p>
            </div>

            <Alert title="Full Stack Architecture" icon={Server} variant="info">
                このプロジェクトは、Webクライアント、バックエンドサーバー、Chrome拡張機能の3者が
                <span className="font-bold mx-1">WebSocket (Socket.IO)</span>
                でリアルタイムに連携し、YouTubeの完全自動再生を実現するシステムです。
            </Alert>
        </section>
    );
}
