import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout({ children, siteData }) {
  const router = useRouter();
  const language = router.pathname.includes("/es/") ? "es" : "en";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={siteData.author} />
        <meta name="description" content={siteData.description} />
        <title>{siteData.title}</title>
      </Head>
      <Header siteName={siteData.title} />
      <main className="container">{children}</main>
    </>
  );
}
