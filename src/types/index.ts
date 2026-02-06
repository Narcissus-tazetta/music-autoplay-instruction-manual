import { LucideIcon } from "lucide-react";

export interface MenuItem {
    id: string;
    label: string;
}

export interface MenuGroup {
    title: string;
    icon: LucideIcon;
    items: MenuItem[];
}

export type Theme = "light" | "dark" | "system";
