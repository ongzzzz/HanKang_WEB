import { create } from "zustand";

const useTranslateStore = create((set) => ({
  lang: 'kr',
  setLang: (lang) => set({lang}),
}));

export default useTranslateStore;