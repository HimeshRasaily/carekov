import Image from "next/image";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/images/carekov-logo.png" alt="Carekov" width={140} height={44} />
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            Carekov — Elderly Care & Health Solutions. Compassionate, professional in-home care for better living.
          </p>
        </div>

        {/* Sitemap - Services */}
        <div>
          <h4 className="text-sm font-semibold text-[#1C5F62] mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="/services" className="hover:underline">All Services</a></li>
            <li><a href="/specialised-services" className="hover:underline">Specialised Services</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/laboratory-testing" className="hover:underline">Laboratory & Testing</a></li>
            <li><a href="/book-appointment" className="hover:underline">Book Appointment</a></li>
          </ul>
        </div>

        {/* Sitemap - Company */}
        <div>
          <h4 className="text-sm font-semibold text-[#1C5F62] mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/franchise" className="hover:underline">Franchise Partnership</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/demo" className="hover:underline">Request Demo</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-sm font-semibold text-[#1C5F62] mb-3">Contact</h4>
          <div className="text-sm text-gray-700 space-y-2">
            <div>Phone: <a href="tel:+919000000000" className="text-[#317C82] hover:underline">+91 90000 00000</a></div>
            <div>Email: <a href="mailto:support@carekov.com" className="text-[#317C82] hover:underline">support@carekov.com</a></div>
            <div className="pt-3">
              <span className="text-sm font-semibold text-[#1C5F62]">Follow us</span>
              <div className="mt-2 flex gap-3">
                <a href="#" aria-label="Follow on Facebook" className="text-gray-500 hover:text-[#317C82]">Facebook</a>
                <a href="#" aria-label="Follow on Instagram" className="text-gray-500 hover:text-[#317C82]">Instagram</a>
                <a href="#" aria-label="Follow on LinkedIn" className="text-gray-500 hover:text-[#317C82]">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>© {year} Carekov — All rights reserved</div>
          <div className="mt-3 md:mt-0">
            <a href="/terms" className="mr-4 hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
