import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attend Xpress — Contactless HR & Attendance Software | Zentara Labs",
  description: "Attend Xpress replaces bulky fingerprint devices with contactless mobile clock-in and clock-out. Automatic payroll processing for admins and accountants.",
};

export default function AttendXpress() {
  return (
    <div className="min-h-screen bg-surface">
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
