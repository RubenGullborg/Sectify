export default function BasicUsage() {
  return (
    <section id="basic-usage" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
      <p>
        Sectify is designed to be intuitive and easy to use. Here's a simple example:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg">
        <code>{`import { Sectify } from 'sectify';

// Initialize Sectify
const mySection = new Sectify({
  container: '#my-container',
  options: {
    theme: 'light',
    animation: true
  }
});

// Add content
mySection.add('My first section');`}</code>
      </pre>
    </section>
  );
} 