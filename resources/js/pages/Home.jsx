import React from 'react';

function Home() {
    const headerList = ['名前', 'タスク内容','期限日','優先度' , '編集', '作業状態','削除'];

    const CustomTableHead = () => {
        return (
            <thead className="bg-purple-500 text-white">
                <tr>
                    {headerList.map((item, index) => (
                        <th key={index} className="py-2 px-4 text-center">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    };

    return (
        <div className="container mx-auto p-5">
            <div className="flex justify-center">
                <div className="w-10/12">
                    <div className="bg-white p-5">
                        <h1 className="text-3xl mb-5">タスク管理</h1>
                        <div className="p-3">
                            <table className="min-w-full bg-white border border-gray-300">
                                {/* ヘッダー部分 */}
                                <CustomTableHead />

                                {/* ボディ部分 */}
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 text-center">モーリー</td>
                                        <td className="py-2 px-4 text-center">肩トレ</td>
                                        <td className="py-2 px-4 text-center">11月11日</td>
                                        <td className="py-2 px-4 text-center">１</td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="bg-red-500 text-white py-1 px-2 rounded">編集</button>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="bg-blue-500 text-white py-1 px-2 rounded">作業中</button>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="bg-green-500 text-white py-1 px-2 rounded">削除</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-center">モーリー</td>
                                        <td className="py-2 px-4 text-center">肩トレ</td>
                                        <td className="py-2 px-4 text-center">11月11日</td>
                                        <td className="py-2 px-4 text-center">１</td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="bg-red-500 text-white py-1 px-2 rounded">編集</button>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="bg-blue-500 text-white py-1 px-2 rounded">作業中</button>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="bg-green-500 text-white py-1 px-2 rounded">削除</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
