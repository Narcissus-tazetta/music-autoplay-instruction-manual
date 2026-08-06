export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme {
    if (typeof window === "undefined") return "system";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
    return "system";
}

function resolveTheme(theme: Theme): "light" | "dark" {
    return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(resolved: "light" | "dark") {
    document.documentElement.classList.toggle("dark", resolved === "dark");
}

class ThemeStore {
    theme = $state<Theme>(getStoredTheme());
    resolved = $state<"light" | "dark">(resolveTheme(getStoredTheme()));

    constructor() {
        if (typeof window === "undefined") return;
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (this.theme !== "system") return;
            this.resolved = getSystemTheme();
            applyTheme(this.resolved);
        });
    }

    set(next: Theme) {
        this.theme = next;
        localStorage.setItem(STORAGE_KEY, next);
        this.resolved = resolveTheme(next);
        applyTheme(this.resolved);
    }
}

export const themeStore = new ThemeStore();
