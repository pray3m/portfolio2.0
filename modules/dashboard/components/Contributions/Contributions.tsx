"use client";

import { fetcher } from "@/services/fetcher";
import React, { FC } from "react";
import { BsGithub } from "react-icons/bs";
import useSWR from "swr";
import Overview from "./Overview";
import Calendar from "./Calendar";

const Contributions: FC = () => {
  const { data, error } = useSWR("api/github", fetcher);

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

  return (
    <div className="flex flex-col gap-y-2 ">
      <h2 className="flex items-center text-xl lg:text-xl font-medium gap-2">
        <BsGithub /> <span>Contributions</span>
      </h2>
      <p className="dark:text-neutral-400">
        My Github Contributions from last year.
      </p>

      {!data && <div className="dark:text-neutral-400">No Data</div>}

      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </div>
  );
};

export default Contributions;
