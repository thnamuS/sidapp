import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          Medilab
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/" className="btn btn-ghost">
            About
          </Link>
          <Link href="/" className="btn btn-ghost">
            Services
          </Link>
          <Link href="/" className="btn btn-ghost">
            Contact
          </Link>
        </nav>
        <Link href="/appointment" className="btn btn-primary">
          Make an Appointment
        </Link>
      </div>
    </header>
  );
}
