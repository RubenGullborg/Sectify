import Sidebar from "@/components/Layout/Sidebar";

export default function SectionsPage() {
    return (
      <div className="container mx-auto px-4 min-h-screen">
        {/* <Sidebar /> */}
        <h1 className="text-3xl font-bold mb-6 text-center mt-4">Available Sections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Her kommer dine section previews */}
        </div>
      </div>
    );
  }