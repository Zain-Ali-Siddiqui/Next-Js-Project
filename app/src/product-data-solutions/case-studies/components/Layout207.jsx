"use client";

import React from "react";

export function Layout207() {
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
            <p className="mb-3 font-semibold md:mb-4">Case Study 2</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Electronics Manufacturer Enhances Traceability
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Challenge: A global electronics company struggled with tracking
              product components and ensuring regulatory compliance across
              different markets. Solution: DPP enabled them to document the
              entire product lifecycle, including sourcing, energy consumption,
              and repairability, linked via QR codes.
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
                <p>
                  40% reduction in counterfeit products due to enhanced
                  traceability.
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
                  Faster market entry by meeting global compliance standards.
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
                  Improved repair and warranty management, leading to 25% cost
                  savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
