"use client";

import { useState } from "react";
import { applicationData } from "@/constant/ApplicationData";
import AppTabButton from "@/components/ui/AppTabButton";
import AppContentCard from "@/components/ui/AppContentCard";

export default function ApplicationTabsBlock() {
  const [active, setActive] = useState(applicationData[0].id);

  const activeData = applicationData.find(
    (item) => item.id === active
  );

  return (
    <div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mt-6" data-aos="fade-up" data-aos-duration="800" >
        {applicationData.map((app) => (
          <AppTabButton
            key={app.id}
            label={app.label}
            active={active === app.id}
            onClick={() => setActive(app.id)}
          />
        ))}
      </div>

      {/* Content */}
      <AppContentCard
        title={activeData.title}
        description={activeData.description}
        link={activeData.link}
      />

    </div>
  );
}