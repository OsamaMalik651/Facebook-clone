import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    //BEM Naming Convention
    <div className="app">
    {!user ? 
    (<Login/>):(
      // When we have a sibling compononet we have to wrap it in either a DIV or a fragment
      // JSX Fragment
      <> 
      <Header />
    <div class="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
      </>
    )}
    
    </div>
  );
}

export default App;
