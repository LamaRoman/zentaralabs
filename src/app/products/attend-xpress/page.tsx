import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attend Xpress — Best Attendance & HR Software in Nepal",
  description:
    "Attend Xpress is an affordable mobile attendance & HR software for businesses in Nepal. QR clock-in, geo-fencing, automatic payroll and payslips — no fingerprint machine needed. A simple, low-cost alternative to traditional attendance systems.",
  keywords: [
    "attendance software Nepal",
    "HR software Nepal",
    "best attendance app Nepal",
    "QR attendance Nepal",
    "mobile attendance app Nepal",
    "payroll software Nepal",
    "fingerprint machine alternative Nepal",
    "Hajir alternative",
    "Attend Xpress",
  ],
  alternates: { canonical: "/products/attend-xpress" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Attend Xpress",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, iOS, Web",
  description:
    "Mobile attendance and HR software for businesses in Nepal. QR clock-in, GPS geo-fencing, automatic payroll and payslips, leave management — no fingerprint hardware required.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "149",
    priceCurrency: "NPR",
    offerCount: "3",
    description: "Free plan available. Paid plans NPR 99 (Standard) and NPR 149 (Professional) per employee per month. No setup fee.",
  },
  provider: {
    "@type": "Organization",
    name: "Zentara Labs",
    url: "https://zentaralabs.com",
    areaServed: "NP",
  },
};

