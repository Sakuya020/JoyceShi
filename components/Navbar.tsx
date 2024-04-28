import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between">
      <Link href="/intro">Joyce Shi</Link>
      <ul className="flex flex-col">
        <Link href="/">Homepage</Link>
        <Link href="/printed_matters">Printed Matters</Link>
        <Link href="/digital_interface">Digital Interface</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
