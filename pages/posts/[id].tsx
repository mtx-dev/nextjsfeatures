import { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import MainContainer from "../../components/MainContainer/MainContainer";
import PostInfo from "../../components/PostInfo/PostInfo";
import { postType } from "../../types";

type postTypeProps = {
    post: postType,
	interval: string;
}

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json() as postType[];

  const paths = data.slice(0, 10).map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps<postTypeProps, Params> = async (context)=> {
	const { id } = context.params!;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await response.json();

	if (!data) {
		return {
		notFound: true,
		}
	}

	const post = {
		...data,
		createdAt: (new Date()).toLocaleTimeString()
	}
	const interval = process.env.POST_UPDATE_INTERVAL ?? '';

	return {
		props: { post, interval },
		revalidate: Number(process.env.POST_UPDATE_INTERVAL),
	}
};

const Post: NextPage<postTypeProps> = ({ post, interval }) => (
	<MainContainer>
	  <PostInfo post={post} interval={interval} />
	</MainContainer>
);

export default Post;