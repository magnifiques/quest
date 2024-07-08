"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormLabel } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";
import Image from "next/image";

type AuthFormProps = {
  type: string;
};

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);

  const date = new Date();

  const [startDate, setStartDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    setIsLoading(true);
    // ✅ This will be type-safe and validated.

    try {
      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        };
        const newUser = await signUp(userData);
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });

        if (response) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex items-center gap-1 cursor-pointer">
          <Image src="/icons/logo.png" alt="logo" width={45} height={45} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Quest
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-26 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600 mt-2">
              {user
                ? "Link Your Account to get Started!"
                : "Please Enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user!} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomFormField
                      name="firstName"
                      label="First Name"
                      placeholder="Enter Your First Name"
                      control={form.control}
                      type="text"
                    />
                    <CustomFormField
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter Your Last Name"
                      control={form.control}
                      type="text"
                    />
                  </div>
                  <CustomFormField
                    name="address1"
                    label="Address"
                    placeholder="Enter Your Address"
                    control={form.control}
                    type="text"
                  />
                  <CustomFormField
                    name="city"
                    label="City"
                    placeholder="Example: Austin"
                    control={form.control}
                    type="text"
                  />
                  <div className="flex gap-4">
                    <CustomFormField
                      name="state"
                      label="State"
                      placeholder="Example: NY"
                      control={form.control}
                      type="text"
                    />
                    <CustomFormField
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Example: 313 124"
                      control={form.control}
                      type="text"
                    />
                  </div>
                  <div className="flex gap-4">
                    {/* <FormControl>
                      <div>
                        <FormLabel className="form-label">
                          Date Of Birth
                        </FormLabel>
                        <DatePicker
                          className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 mt-2 p-2"
                          wrapperClassName="datePicker"
                          selected={startDate}
                          onChange={(date) => setStartDate(date!)}
                          dateFormat="yyyy/MM/dd"
                        />
                      </div> */}
                    {/* </FormControl> */}
                    <CustomFormField
                      name="dateOfBirth"
                      label="Date Of Birth"
                      placeholder="YYYY-MM-DD"
                      control={form.control}
                      type="text"
                    />
                    <CustomFormField
                      name="ssn"
                      label="SSN"
                      placeholder="Example: 1241"
                      control={form.control}
                      type="text"
                    />
                  </div>
                </>
              )}
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter Your Email"
                type="text"
              />
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter Your Password"
                type="password"
              />
              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp;Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
