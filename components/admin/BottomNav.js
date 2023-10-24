import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { AddLocationAlt, Bed, LocationOn } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

import { HomeOutlined } from "@ant-design/icons";
import ClusterMap from "./home/map/ClusterMap";
import GetHomes from "./home/GetHomes";
import AddHome from "./home/AddHome";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);
  return (
    <Box ref={ref}>
      {
        {
          0: <ClusterMap />,
          1: <GetHomes />,
          2: <AddHome />,
        }[value]
      }
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Map" icon={<LocationOn />} />
          <BottomNavigationAction label="Homes" icon={<HomeOutlined />} />
          <BottomNavigationAction label="Add" icon={<AddLocationAlt />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
