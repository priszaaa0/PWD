import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8">
      {/* Section Welcome */}
      <section>
        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h1 className="text-2xl font-semibold text-[#8a4d52] mb-1">Welcome!</h1>
            <p className="text-sm text-black dark:text-white mb-6">
              Log in to your account to continue!
            </p>
          </div>
        </div>
      </section>

      {/* Form Login */}
      <form className="max-w-sm mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8a4d52] dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#8a4d52] dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-5 text-sm">
          <p className="text-gray-700 dark:text-gray-300">Belum punya akun?</p>
          <Link href="/register" className="text-[#8a4d52] font-medium hover:underline">
            Register
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[#b67373] text-white font-semibold py-2.5 rounded-xl shadow-[0_4px_0_#8a4d52] hover:bg-[#a75c5c]"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">or continue with</p>

        <div className="flex justify-center space-x-4 mt-3">
          <button className="w-10 h-10 flex items-center justify-center bg-white border rounded-md shadow-md">
            {/* Google Icon Placeholder */}
            <span className="text-xs">G</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white border rounded-md shadow-md">
            {/* Facebook Icon Placeholder */}
            <span className="text-xs">F</span>
          </button>
        </div>
      </form>

      {/* Link ke halaman lain */}
      <div className="text-center mt-6">
        <Link href="/matchiww" className="text-blue-500 hover:underline">
          Pindah ke halaman lain
        </Link>
      </div>
    </div>
  );
}
