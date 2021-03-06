import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header({ siteName }) {
  const router = useRouter();
  const language = router.pathname.includes("/es/") || router.pathname.endsWith("/es") ? "es" : "en";

  const showBackButton = !router.pathname.endsWith(`home_${language}`);

  return (
    <>
      <header className={`${styles.header} container`}>
        <div className={styles.row}>
          <nav className="nav">
            <div className={styles.title}>
              <Link href={`/${language}/home_${language}`}>
                <a>{siteName}</a>
              </Link>
            </div>
          </nav>
          <div className="language-selector">
            <div className="language-option">
              <Link href={`/en/home_en`}>
                <a>🇬🇧</a>
              </Link>
            </div>
            <div className="language-option">
              <Link href={`/es/home_es`}>
                <a>🇪🇸</a>
              </Link>
            </div>
          </div>
        </div>
        {showBackButton && (
          <div className={styles.row}>
            <a onClick={() => router.back()}>Back</a>
          </div>
        )}
      </header>
    </>
  );
}
