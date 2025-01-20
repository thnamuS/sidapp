// app/components/Footer.js
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer bg-neutral  p-10 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Medilab</h2>
          <p className="text-sm">
            Medilab is a leading healthcare provider dedicated to offering
            top-notch medical services. We prioritize your health and
            well-being.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com"
              className="btn btn-circle btn-outline  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">
            <i className="bi bi-geo-alt-fill mr-2"></i> 123 Medical Plaza,
            Health City
          </p>
          <p className="text-sm">
            <i className="bi bi-telephone-fill mr-2"></i> +1 5589 55488 55
          </p>
          <p className="text-sm">
            <i className="bi bi-envelope-fill mr-2"></i> info@medilab.com
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral mt-10 pt-6 text-center">
        <p className="text-sm">
          © 2024 Medilab. All rights reserved. Designed by{" "}
          <a href="https://bootstrapmade.com/" className="hover:underline">
            BootstrapMade
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
