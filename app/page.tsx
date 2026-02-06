import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 py-16 px-8 text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {userId ? "Welcome to Nestwell" : "Welcome to Nestwell"}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {userId ? (
              <>
                You&apos;re signed in. Use the{" "}
                <Link
                  href="https://clerk.com/docs"
                  className="font-medium text-zinc-950 underline dark:text-zinc-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clerk docs
                </Link>{" "}
                to protect routes, read user data, and build your app.
              </>
            ) : (
              <>
                Sign in or sign up using the buttons in the header to get
                started.
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
