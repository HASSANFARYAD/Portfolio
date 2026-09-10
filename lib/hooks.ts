import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// A section becomes "active" once it crosses the middle of the viewport.
// A visibility percentage can't work here: any section taller than the
// viewport (Projects is ~4x) can never have 75% of itself on screen, so its
// nav link would never light up.
export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
