import { HashLink } from "react-router-hash-link";

export default function Nav() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -135;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav className="nav">
        <HashLink to="#cocktails" scroll={scrollWithOffset}>
          Cocktails
        </HashLink>
        <HashLink to="#beer" scroll={scrollWithOffset}>
          Beer
        </HashLink>
        <HashLink to="#wine" scroll={scrollWithOffset}>
          Wine
        </HashLink>
        <HashLink to="#food" scroll={scrollWithOffset}>
          Food
        </HashLink>
        <HashLink to="#liquor" scroll={scrollWithOffset}>
          Liquor & Spirits
        </HashLink>
      </nav>
    </>
  );
}
