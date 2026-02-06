import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, Theme } from "../hooks/useTheme";
import { Card } from "./ui";

interface SettingsBarProps {
    onClose?: () => void;
}

export default function SettingsBar({ onClose: _onClose }: SettingsBarProps) {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    const options: Array<{ value: Theme; label: string; icon: React.ReactNode; description: string }> = [
        {
            value: "light",
            label: "ライト",
            icon: <Sun className="h-4 w-4" />,
            description: "明るいテーマ",
        },
        {
            value: "dark",
            label: "ダーク",
            icon: <Moon className="h-4 w-4" />,
            description: "暗いテーマ",
        },
        {
            value: "system",
            label: "システム",
            icon: <Monitor className="h-4 w-4" />,
            description: "OS設定に準拠",
        },
    ];

    return (
        <Card className="w-64 p-3 shadow-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800">
            <div className="space-y-2">
                <h3 className="text-sm font-semibold px-2 py-1 text-slate-700 dark:text-slate-300">テーマ設定</h3>
                <div role="radiogroup" aria-label="テーマ選択" className="space-y-1">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            role="radio"
                            aria-checked={theme === option.value}
                            onClick={() => handleThemeChange(option.value)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                                theme === option.value
                                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-700"
                                    : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-transparent"
                            }`}
                        >
                            <div
                                className={`flex-shrink-0 ${theme === option.value ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-slate-400"}`}
                            >
                                {option.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium">{option.label}</div>
                                <div
                                    className={`text-xs ${theme === option.value ? "text-indigo-700 dark:text-indigo-300" : "text-slate-500 dark:text-slate-400"}`}
                                >
                                    {option.description}
                                </div>
                            </div>
                            {theme === option.value && (
                                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </Card>
    );
}
