import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const primary = "#317C82";
  const accent = "#D3A24C";

  const [openMobile, setOpenMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  return (
    <header className="bg-white border-b">
 <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:justify-between">


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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm pointer-events-none md:pointer-events-auto">


         
          
        <Link href="/services" className="hover:opacity-90" style={{ color: primary }}>
  Services
</Link>

<Link href="/products" className="hover:opacity-90" style={{ color: primary }}>
  Products
</Link>

<Link href="/laboratory-testing" className="hover:opacity-90" style={{ color: primary }}>
  Lab Testing
</Link>

<Link href="/specialised-services" className="hover:opacity-90" style={{ color: primary }}>
  Specialized Services
</Link>


          <Link
            href="/book-appointment"
            className="hover:opacity-90"
            style={{ color: primary }}
          >
            Book Appointment
          </Link>

         
        
          {/* More dropdown */}
          <div
            className="relative"
            
          >
            <button
              onClick={() => setOpenMore((s) => !s)}
              className="flex items-center gap-2"
              style={{ color: primary }}
            >
              More ▾
            </button>

           {openMore && (
  <div className="absolute left-0 mt-2 w-52 bg-white border rounded-md shadow-md z-20">
    <ul className="p-3 space-y-2 text-sm">
      <li>
        <Link href="/about" className="block px-2 py-1">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/franchise" className="block px-2 py-1">
          Franchise Partnership
        </Link>
      </li>
      <li>
        <Link href="/contact" className="block px-2 py-1">
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
)}
</div>

{/* Demo dropdown (Login access) */}

<div
  className="relative"

>
  <button
    onClick={() => setOpenUser((s) => !s)}
    className="px-4 py-2 rounded-md text-white flex items-center gap-2"
    style={{ backgroundColor: accent }}
  >
    User ▾
  </button>

  {openUser && (
    <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md z-20">
      <ul className="p-3 space-y-2 text-sm text-left">
        <li>
          <Link href="/login/client" className="block px-2 py-1 hover:bg-gray-50 rounded">
            Login as Client
          </Link>
        </li>
        <li>
          <Link href="/login/provider" className="block px-2 py-1 hover:bg-gray-50 rounded">
            Login as Service Provider
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>

      

        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMobile((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border"
          >
            {openMobile ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {openMobile && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">

            

          <Link href="/services" className="block">
  Services
</Link>

<Link href="/products" className="block">
  Products
</Link>

<Link href="/laboratory-testing" className="block">
  Lab Testing
</Link>

<Link href="/specialised-services" className="block">
  Specialized Services
</Link>


            <Link href="/book-appointment" className="block">Book Appointment</Link>

            <details>
              <summary className="cursor-pointer">User</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/login/client" className="block">Log in — Client</Link>
                <Link href="/login/provider" className="block">Service Provider Login</Link>
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
