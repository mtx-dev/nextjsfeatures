import { NextPage } from "next";
import { postType } from "../../types";

type postInfoProps = {
  post: postType,
  interval: string;
}

const PostInfo:NextPage<postInfoProps> = ({ post, interval }) => {
  const { title, body, createdAt } = post || {};

  if (!post) {
    return <h3> Empty post </h3>
  }

  return (
    <>
      <h3>Last generated at: {createdAt}</h3>
      <p>Update every {interval} sec (only on production mode)</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
}

export default PostInfo;