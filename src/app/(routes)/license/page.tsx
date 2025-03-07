import SubPageLayout from "@/components/Layout/SubPageLayout";

export default function LicensePage() {
  return (
    <SubPageLayout
      title="License"
      subtitle="The legal bit that lets you sleep at night (and our lawyers too)"
    >
      <div className="text-white/90 prose prose-lg prose-invert max-w-none prose-headings:text-sectifyGreen prose-headings:font-semibold prose-a:text-sectifyLightPurple hover:prose-a:text-sectifyGreen prose-strong:text-white prose-img:rounded-xl prose-pre:bg-black/30 prose-pre:backdrop-blur-md">
        <h2 className="text-4xl font-bold mt-6 mb-4">The TL;DR Version</h2>
        <p>
          MIT License. Take it. Use it. Change it. The components are yours to
          do with as you please. Just keep the license text somewhere in your
          project, even if it's buried in a folder no one will ever open.
        </p>

        <div className="my-8 p-6 bg-sectifyGreen/30 rounded-xl">
          <p className="text-xl italic mb-0">
            "We chose the MIT license because it's easier to understand than IKEA instructions and lets you take our components for a joyride"
          </p>
        </div>

        <h2 className="text-4xl font-bold mt-6 mb-4">
          The Official License Text
        </h2>
        <p className="mb-4">
          Here it is, in all its legal glory. Read it if your attention span is longer than 30 seconds:
        </p>

        <div className="p-6 bg-black/30 rounded-xl border border-white/10 font-mono text-sm">
          <p>MIT License</p>
          <p>Copyright (c) 2023 Sectify</p>
          <p className="mt-4">
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>
          <p className="mt-4">
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
          <p className="mt-4">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>

        <h2 className="text-4xl font-bold mt-6 mb-4">
          What This Actually Means
        </h2>
        <p className="mb-4">
          You can use Sectify components for personal projects, commercial
          ventures, secret government operations or anything
          else your heart desires.
        </p>
        <p className="mb-4">
          You can modify them, improve them, or completely butcher them beyond
          recognition. It's your artistic journey, and we're just providing the
          canvas.
        </p>

        <h2 className="text-4xl font-bold mt-6 mb-4">
          The Fine Print (That's Actually Not Fine At All)
        </h2>
        <p className="mb-4">
          Keep the license and copyright notice somewhere in your project. It
          doesn't need to be prominently displayed – stuffed in a dusty corner
          of your codebase is fine.
        </p>
        <p className="mb-4">
          We provide no warranties. If our components accidentally cause your application to only work on leap years during full
          moons, that's unfortunately on you. We tried our best, we promise.
        </p>

        <h2 className="text-4xl font-bold mt-6 mb-4">Why MIT?</h2>
        <p className="mb-4">
          We chose the MIT license because we genuinely want you to use our
          components without legal headaches. There are more restrictive
          licenses out there with more words and fewer permissions, but where's
          the fun in that?
        </p>
        <p className="mb-4">
          Plus, the MIT license fits on a single screen without scrolling, which
          we consider a major feature of legal documentation in the age of tiktok attention spans.
        </p>

        <h2 className="text-4xl font-bold mt-6 mb-4">Questions?</h2>
        <p className="mb-4">
          If you have questions about the license that weren't answered by this
          unnecessarily verbose page, feel free to reach out. Our legal team
          (which consists of one developer who once watched an entire season of
          "Suits") will be happy to provide non-binding, possibly incorrect
          clarification.
        </p>

        <div className="mt-12">
          <h3 className="text-sectifyLightPurple">Legal Disclaimer</h3>
          <p>
            Despite our casual tone, the MIT license is a real, legally binding
            license that gives you extensive rights to use our code. We've
            chosen it deliberately because we believe in open source and want to
            remove barriers to using and building upon our work. The only real
            requirement is keeping the license text, which acknowledges the
            original creators while protecting us from liability.
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}
