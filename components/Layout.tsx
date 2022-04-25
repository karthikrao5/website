import Head from "next/head";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import SiteConfig from "../data/config.json";
interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
}

export default function Layout({ children, siteTitle }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{siteTitle ? siteTitle : SiteConfig.title}</title>
        <meta name="description" content={SiteConfig.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
