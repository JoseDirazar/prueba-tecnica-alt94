"use client";

import PropertiesContainer from "@/components/PropertiesContainer";
import { useGetProperties } from "@/hooks/useGetProperties";

export default function Home() {
  const { properties } = useGetProperties();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Alt94 Properties</h1>
      <main className="flex flex-col gap-[32px] w-full items-center sm:items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-indigo-400">
        <PropertiesContainer properties={properties} />
      </main>
    </div>
  );
}
