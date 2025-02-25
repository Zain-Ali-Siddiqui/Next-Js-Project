"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Dynamic QR Code Generation for Instant Access to Product Data
          </h3>
          <p className="md:text-md">
            Our Dynamic QR Code Generation feature provides immediate access to
            real-time product information, ensuring accuracy and up-to-date
            details at your fingertips. Customers can effortlessly scan the code
            to verify product authenticity, enhancing trust and transparency.
            This tamper-proof solution guarantees secure verification of product
            origin, making it an essential tool for compliance and customer
            confidence.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
