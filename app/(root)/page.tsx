import HeaderBox from "@/components/custom/Headerbox";
import RecentTransactions from "@/components/custom/RecentTransactions";
import RightSideBar from "@/components/custom/RightSideBar";
import TotalBalanceBox from "@/components/custom/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { UserCheckIcon } from "lucide-react";
import React from "react";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const user = await getLoggedInUser();
  console.log(user);
  const accounts = await getAccounts({ userId: user.$id });

  if (!accounts) return;

  const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome"
            type="greeting"
            user={user?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={accounts?.data}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accounts?.data}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSideBar
        user={user}
        transactions={account?.transactions}
        banks={accounts?.data?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
