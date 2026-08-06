import type { Component } from "svelte";

export interface MenuItem {
    id: string;
    label: string;
}

export interface MenuGroup {
    title: string;
    icon: Component<{ class?: string }>;
    items: MenuItem[];
}
