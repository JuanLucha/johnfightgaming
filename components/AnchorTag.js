import Link from "next/link";
import { useRouter } from "next/router";

const AnchorTag = (props) => {
  const router = useRouter();
  const { href, title, target, children } = props;
  const backSteps = href.split(/\//).filter((next) => next === "..").length;
  const distilledHref = href
    .split(/\//)
    .filter((next) => next !== "..")
    .join("/");
  const baseArray = router.pathname.split(/\//);
  const baseUrl = baseArray.slice(0, baseArray.length - backSteps - 1).join("/");
  const finalProps = { ...props, href: `${baseUrl}/${href}` };
  if (target) {
    return <a {...finalProps}>{children}</a>;
  }
  return (
    <Link href={`${finalProps.href}`}>
      <a>{title || children}</a>
    </Link>
  );
};

export default AnchorTag;
