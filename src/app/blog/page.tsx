import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Attendance, Payroll & HR for Nepal",
  description:
    "Practical guides on attendance, field-staff tracking, payroll and HR for businesses in Nepal — from the team behind Attend Xpress.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Zentara Labs",
    description:
      "Practical guides on attendance, field-staff tracking, payroll and HR for businesses in Nepal.",
    url: "https://zentaralabs.com/blog",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Zentara Labs Blog",
  url: "https://zentaralabs.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Zentara Labs",
    url: "https://zentaralabs.com",
  },
  blogPost: ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    url: `https://zentaralabs.com/blog/${a.slug}`,
  })),
};

export default function BlogIndex() {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-surface">
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
              href="/"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <a href="/#contact" className="btn-primary text-sm px-4 py-2">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Attendance, Payroll &amp; HR — Written for Nepal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            Practical, no-fluff guides on running attendance, field staff and
            payroll for a business in Nepal. Written by the team building Attend
            Xpress.
          </p>

          <div className="grid gap-6">
            {sorted.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card p-6 group hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary font-semibold rounded-full">
                    {a.category}
                  </span>
                  <span>{formatDate(a.date)}</span>
                  <span>·</span>
                  <span>{a.readMinutes} min read</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  {a.title}
                </h2>
                <p className="text-gray-600">{a.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read article →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
            >
              ← Back to Zentara Labs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
