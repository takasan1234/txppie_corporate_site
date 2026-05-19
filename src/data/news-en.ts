export type NewsItemEn = {
  id: string;
  date: string;
  tag?: string;
  title: string;
  url?: string;
};

export const newsItemsEn: NewsItemEn[] = [
  // {
  //   id: "2026-05-14-ceo-interview",
  //   date: "2026-05-14",
  //   tag: "NEWS",
  //   title:
  //     "An interview with our CEO was published in Kansai Startup Report (in Japanese)",
  //   url: "https://www.seitaikai.com/post/txppie?brid=YWdncwErBaxfM9RVMNtYK2ataRWI",
  // },
  {
    id: "20251023-company-establishment",
    date: "2025-10-23",
    tag: "company",
    title: "TxPPIE, Inc. was established by Haruya Hifumi and Shu Noyori",
  },
  {
    id: "2026-04-10-english-site",
    tag: "UPDATE",
    date: "2026-04-10",
    title: "The English version of our corporate website has been launched",
    url: "https://txp.co.jp/en/",
  },
];
