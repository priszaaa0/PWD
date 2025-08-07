import Link from "next/link";
export default function Home() {
return (

  
  <div>
    <section id="beranda" className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-6">
    <div className="relative" id="dropdownWrapper">
    <button id="dropdownButton"className="text-sm text-gray-700 flex items-center gap-1 px-4 py-2 rounded hover:bg-pink-50">
      Kategori Manisan
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M19 9l-7 7-7-7" />
    </svg>
    </button>

  <div id="dropdownMenu"className="absolute mt-2 w-40 bg-white border border-pink-200 rounded-md shadow-lg hidden z-20">
    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">
      Cake
    </a>
    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">
      Coffee
    </a>
    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-50">
      Ice Cream
    </a>
    </div>
    </div>

  <div className="bg-pink-100 px-4 py-2 rounded-full flex items-center w-60">
    <input type="text" id="searchInput" placeholder="Cari manisan"className="bg-transparent outline-none text-sm text-pink-600 w-full placeholder-pink-400" />
    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth="2" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
    </svg>
    </div>
    </div>

  <div className="flex items-center gap-4">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M1 1h4l2.68 13.39a1 1 0 00.99.81h9.66a1 1 0 00.98-.8l1.38-7.6H6" />
    </svg>
        
  <div className="relative" id="profileWrapper">
    <Link href="/profile">
    <img src="foto/profile.jpeg" alt="Profil"className="w-8 h-8 rounded-full object-cover cursor-pointer" />
    </Link>
    </div>
    </div>
    </div>
    </section>

  <section className="max-w-4xl mx-auto mt-6 flex justify-around items-center px-4 space-x-4 overflow-x-auto">
    <div className="text-center">
    <p className="mt-2 text-sm text-gray-700">
      Coffee
    </p>
    </div>

  <div className="text-center">
    <p className="mt-2 text-sm text-gray-700">
      Pancake
    </p>
    </div>
    <div className="text-center">
    <p className="mt-2 text-sm text-gray-700">
      Ice Cream
    </p>
    </div>

  <div className="text-center">
    <p className="mt-2 text-sm text-gray-700">
      Cake
    </p>
    </div>
    </section>

  <section className="max-w-7xl mx-auto px-6 py-6">
    <div className="flex flex-wrap gap-4 items-center">
    <h2 className="text-lg font-semibold">
      Cake Terlaris
    </h2>
    <select className="bg-gray-100 text-sm px-3 py-2 border rounded focus:outline-none">
    <option>
      -Pilihan Budget-
    </option>
    </select>

  <select className="bg-gray-100 text-sm px-3 py-2 border rounded focus:outline-none">
    <option>
      -Urutkan-
    </option>
    </select>
    </div>
    </section>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">

      <div 
  
  className="cursor-pointer bg-gray-100 p-4 shadow rounded text-center transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95">

 
        <p className="mt-2 font-semibaold">Super Oat Carrot (20cm)</p>
        <p className="text-sm">Rp.125.000,00</p>
        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
      </div>
  
      <div className="cursor-pointer bg-gray-100 p-4 shadow rounded text-center transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95">


        <p className="mt-2 font-semibold">Super Quiche (20cm)</p>
        <p className="text-sm">Rp.429.000,00</p>
        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐</div>
      </div>
  
      <div 
      
      className="cursor-pointer bg-gray-100 p-4 shadow rounded text-center transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
    >
    

        <p className="mt-2 font-semibold">Super Tiramisu (20cm)</p>
        <p className="text-sm">Rp.742.000,00</p>
        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
      </div>
  
      <div 
  
  className="cursor-pointer bg-gray-100 p-4 shadow rounded text-center transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
>

      
        <p className="mt-2 font-semibold">Super Berry Banana (20cm)</p>
        <p className="text-sm">Rp.148.000,00</p>
        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐</div>
      </div>
  
      <div 
  
  className="cursor-pointer bg-gray-100 p-4 shadow rounded text-center transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
>

    
        <p className="mt-2 font-semibold">Tres Leches Red Berry (20cm)</p>
        <p className="text-sm">Rp.468.000,00</p>
        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
    </div>
      
      <div 
  
  className="cursor-pointer bg-gray-100 p-4 shadow rounded text-center transform transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
>

 
        <p className="mt-2 font-semibold">Chesse Mille Feullie (20x20cm)</p>
        <p className="text-sm">Rp.190.000,00</p>
        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐</div>
      </div>
    </div>

  <section className="text-center py-12 px-6 bg-white" >
    <h2 className="text-pink-400 text-2xl font-semibold mb-4">
      Tentang Kami
    </h2>
    <h1 className="text-4xl font-bold text-pink-700 italic">
      Dol
    <span className="text-pink-500 font-normal">
      cetta
    </span></h1>
    <h3 className="text-xl font-semibold mt-6 text-gray-800">
      Best Seller Cake
    </h3>
    <p className="max-w-2xl mx-auto mt-4 text-gray-700 text-sm leading-relaxed">
      Kami hadir dari kecintaan yang mendalam terhadap rasa dan kualitas.
      Setiap cangkir kopi yang kami sajikan, setiap potong kue yang kami panggang, hingga setiap manisan yang kami kemas,
      dibuat dengan bahan pilihan, resep terbaik, dan tentu saja—sepenuh hati.
    </p>
    </section>
    </div>
    
  );
}