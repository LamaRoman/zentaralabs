import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
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
            <a href="#products" className="text-sm text-gray-600 hover:text-primary transition-colors">Products</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#team" className="text-sm text-gray-600 hover:text-primary transition-colors">Team</a>
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
              Software Company · Kathmandu, Nepal
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
              Smart Software for <br />
              <span className="text-accent">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              We build powerful, intuitive software solutions for businesses and organizations across Nepal —
              from HR and attendance management to complete school administration systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-primary px-8 py-3 text-base">Explore Our Products</a>
              <a href="#contact" className="btn-outline px-8 py-3 text-base">Talk to Us</a>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2+", label: "Products" },
              { value: "100%", label: "Made in Nepal" },
              { value: "24/7", label: "Support" },
              { value: "∞", label: "Scalable" },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Our Products</span>
            <h2 className="text-4xl font-bold text-primary mb-4">Solutions Built for Nepal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Purpose-built software that solves real problems for Nepali businesses and institutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-primary">Attend Xpress</h3>
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">HR Software</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Modern HR software that replaces bulky fingerprint devices with contactless mobile clock-in and clock-out.
                No queues, no hardware — just a simple mobile app. Automatic payroll and salary processing built in.
              </p>
              <ul className="space-y-2 mb-8">
                {["Contactless mobile clock-in & clock-out","Eliminate fingerprint device queues","Automatic payroll processing","Admin & accountant dashboard","Real-time attendance tracking"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/products/attend-xpress" className="btn-primary w-full justify-center">Learn More →</Link>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <svg className="w-7 h-7 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-primary">School Management</h3>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">Education</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                A complete school administration system covering everything from student records and attendance
                to marks, fee collection, report cards, homework and notices — for staff, parents and students.
              </p>
              <ul className="space-y-2 mb-8">
                {["Student records & attendance","Marks & report card generation","Fee collection & management","Homework & notices board","Mobile apps for staff & parents"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/products/school-management" className="btn-outline w-full justify-center">Learn More →</Link>
            </div>
          </div>
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
                We specialize in creating custom software solutions — from personal and business websites
                to enterprise-grade products. Our team understands the unique needs of Nepali businesses
                and builds software that works in the real world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[{icon:"🏢",label:"Business Software"},{icon:"🌐",label:"Web Development"},{icon:"📱",label:"Mobile Apps"},{icon:"🔧",label:"Custom Solutions"}].map((item) => (
                  <div key={item.label} className="card p-4 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Zentara Labs?</h3>
              <div className="space-y-5">
                {[
                  {title:"Built for Nepal",desc:"Software designed with Nepali business context, language support, and local regulations in mind."},
                  {title:"Reliable & Secure",desc:"Enterprise-grade security and reliability you can trust for your critical business operations."},
                  {title:"Dedicated Support",desc:"Our team is available to help you get the most out of your software investment."},
                  {title:"Affordable Pricing",desc:"World-class software at prices that make sense for Nepali businesses and institutions."},
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

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-white">
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
              <p className="text-accent font-medium text-sm mb-3">Founder & CEO</p>
              <p className="text-gray-500 text-sm leading-relaxed">Leading the vision and strategy behind Zentara Labs and its products.</p>
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
            <p className="text-gray-600 max-w-xl mx-auto text-lg">{"Have a project in mind or want to learn more about our products? We'd love to hear from you."}</p>
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
              <div className="font-semibold text-gray-800 mb-1">WhatsApp & Viber</div>
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
            <Link href="/products/school-management" className="hover:text-white transition-colors">School Management</Link>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-white/50">© {new Date().getFullYear()} Zentara Labs. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
