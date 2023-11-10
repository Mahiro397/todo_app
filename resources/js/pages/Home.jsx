import React from 'react'

function Home() {
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="flex flex-col items-center gap-4 md:gap-6 bg-red-50">こんにちは</div>
                        <div className="flex flex-col items-center gap-4 md:gap-6 bg-green-100">おはようございます。</div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => window.location.href = '/about'}>
                                     about
                        </button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => window.location.href = '/contact'}>
                                     about
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home