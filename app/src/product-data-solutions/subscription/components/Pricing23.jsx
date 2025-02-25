"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing23() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h1>
          <p className="md:text-md">
            Choose the plan that suits your business needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Basic Plan
                  </h6>
                  <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    £5/mo
                  </h3>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Product Data Management</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>QR Code Integration</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>User Access Management</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Business Plan
                  </h6>
                  <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    £19/mo
                  </h3>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All Basic Features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Data Analytics Tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Enhanced Security Measures</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Lifecycle Data Insights</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Enterprise Plan
                  </h6>
                  <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    £49/mo
                  </h3>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Consumer-Facing Features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All Basic Features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Data Analytics Tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Enhanced Security Measures</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All Basic Features</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Basic Plan
                  </h6>
                  <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    $180/yr
                  </h3>
                  <p className="mt-2 font-medium">Save 20%</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Data Analytics Tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Enhanced Security Measures</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Lifecycle Data Insights</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Business Plan
                  </h6>
                  <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    $280/yr
                  </h3>
                  <p className="mt-2 font-medium">Save 20%</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Consumer-Facing Features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All Business Features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Advanced Data Analytics</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Priority Support Services</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Enterprise Plan
                  </h6>
                  <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    $480/yr
                  </h3>
                  <p className="mt-2 font-medium">Save 20%</p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All Premium Features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Dedicated Account Manager</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>24/7 Customer Support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Custom Integration Options</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All Business Features</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
