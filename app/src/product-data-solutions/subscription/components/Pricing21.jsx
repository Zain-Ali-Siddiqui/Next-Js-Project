"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing21() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Plans</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Basic Plan
          </h1>
          <p className="md:text-md">
            Affordable solution for small businesses and startups.
          </p>
        </div>
        <div className="w-full">
          <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Basic
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                    £5
                  </p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Ideal for small teams.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Business
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                    £19
                  </p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Perfect for growing companies.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Enterprise
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                    £49
                  </p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>For large organisations.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Feature Category
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Products
            </p>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              Unlimited
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Digital Traceability & Compliance
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              QR Code / NFC Integration
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Lifecycle & Circular Economy Data
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              User & Access Management
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Feature Category
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Data Analytics & Reporting
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Consumer-Facing Features
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Security & Data Privacy
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Cloud-Based Scalability & Performance
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Support & Maintenance
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Feature Category
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Integration with Existing Systems
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Customisation Options Available
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Dedicated Account Manager
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Priority Support Services
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Training & Onboarding Included
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
