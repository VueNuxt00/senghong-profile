import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import kh from "../locales/kh.json";
export default defineNuxtPlugin(({ vueApp }) => {

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      kh,
    },
  });

  vueApp.use(i18n);
});
