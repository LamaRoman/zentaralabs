import Link from "next/link";

const faqs = [
  {
    q: "What is the best attendance app for small businesses in Nepal?",
    a: "Attend Xpress is a modern, affordable attendance and HR app built for Nepali businesses. Employees clock in and out from their own mobile phone using a QR scan — no fingerprint machine, no hardware, and no setup fee. It includes geo-fencing, leave management, and automatic payroll, making it one of the simplest and most cost-effective attendance systems for small and growing businesses in Nepal.",
  },
  {
    q: "Is there an affordable alternative to fingerprint attendance machines in Nepal?",
    a: "Yes. Attend Xpress replaces bulky fingerprint devices with contactless mobile clock-in. There is no device to buy, nothing to maintain, and no morning queues. Staff simply scan a QR code from any Android or iOS phone, which makes it far cheaper and more reliable than a traditional biometric machine.",
  },
  {
    q: "Does Attend Xpress handle payroll and payslips?",
    a: "Attend Xpress automatically calculates payroll from attendance, overtime and leave records, and generates payslips for your staff — saving hours of manual work every month. Reports can be exported to PDF or Excel and handed to your accountant for filing.",
  },
  {
    q: "How does Attend Xpress stop fake or proxy attendance?",
    a: "Attend Xpress uses GPS geo-fencing so the clock-in only counts when the employee is physically at the approved work location. This prevents staff from marking attendance from home or elsewhere.",
  },
  {
    q: "How much does Attend Xpress cost in Nepal?",
    a: "Attend Xpress has a free plan for small teams (unlimited employees, mobile clock-in and roster). Paid plans are NPR 99 per employee per month (Standard — adds geo-fencing, leave and reports) and NPR 149 (Professional — adds automatic payroll, payslips and multi-site). No setup fee, no hardware cost, and annual billing comes with two months free.",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-primary text-lg tracking-tight">Zentara Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm text-gray-600 hover:text-primary transition-colors">Product</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-primary transition-colors">FAQ</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>
          <a href="#contact" className="btn-primary text-sm px-4 py-2">Get in Touch</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Attendance &amp; HR Software · Kathmandu, Nepal
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
              The Smart Way to <br />
              <span className="text-accent">Track Attendance in Nepal</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Zentara Labs builds <strong>Attend Xpress</strong> — a modern, affordable attendance and HR system for
              Nepali businesses. Mobile QR clock-in, geo-fencing, and automatic payroll. No fingerprint machine, no hardware, no setup fee.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#product" className="btn-primary px-8 py-3 text-base">Explore Attend Xpress</a>
              <a href="#contact" className="btn-outline px-8 py-3 text-base">Talk to Us</a>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "QR", label: "Mobile Clock-In" },
              { value: "100%", label: "Made in Nepal" },
              { value: "24/7", label: "Support" },
              { value: "NPR 0", label: "Setup Fee" },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Our Product</span>
            <h2 className="text-4xl font-bold text-primary mb-4">Attendance Software Built for Nepal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Purpose-built to solve a real problem for Nepali businesses — fast, contactless attendance without the hardware.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-primary">Attend Xpress</h3>
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">Attendance &amp; HR</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Modern attendance software that replaces bulky fingerprint devices with contactless mobile QR clock-in and clock-out.
                No queues, no hardware — just a simple mobile app. Geo-fencing and automatic payroll built in.
              </p>
              <ul className="space-y-2 mb-8">
                {["Contactless mobile QR clock-in & clock-out","No fingerprint device or hardware needed","GPS geo-fencing to stop fake attendance","Automatic payroll & payslip generation","Real-time admin & accountant dashboard"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/products/attend-xpress" className="btn-primary w-full justify-center">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section id="pricing" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Pricing</span>
            <h2 className="text-4xl font-bold text-primary mb-4">Honest Pricing. No Surprises.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We publish our prices openly because we believe in transparency. What you see is what you pay.</p>
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
          <p className="text-center text-gray-400 text-sm mt-8">Annual billing available with 2 months free. All prices per active employee, in Nepali Rupees (NPR), excluding VAT.</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-surface-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">About Us</span>
              <h2 className="text-4xl font-bold text-primary mb-6">Building the Future of Nepali Business Software</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Zentara Labs is a software company based in Kathmandu, Nepal, dedicated to building smart,
                reliable, and affordable software for businesses and organizations of all sizes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our flagship product, Attend Xpress, helps Nepali businesses modernize how they track attendance and
                run payroll — built by a team that understands how local businesses actually work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[{icon:"📱",label:"Mobile Attendance"},{icon:"💰",label:"Automatic Payroll"},{icon:"📍",label:"Geo-Fencing"},{icon:"🔧",label:"Local Support"}].map((item) => (
                  <div key={item.label} className="card p-4 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Attend Xpress?</h3>
              <div className="space-y-5">
                {[
                  {title:"Built for Nepal",desc:"Designed with Nepali business context, Nepali calendar, language support, and local needs in mind."},
                  {title:"No Hardware",desc:"No fingerprint machine to buy or maintain — staff clock in from their own phone."},
                  {title:"Dedicated Support",desc:"Local, same-timezone support over WhatsApp to help you get set up and running fast."},
                  {title:"Affordable Pricing",desc:"Powerful HR software at a price that makes sense for Nepali businesses."},
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-white/70 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">FAQ</span>
            <h2 className="text-4xl font-bold text-primary mb-4">Attendance &amp; HR Software in Nepal — Common Questions</h2>
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

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Our Team</span>
            <h2 className="text-4xl font-bold text-primary mb-4">The People Behind Zentara</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">Building software that makes a difference for Nepali businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-bold text-2xl">RL</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Roman Lama</h3>
              <p className="text-accent font-medium text-sm mb-3">Founder &amp; CEO</p>
              <p className="text-gray-500 text-sm leading-relaxed">Leading the vision and strategy behind Zentara Labs and Attend Xpress.</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-bold text-2xl">AB</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Anas Basir-U-Din</h3>
              <p className="text-accent font-medium text-sm mb-3">Co-Founder</p>
              <p className="text-gray-500 text-sm leading-relaxed">Driving operations and growth to bring our solutions to businesses across Nepal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-surface-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Contact Us</span>
            <h2 className="text-4xl font-bold text-primary mb-4">{"Let's Work Together"}</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">{"Want to see Attend Xpress in action or get a free setup? We'd love to hear from you."}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="mailto:support@zentaralabs.com" className="card p-8 text-center hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-800 mb-1">Email</div>
              <div className="text-sm text-primary font-medium">support@zentaralabs.com</div>
            </a>
            <a href="https://wa.me/9779761154213" target="_blank" rel="noopener noreferrer" className="card p-8 text-center hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-800 mb-1">WhatsApp &amp; Viber</div>
              <div className="text-sm text-primary font-medium">+977 9761154213</div>
            </a>
            <div className="card p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-800 mb-1">Location</div>
              <div className="text-sm text-primary font-medium">Kathmandu, Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-lg">Zentara Labs</span>
          </div>
          <div className="flex gap-8 text-sm text-white/70">
            <Link href="/products/attend-xpress" className="hover:text-white transition-colors">Attend Xpress</Link>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-white/50">© {new Date().getFullYear()} Zentara Labs. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
