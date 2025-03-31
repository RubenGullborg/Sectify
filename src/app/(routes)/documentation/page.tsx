import GettingStarted from '@/components/documentation/GettingStarted';
import Installation from '@/components/documentation/Installation';
import BasicUsage from '@/components/documentation/BasicUsage';
import Contributions from '@/components/documentation/Contributions';

export default function DocumentationPage() {
  return (
    <div className="container min-h-screen pt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1 p-6 sticky top-24 h-fit">
          <h3 className="text-xl font-semibold mb-4">Contents</h3>
          <nav className="space-y-2">
            <a
              href="#getting-started"
              className="block py-1 px-2 hover:text-sectifyFairyTale rounded transition"
            >
              • Getting Started
            </a>
            <a
              href="#installation"
              className="block py-1 px-2 hover:text-sectifyFairyTale rounded transition"
            >
              • Installation
            </a>
            <a
              href="#basic-usage"
              className="block py-1 px-2 hover:text-sectifyFairyTale rounded transition"
            >
              • Basic Usage
            </a>
            <a
              href="#advanced"
              className="block py-1 px-2 hover:text-sectifyFairyTale rounded transition"
            >
              • Contribute
            </a>
            
            <a
              href="#examples"
              className="block py-1 px-2 hover:text-sectifyFairyTale rounded transition line-through"
            >
              • Examples
            </a>
          </nav>
        </div>

        {/* Main Content */}

        <div className="md:col-span-3 prose prose-lg max-w-none mt-8">
          <GettingStarted />
          <Installation />
          <BasicUsage />
          <Contributions />
        </div>
      </div>
    </div>
  );
}