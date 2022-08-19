import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <div
        className="flex justify-center mt-10 rounded-md shadow-sm gap-2"
        role="group"
      >
        <Link href={"/home/home-1"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HOME 1 - JOEM
          </button>
        </Link>
        <Link href={"/home/home-2"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HOME 2 - MARIELLE
          </button>
        </Link>

        <Link href={"/home/home-3"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HOME 3 - ALDRIN
          </button>
        </Link>
        <Link href={"/home/home-4"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HOME 4 -VINCENT
          </button>
        </Link>
        <Link href={"/home/home-5"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HOME 5 - OSEAS
          </button>
        </Link>
        <Link href={"/home/home-6"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            HOME 6 - JORDAN
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-3">
        <h1 className=" text-3xl">CAR RENTAL THEME DESIGN</h1>
      </div>
    </>
  );
}
