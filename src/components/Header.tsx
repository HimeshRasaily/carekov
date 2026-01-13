import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const primary = "#317C82";
  const accent = "#D3A24C";

  const [openMobile, setOpenMobile] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/carekov-logo.png"
            alt="Carekov"
            width={150}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/services" style={{ color: primary }}>
            Services
          </Link>

          <Link href="/products" style={{ color: primary }}>
            Products
          </Link>

          <Link href="/laboratory-testing" style={{ color: primary }}>
            Lab Testing
          </Link>

          <Link href="/specialised-services" style={{ color: primary }}>
            Specialized Services
          </Link>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenMore((s) => !s)}
              style={{ color: primary }}
              className="flex items-center gap-1"
            >
              More ▾
            </button>

            {openMore && (
              <div className="absolute left-0 mt-2 w-52 bg-white border rounded-md shadow-md z-20">
                <ul className="p-3 space-y-2 text-sm">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/franchise">Franchise Partnership</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Register + User */}
          <div className="flex items-center gap-3">

            {/* Register Dropdown */}
            <div className="relative">
<button
  onClick={() => setOpenRegister((s) => !s)}
  className="px-4 py-2 rounded-md text-white hover:opacity-90"
  style={{ backgroundColor: primary }}
>
  Register ▾
</button>


              {openRegister && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md z-20">
                  <ul className="p-3 space-y-2 text-sm">
                    <li>
                      <Link href="/register/client">Register as Client</Link>
                    </li>
                    <li>
                      <Link href="/register/provider">Register as Service Provider</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenUser((s) => !s)}
                className="px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: accent }}
              >
                User ▾
              </button>

              {openUser && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md z-20">
                  <ul className="p-3 space-y-2 text-sm">
                    <li>
                      <Link href="/login/client">Login as Client</Link>
                    </li>
                    <li>
                      <Link href="/login/provider">Login as Service Provider</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMobile((s) => !s)}
            className="p-2 border rounded-md"
          >
            {openMobile ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">

            <Link href="/services" className="block">Services</Link>
            <Link href="/products" className="block">Products</Link>
            <Link href="/laboratory-testing" className="block">Lab Testing</Link>
            <Link href="/specialised-services" className="block">Specialized Services</Link>

            <details>
              <summary className="cursor-pointer">Register</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/register/client" className="block">Register as Client</Link>
                <Link href="/register/provider" className="block">Register as Service Provider</Link>
              </div>
            </details>

            <details>
              <summary className="cursor-pointer">User</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/login/client" className="block">Login — Client</Link>
                <Link href="/login/provider" className="block">Login — Service Provider</Link>
              </div>
            </details>

            <details>
              <summary className="cursor-pointer">More</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/franchise" className="block">Franchise Partnership</Link>
                <Link href="/contact" className="block">Contact Us</Link>
              </div>
            </details>

          </div>
        </div>
      )}
    </header>
  );
}
