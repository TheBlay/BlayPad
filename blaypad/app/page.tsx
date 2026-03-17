import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-1 items-center justify-center">
        <main className="w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Blay's learning center!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is a Virtual Learning Environment for learning Deutsch. You can find more information about the project in the{" "}
            <a
              href="./about/page.tsx"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              About
            </a>
          </p>
        </div>
        
      </main>
    </div>
    </div>
  );
}
