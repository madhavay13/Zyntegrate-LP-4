import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo2.png";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ZNinth09" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/z-ninth/" },
  { icon: Instagram, href: "https://www.instagram.com/zninth09/" },
  { icon: Facebook, href: "https://www.facebook.com/zninth09" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12">

        {/* LEFT: Brand + Description */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zyntegrate Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-900">Zyntegrate</span>
          </div>
          <p className="text-blue-800 text-sm leading-relaxed">
            Powerful automation and integration infrastructure built for modern enterprises. Connect systems, automate workflows, and scale with confidence.
          </p>
          <p className="text-blue-600 text-xs">
            © 2026 Z-Ninth Inc. All rights reserved.
          </p>
        </div>

        {/* RIGHT: Links + Offices + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Office Locations */}
          <div className="flex flex-col gap-2 text-sm text-blue-800">
            <span className="font-semibold text-blue-900">Offices</span>
            <span className="leading-snug">
              <strong>USA:</strong> Dallas, 702 S Denton Tap Rd, Suite #110, Coppell, 75019
            </span>
            <span className="leading-snug">
              <strong>India:</strong> Hyderabad, T-Hub Phase 2, Inorbit Mall Rd, Madhapur, 500081
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 text-sm text-blue-800">
            <span className="font-semibold text-blue-900">Quick Links</span>
            <a href="#why-it-matters" className="hover:text-blue-600 transition">Why</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#agents" className="hover:text-blue-600 transition">Agent</a>
            <a href="#use-cases" className="hover:text-blue-600 transition">Use Cases</a>
            <a href="#cta" className="hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Contact + Socials */}
          <div className="flex flex-col gap-2 text-sm text-blue-800">
            <span className="font-semibold text-blue-900">Contact</span>
            <a href="mailto:info@z-ninth.com" className="hover:text-blue-600 transition">info@z-ninth.com</a>
            <a href="tel:+19729925082" className="hover:text-blue-600 transition">+1 (972) 992-5082</a>
            <a href="tel:+918885257422" className="hover:text-blue-600 transition">+91 88852 57422</a>

            <div className="flex gap-2 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded border border-blue-200 text-blue-800 hover:text-blue-600 transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}