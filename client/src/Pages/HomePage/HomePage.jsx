import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar } from "Pages/Navbar/Navbar";
import FriendListWidget from "Pages/Widgets/FriendListWidget";
import MyPostWidget from "Pages/Widgets/MyPostWidget";
import UserWidgets from "Pages/Widgets/UserWidgets";
import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { _id, picPath, friends } = useSelector((s) => s.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width={"100%"}
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidgets userId={_id} picturePath={picPath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picPath} />
        </Box>
      </Box>
      {/* <FriendListWidget friends={friends}/> */}
    </Box>
  );
};

export default HomePage;
