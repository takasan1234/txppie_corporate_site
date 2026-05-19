export type NewsListItem = {
  id: string;
  date: string;
  tag?: string;
  title: string;
  url?: string;
};

export function formatNewsDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function getNewsYear(dateString: string) {
  return String(new Date(dateString).getFullYear());
}

export function sortNewsItems<T extends NewsListItem>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function groupNewsItemsByYear<T extends NewsListItem>(items: T[]) {
  const grouped = sortNewsItems(items).reduce<Record<string, T[]>>(
    (acc, item) => {
      const year = getNewsYear(item.date);

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(item);
      return acc;
    },
    {},
  );

  return Object.keys(grouped)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ year, items: grouped[year] }));
}

type NewsRowProps = {
  item: NewsListItem;
  readMoreLabel: string;
};

function NewsRow({ item, readMoreLabel }: NewsRowProps) {
  const titleClassName = item.url
    ? "text-gray-900 leading-relaxed group-hover:text-[#00897B] transition-colors"
    : "text-gray-900 leading-relaxed";

  const content = (
    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
      <div className="w-full sm:w-40 shrink-0 mb-2 sm:mb-0">
        {item.tag && (
          <p
            className="text-xs text-[#00897B] uppercase"
            style={{ letterSpacing: "0.08em", paddingTop: "3px" }}
          >
            {item.tag}
          </p>
        )}
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">
          {formatNewsDate(item.date)}
        </p>

        <p className={titleClassName}>{item.title}</p>

        {item.url && (
          <p className="mt-3 text-sm text-[#00897B] font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            {readMoreLabel}
          </p>
        )}
      </div>
    </div>
  );

  if (!item.url) {
    return <div className="block border-b border-gray-200 py-4 sm:py-5">{content}</div>;
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-gray-200 py-4 sm:py-5 hover:bg-gray-50 transition-colors"
    >
      {content}
    </a>
  );
}

type NewsListProps<T extends NewsListItem> = {
  items: T[];
  readMoreLabel: string;
};

export function NewsList<T extends NewsListItem>({
  items,
  readMoreLabel,
}: NewsListProps<T>) {
  return (
    <div className="border-t border-gray-200">
      {items.map((item) => (
        <NewsRow key={item.id} item={item} readMoreLabel={readMoreLabel} />
      ))}
    </div>
  );
}
