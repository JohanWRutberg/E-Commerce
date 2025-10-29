import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Shopaloq" width={36} height={36} />
          <p className="hidden md:block text-md font-medium text-white tracking-wider">
            SHOPALOQ
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Shopaloq</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/about" className="hover:underline">
          All Products
        </Link>
        <Link href="/contact" className="hover:underline">
          New Arrivals
        </Link>
        <Link href="/terms" className="hover:underline">
          Best Sellers
        </Link>
        <Link href="/privacy" className="hover:underline">
          Sale
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/about" className="hover:underline">
          About Us
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/terms" className="hover:underline">
          Blog
        </Link>
        <Link href="/privacy" className="hover:underline">
          Affiliate
        </Link>
      </div>
    </div>
  );
};

export default Footer;
