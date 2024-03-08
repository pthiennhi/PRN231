import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <main>
        <div className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
          <p className="text-4xl font-bold md:text-5xl" aria-label="404">
            4💡4
          </p>
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-10 text-center text-base font-medium md:text-xl">
            Sorry, the page you are looking for is being updated to provide
            better quality! <br />
            Please visit again later.
          </p>
          {/* <p className="mt-10 text-center text-base font-medium md:text-xl">
              You will be redirected to the home page in{" "}
              <span className="font-bold text-violet-500 dark:text-violet-400">
                {timer}
              </span>{" "}
              seconds.
            </p> */}
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
    </>
  );
}

export default NotFoundPage;
