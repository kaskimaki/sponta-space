import Image from "next/image";
import { Button } from "./components/ui/button";

// ✅ Explicitly enable dynamic rendering
export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-white text-center">
      {/* Header */}
      <header className="w-full bg-black py-6 flex justify-center">
        <Image src="/Group-154.png" alt="Sponta Logo" width={150} height={50} />
      </header>

      {/* Body */}
      <div className="flex flex-col items-center justify-center px-6 text-gray-900 bg-white py-12 w-full">
        <p className="text-xl text-gray-700 max-w-3xl mb-8">
          The hard truth is that culture is always the first to suffer from funding cuts. Cities are alive, but understanding their pulse is difficult. Every venue has a unique story, yet the challenge remains: how to tell it, and to whom?
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">What We Do</h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Sponta personalizes venues by giving them a digital identity and tools that go beyond the traditional &quot;service promise.&quot; We empower venues to reach the right audience while providing people with a product that simplifies and enriches their free time—whether individually or as a group.
        </p>
        <p className="text-lg font-bold text-gray-900 max-w-2xl mb-6">
          We come from the underground. We make sure there is always something for everyone. No one should feel forgotten.
        </p>
        <Button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
          Join the Movement
        </Button>
      </div>

      {/* ✅ Add Dynamic Content to Force Server-Side Rendering */}
      <div className="mt-12 px-6 text-gray-900">
        <h2 className="text-2xl font-semibold">Dynamic Content Test</h2>
        <p className="text-lg text-blue-500 mt-2">
          API Response: {new Date().toLocaleTimeString()}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm pb-6">
        <p>&copy; {new Date().getFullYear()} Sponta. All rights reserved.</p>
      </footer>
    </div>
  );
}
