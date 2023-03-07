import { defineConfig } from "vitepress";
import { getSidebar } from "vitepress-plugin-auto-sidebar";
import { enConfig } from "./en";
import { ruConfig } from "./ru";
// import { sharedConfig } from "./shared";

import fenomGrammar from './fenom.tmLanguage.json';
import modxGrammar from 'modx-tmlanguage/modx.tmLanguage.json';

const modx = {
    id: 'modx',
    scopeName: 'text.html.modx',
    grammar: modxGrammar,
    aliases: ['modx'],
}
const fenom = {
    id: 'fenom',
    scopeName: 'text.html.fenom',
    grammar: fenomGrammar,
    aliases: ['fenom'],
}

export default defineConfig({
    base: "/docs/",
    // ...sharedConfig,
    lastUpdated: true,
    markdown: {
        languages: [modx, fenom],
    },
    algolia: {
        apiKey: "6a767bbcca227a92559817e2382d8938",
        indexName: "modx",
        appId: "BCE7F5SAJ2",
    },
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/modx-pro/Docs" },
        ],
    },
    locales: {
        root: {
            label: "Russian",
            lang: "ru-RU",
            link: "/",
            ...ruConfig,
        },
        en: {
            label: "English",
            lang: "en-EN",
            link: "/en/",
            ...enConfig,
        },
    },
});