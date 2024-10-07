import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Molecule Bind: a leading research platform for drug discovery",
  description: "This is description for molecule bind",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>Hello Dashboard</p>
      </DefaultLayout>
    </>
  );
}