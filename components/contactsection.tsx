// app/components/ContactSection.js
export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-base-200">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          I'd love to hear from you! Whether you have a question or just want to
          say hello, feel free to reach out.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row lg:gap-10 items-center lg:items-start lg:justify-between max-w-4xl mx-auto p-6 lg:p-12 bg-white shadow-2xl rounded-lg">
        <div className="flex-1">
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full h-32"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1 hidden lg:block rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.221675153794!2d83.42290257608262!3d17.921811783059397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39581b73ffffff%3A0xd04b9046faa4565f!2sAnil%20Neerukonda%20Institute%20of%20Techonology%20and%20Sciences%20(ANITS)!5e0!3m2!1sen!2sin!4v1731346067999!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
