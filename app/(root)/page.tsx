import HeaderBox from "@/components/custom/Headerbox";
import RightSideBar from "@/components/custom/RightSideBar";
import TotalBalanceBox from "@/components/custom/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "James",
    lastName: "Anderson",
    email: "jamesanderson@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome"
            type="greeting"
            user={loggedIn.firstName}
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
      <RightSideBar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
