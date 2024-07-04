import HeaderBox from "@/components/custom/Headerbox";
import PaymentTransferForm from "@/components/custom/PaymentTransferForm";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const PaymentTransfer = async () => {
  const user = await getLoggedInUser();
  const accounts = await getAccounts({ userId: user.$id });

  if (!accounts) return;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment"
      />
      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accounts.data} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
