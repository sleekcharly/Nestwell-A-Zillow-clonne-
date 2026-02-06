import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const currentUser = await currentUser();

  return (
    <div className="mx-auto max-w-2xl px-8 py-16">
      <h1 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Dashboard
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Welcome, {currentUser?.firstName ?? "there"}! This page is protected.
      </p>
    </div>
  );
}
