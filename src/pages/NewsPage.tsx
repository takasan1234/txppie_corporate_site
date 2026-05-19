import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsList, groupNewsItemsByYear } from "@/components/NewsList";
import { newsItems } from "@/data/news";

export function NewsPage() {
  const yearGroups = groupNewsItemsByYear(newsItems);

  return (
    <div className="min-h-screen bg-white">
      <Header logoHref="/" />

      <div className="h-10" />

      <main>
        <section className="pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              What&apos;s New
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              ニュース
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>
        </section>

        <section className="pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div>
              {yearGroups.map(({ year, items }, yearIndex) => (
                <section key={year}>
                  {yearIndex > 0 && <div className="h-8 sm:h-12" />}
                  <div className="h-16 flex items-end">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {year}
                    </h3>
                  </div>

                  <div className="mt-6">
                    <NewsList items={items} readMoreLabel="詳しく見る →" />
                  </div>
                </section>
              ))}
              <div className="h-8 sm:h-12" />
              <div className="mt-20 sm:mt-24 text-center">
                <a
                  href="/#news"
                  className="inline-flex items-center justify-center rounded-full border border-[#00897B]/40 px-6 py-3 text-sm font-medium text-[#00897B] hover:bg-[#00897B] hover:text-white transition-colors"
                >
                  トップページに戻る
                </a>
              </div>
              <div className="h-24 sm:h-32" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
