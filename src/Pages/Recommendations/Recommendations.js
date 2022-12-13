import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Avatar, Box } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Recommendations = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Tabs
          style={{ margin: "auto" }}
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab
            icon={
              <Avatar
                variant="square"
                alt="test avatar"
                src="https://cdn-icons-png.flaticon.com/128/1014/1014256.png"
                sx={{ width: 70, height: 70 }}
              />
            }
            label="Music"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Avatar
                variant="square"
                alt="test avatar"
                src="https://cdn-icons-png.flaticon.com/128/3074/3074767.png"
                sx={{ width: 70, height: 70 }}
              />
            }
            label="Movie"
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <Avatar
                variant="square"
                alt="test avatar"
                src="https://cdn-icons-png.flaticon.com/128/2232/2232688.png"
                sx={{ width: 70, height: 70 }}
              />
            }
            label="Book"
            {...a11yProps(3)}
          />
          <Tab
            icon={
              <Avatar
                variant="square"
                alt="test avatar"
                src="https://cdn-icons-png.flaticon.com/128/808/808476.png"
                sx={{ width: 70, height: 70 }}
              />
            }
            label="Game"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <Box>
        <TabPanel
          value={value}
          index={0}
        >
          Item One
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          Item Two
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
        >
          Item Three
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
        >
          Item Four
        </TabPanel>
      </Box>
    </Box>
  );
};
