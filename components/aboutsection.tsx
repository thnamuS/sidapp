// app/components/AboutSection.js
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="mb-4 text-lg text-gray-600">
          Learn more about what we do and how we can help you achieve your
          health goals.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <div className="md:w-1/2 p-4">
            <img
              src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=3470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-lg mb-4 text-gray-600">
              We are dedicated to providing the best services to help you
              achieve your health goals. Our team of experts is here to support
              you every step of the way.
            </p>
            <p className="text-lg mb-4 text-gray-600">
              Whether you are looking to improve your fitness, nutrition, or
              overall well-being, we have the resources and expertise to help
              you succeed.
            </p>
            <p className="text-lg text-gray-600">
              Join us on this journey to a healthier and happier life. We are
              here to help you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
