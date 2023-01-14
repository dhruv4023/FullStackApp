import { setPosts } from "state";

export const getUser = async (setUser, userId, token) => {
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/user/get/${userId}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  setUser(data);
};
export const handlePost = async (
  _id,
  post,
  image,
  setPost,
  dispatch,
  setImage,
  token
) => {
  const formData = new FormData();
  formData.append("uderId", _id);
  formData.append("description", post);
  if (image) {
    formData.append("picture", image);
    formData.append("picturePath", image.name);
  }
  const res = await fetch(
    `${process.env.REACT_APP_SERVER}/posts/get`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    }
  );
  const posts = await res.json();
  dispatch(setPosts({ posts }));
  setImage(null);
  setPost("");
};
