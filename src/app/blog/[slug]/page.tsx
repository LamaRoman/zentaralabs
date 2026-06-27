import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle, formatDate } from "@/lib/blog";
import { ARTICLE_CONTENT } from "@/lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `https://zentaralabs.com/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Body = ARTICLE_CONTENT[slug];
  if (!article || !Body) notFound();

  const url = `https://zentaralabs.com/blog/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Organization",
          name: "Zentara Labs",
          url: "https://zentaralabs.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Zentara Labs",
          url: "https://zentaralabs.com",
        },
        articleSection: article.category,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zentaralabs.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://zentaralabs.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: url,
          },
        ],
      },
    ],
  };

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-primary text-lg tracking-tight">
              Zentara Labs
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <a href="/#contact" className="btn-primary text-sm px-4 py-2">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
          >
            ← All articles
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs font-medium text-gray-500">
            <span className="px-2.5 py-1 bg-primary/10 text-primary font-semibold rounded-full">
              {article.category}
            </span>
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readMinutes} min read</span>
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-primary leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {article.description}
          </p>

          <div className="mt-10">
            <Body />
          </div>

          {/* CTA */}
          <div className="mt-14 bg-primary rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Built for Nepal, from day one
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Attend Xpress handles QR attendance, live field tracking and
              BS-calendar payroll — across every branch, in English or नेपाली.
            </p>
            <a
              href="https://wa.me/9779761154213"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get started free →
            </a>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Keep reading
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="card p-5 group hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-semibold text-accent">
                      {a.category}
                    </span>
                    <h3 className="mt-2 font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
