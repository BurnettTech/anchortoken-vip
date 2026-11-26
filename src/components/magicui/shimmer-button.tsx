import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"a"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  href: string;
}

/** Adapted from Magic UI (https://github.com/magicuidesign/magicui), MIT License. Rendered as a link for site CTAs. */
export const ShimmerButton = React.forwardRef<HTMLAnchorElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.08em",
      shimmerDuration = "1.6s",
      borderRadius = "0px",
      background = "currentColor",
      className,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");
    const linkTarget = target ?? (isExternal ? "_blank" : undefined);
    const linkRel = rel ?? (isExternal ? "noreferrer" : undefined);

    return (
      <a
        href={href}
        target={linkTarget}
        rel={linkRel}
        style={
          {
            "--spread": "120deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden [border-radius:var(--radius)] border px-4 whitespace-nowrap [background:var(--bg)]",
          "btn-lift transform-gpu transition-[transform,box-shadow] duration-300 ease-in-out hover:-translate-y-1 active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className={cn("-z-30 blur-[0.5px]", "@container-[size] absolute inset-0 overflow-visible")}>
          <div className="animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [translate:0_0] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <div
          className={cn(
            "absolute inset-0 size-full",
            "rounded-[inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
          )}
        />
        <div
          className={cn(
            "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
          )}
        />
      </a>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
