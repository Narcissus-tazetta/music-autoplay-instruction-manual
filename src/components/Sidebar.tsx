import { Button } from "./ui";
import { Music2, Info, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItem {
    id: string;
    label: string;
}

interface MenuGroup {
    title: string;
    icon: LucideIcon;
    items: MenuItem[];
}

interface SidebarProps {
    activeSection: string;
    scrollTo: (id: string) => void;
    menuItems: MenuGroup[];
}

export default function Sidebar({ activeSection, scrollTo, menuItems }: SidebarProps) {
    return (
        <aside className="hidden md:block w-64 border-r border-slate-200 h-[calc(100vh)] sticky top-0 py-8 pr-6 overflow-y-auto">
            <div className="font-bold text-xl flex items-center gap-2 mb-8 px-2 text-slate-900">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                    <Music2 className="h-5 w-5" />
                </div>
                Music-AutoPlay
            </div>

            <div className="px-2 mb-6">
                <Link
                    to="/"
                    className="inline-flex h-9 w-full items-center justify-center rounded-md border border-slate-200 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                >
                    入口へ戻る
                </Link>
            </div>

            <div className="space-y-6">
                <div className="space-y-1">
                    <Button
                        variant={activeSection === "intro" ? "secondary" : "ghost"}
                        className="w-full justify-start font-medium"
                        onClick={() => scrollTo("intro")}
                    >
                        <Info className="mr-2 h-4 w-4" /> はじめに
                    </Button>
                </div>

                {menuItems.map((group, idx) => (
                    <div key={idx} className="space-y-2">
                        <h4 className="flex items-center px-2 text-sm font-semibold text-slate-900">
                            <group.icon className="mr-2 h-4 w-4 text-slate-500" />
                            {group.title}
                        </h4>
                        <div className="grid grid-flow-row auto-rows-max text-sm pl-4 border-l border-slate-200 ml-2">
                            {group.items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    aria-current={activeSection === item.id ? "true" : undefined}
                                    className={`group flex w-full items-center rounded-md px-2 py-1.5 transition-colors ${
                                        activeSection === item.id
                                            ? "font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
