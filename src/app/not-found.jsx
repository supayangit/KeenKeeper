import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">

      <h1 className="text-5xl font-bold text-[#244D3F]">404</h1>

      <p className="text-lg text-gray-600">
        Oooooops! Page not found
      </p>

      <Link href="/" className="btn bg-[#244D3F] text-white">
        Go Home
      </Link>

    </div>
  );
}