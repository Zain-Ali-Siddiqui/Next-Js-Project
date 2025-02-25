"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Harness AI to Enhance Sustainability Insights and Product Lifespan
              Forecasting
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our AI-Powered Predictive Analytics tool provides real-time
              insights into sustainability impacts. By forecasting product
              lifespans, you can make informed decisions that benefit both your
              business and the environment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Sustainability Insights
                </h6>
                <p>
                  Gain a deeper understanding of your products' environmental
                  impact and performance.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Future Forecasting
                </h6>
                <p>
                  Utilise advanced algorithms to predict product longevity and
                  sustainability outcomes.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
