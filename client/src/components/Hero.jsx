const Hero = () => {
  return (
<section className="relative overflow-hidden animate-gradient bg-blue-600 py-28 text-white">
      {/* Floating background circles */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-float"></div>

      <div
        className="absolute right-0 top-24 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div
        className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-pink-400/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main Content */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <h1 className="animate-fade-up mb-6 text-5xl font-extrabold md:text-7xl">
          Grow Your Business Faster
        </h1>

        <p
          className="animate-fade-up mx-auto mb-10 max-w-2xl text-lg text-blue-100"
          style={{ animationDelay: ".2s" }}
        >
          Capture high-quality leads through a beautiful landing page
          and manage them effortlessly from a clean admin dashboard.
        </p>

        <a
          href="#lead-form"
          className="animate-fade-up inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
          style={{ animationDelay: ".4s" }}
        >
          Get Started →
        </a>

      </div>

    </section>
  );
};

export default Hero;