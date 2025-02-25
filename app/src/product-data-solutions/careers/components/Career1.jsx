"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Career1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Careers</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Job Openings
          </h2>
          <p className="md:text-md">
            Explore exciting career opportunities at xProduct and help shape the
            future of digital compliance.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Engineering Team
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Software Developer
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Join our dynamic engineering team as a Software Developer. You
                  will work on innovative solutions that enhance product
                  compliance. Bring your skills and creativity to shape the
                  future.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Product Manager
                    </h3>
                    <p className="md:text-md">London</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  As a Product Manager, you will oversee the development of our
                  Digital Product Passport software. Collaborate with
                  cross-functional teams to ensure product success. Your vision
                  will drive our innovation.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Data Analyst
                    </h3>
                    <p className="md:text-md">Hybrid</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are looking for a Data Analyst to interpret complex data
                  sets. Your insights will guide strategic decisions and improve
                  our offerings. Join us to make a significant impact.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Marketing Team
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Content Writer
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  As a Content Writer, you will create engaging content that
                  resonates with our audience. Your words will help communicate
                  our brand message effectively. Join us to inspire and inform.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      UX Designer
                    </h3>
                    <p className="md:text-md">Berlin</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are seeking a UX Designer to enhance user experience across
                  our platforms. Your creativity will help us design intuitive
                  interfaces. Be part of a team that values innovation.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Sales Executive
                    </h3>
                    <p className="md:text-md">Paris</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Join our sales team as a Sales Executive and drive our growth.
                  You will build relationships with clients and promote our
                  innovative solutions. Your efforts will be crucial to our
                  success.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Support Team
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Customer Support
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are looking for a Customer Support representative to assist
                  our users. Your role will involve resolving queries and
                  ensuring customer satisfaction. Join us to make a difference
                  in our clients' experiences.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      DevOps Engineer
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  As a DevOps Engineer, you will streamline our development
                  processes and enhance system performance. Your expertise will
                  ensure our infrastructure is robust and scalable. Be part of a
                  forward-thinking team.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">QA Tester</h3>
                    <p className="md:text-md">London</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are in search of a QA Tester to ensure our products meet
                  the highest standards. Your attention to detail will help us
                  deliver quality software. Join us to contribute to our
                  success.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
