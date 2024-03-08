import { cookies } from "next/headers";
import Link from "next/link";

export const Unauthorized = () => {
  return (
    <main>
      <div className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
        <p className="text-4xl font-bold md:text-5xl" aria-label="401">
          4💡💡
        </p>
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          Unauthorized
        </h1>
        <p className="mt-10 text-center text-base font-medium md:text-xl">
          Sorry, you are not authorized to access this page. <br />
          Please visit again later.
        </p>
        <Link href="/auth/login" className="mt-5">
          <button
            title="login"
            className="rounded-md border border-gray-300 bg-violet-500 px-5 py-2 text-lg font-bold text-gray-50 shadow duration-200 hover:bg-violet-700 dark:border-gray-500 dark:text-gray-50"
          >
            Login
          </button>
        </Link>
      </div>
    </main>
  );
};

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return <Unauthorized />;
  }
  return <>{children}</>;
};
