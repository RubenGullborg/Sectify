export default function Installation() {
  return (
    <section id="installation" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">Installation</h2>
      <p>You can install Sectify via npm or yarn:</p>
      <pre className="bg-sectifyLightPurple text-sectifyDarkPurple p-4 rounded-lg">
        <code>npm install sectify</code>
      </pre>
      <p className="mt-4">Or with yarn:</p>
      <pre className="bg-sectifyGreen text-sectifyDarkPurple p-4 rounded-lg">
        <code>yarn add sectify</code>
      </pre>
    </section>
  );
} 