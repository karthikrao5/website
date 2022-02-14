import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-slate-500 p-3 justify-between">
      <div>
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Karthik Rao
            </span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/blog">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Blog
            </span>
          </a>
        </Link>
        <Link href="/about">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              About
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
};
