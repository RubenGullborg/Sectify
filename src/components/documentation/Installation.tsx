export default function Installation() {
  return (
    <section id="installation" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">Installation</h2>
      <p className="mb-4 text-lg font-mono">You can't install Sectify via npm or pnpm yet</p>
      <pre className="bg-gray-100 text-sectifyDarkPurple p-4 rounded-lg line-through">
        <code>npm install sectify</code>
      </pre>
      <p className="mt-4 text-lg font-mono">Same goes for yarn:</p>
      <pre className="bg-gray-100 text-sectifyDarkPurple p-4 rounded-lg line-through">
        <code>yarn add sectify</code>
      </pre>
      <p className="mt-4 text-md font-mono">Each component needs to be manually imported to your projects as of now. We will add this functionality when we have more components.</p>
    </section>
  );
} 