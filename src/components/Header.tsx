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
  const [role, setRole] = useState<"client" | "provider" | "supplier" | null>(null);

  const [openMobile, setOpenMobile] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  // 🔐 AUTH + ROLE DETECTION (SAFE, SEQUENTIAL)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setOpenProfile(false);
      setOpenRegister(false);
      setOpenLogin(false);

      if (!u) {
        setFirstName(null);
        setRole(null);
        return;
      }

      try {
        const clientSnap = await getDoc(doc(db, "clients", u.uid));
        if (clientSnap.exists()) {
          setFirstName(clientSnap.data().firstName || null);
          setRole("client");
          return;
        }

        const providerSnap = await getDoc(doc(db, "providers", u.uid));
        if (providerSnap.exists()) {
          setFirstName(providerSnap.data().firstName || null);
          setRole("provider");
          return;
        }

        const supplierSnap = await getDoc(doc(db, "suppliers", u.uid));
        if (supplierSnap.exists()) {
          setFirstName(supplierSnap.data().firstName || null);
          setRole("supplier");
          return;
        }

        setRole(null);
      } catch (err) {
        console.error("Failed to detect user role", err);
        setRole(null);
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
            alt="CareKov"
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
                setOpenMore(!openMore);
                setOpenRegister(false);
                setOpenLogin(false);
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

          {/* AUTH */}
          {!user ? (
            <div className="flex items-center gap-3">

              {/* Register */}
              <div className="relative">
                <button
                  onClick={() => {
                    setOpenRegister(!openRegister);
                    setOpenLogin(false);
                    setOpenMore(false);
                  }}
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: primary }}
                >
                  Register ▾
                </button>

                {openRegister && (
                  <div className="absolute right-0 mt-2 min-w-[220px] bg-white border rounded-md shadow-md z-20">
                    <ul className="p-3 space-y-2 text-sm">
                      <li><Link href="/auth/register">Client</Link></li>
                      <li><Link href="/auth/register-provider">Service Provider</Link></li>
                      <li><Link href="/auth/register-supplier">Supplier</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Login */}
              <div className="relative">
                <button
                  onClick={() => {
                    setOpenLogin(!openLogin);
                    setOpenRegister(false);
                    setOpenMore(false);
                  }}
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: accent }}
                >
                  Login ▾
                </button>

                {openLogin && (
                  <div className="absolute right-0 mt-2 min-w-[220px] bg-white border rounded-md shadow-md z-20">
                    <ul className="p-3 space-y-2 text-sm">
                      <li><Link href="/login/client">Client</Link></li>
                      <li><Link href="/login/provider">Service Provider</Link></li>
                      <li><Link href="/login/supplier">Supplier</Link></li>
                    </ul>
                  </div>
                )}
              </div>

            </div>
          ) : (
            /* LOGGED-IN MENU */
            <div className="relative">
              <button
                onClick={() => {
                  setOpenProfile(!openProfile);
                  setOpenRegister(false);
                  setOpenLogin(false);
                  setOpenMore(false);
                }}
                className="px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: accent }}
              >
                Hi, {firstName || "User"} ▾
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-60 bg-white border rounded-md shadow-md z-20">
                  <ul className="p-3 space-y-2 text-sm">

                    {role === "provider" && (
                      <li>
                        <Link href="/profile/service-provider">
                          Service Provider Profile
                        </Link>
                      </li>
                    )}

                    {role === "client" && (
                      <li>
                        <Link href="/profile/complete">
                          Client Profile
                        </Link>
                      </li>
                    )}

                    {role === "supplier" && (
                      <li>
                        <Link href="/profile/supplier-profile">
                          Supplier Profile
                        </Link>
                      </li>
                    )}

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
            onClick={() => setOpenMobile(!openMobile)}
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
                <Link href="/auth/register" className="block">Register</Link>
                <Link href="/login/client" className="block">Login</Link>
              </>
            ) : (
              <>
                {role === "provider" && (
                  <Link href="/profile/service-provider" className="block">
                    Service Provider Profile
                  </Link>
                )}
                <button onClick={handleLogout} className="block text-red-600">
                  Logout
                </button>
              </>
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
