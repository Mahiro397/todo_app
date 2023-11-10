import React from 'react';
import ReactDOM from 'react-dom/client';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="flex flex-col items-center gap-4 md:gap-6 bg-red-50">こんにちは</div>
                        <div className="flex flex-col items-center gap-4 md:gap-6 bg-green-100">おはようございます。</div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ボタンをクリックsina</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
