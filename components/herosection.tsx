// app/components/HeroSection.js
export default function HeroSection() {
  return (
    <section
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Welcome to Photo Tailors</h1>
          <p className="mb-5">
            A modern and innovative solution for all your medical needs.
            Pettandi ra mee idea ikkada pettandi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
