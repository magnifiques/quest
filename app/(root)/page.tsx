import HeaderBox from "@/components/custom/Headerbox";
import TotalBalanceBox from "@/components/custom/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "James" };
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
      </div>
    </section>
  );
};

export default Home;
