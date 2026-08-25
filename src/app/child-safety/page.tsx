import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SITE } from "@/lib/constants";

const title = "Child Safety Standards — Sponta";
const description =
  "Sponta's standards on child sexual abuse and exploitation (CSAE), and how to report a concern.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/child-safety" },
  openGraph: {
    title,
    description,
    url: `${SITE.url}/child-safety`,
    siteName: SITE.name,
    type: "article",
  },
  robots: { index: true, follow: true },
};

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 border-t border-white/10 pt-10">
      <h2 className="font-display text-xl font-bold leading-tight text-fg-1 sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-base leading-relaxed text-fg-2">{children}</p>;
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-orange">{children}</ul>;
}

function Item({ children }: { children: React.ReactNode }) {
  return <li className="font-body text-base leading-relaxed text-fg-2">{children}</li>;
}

export default function ChildSafetyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bg-0">
      <Header />

      <div className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-content">
          {/* The root layout declares lang="fi"; this document is English. */}
          <article lang="en" className="max-w-xl">
            <h1 className="font-display text-3xl font-bold leading-tight text-fg-1 sm:text-4xl">
              Sponta Child Safety Standards
            </h1>
            <p className="mt-3 font-mono text-xs text-fg-3">
              Last updated: August 25, 2026
            </p>

            <div className="mt-8 space-y-4">
              <P>
                Sponta has zero tolerance for child sexual abuse and exploitation (CSAE) in any
                form. This page describes our standards and how to report a concern.
              </P>
            </div>

            <Section heading="Our commitment">
              <P>
                We prohibit any content or behavior that sexualizes, endangers, or exploits
                minors. Any account found to violate this is immediately suspended and, where
                required by law, reported to the relevant national authority (in Finland: the
                National Bureau of Investigation / NCMEC where applicable for international
                cases).
              </P>
            </Section>

            <Section heading="Reporting a concern">
              <P>
                If you encounter content or behavior on Sponta that concerns you regarding child
                safety, you can report it:
              </P>
              <List>
                <Item>In the app: Settings → Report a safety concern</Item>
                <Item>
                  By email:{" "}
                  <a
                    href="mailto:safety@sponta.space"
                    className="text-teal underline underline-offset-2 hover:text-fg-1"
                  >
                    safety@sponta.space
                  </a>
                </Item>
              </List>
              <P>
                Reports are reviewed by our safety point of contact and, where applicable,
                escalated to law enforcement.
              </P>
            </Section>

            <Section heading="Contact">
              <address className="font-body text-base not-italic leading-relaxed text-fg-2">
                Material Ops Oy
                <br />
                Y-tunnus: 3587294-1
                <br />
                <a
                  href="mailto:safety@sponta.space"
                  className="text-teal underline underline-offset-2 hover:text-fg-1"
                >
                  safety@sponta.space
                </a>
              </address>
            </Section>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
