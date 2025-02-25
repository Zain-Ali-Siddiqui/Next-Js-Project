"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about signing up and getting
            started with our platform.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I sign up?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To sign up, simply click on the 'Sign Up' button and fill in the
              required details. You will receive a confirmation email to verify
              your account. Once verified, you can log in and start using our
              services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is there a trial?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we offer a free trial period for new users. This allows you
              to explore our features and see how they can benefit your
              business. Sign up today to take advantage of this offer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What payment methods are accepted?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We accept various payment methods including credit cards, PayPal,
              and bank transfers. You can choose your preferred method during
              the checkout process. All transactions are secure and encrypted.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I change my plan?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! You can upgrade or downgrade your plan at any time
              through your account settings. Changes will take effect at the
              start of your next billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Who can I contact?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              For any inquiries or support, you can reach out to our customer
              service team. We are here to assist you with any questions or
              issues you may have. Your satisfaction is our priority.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
