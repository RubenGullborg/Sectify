import HeroSection from "@/components/sectify/HeroSection";
import AboutSection from "@/components/sectify/AboutSection";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 flex justify-center sm:items-center mx-auto">
        <div className="absolute top-0 start-1/2 w-full min-h-full bg-no-repeat bg-top bg-cover z-0 transform -translate-x-1/2 bg-black bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]"></div>
        <AboutSection />
      </div>

      <section
        className="flex flex-col items-center min-h-screen"
        style={{
          backgroundImage: `
        radial-gradient(circle at top, #282828 3%, #848484 50%, #000 70%)
        `,
        }}
      >
        <AboutSection />
      </section>

      <section
        className="flex flex-col items-center min-h-screen"
        style={{
          backgroundImage: `
        radial-gradient(circle at top, #26004d 45%,  #6b00d6 55%, #06000d 70%)`,
        }}
      >
        <AboutSection />
      </section>


      {/* <Herosection /> */}
      <section
        style={{
          backgroundImage: `url(waveink.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <AboutSection />
      </section>
      <section
        style={{
          backgroundImage: `url(strong.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <AboutSection />
      </section>
      <section
        style={{
          backgroundImage: `url(neon.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <AboutSection />
      </section>
      <section
        style={{
          backgroundImage: `url(abstract-black.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <AboutSection />
      </section>
    </>
  );
}

