import { DotPattern } from "./magicui/dot-pattern";

/** Solana page atmosphere: neon dotted field faded off the copy, plus a neon glow with soft Solana purple/teal accents. */
export function SolanaBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-5 -inset-y-10 sm:-inset-x-10 sm:-inset-y-12 [mask-image:radial-gradient(ellipse_88%_78%_at_50%_42%,#000_0%,#000_36%,transparent_70%)]"
    >
      <div className="solana-headline-glow absolute inset-0" />
      <DotPattern
        width={16}
        height={16}
        cr={1.6}
        className="text-neon/32 [mask-image:radial-gradient(ellipse_90%_75%_at_28%_38%,transparent_0%,transparent_44%,rgba(255,255,255,0.4)_72%,white_94%)]"
      />
    </div>
  );
}
