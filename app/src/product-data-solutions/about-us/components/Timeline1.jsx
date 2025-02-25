"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
      />
    </div>
  );
};

export function Timeline1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Journey: Milestones and Achievements
            </h1>
            <p className="md:text-md">
              At xProduct, we have consistently pushed the boundaries of
              innovation. Our history is marked by significant milestones that
              reflect our commitment to excellence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            <div className="relative">
              <Circle />
              <div className="ml-12 mt-4 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  2019
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Company Founded
                </h3>
                <p>
                  In 2020, xProduct was established with a vision to
                  revolutionise product compliance. Our journey began with a
                  focus on digital solutions for sustainability.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn More" variant="secondary">
                    Learn More
                  </Button>
                  <Button
                    title="Discover"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Discover
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-12 mt-4 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  2021
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  First Product Launch
                </h3>
                <p>
                  In 2021, we launched our flagship Digital Product Passport
                  software. This marked a significant step towards helping
                  businesses achieve EU compliance.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn More" variant="secondary">
                    Learn More
                  </Button>
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-12 mt-4 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  2022
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Expanded Features
                </h3>
                <p>
                  In 2022, we enhanced our software with advanced data analytics
                  and reporting features. This allowed clients to gain deeper
                  insights into their product lifecycle.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn More" variant="secondary">
                    Learn More
                  </Button>
                  <Button
                    title="Discover"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Discover
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-12 mt-4 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  2023
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Global Partnerships Formed
                </h3>
                <p>
                  In 2023, we established strategic partnerships with key
                  industry players. This collaboration is set to enhance our
                  offerings and expand our reach.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn More" variant="secondary">
                    Learn More
                  </Button>
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
