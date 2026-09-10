"use client";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  // The timeline library gates each entry behind its own IntersectionObserver,
  // registered through a callback ref on a class component. React's dev
  // double-mount tears that observer down and the ref never fires again, so
  // every entry stays at `visibility: hidden`. Drive the reveal ourselves and
  // hand it to the library via `visible`.
  const { ref: timelineRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -120px 0px",
  });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      {/* Card, arrow and icon colours live in globals.css, keyed off the
          `dark` class, so they don't flash before hydration. */}
      <div ref={timelineRef}>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item) => (
            <VerticalTimelineElement
              key={`${item.title}-${item.date}`}
              visible={inView}
              date={item.date}
              icon={item.icon}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
