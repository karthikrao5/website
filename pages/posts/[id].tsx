import { useRouter } from "next/router";
import Page from "../../components/Page";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Page>
      <h1>{id} Post</h1>
    </Page>
  );
};

export default Post;
