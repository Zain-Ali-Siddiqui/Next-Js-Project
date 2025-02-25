"use client";

import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Discover Your DPP Solution Today
          </h2>
          <p className="md:text-md">
            Contact us now for a personalised demo and explore how our DPP
            software can benefit you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Sign Up" variant="secondary">
              <Link href="/signup">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
