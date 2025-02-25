"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Experience Seamless Cloud Solutions
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Unlock the potential of our cloud-based infrastructure designed for
            scalability and high availability. Discover how our solutions can
            enhance your operations and ensure compliance effortlessly.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Request Demo" variant="secondary">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
