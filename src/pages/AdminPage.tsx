import { useState, useEffect } from "react";
import { Menu, X, Music, Users, UserCheck, Crown, Puzzle, Settings } from "lucide-react";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import { Button } from "../components/ui";
import { MenuGroup } from "../types";

// Section components
import IntroSection from "../sections/IntroSection";
import AllUsersSection from "../sections/AllUsersSection";
import LoggedInUsersSection from "../sections/LoggedInUsersSection";
import AdminSection from "../sections/AdminSection";
import SystemExtensionSection from "../sections/SystemExtensionSection";
import SettingsSection from "../sections/SettingsSection";
import OperationalNotesSection from "../sections/OperationalNotesSection";

export default function AdminPage() {
    const [activeSection, setActiveSection] = useState<string>("intro");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "intro",
                "all-request",
                "all-playlist",
                "login-auth",
                "login-delete",
                "admin-auth",
                "admin-force",
                "sys-extension",
                "sys-server",
                "sys-shortcuts",
                "settings",
            ];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }
    };

    const menuItems: MenuGroup[] = [
        {
            title: "All Users",
            icon: Users,
            items: [
                { id: "all-request", label: "楽曲リクエスト" },
                { id: "all-playlist", label: "プレイリスト閲覧" },
            ],
        },
        {
            title: "Logged-in Users",
            icon: UserCheck,
            items: [
                { id: "login-auth", label: "ログイン方法" },
                { id: "login-delete", label: "リクエスト削除" },
            ],
        },
        {
            title: "Admin Guide",
            icon: Crown,
            items: [
                { id: "admin-auth", label: "認証・権限" },
                { id: "admin-force", label: "強制管理" },
            ],
        },
        {
            title: "System & Extension",
            icon: Puzzle,
            items: [
                { id: "sys-extension", label: "自動再生制御" },
                { id: "sys-server", label: "サーバー制御" },
                { id: "sys-shortcuts", label: "ショートカット" },
            ],
        },
        {
            title: "Settings",
            icon: Settings,
            items: [{ id: "settings", label: "設定項目" }],
        },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
            {/* Header (Mobile) */}
            <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur md:hidden">
                <div className="flex h-14 items-center px-4 justify-between">
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                        <div className="font-bold flex items-center gap-2">
                            <Music className="h-5 w-5 text-indigo-600" />
                            <span>MusicAutoPlay</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex container max-w-7xl mx-auto">
                <Sidebar activeSection={activeSection} scrollTo={scrollTo} menuItems={menuItems} />

                {/* Mobile Menu Overlay */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    menuItems={menuItems}
                    scrollTo={scrollTo}
                    activeSection={activeSection}
                />

                {/* Main Content */}
                <main className="flex-1 py-8 md:px-12 px-4 max-w-4xl pb-32">
                    <IntroSection />

                    <div className="space-y-16">
                        <AllUsersSection />
                        <LoggedInUsersSection />
                        <AdminSection />
                        <SystemExtensionSection />
                        <SettingsSection />
                    </div>

                    <OperationalNotesSection />
                </main>
            </div>
        </div>
    );
}
