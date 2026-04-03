import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Management System — Complete School Administration | Zentara Labs",
  description: "A complete school management system covering student records, attendance, marks, fee collection, report cards, homework and notices for staff, parents and students.",
};

export default function SchoolManagement() {
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">Education Software</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">School <span className="text-accent-light">Management</span> System</h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              A complete, all-in-one school administration system built for Nepali schools — managing
              everything from students and staff to fees, marks, and report cards.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Built for Everyone in Your School</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Separate apps and dashboards tailored for each role in your school.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {icon:"👨‍💼",role:"Admin",desc:"Full control over the entire school — students, staff, fees, reports and settings.",color:"bg-primary/10 text-primary"},
              {icon:"👩‍🏫",role:"Teacher",desc:"Mark attendance, enter grades, assign homework, and post notices from a mobile app.",color:"bg-blue-50 text-blue-700"},
              {icon:"💰",role:"Accountant",desc:"Collect fees, generate receipts, view defaulters, and process financial reports.",color:"bg-green-50 text-green-700"},
              {icon:"👪",role:"Parent & Student",desc:"View report cards, fee status, homework, notices and attendance from mobile app.",color:"bg-accent/10 text-accent"},
            ].map((item) => (
              <div key={item.role} className="card p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className={"inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 " + item.color}>{item.role}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Complete Feature Set</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Everything your school needs, in one system.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:"👨‍🎓",title:"Student Management",desc:"Complete student profiles, enrollment, section assignment, and promotion management."},
              {icon:"✅",title:"Attendance Tracking",desc:"Daily attendance marking by teachers, with summary reports for each student."},
              {icon:"📝",title:"Marks & Grades",desc:"Enter marks for all exams, automatic GPA calculation and grade assignment."},
              {icon:"📄",title:"Report Cards",desc:"Generate professional report cards in PDF — term reports and final reports."},
              {icon:"💳",title:"Fee Management",desc:"Fee structure setup, collection, receipts, arrears tracking and defaulter reports."},
              {icon:"📚",title:"Homework",desc:"Teachers assign homework through the app, students and parents see it instantly."},
              {icon:"📢",title:"Notices Board",desc:"Post school notices for all or specific audiences — teachers, parents, or students."},
              {icon:"📱",title:"Mobile Apps",desc:"Dedicated mobile apps for school staff, parents and students — Android & iOS."},
              {icon:"🗓️",title:"Bikram Sambat Calendar",desc:"Full BS date support throughout the system — Nepal's official calendar."},
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

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">Built for Nepal</span>
              <h2 className="text-4xl font-bold text-primary mb-6">Designed with Nepali Schools in Mind</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our School Management System is built specifically for the Nepali education context —
                from the Bikram Sambat calendar to Nepal's grading system and fee structures.
              </p>
              <div className="space-y-4">
                {[
                  "Full Bikram Sambat (BS) date support throughout",
                  "Nepal's GPA grading system (A+, A, B+, B, C+, C, D, E)",
                  "Nepali language support for student names and reports",
                  "Fee management in Nepali rupees with BS dates",
                  "Supports school grades from Nursery to Class X",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-8 bg-surface">
              <h3 className="text-xl font-bold text-primary mb-6">System Overview</h3>
              <div className="space-y-4">
                {[
                  {label:"Web Dashboard",value:"Admin full control panel"},
                  {label:"Staff Mobile App",value:"Teachers & Accountants"},
                  {label:"Parent Mobile App",value:"Parents & Students"},
                  {label:"Calendar",value:"Bikram Sambat (BS)"},
                  {label:"Report Cards",value:"PDF generation"},
                  {label:"Fee Receipts",value:"Digital receipts"},
                  {label:"Platform",value:"Android & iOS"},
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-medium text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your School?</h2>
          <p className="text-white/80 text-lg mb-10">Contact us today to get a live demo of the School Management System for your institution.</p>
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
