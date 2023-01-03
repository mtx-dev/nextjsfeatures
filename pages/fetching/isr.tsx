import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import MainContainer from "../../components/MainContainer/MainContainer";
import { postType } from "../../types";

type postsTypeProps = {
	posts: postType[],
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json() as postType[];

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data.slice(0,10) },
  }
};

const Isr:NextPage<postsTypeProps>= ({ posts }) => { 
  return (
	<MainContainer>
      <h1>Incremental Static Regeneration  ISR</h1>
      <h2>Posts list:</h2>
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title.slice(0, 50)}</Link>
          </li>
        ))}
      </ul>
	</MainContainer>
  );
};

export default Isr;