import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
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

interface MobileMenuProps {
    isOpen: boolean;
    menuItems: MenuGroup[];
    scrollTo: (id: string) => void;
    activeSection: string;
}

export default function MobileMenu({ isOpen, menuItems, scrollTo, activeSection }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="fixed inset-0 z-30 bg-white dark:bg-slate-900 pt-16 px-6 md:hidden overflow-y-auto"
                >
                    <nav className="space-y-6 pb-20">
                        <Link
                            to="/"
                            className="block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                            入口へ戻る
                        </Link>

                        {menuItems.map((group, idx) => (
                            <div key={idx}>
                                <h4 className="font-bold text-lg mb-2 flex items-center dark:text-slate-100">
                                    <group.icon className="mr-2 h-5 w-5" />
                                    {group.title}
                                </h4>
                                <div className="space-y-2 pl-4 border-l-2 border-slate-100 dark:border-slate-700">
                                    {group.items.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollTo(item.id)}
                                            aria-current={activeSection === item.id ? "true" : undefined}
                                            className={`block w-full text-left py-2 transition-colors px-2 rounded-md ${
                                                activeSection === item.id
                                                    ? "text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/40"
                                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
