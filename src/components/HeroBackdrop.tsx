import { DotPattern } from "./magicui/dot-pattern";

/** Homepage hero atmosphere: neon dotted field faded off the copy, plus a headline glow. */
export function HeroBackdrop() {
  return (
    <>
      <div aria-hidden="true" className="hero-headline-glow pointer-events-none absolute inset-0" />
      <DotPattern
        width={16}
        height={16}
        cr={1.6}
        className="text-neon/32 [mask-image:radial-gradient(ellipse_95%_70%_at_50%_32%,transparent_0%,transparent_46%,rgba(255,255,255,0.4)_74%,white_94%)] lg:[mask-image:radial-gradient(ellipse_80%_88%_at_26%_40%,transparent_0%,transparent_44%,rgba(255,255,255,0.45)_72%,white_94%)]"
      />
    </>
  );
}
