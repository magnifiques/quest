import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup/build/CountUp";
import AnimatedCount from "./AnimatedCount";
import DonutChart from "./DonutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <div className="total-balance">
      <div className="total-balance-chart">
        <DonutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">{totalBanks} Bank Account(s)</h2>
        <div className="flex flex-col gap-2">
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCount amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceBox;
