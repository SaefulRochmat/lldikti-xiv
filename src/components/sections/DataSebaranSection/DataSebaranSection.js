"use client";

import { useEffect } from "react";
import SectionTitle from "@/components/ui/DataSebaranTitle";
import StatCard from "@/components/blocks/DataSebaranBlock/StatCard";
import { DATA_SEBARAN } from "@/constant/DataSebaran";

const DataSebaranSection = () => {
  return (
    <section className="mt-16 p-1 px-4 md:px-0">
      <div className="bg-[#1A2CA3] max-w-7xl mx-auto py-16 px-6 md:px-12 rounded-3xl shadow-xl">
        <SectionTitle
          title="DATA SEBARAN PERGURUAN TINGGI"
          subtitle="LLDIKTI WILAYAH XIV"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA_SEBARAN.map((item) => (
            <StatCard
              key={item.id}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSebaranSection;