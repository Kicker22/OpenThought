import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <header className="py-6 shadow-sm bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">OpenThought</h1>
          <nav>
            <Link href="/ideas" className="mx-4 text-gray-600 hover:text-indigo-500">
              Explore Ideas
            </Link>
            <Link href="/submit" className="ml-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              Publish Idea
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to OpenThought
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          A decentralized platform empowering genuine intellectual discourse, ensuring transparency and authenticity.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/ideas"
            className="px-6 py-3 border-2 border-indigo-500 rounded text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
          >
            Explore Ideas
          </Link>
          <Link
            href="/submit"
            className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Start Publishing
          </Link>
        </div>
      </main>
    </div>
  );
}
