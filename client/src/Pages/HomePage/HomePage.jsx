import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar } from "Pages/Navbar/Navbar";
import AdvertWidget from "Pages/Widgets/AdvertWidget";
import FriendListWidget from "Pages/Widgets/FriendListWidget";
import MyPostWidget from "Pages/Widgets/MyPostWidget";
import PostsWiget from "Pages/Widgets/PostsWiget";
import UserWidgets from "Pages/Widgets/UserWidgets";
import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { _id, picPath } = useSelector((s) => s.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width={"100%"}
        padding="2rem 6%"
        gap=".5rem"
        justifyContent={"space-between"}
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
          <PostsWiget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
