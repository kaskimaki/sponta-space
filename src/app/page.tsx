import { Button } from "./components/ui/button";
import { Footer } from "./components/ui/footer";
import { Header } from "./components/ui/header";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-black to-white text-center">
      <Header>
        <Image src="/logo.png" alt="Sponta Logo" width={500} height={100} />
      </Header>
      <div className="flex flex-col items-center justify-center py-12 px-6 bg-white w-full">
        <p className="text-lg text-gray-600 max-w-4xl mb-8">
          The hard truth is that culture is always the first to suffer from funding cuts. Cities are alive, but understanding their pulse is difficult. Every venue has a unique story, yet the challenge remains: how to tell it, and to whom?
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          What We Do
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mb-6">
        Sponta personalizes venues by giving them a digital identity and tools that go beyond the traditional &quot;service promise.&quot; We empower venues to reach the right audience while providing people with a product that simplifies and enriches their free time—whether individually or as a group.
        </p>
        <p className="text-xl font-bold max-w-3xl mb-6">
          We come from the underground. We make sure there is always something for everyone. No one should feel forgotten.
        </p>
        <Button>
          Join the Movement
        </Button>
      </div>
      <Footer />
    </div>
  );
}