import { Server } from "lucide-react";
import { Badge, Alert } from "../components/ui";

export default function IntroSection() {
    return (
        <section id="intro" className="mb-16">
            <div className="space-y-4 mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900">取扱説明書</h1>
                <p className="text-xl text-slate-500 leading-relaxed">
                    YouTube自動再生・リアルタイム同期システム「music-auto-play」の機能仕様書・マニュアル
                </p>
                <div className="flex gap-2 flex-wrap">
                    <Badge variant="tech">Bun</Badge>
                    <Badge variant="tech">Socket.IO</Badge>
                    <Badge variant="tech">React + TypeScript</Badge>
                    <Badge variant="tech">Chrome Extension</Badge>
                </div>
            </div>

            <Alert title="Full Stack Architecture" icon={Server} variant="info">
                このプロジェクトは、Webクライアント、バックエンドサーバー、Chrome拡張機能の3者が
                <span className="font-bold mx-1">WebSocket (Socket.IO)</span>
                でリアルタイムに連携し、YouTubeの完全自動再生を実現するシステムです。
            </Alert>
        </section>
    );
}
