<script lang="ts">
    import { Server } from "@lucide/svelte";
    import Alert from "$lib/components/Alert.svelte";
</script>

<section id="intro" class="mb-16 scroll-mt-24">
    <div class="mb-8 space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl dark:text-slate-100">
            取扱説明書
        </h1>
        <p class="text-xl leading-relaxed text-slate-500 dark:text-slate-400">
            YouTube自動再生・リアルタイム同期システム「music-auto-play」の機能仕様書・マニュアル
        </p>
    </div>

    <Alert title="Full Stack Architecture" icon={Server} variant="info">
        このプロジェクトは、Webクライアント、バックエンドサーバー、Chrome拡張機能の3者が
        <span class="mx-1 font-bold">WebSocket (Socket.IO)</span>
        でリアルタイムに連携し、YouTubeの完全自動再生を実現するシステムです。
    </Alert>
</section>
