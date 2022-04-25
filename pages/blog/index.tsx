import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/fetchData";

const Index = ({ articles, categories, homepage }) => {
  return (
    <>
      <div>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link href="/">
                  <a>Strapi Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link href={`/category/${category.attributes.slug}`}>
                      <a className="uk-link-reset">
                        {category.attributes.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <section>
        <h1>Blogs</h1>
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Index;
