import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Index from "@/components/Dashboard";

export const metadata: Metadata = {
  title:
    "Molecule Bind: a leading research platform for drug discovery",
  description: "This is description for molecule bind",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index/>
      </DefaultLayout>
    </>
  );
}