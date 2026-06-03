import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Attend Xpress | Zentara Labs",
  description:
    "Privacy policy for the Attend Xpress mobile application by Zentara Labs Pvt. Ltd.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface">
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
              href="/#products"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#contact"
              className="btn-primary text-sm px-4 py-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto prose prose-gray prose-sm sm:prose-base">
          <p className="text-sm text-gray-400 mb-1">Last updated: 3 June 2026</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 mb-10">Attend Xpress Mobile Application</p>

          <p>
            Zentara Labs Pvt. Ltd. (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) operates the <strong>Attend Xpress</strong>{" "}
            mobile application (the &ldquo;App&rdquo;). This Privacy Policy
            explains what information we collect, how we use it, and your
            choices.
          </p>
          <p>
            By using the App you agree to this policy. If you do not agree,
            please do not use the App.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Account Information</h3>
          <p>
            When your organisation creates your employee account, the following
            is stored on the organisation&rsquo;s server: full name, email
            address, phone number, employee ID, role, and branch assignment.
          </p>

          <h3>1.2 Attendance Data</h3>
          <p>Each time you clock in or clock out, we record:</p>
          <ul>
            <li>Timestamp of the action</li>
            <li>
              GPS coordinates at the time of check-in/check-out (latitude,
              longitude, accuracy)
            </li>
            <li>Check-in method (GPS, QR scan)</li>
          </ul>

          <h3>1.3 Location Data (Field Staff Only)</h3>
          <p>
            If your organisation has designated you as <strong>field staff</strong>,
            the App collects your GPS location{" "}
            <strong>continuously while you are clocked in</strong>. This is used
            to show your manager a live route map during your shift.
          </p>
          <ul>
            <li>
              Location is collected in the background (even when the App is not
              in the foreground).
            </li>
            <li>
              A persistent notification is displayed while tracking is active.
            </li>
            <li>
              <strong>
                Location collection stops automatically when you clock out
              </strong>{" "}
              or when your shift ends.
            </li>
            <li>
              Location data is <strong>not</strong> collected when you are
              clocked out.
            </li>
          </ul>

          <h3>1.4 Device Information</h3>
          <p>
            We may collect basic device information (device model, operating
            system version) for troubleshooting and compatibility purposes.
          </p>

          <h3>1.5 Biometric Data</h3>
          <p>
            If you enable biometric unlock (fingerprint or face), the biometric
            check is performed entirely on your device by the operating system.{" "}
            <strong>
              We do not collect, store, or transmit biometric data.
            </strong>
          </p>

          <h2>2. How We Use Your Information</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account information</td>
                  <td>Authenticate you and display your profile</td>
                </tr>
                <tr>
                  <td>Attendance timestamps + GPS</td>
                  <td>
                    Verify your attendance at the designated work location
                    (geofence check)
                  </td>
                </tr>
                <tr>
                  <td>Continuous location (field staff)</td>
                  <td>
                    Provide real-time route tracking to your organisation&rsquo;s
                    managers during your shift
                  </td>
                </tr>
                <tr>
                  <td>Device information</td>
                  <td>App compatibility and crash diagnosis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We do <strong>not</strong> use your data for advertising, profiling,
            or any purpose unrelated to attendance management.
          </p>

          <h2>3. Who Receives Your Data</h2>
          <p>
            Your data is sent to{" "}
            <strong>
              your organisation&rsquo;s Attend Xpress server
            </strong>{" "}
            (hosted and controlled by your employer or their chosen
            infrastructure provider). We (Zentara Labs) provide the software but{" "}
            <strong>
              do not operate the server or have access to your data
            </strong>{" "}
            unless your organisation explicitly grants us access for support
            purposes.
          </p>
          <p>
            We do <strong>not</strong> sell, rent, or share your personal data
            with any third party.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            Your attendance and location data is retained on your
            organisation&rsquo;s server according to their own data-retention
            policies. Contact your organisation&rsquo;s administrator for
            details.
          </p>
          <p>
            If you uninstall the App, locally stored authentication tokens are
            deleted from your device. Server-side data is not affected by
            uninstalling.
          </p>

          <h2>5. Your Rights and Choices</h2>
          <ul>
            <li>
              <strong>Location permission:</strong> You can deny or revoke
              location permission at any time in your device&rsquo;s Settings.
              Denying background location means real-time route tracking will not
              work, but basic clock-in/out remains available (subject to your
              organisation&rsquo;s geofence rules).
            </li>
            <li>
              <strong>Biometric unlock:</strong> Optional. You can enable or
              disable it in the App&rsquo;s profile settings.
            </li>
            <li>
              <strong>Account deletion:</strong> Contact your
              organisation&rsquo;s administrator to request deletion of your
              account and associated data.
            </li>
            <li>
              <strong>Access your data:</strong> You can view your attendance
              history, leave records, and payslips within the App at any time.
            </li>
          </ul>

          <h2>6. Security</h2>
          <p>We use industry-standard measures to protect your data:</p>
          <ul>
            <li>
              All communication between the App and the server uses HTTPS (TLS
              encryption in transit).
            </li>
            <li>
              Authentication tokens are stored in the device&rsquo;s secure
              storage (Android Keystore / iOS Keychain).
            </li>
            <li>
              Passwords are hashed on the server; they are never stored in plain
              text.
            </li>
          </ul>

          <h2>7. Children&rsquo;s Privacy</h2>
          <p>
            The App is not intended for use by anyone under 16 years of age. We
            do not knowingly collect personal information from children.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Last updated&rdquo; date at the top will reflect the most
            recent revision. Continued use of the App after changes constitutes
            acceptance of the revised policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p>
            <strong>Zentara Labs Pvt. Ltd.</strong>
            <br />
            Kathmandu, Nepal
            <br />
            Email:{" "}
            <a href="mailto:admin@zentaralabs.com">admin@zentaralabs.com</a>
          </p>

          <hr />
          <p className="text-xs text-gray-400">
            This policy applies to the Attend Xpress mobile application
            distributed via Google Play.
          </p>
        </article>
      </section>

      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} Zentara Labs Pvt. Ltd.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/products/attend-xpress"
              className="hover:text-primary transition-colors"
            >
              Attend Xpress
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
