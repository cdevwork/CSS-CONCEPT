"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsVisible(false);
  };

  return (
    <div
      className={`sidebar-container ${isVisible ? "visible" : ""}`}
      onClick={handleToggle}
    >
      <div className={`sidebar ${isVisible ? "slide-in" : "slide-out"}`}>
        <ul>
          <li onClick={() => handleNavigation("/service")}>🏠 Service</li>
          <li onClick={() => handleNavigation("/project")}>📂 Project</li>
          <li onClick={() => handleNavigation("/about")}>ℹ️ About</li>
          <li onClick={() => handleNavigation("/contact")}>📞 Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
