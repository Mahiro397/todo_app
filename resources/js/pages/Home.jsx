import React from 'react'

const Home = () => {

 
  return (
    <>
    <section class="flex items-center justify-center min-h-screen bg-white">
  <div class="w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div class="text-center">
      <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
        Long headline to turn your visitors into users
      </h1>
      <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
        <div class="mt-3 rounded-lg sm:mt-0">
          <button class="block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">ログインする</button>
        </div>
        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
          <button class="block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">新規作成</button>
        </div>
      </div>
    </div>
  </div>
</section>

    
        
    </>
  )
}

export default Home