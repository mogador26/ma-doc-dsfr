import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import { setupDsfr } from "./dsfr";
import PageMeta from "./PageMeta.vue";
import Version from "./VersionBadge.vue";
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    // Inject a "last modified" line at the bottom of every page content
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(PageMeta)
    });
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx);
    setupDsfr(ctx.app);
  }
  
} satisfies Theme;
