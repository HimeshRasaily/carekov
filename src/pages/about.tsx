import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Carekov</h1>
        <p className="text-gray-700 leading-7">
          Carekov is dedicated to providing compassionate elderly care, 
          specialised services, and reliable home health solutions.  
          This is a placeholder page — full content will be added later.
        </p>
      </main>
      <Footer />
    </>
  );
}
