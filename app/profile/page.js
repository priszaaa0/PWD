import Link from "next/link";
export default function Profile() {
return(
  <div className="w-full flex justify-between items-center px-10 py-10 -mt-65">
    <div className="flex items-center text-pink-500 -mt-65">
    <Link href="/pagehome">
    <span className="text-xl mr-1 ">&larr;</span> kembali</Link>
    </div>
  <div className="max-w-lg mx-auto -mt-10 px-110 ">
    <div className="relative w-30 h-30 mx-auto">
    <div className="w-full h-full bg-pink-200 rounded-full flex items-center justify-center text-5xl font-bold text-gray-700">
        P
    </div>
    <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M15.232 5.232l3.536 3.536M16.757 2.757a2.828 2.828 0 114 4L7 20H3v-4L16.757 2.757z" />
    </svg>
    </button>
    </div>
     </div>

  <form className="mt-115 w-full max-w-sm mb-40 ">
    <div className="-ml-225">
    <div>
    <label htmlFor="nickname" className="block text-pink-500 font-medium mb-1">
      Nickname
    </label>
    <input id="nickname" type="text" defaultValue="pritzaa_" className="w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
    </div>

    <div>
    <label htmlFor="email" className="block text-pink-500 font-medium mb-1">
      Gmail
    </label>
    <input id="email" type="email" defaultValue="prisaprisa601@gmail.com" readOnly className="w-full border border-pink-300 rounded px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed" />
    </div>

    <div className="text-center mt-4">
      <Link href="/pagelogin">
    <button type="button" className="text-pink-500 underline font-medium -ml-18">Log out</button>
    </Link>
    </div>
    </div>
    </form>
    </div>
  );
}