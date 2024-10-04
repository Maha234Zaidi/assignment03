import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="space-x-6 bg-blue-800 p-7 text-right shadow-2xl">
        <span className="text-white hover:text-black font-serif text-3xl mr-80 ">
          My Website
        </span>
        <Link
          href="/"
          className="text-white hover:text-black font-serif text-2xl"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-black font-serif text-2xl"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-white hover:text-black font-serif text-2xl"
        >
          Contact
        </Link>

        <Link
          href="/skills"
          className="text-white hover:text-black font-serif text-2xl"
        >
          Skills
        </Link>

        <Link
          href="/team"
          className="text-white hover:text-black font-serif text-2xl"
        >
          Team
        </Link>

        <Link
          href="/team/myteam"
          className="text-white hover:text-black font-serif text-2xl"
        >
          MyTeam
        </Link>

        <Link
          href="/privacypolicy"
          className="text-white hover:text-black font-serif text-2xl"
        >
          Privacy Policy
        </Link>
      </div>
    </>
  );
}
