import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="relative w-full bg-white overflow-hidden min-h-[85vh] sm:min-h-screen">

      
      {/* IMAGE WRAPPER */}
      <div className="absolute inset-0">

        <Image
          src="/images/hero-carekov.jpg"
          alt="Carekov Home Care"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* CENTERED TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">

           Beyond the monitor,  a connection.
            <br />
          That’s the heart of CareKov.
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
  	     Trusted elderly care and medical services delivered safely at your home.
	</p>

          
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

            <a
              href="/book-appointment"
              className="px-6 py-3 bg-[#317C82] text-white rounded-md shadow-md hover:opacity-90"
            >
              Book Appointment
            </a>

            <a
              href="/services"
              className="px-6 py-3 bg-[#D3A24C] text-white rounded-md shadow-md hover:opacity-90"
            >
              View Services
            </a>
          </div>

{/* Role-based Login Options */}
<div className="mt-4 flex justify-center px-4">

 <div className="flex gap-3 px-4 py-2 rounded-xl bg-white/35 backdrop-blur-md border border-white/50 shadow-sm">

    
    <button
      className="px-5 py-2 text-sm font-medium text-[#317C82] rounded-lg bg-white/60 hover:bg-white/80 hover:shadow-sm transition"
    >
      Login as Client
    </button>

    <button
      className="px-5 py-2 text-sm font-medium text-[#317C82] rounded-lg bg-white/60 hover:bg-white/80 hover:shadow-sm transition"
    >
      Login as Service Provider
    </button>

  </div>
</div>
        </motion.div>
      </div>

    </section>
  );
}
