import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 flex flex-col gap-6 justify-center items-center border-t border-border">
      <p className="text-gray-400 text-lg">Let&apos;s work together</p>
      <Link
        href="/contact"
        className="text-accent hover:bg-accent hover:text-[#0a0a0a] px-6 py-3 border border-accent transition-colors"
      >
        Get in touch →
      </Link>
      <p className="text-muted text-sm mt-4">
        © {new Date().getFullYear()} Rifqi. All rights reserved.
      </p>
    </footer>
  );
}
