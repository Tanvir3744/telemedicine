import { DrawerItems } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ListITemProps = {
  item: DrawerItems;
  index: number;
};

const SideBarListITem = ({ item, index }: ListITemProps) => {
  const pathLink = `/dashboard/${item.path}`;
  const pathName = usePathname();
  return (
    <Link href={pathLink} >
      <ListItem
        key={index}
        disablePadding
       
      >
        <ListItemButton  sx={{
          position: "relative",
          ...(pathName === pathLink && {
            "&::before": {
              content: '" "',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "0",
              right: 0,
              width: "3px",
              background: "linear-gradient(purple, red)",
              paddingRight: "2px",
            },
            "& svg" : {color: "purple"}
          }),
        }}>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarListITem;
