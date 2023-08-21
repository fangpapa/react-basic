import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 自行建立react專案
// 只需要index.js及index.html

// react18之前的寫法
ReactDOM.render(<App />, document.getElementById('root'));

// react18寫法
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
