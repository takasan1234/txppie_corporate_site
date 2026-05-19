import { newsItemsEn } from "@/data/news-en";
import { NewsList, sortNewsItems } from "@/components/NewsList";

export function WhatsNewEn() {
  const latestNews = sortNewsItems(newsItemsEn).slice(0, 3);

  return (
    <section
      id="news"
      className="py-20 sm:py-32 bg-gray-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div>
          <p className="text-sm text-[#00897B] mb-3 tracking-[0.2em] uppercase">
            What&apos;s New
          </p>

          <h2 className="text-gray-900 mb-4 sm:mb-6">News</h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent mb-8" />

          <NewsList items={latestNews} readMoreLabel="Read more →" />

          <p className="mt-8 mb-6 text-gray-600 leading-relaxed">
            Past press releases and announcements are available{" "}
            <a
              href="/en/news/"
              className="text-[#00897B] hover:opacity-70 transition-opacity underline underline-offset-4"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
