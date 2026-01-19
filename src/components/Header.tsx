import { auth, db } from "../lib/firebase/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Header() {
  const primary = "#317C82";
  const accent = "#D3A24C";

  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);

  const [openMobile, setOpenMobile] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  // 🔐 AUTH + CLIENT PROFILE NAME (PRODUCTION SAFE)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setOpenProfile(false);
      setOpenRegister(false);

      if (!u) {
        setFirstName(null);
        return;
      }

      try {
        const ref = doc(db, "clients", u.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setFirstName(snap.data().firstName || null);
        } else {
          setFirstName(null);
        }
      } catch (err) {
        console.error("Failed to load client name", err);
        setFirstName(null);
      }
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.replace("/");
  };

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

          <Link href="/services" style={{ color: primary }}>Services</Link>
          <Link href="/products" style={{ color: primary }}>Products</Link>
          <Link href="/laboratory-testing" style={{ color: primary }}>Lab Testing</Link>
          <Link href="/specialised-services" style={{ color: primary }}>Specialized Services</Link>

          {/* More */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenMore((s) => !s);
                setOpenRegister(false);
                setOpenProfile(false);
              }}
              style={{ color: primary }}
            >
              More ▾
            </button>

            {openMore && (
              <div className="absolute left-0 mt-2 w-52 bg-white border rounded-md shadow-md z-20">
                <ul className="p-3 space-y-2 text-sm">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/franchise">Franchise Partnership</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* AUTH AWARE */}
          {!user ? (
            <div className="flex items-center gap-3">

              <div className="relative">
                <button
                  onClick={() => {
                    setOpenRegister((s) => !s);
                    setOpenProfile(false);
                    setOpenMore(false);
                  }}
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: primary }}
                >
                  Register ▾
                </button>

                {openRegister && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md z-20">
                    <ul className="p-3 space-y-2 text-sm">
                      <li><Link href="/auth/register">Register as Client</Link></li>
                      <li><Link href="/register/provider">Register as Service Provider</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/login/client"
                className="px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: accent }}
              >
                Login
              </Link>
            </div>
          ) : (
            /* PROFILE */
            <div className="relative">
              <button
                onClick={() => {
                  setOpenProfile((s) => !s);
                  setOpenRegister(false);
                  setOpenMore(false);
                }}
                className="px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: accent }}
              >
                Hi, {firstName || "User"} ▾
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md z-20">
                  <ul className="p-3 space-y-2 text-sm">
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/profile/complete">Complete Profile</Link></li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-600 w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
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

            {!user ? (
              <>
                <details>
                  <summary className="cursor-pointer">Register</summary>
                  <div className="pl-4 mt-2 space-y-1">
                    <Link href="/auth/register" className="block">Register as Client</Link>
                    <Link href="/register/provider" className="block">Register as Service Provider</Link>
                  </div>
                </details>

                <details>
                  <summary className="cursor-pointer">Login</summary>
                  <div className="pl-4 mt-2 space-y-1">
                    <Link href="/login/client" className="block">Login — Client</Link>
                    <Link href="/login/provider" className="block">Login — Service Provider</Link>
                  </div>
                </details>
              </>
            ) : (
              <details>
                <summary className="cursor-pointer">
                  Hi, {firstName || "User"}
                </summary>
                <div className="pl-4 mt-2 space-y-1">
                  <Link href="/profile" className="block">Profile</Link>
                  <Link href="/profile/complete" className="block">Complete Profile</Link>
                  <button onClick={handleLogout} className="block text-red-600">
                    Logout
                  </button>
                </div>
              </details>
            )}

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
