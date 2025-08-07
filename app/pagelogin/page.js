import Link from "next/link";
export default function Login() {
return (
  <div className="flex flex-col items-center w-full px-4 py-2 my-6">
    <div className="w-full flex justify-between items-center mb-4">
    <div className="flex items-center text-pink-500">
    </div>
    </div>

  <div className="border border-pink-300 p-6 w-full max-w-xl bg-white rounded text-center shadow">
    <h1 className="text-pink-600 text-xl font-semibold mb-1">
      Selamat Datang Kembali!
    </h1>
    <p className="text-pink-400 text-sm mb-4">
      Kami Senang Anda Kembali
    </p>
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div className="flex flex-col text-left">
    <label htmlFor="email" className="text-sm text-pink-600 mb-1">
      Email
    </label>
    <input id="email" type="email" placeholder="E-Mail Address" className="px-4 py-2 bg-gray-100 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 transition" required />
    </div>

  <div className="flex flex-col text-left">
    <label htmlFor="password" className="text-sm text-pink-600 flex justify-between mb-1">
    <span>
      Password
    </span>
    </label>
    <input id="password" type="password" placeholder="Password" className="px-4 py-2 bg-gray-100 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 transition" required />
    </div>
    </form>

  <div className="flex items-center justify-center text-sm text-pink-500 my-4">
    <div className="flex-grow border-t border-pink-200"></div>
    <span className="mx-2">
      or sign in with
    </span>
    <div className="flex-grow border-t border-pink-200"></div>
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <button type="button" className="flex items-center justify-center bg-gray-100 border border-pink-300 text-pink-500 py-2 rounded hover:bg-pink-50 transition">
    <img src="foto/google.png" alt="google"className="w-8 h-8 rounded-full object-cover cursor-pointer" />
      Google
    </button>
    <button type="button" className="flex items-center justify-center bg-gray-100 border border-pink-300 text-pink-500 py-2 rounded hover:bg-pink-50 transition">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" className="h-5 w-5 mr-2" alt="Facebook logo" />
      Facebook
    </button>
    </div>
    <Link href="/pagehome">
    <button className="mt-6 bg-pink-100 text-pink-500 border border-pink-300 px-60 py-2 rounded text-sm transition hover:scale-101 active:scale-95">Masuk</button>
    </Link>
    </div>
    </div>
  );
}
