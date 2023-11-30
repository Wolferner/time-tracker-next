"use client";

import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "@/04 items/layout/MenuItem/MenuItem";
import TextElement from "@/04 items/ui/TextElement/TextElement";

const Menu = () => {
  return (
    <div className={`${styles.menuBox2}`}>
      <MenuItem>
        <TextElement>Time Tracking</TextElement>
        <TextElement url="s">Day</TextElement>
        <TextElement url="s">Week</TextElement>
        <TextElement url="s">Month</TextElement>
      </MenuItem>

      <MenuItem>
        <TextElement>Analytics</TextElement>
        <TextElement url="s">Reports</TextElement>
        <TextElement url="s">Insight</TextElement>
      </MenuItem>

      <MenuItem>
        <TextElement>Manage</TextElement>
        <TextElement url="s">clients</TextElement>
        <TextElement url="s">Work</TextElement>
        <TextElement url="s">Team</TextElement>
        <TextElement url="s">Autamation</TextElement>
        <TextElement url="s">Integration</TextElement>
      </MenuItem>
    </div>
  );
};

export default Menu;
