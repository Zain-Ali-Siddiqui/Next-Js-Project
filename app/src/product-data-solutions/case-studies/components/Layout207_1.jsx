"use client";

import React from "react";

export function Layout207_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Case Study 4</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Automotive Industry Boosts Supply Chain Efficiency
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Challenge: An automotive manufacturer required better tracking of
              vehicle parts and compliance with circular economy laws. Solution:
              By integrating DPP, they improved visibility into supply chains
              and provided real-time insights on part reusability and
              environmental impact.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>35% improvement in supply chain efficiency.</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>
                  Enhanced customer trust through accessible sustainability
                  credentials.
                </p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>
                  Streamlined compliance reporting, saving administrative time
                  and costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
