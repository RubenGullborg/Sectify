import { FocusCardsDemo } from "@/components/sectify/HeroSection";
import AboutSection from "@/components/sectify/AboutSection";
export default function Home() {
  return (
    <>
      <section
        className="flex flex-col items-center min-h-screen relative"
        style={{
          backgroundImage: `
        radial-gradient(circle at top, #26004d 45%,  #6b00d6 55%, #06000d 70%)`,
        }}
      >
        <div className="relative z-10">
          <AboutSection />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-96 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5) 40%, #000000)",
          }}
        />
      </section>
      <div className="relative min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8 flex justify-center sm:items-center mx-auto">
        <div className="absolute top-0 start-1/2 w-full min-h-full bg-no-repeat bg-top bg-cover z-0 transform -translate-x-1/2 bg-black bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]"></div>
        <FocusCardsDemo />
      </div>


      {/* <section
        style={{
          backgroundImage: `url(abstract-black.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        <AboutSection />
      </section> */}
    </>
  );
}
