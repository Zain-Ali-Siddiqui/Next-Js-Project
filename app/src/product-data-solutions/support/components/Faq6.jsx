"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          FAQs
        </h2>
        <p className="md:text-md">
          Find quick answers to your most pressing questions about our Digital
          Product Passport services.
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Contact" variant="secondary">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What is a DPP?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A Digital Product Passport (DPP) is a comprehensive digital record
              that provides essential product information. It ensures compliance
              with regulations and enhances transparency throughout the product
              lifecycle. This tool is vital for businesses aiming to build
              customer trust and meet EU standards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The DPP collects and manages product data, ensuring traceability
              and compliance. It integrates with QR codes and NFC technology for
              easy access to information. This system supports businesses in
              adopting circular economy practices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Is it secure?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, our DPP is designed with robust security measures to protect
              your data. We prioritise data privacy and compliance with
              regulations. Your information is safe with our cloud-based
              solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can I customise it?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! Our DPP can be tailored to meet your specific business
              needs. We offer flexible options for data management and user
              access. Customisation ensures that you get the most value from our
              solution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How to get started?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Getting started with our DPP is easy. Simply reach out to our
              support team for guidance on implementation. We’ll walk you
              through the process to ensure a smooth transition.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
