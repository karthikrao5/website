import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import postsRaw from "./posts.json";

type Post = {
  id: number;
  author: string;
  content: string;
};

export const getStaticProps = async () => {
  const posts: Post[] = postsRaw;

  return {
    props: {
      posts,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}

const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((each) => each.id === parseInt(id as string, 10));

  if (!post) return <div>No posts yet.</div>;

  return (
    <Page>
      <h1>{post.author}</h1>
      <p>{post.content}</p>
    </Page>
  );
};

export default Post;
