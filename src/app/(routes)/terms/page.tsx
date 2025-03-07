import SubPageLayout from "@/components/Layout/SubPageLayout";

export default function TermsPage() {
  return (
    <SubPageLayout
      title="Terms of Use"
      subtitle="The world's most permissive terms (because we actually want you to use our stuff)"
    >
      <div className="text-white/90 prose prose-lg prose-invert max-w-none prose-headings:text-sectifyGreen prose-headings:font-semibold prose-a:text-sectifyLightPurple hover:prose-a:text-sectifyGreen prose-strong:text-white prose-img:rounded-xl prose-pre:bg-black/30 prose-pre:backdrop-blur-md">
        <h2 className="text-3xl font-bold mt-6">The TL;DR Version</h2>
        <p className="mt-2 mb-4">
          Take our components. Use them. Change them. Sell them. Frame them. We
          don't mind. They're yours now. We just made them.
        </p>

        <div className="my-8 p-6 bg-sectifyGreen/30 rounded-xl">
          <p className="text-xl italic mb-0">
            "Good design is meant to be shared, not gate-kept behind legal walls
            thicker than our documentation."
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          What you can do with our Components
        </h2>
        <p className="mt-2 mb-6">
          Absolutely everything. Reskin them. Remodel them. Resell them. Use
          them for profit. Use them for non-profit. Use them to build the next
          billion-dollar startup or a website for your cat's birthday party.
          We're not judging.
        </p>
        <p className="mt-2 mb-6">
          While other libraries have complex licensing terms that require a law
          degree and three cups of coffee to understand, our terms can be
          summarized as: "It's yours now. Have fun."
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Attribution</h2>
        <p className="mt-2 mb-6">
          Attribution is appreciated but not required. If you feel like
          mentioning us, great! If not, we'll survive the emotional trauma
          somehow. Our egos are surprisingly resilient.
        </p>
        <p className="mt-2 mb-6">
          If your project becomes wildly successful and you want to send us a
          thank-you postcard or name your firstborn "SectifyUI," we won't stop
          you. But again, totally optional.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Modifications</h2>
        <p className="mt-2 mb-6">
          Feel free to modify our components until they're unrecognizable. Add
          animations that make users dizzy. Turn our elegant buttons into
          flashing neon signs. Remove all the vowels from our carefully crafted
          text. It's all fair game.
        </p>
        <p className="mt-2 mb-6">
          In fact, if you make something cool, we'd love to see it. Not because
          we have any claim to it, but because we're genuinely curious what
          creative directions you'll take.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contributions</h2>
        <p className="mt-2 mb-6">
          Found a bug? Fixed a bug? Added a feature? Made our components 0.002%
          faster? We welcome contributions with open arms and excessive
          gratitude.
        </p>
        <p className="mt-2 mb-6">
          If you've built something amazing with our components, consider
          contributing back to the project. Not because you have to, but because
          sharing is caring, and the karma points are redeemable in your next
          developer life.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">No Warranty</h2>
        <p className="mt-2 mb-6">
          Our components are provided "as is," which is legal speak for "we hope
          it works, but if it doesn't, please don't sue us." We've done our best
          to make everything functional and beautiful, but we can't guarantee
          our code won't occasionally decide to take an unscheduled u-turn.
        </p>
        <p className="mt-2 mb-6">
          If our components accidentally skywrite your secrets above your ex's
          house or cause your computer to develop sentience and question your
          life choices, we apologize in advance, but legally speaking, that's
          between you and your now-sentient computer.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Show and Tell</h2>
        <p className="mt-2 mb-6">
          We'd absolutely love to see what you build with our components. It's
          like show and tell, but for adults who code. Send us a message, tag us
          on social media. Your projects inspire us and help us improve.
        </p>
        <p className="mt-2 mb-6">
          Seriously, nothing makes our day more than seeing our components out
          in the wild, living their best lives in your amazing projects.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to These Terms</h2>
        <p className="mt-2 mb-6">
          If these terms change then we've either sold out or have been abducted
          by totalitarian regimes who have very different ideas about
          intellectual property. Barring foreign intervention, though, we're
          pretty committed to keeping things simple and permissive.
        </p>

        <div className="mt-12">
          <h3 className="text-sectifyLightPurple mt-8 mb-4">
            Legal Disclaimer
          </h3>
          <p className="text-sm opacity-80">
            While we've taken a light-hearted approach to our terms, our
            commitment to providing freely usable components is entirely
            serious. Sectify is built on the belief that great design should be
            accessible to everyone. We genuinely want you to use, modify, and
            build upon our work without restriction. All we ask in return is
            that you consider contributing back or sharing what you've created –
            not because you're obligated to, but because it helps our community
            grow and improve together.
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}
