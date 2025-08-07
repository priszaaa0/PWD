import Link from "next/link";
export default function Register() {
return (
  <div className="ml-90 w-full  max-w-xl border border-pink-300 p-5 bg-white rounded shadow-sm my-7">
    <h1 className="text-pink-600 text-xl font-semibold mb-1">Selamat Datang Kembali!</h1>
    <p className="text-pink-400 mb-4 text-sm">Kami Senang anda Kembali</p>

  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input type="text" placeholder="Full Name" className="border border-pink-300 bg-gray-100 px-4 py-2 w-full rounded placeholder-pink-300 text-sm" />
    <input type="text" placeholder="Last Name" className="border border-pink-300 bg-gray-100 px-4 py-2 w-full rounded placeholder-pink-300 text-sm" />
    </div>

  <div>
    <label className="text-pink-500 text-sm block mb-1">Email</label>
    <input type="email" placeholder="E-Mail Address" className="border border-pink-300 bg-gray-100 px-4 py-2 w-full rounded placeholder-pink-300 text-sm" />
    </div>
      
  <div>
    <label className="text-pink-500 text-sm block mb-1">Phone Number</label>
    <input type="tel" placeholder="0000 0000 0000" className="border border-pink-300 bg-gray-100 px-4 py-2 w-full rounded placeholder-pink-300 text-sm" />
    </div>

  <div className="flex justify-center"></div>
  </form>

  <Link href="/pagelogin">
    <button className="bg-pink-100 text-pink-500 border border-pink-300 px-62 py-2 rounded text-sm transition hover:scale-105 active:scale-95">Masuk</button>
    </Link>
    </div>
  );
}