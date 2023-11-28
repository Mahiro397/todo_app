import React from 'react';
import axios from 'axios';


function Logout() {

  
  return (
    <div>
    {/* ログアウトボタンをクリックすると handleLogout 関数が実行されます */}
    <button onClick={handleLogout}>ログアウト</button>
  </div>
  )
}

export default Logout