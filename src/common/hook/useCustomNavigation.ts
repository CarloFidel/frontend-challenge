import { useState } from "react";
import type { LeftSideMenuItem } from "../interfaces/leftSideMenu.interface";
import { useNavigate } from "react-router";

export const useCustomNavigation = () => {
  const [menuItem, setMenuItem] = useState<LeftSideMenuItem>("home");
  const navigate = useNavigate();

  const handleItemClick = (path: LeftSideMenuItem) => {
    navigate(path);
    setMenuItem(path);
  };

  return {
    menuItem,
    handleItemClick,
  };
};
