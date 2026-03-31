import { useState, useCallback } from "react";

export const useSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const collapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return { isExpanded, toggle, collapse };
};
