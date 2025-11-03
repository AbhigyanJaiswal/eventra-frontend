import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-primary">
      <main className="container flex flex-col items-center justify-between p-4">
        <Image
          src="/eventra-logo.svg"
          alt="Eventra Logo"
          width={120}
          height={40}
          priority
        />
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Welcome to Eventra 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Discover and book trusted{" "}
            <span className="font-semibold">wedding & event services</span> in
            Bihar — from photographers to caterers, all in one place!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="btn btn-primary"
            href="/services"
            rel="noopener noreferrer"
          >
            🎯 Explore Services
          </a>
          <a
            className="btn btn-outline"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Docs
          </a>
        </div>
      </main>
    </div>
  );
}
