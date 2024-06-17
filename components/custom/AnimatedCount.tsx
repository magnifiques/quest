"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCount = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp decimal="," decimals={2} duration={2} prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCount;
