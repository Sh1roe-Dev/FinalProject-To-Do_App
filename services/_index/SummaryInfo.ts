import { totalTask } from "./totalSummaryInfo";

export const summaryInfo = () => {
  const { total, totalPending, done } = totalTask();

  return [
    {
      label: "Total Task",
      icon: "ri-file-list-line",
      summary: total || 0,
      style: "#4287f5",
    },
    {
      label: "Pending",
      icon: "ri-calendar-event-line",
      summary: totalPending || 0,
      style: "#e08c24",
    },
    {
      label: "Done",
      icon: "ri-checkbox-circle-line",
      summary: done || 0,
      style: "#1fc227",
    },
  ];
};

export const buttonList = [];
