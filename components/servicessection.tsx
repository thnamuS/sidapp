// app/components/ServicesSection.js
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="card w-80 bg-white shadow-lg p-6 rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Medical Consultation
            </h3>
            <p className="text-gray-600">
              Expert advice from our trusted medical professionals.
            </p>
          </div>
          <div className="card w-80 bg-white shadow-lg p-6 rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Lab Tests
            </h3>
            <p className="text-gray-600">
              State-of-the-art facilities to provide accurate results.
            </p>
          </div>
          <div className="card w-80 bg-white shadow-lg p-6 rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Health Check-ups
            </h3>
            <p className="text-gray-600">
              Comprehensive health check-ups to keep you in top shape.
            </p>
          </div>
          <div className="card w-80 bg-white shadow-lg p-6 rounded-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Nutrition Plans
            </h3>
            <p className="text-gray-600">
              Personalized nutrition plans to meet your health goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
