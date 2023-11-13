import { FAQ } from "./i-faq";

export type FaqItem = {
  active: number | null;
  handleToggle: (index: number) => void;
  faq: FAQ;
};
