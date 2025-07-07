import { Divider, List, Toolbar,Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DrawerItem from "@/utils/DrawerItem";
import { User_role } from "@/types";
import SideBarListITem from "./SideBarListITem";
import { getUserInfo } from "@/service/storeUserInfo";

const SideBar = () => {
  //declare state to avoid side effects
  const [userRole, setUserRole] = useState('')
  const {role} = getUserInfo();

  useEffect(() => {
    setUserRole(role);
  },[role])
  
    const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {DrawerItem(userRole as User_role).map((item, index) => (
          <SideBarListITem  item= {item} key={index} /> 
        ))}
      </List>
      <Divider />
    </div>
  );

    return <Box>{drawer}</Box>
};

export default SideBar;