import { useTheme } from "@emotion/react";
import {
  AttachmentOutlined,
  DeleteOutline,
  EditOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "Components/FlexBetween";
import FlexEvenly from "Components/FlexEvenly";
import UserImg from "Components/UserImg";
import WidgetWrapper from "Components/WidgetWrapper";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { handlePost } from "./WidgetFunctions";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((s) => s.user);
  const token = useSelector((s) => s.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper m={isNonMobileScreens && "0 2rem"}>
      <FlexBetween gap={"1.5rem"}>
        <UserImg image={picturePath} />
        <InputBase
          onChange={(e) => setPost(e.target.value)}
          value={post}
          placeholder="Post something..."
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "5px",
            mt: "1rem",
            px: "8px",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${palette.neutral.medium}`}
          borderRadius="5px"
          p="1rem"
          mt={"0.5rem"}
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => {
              setImage(acceptedFiles[0], "picPath");
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  width={"100%"}
                  {...getRootProps()}
                  border={`1px dashed ${palette.primary.main}`}
                  textAlign="center"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Picture Here</p>
                  ) : (
                    <FlexBetween px={"0.5rem"}>
                      <p>{image?.name}</p>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                <IconButton
                  disabled={!image}
                  sx={{ marginLeft: "1rem" }}
                  onClick={() => setImage(null)}
                >
                  <DeleteOutline />
                </IconButton>
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}
      <Divider sx={{ m: "1.25rem 0" }} />
      <FlexEvenly flexDirection={"row"}>
        <FlexBetween gap={"0.25rem"} onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>
        {isNonMobileScreens ? (
          <>
            <FlexBetween gap={"0.25rem"}>
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>
            <FlexBetween gap={"0.25rem"}>
              <AttachmentOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>
            <FlexBetween gap={"0.25rem"}>
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Voice</Typography>
            </FlexBetween>
          </>
        ) : (
          <>
            <FlexBetween gap={"0.25rem"}>
              <MoreHorizOutlined sx={{ color: mediumMain }} />
            </FlexBetween>
          </>
        )}
        <Button
          disabled={!post}
          onClick={() =>
            handlePost(_id, post, image, setPost, dispatch, setImage, token)
          }
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          Post
        </Button>
      </FlexEvenly>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
