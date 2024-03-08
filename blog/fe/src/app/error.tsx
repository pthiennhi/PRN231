"use client";

import Link from "next/link";

function ErrorPage() {
  return (
    <main>
      <div className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
        <p className="text-4xl font-bold md:text-5xl" aria-label="404">
          5💡💡
        </p>
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          An Error Occurred
        </h1>
        <p className="mt-10 text-center text-base font-medium md:text-xl">
          Sorry, an error occurred. <br />
          Please visit again later.
        </p>
        <Link href="/" className="mt-5">
          <button
            title="Go Home"
            className="rounded-md border border-gray-300 bg-violet-500 px-5 py-2 text-lg font-bold text-gray-50 shadow duration-200 hover:bg-violet-700 dark:border-gray-500 dark:text-gray-50"
          >
            Go Home
          </button>
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
