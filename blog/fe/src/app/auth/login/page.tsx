import { loginService } from "@/services/login.service";
import { Button } from "@nextui-org/react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const token = cookies().get("token");
  if (token) {
    redirect("/");
  }
  async function login(formData: FormData) {
    "use server";
    const response = await loginService({
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    });
    if (response.token) {
      cookies().set("token", response.token);
      redirect("/management/blog");
    }
  }
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-6 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0">
        <Link href="#">
          <Image
            width={128}
            height={128}
            priority
            quality={100}
            src="/logos/logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action={login}>
            <div>
              <label
                htmlFor="username"
                className="font-medaium mb-2 block text-sm text-gray-900 dark:text-white"
              >
                User name
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </Button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
