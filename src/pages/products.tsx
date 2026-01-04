import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Products() {
  const products = [
    {
      title: "Wheelchair",
      description: "High-quality, foldable wheelchairs for patient mobility support.",
      price: "₹2,499 / month (rental)",
    },
    {
      title: "Hospital Bed",
      description: "Adjustable hospital beds designed for home care environments.",
      price: "₹3,999 / month (rental)",
    },
    {
      title: "Oxygen Concentrator",
      description: "Certified concentrators for respiratory patients requiring oxygen therapy.",
      price: "₹4,499 / month (rental)",
    },
    {
      title: "BP Monitor",
      description: "Automatic blood pressure monitors for daily health tracking.",
      price: "₹1,199",
    },
    {
      title: "Glucometer Kit",
      description: "Complete kit for daily blood sugar monitoring.",
      price: "₹899",
    },
    {
      title: "Nebulizer",
      description: "Portable nebulizers for asthma & respiratory treatment.",
      price: "₹1,499",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#317C82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Products & Medical Equipment</h1>
          <p className="mt-4 text-lg text-white/90">
            Reliable equipment and medical supplies delivered to your home.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-[#1C5F62] mb-8 text-center">
          Choose from our range of essential medical products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-bold text-[#317C82]">{product.title}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-4 font-semibold text-[#D3A24C]">{product.price}</p>
              <button className="mt-4 px-5 py-2 rounded-md bg-[#317C82] text-white hover:opacity-90">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