const faqs = [
  {
    q: "Is Attend Xpress a good alternative to a fingerprint attendance machine?",
    a: "Yes. Attend Xpress replaces the fingerprint machine entirely. Staff clock in with a QR scan from their own phone, so there is no device to buy, no maintenance, and no morning queue.",
  },
  {
    q: "How does Attend Xpress prevent employees clocking in from home?",
    a: "GPS geo-fencing ensures a clock-in only counts when the employee is physically inside the approved work location, which stops attendance from being marked from home or elsewhere.",
  },
  {
    q: "Does it calculate payroll automatically?",
    a: "Yes. Attend Xpress calculates payroll from attendance, overtime and leave, and generates payslips. Reports export to PDF or Excel for your accountant.",
  },
  {
    q: "How much does Attend Xpress cost?",
    a: "There is a free plan for small teams. Paid plans are NPR 99 per employee per month (Standard) and NPR 149 (Professional, with automatic payroll and multi-site). No setup fee, no hardware cost, and annual billing includes two months free.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const pricingTiers = [
  {
    name: "Free",
    forWho: "Small shops & teams",
    price: "0",
    priceLabel: "Free forever",
    highlight: false,
    cta: "Start Free",
    features: [
      "Mobile QR clock-in & clock-out",
      "Staff roster & shifts",
      "Present / absent tracking",
      "Unlimited employees",
      "30-day attendance history",
    ],
  },
  {
    name: "Standard",
    forWho: "Growing businesses",
    price: "99",
    priceLabel: "per employee / month",
    highlight: true,
    cta: "Get Started",
    features: [
      "Everything in Free",
      "GPS geo-fencing (verified attendance)",
      "Leave management",
      "Reports & export (PDF / Excel)",
      "Unlimited history",
      "Priority support",
    ],
  },
  {
    name: "Professional",
    forWho: "Multi-site & payroll",
    price: "149",
    priceLabel: "per employee / month",
    highlight: false,
    cta: "Get Started",
    features: [
      "Everything in Standard",
      "Automatic payroll & payslips",
      "SSF / CIT / TDS / PF support",
      "Multi-site & branches",
      "Field-staff tracking",
      "Dedicated account support",
    ],
  },
];

export default function AttendXpress() {
  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-primary text-lg tracking-tight">Zentara Labs</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#products" className="text-sm text-gray-600 hover:text-primary transition-colors">Products</Link>
            <Link href="/#contact" className="btn-primary text-sm px-4 py-2">Get in Touch</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">HR Software</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">Attend <span className="text-accent-light">Xpress</span></h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Say goodbye to bulky fingerprint devices and long queues. Attend Xpress brings contactless,
              mobile-first attendance management with automatic payroll processing to your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/9779761154213" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">Get a Demo</a>
              <a href="mailto:support@zentaralabs.com" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">The Problem</span>
              <h2 className="text-3xl font-bold text-primary mb-6">Tired of Fingerprint Queues?</h2>
              <div className="space-y-4">
                {["Employees queue up every morning to clock in on a single device","Fingerprint readers are expensive, break down, and need maintenance","Manual attendance records lead to payroll errors","No real-time visibility into who is present or absent","Payroll calculation takes hours of manual work every month"].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <span className="text-gray-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">The Solution</span>
              <h2 className="text-3xl font-bold text-primary mb-6">Attend Xpress Makes it Simple</h2>
              <div className="space-y-4">
                {["Employees clock in & out from their own mobile phone — no queues","No hardware needed — works on any Android or iOS device","Automatic, accurate attendance records in real time","Admin dashboard with live view of present and absent employees","Automatic payroll calculation at the end of every month"].map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-600 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Everything You Need</h2>
            <p className="text-gray-600 max-w-xl mx-auto">A complete HR solution for modern Nepali businesses.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:"📱",title:"Mobile Clock-In/Out",desc:"Employees use their own smartphone to clock in and out. Contactless, fast, and accurate."},
              {icon:"📊",title:"Real-Time Dashboard",desc:"Admins see live attendance status for all employees from any device, anywhere."},
              {icon:"💰",title:"Automatic Payroll",desc:"Payroll is calculated automatically based on attendance, overtime, and leave records."},
              {icon:"📅",title:"Leave Management",desc:"Employees request leaves through the app. Managers approve or reject with one tap."},
              {icon:"📍",title:"Geo-Fencing",desc:"Ensure employees can only clock in from approved locations using GPS verification."},
              {icon:"📋",title:"Reports & Export",desc:"Generate detailed attendance and payroll reports. Export to PDF or Excel."},
            ].map((f) => (
              <div key={f.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Pricing</span>
            <h2 className="text-4xl font-bold text-primary mb-4">Transparent, Per-Employee Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Pay only for your team size. No contracts, no setup fees, no hardware costs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {pricingTiers.map((t) => (
              <div key={t.name} className={`card p-8 flex flex-col relative ${t.highlight ? "border-2 border-primary shadow-xl" : "border border-gray-200"}`}>
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">Most Popular</span>
                )}
                <h3 className="text-xl font-bold text-primary mb-1">{t.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{t.forWho}</p>
                <div className="mb-6">
                  {t.price === "0" ? (
                    <span className="text-4xl font-bold text-primary">Free</span>
                  ) : (
                    <span>
                      <span className="text-sm text-gray-500">NPR </span>
                      <span className="text-4xl font-bold text-primary">{t.price}</span>
                    </span>
                  )}
                  <div className="text-xs text-gray-400 mt-1">{t.priceLabel}</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 flex-1 mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/9779761154213" target="_blank" rel="noopener noreferrer" className={`block text-center py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors ${t.highlight ? "bg-primary text-white hover:bg-primary-dark" : "border border-primary text-primary hover:bg-primary hover:text-white"}`}>{t.cta}</a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">Annual billing available with 2 months free. All prices in Nepali Rupees (NPR).</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">FAQ</span>
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold text-primary mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Attendance?</h2>
          <p className="text-white/80 text-lg mb-10">Get in touch with us today to see how Attend Xpress can transform your HR operations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/9779761154213" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">WhatsApp Us</a>
            <a href="mailto:support@zentaralabs.com" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">Email Us</a>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-xs">Z</span></div>
            <span className="font-bold">Zentara Labs</span>
          </Link>
          <div className="text-sm text-white/50">© {new Date().getFullYear()} Zentara Labs. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}