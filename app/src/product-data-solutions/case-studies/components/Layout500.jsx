"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Layout500() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            How to Create a Digital Product Passport in 3 Simple Steps
          </h1>
          <p className="md:text-md">
            Our Digital Product Passport (DPP) platform makes it effortless for
            merchants to create and manage product passports with just a few
            easy steps. Whether you're a small business or a global brand, the
            process is designed to be intuitive, scalable, and efficient.
          </p>
        </div>
        <Tabs
          defaultValue="tab-one"
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              className="size-full"
            />
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Dialog>
              <DialogTrigger asChild={true}>
                <button className="relative flex w-full items-center justify-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                    alt="Relume placeholder image 2"
                    className="size-full object-cover"
                  />
                  <span className="absolute inset-0 z-10 bg-black/50" />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 3"
              className="size-full"
            />
          </TabsContent>
          <TabsList className="grid grid-cols-1 items-center gap-x-4">
            <TabsTrigger
              value="tab-one"
              className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left data-[state=active]:border-l-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary md:pl-8"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                1: Gather & Input Product Data
              </h3>
              <p>
                Start by collecting essential product lifecycle data, including:
                Materials & Components, Eco Standards & Certifications and
                Circular Economy Data. Input this data into the DPP platform
                through our easy-to-use interface or bulk upload feature for
                large product catalogs. Once added, the platform automatically
                validates and structures the data for seamless management
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left data-[state=active]:border-l-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary md:pl-8"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                1: Gather & Input Product Data
              </h3>
              <p>
                Start by collecting essential product lifecycle data, including:
                Materials & Components, Eco Standards & Certifications and
                Circular Economy Data. Input this data into the DPP platform
                through our easy-to-use interface or bulk upload feature for
                large product catalogs. Once added, the platform automatically
                validates and structures the data for seamless management
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left data-[state=active]:border-l-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary md:pl-8"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                1: Gather & Input Product Data
              </h3>
              <p>
                Start by collecting essential product lifecycle data, including:
                Materials & Components, Eco Standards & Certifications and
                Circular Economy Data. Input this data into the DPP platform
                through our easy-to-use interface or bulk upload feature for
                large product catalogs. Once added, the platform automatically
                validates and structures the data for seamless management
              </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
