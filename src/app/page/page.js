

const Page = () => {
  return (
    <>
      <header class="bg-gray-900 text-white py-20 h-screen flex items-center justify-center">
        <div class="container mx-auto text-center">
        
          <span class="text-4xl md:text-6xl font-bold mb-4">
            Unlock Your Potential with Talent
            <span className="text-green-400">Port</span>
          </span>
          <p class="text-lg mb-8">
            Find the perfect job opportunity that aligns with your skills and
            aspirations.
          </p>
          <a
            href="#"
            class="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </header>

      <section class="py-16">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div class="md:w-1/2 text-center">
            <h2 class="text-3xl font-bold mb-4">Why TalentPort?</h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula tellus eu orci luctus, vel blandit lorem hendrerit.
            </p>
          </div>
          <div class="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-bold mb-2">Wide Range of Jobs</h3>
              <p class="text-gray-700">
                Explore a diverse range of job opportunities across industries.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-bold mb-2">Advanced Search</h3>
              <p class="text-gray-700">
                Effortlessly find the perfect job with our advanced search
                features.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 class="text-xl font-bold mb-2">Career Guidance</h3>
              <p class="text-gray-700">
                Get valuable insights and guidance to boost your career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-blue-800 text-white py-20">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p class="text-lg mb-8">
            Join TalentPort today and discover a world of exciting career
            opportunities.
          </p>
          <a
            href="#"
            class="bg-white text-blue-800 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Page;
