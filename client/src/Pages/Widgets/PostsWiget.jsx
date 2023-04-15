import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
import { getPosts, getUserPosts } from "./WidgetFunctions";

const PostsWiget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (isProfile) {
      getUserPosts(userId, token, dispatch);
    } else {
      getPosts(token, dispatch);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(posts);
  return (
    <>
      {posts?.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picPath,
          userPicPath,
          likes,
          Comments,
        }) => {
          return (
            // console.log(picPath)
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picPath}
              userPicturePath={userPicPath}
              likes={likes}
              comments={Comments}
            />
          );
        }
      )}
    </>
  );
};

export default PostsWiget;
