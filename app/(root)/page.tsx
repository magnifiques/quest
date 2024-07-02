import HeaderBox from "@/components/custom/Headerbox";
import RightSideBar from "@/components/custom/RightSideBar";
import TotalBalanceBox from "@/components/custom/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const user = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome"
            type="greeting"
            user={user.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={9370.1}
          />
        </header>
        {/* RECENT TRANSACTIONS */}
      </div>
      <RightSideBar user={user} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
