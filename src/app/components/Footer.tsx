import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo2.png";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ZNinth09", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/z-ninth/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/zninth09/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/zninth09", label: "Facebook" },
];

const quickLinks = [
  { label: "Why It Matters", href: "#why-it-matters" },
  { label: "Features", href: "#features" },
  { label: "Agent", href: "#agents" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact", href: "#cta" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#f0f5ff" }}>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #bfcfea, transparent)" }} />



      {/* Soft glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="pt-14 pb-10 grid lg:grid-cols-12 gap-10" style={{ borderBottom: "1px solid rgba(59,130,246,0.12)" }}>

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              >
                <img src={logo} alt="Zyntegrate Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "#1e3a6e" }}>
                Zyntegrate
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "#4a6a9e", maxWidth: 300 }}>
              Automate workflows. <br/>Connect systems.<br/> Move faster.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mt-1">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.18)";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)";
                  }}
                >
                  <social.icon className="w-4 h-4" style={{ color: "#3b6fcf" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1" />

          {/* Offices */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[3px]" style={{ color: "#2563eb" }}>
              Offices
            </span>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold" style={{ color: "#1e3a6e" }}>United States</span>
                <span className="text-xs leading-relaxed" style={{ color: "#4a6a9e" }}>
                  702 S Denton Tap Rd, Suite #110<br />Coppell, Dallas TX 75019
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold" style={{ color: "#1e3a6e" }}>India</span>
                <span className="text-xs leading-relaxed" style={{ color: "#4a6a9e" }}>
                  T-Hub Phase 2, Inorbit Mall Rd<br />Madhapur, Hyderabad 500081
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[3px]" style={{ color: "#2563eb" }}>
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm transition-colors duration-150 w-fit"
                  style={{ color: "#4a6a9e" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#1e3a6e"}
                  onMouseLeave={e => e.currentTarget.style.color = "#4a6a9e"}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[3px]" style={{ color: "#2563eb" }}>
              Contact
            </span>
            <div className="flex flex-col gap-2">
              {[
                { href: "mailto:info@z-ninth.com", label: "info@z-ninth.com" },
                { href: "tel:+19729925082", label: "+1 (972) 992-5082" },
                { href: "tel:+918885257422", label: "+91 88852 57422" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-sm transition-colors duration-150 w-fit"
                  style={{ color: "#4a6a9e" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#1e3a6e"}
                  onMouseLeave={e => e.currentTarget.style.color = "#4a6a9e"}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#7a97c0" }}>
            © 2026 Z-Ninth Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            {legalLinks.map((link, i) => (
              <span key={i} className="flex items-center gap-1">
                <a
                  href={link.href}
                  className="text-xs transition-colors duration-150"
                  style={{ color: "#7a97c0" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#1e3a6e"}
                  onMouseLeave={e => e.currentTarget.style.color = "#7a97c0"}
                >
                  {link.label}
                </a>
                {i < legalLinks.length - 1 && (
                  <span className="text-xs" style={{ color: "#bfcfea" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}