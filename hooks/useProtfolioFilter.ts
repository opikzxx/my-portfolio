import { useState, useCallback, useMemo } from "react";
import { Project } from "@/types";

export const usePortfolioFilter = (projects: Project[]) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [projects, filter]);

  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  return {
    filter,
    filteredProjects,
    handleFilterChange,
  };
};
