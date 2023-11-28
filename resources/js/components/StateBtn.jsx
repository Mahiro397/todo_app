import React, { useState } from 'react';

function StateBtn() {
    const [clickCount,setClickCount] = useState(0);

    const handleclick = () =>{
        setClickCount(clickCount + 1);
        
    }

    const getStatus = () => {
        if (clickCount === 0) {
          return '未着手';
        } else if (clickCount === 1) {
          return '作業中';
        } else {
          return '完了';
        }
      };

      const getButtonClasses = () => {
        switch (clickCount) {
          case 0:
            return 'bg-red-500 text-white hover:bg-red-700';
          case 1:
            return 'bg-yellow-500 text-black hover:bg-yellow-700';
          default:
            return 'bg-green-500 text-white hover:bg-green-700';
        }
      };

  return (
    <button className={`font-bold py-2 px-4 rounded p-4 rounded ${getButtonClasses()}`}  onClick={handleclick}>{getStatus()}</button>
  )
}

export default StateBtn