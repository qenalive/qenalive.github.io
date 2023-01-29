import React, { useEffect, useState } from 'react';
import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Classes from './pages/Classes';
import AboutUs from './pages/AboutUs';

import Root from './pages/components/Root';
import supabase from './supabase';

function App() {

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event);
      console.log(session);
      setSession(session);
    });
  }, []);

  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root session={session} />}>
        <Route index element={<Home session={session} />} />
        <Route path='classes' element={<Classes session={session} />} />
        <Route path='settings' element={<Settings />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Login />} />
        <Route path='aboutus' element={<AboutUs />} />
      </Route>
    )
  );


  // return (
  //   <>
  //     <Flex>
  //     {/* Side Nav stacked ontop of everything but hidden without Auth */}
  //     <SideNav />
  //     <BottomNav />
    
  //     <Routes>
  //       {/* Before User Sign In */}
  //       <Route path='/login' element={<Login />} />
  //       <Route path='/signup' element={<Login />} />
  //       <Route path='/aboutus' element={<AboutUs />} />


  //         {/* 
  //           After User Sign In 
  //           Wrapped in Auth component to restrict to user login
  //         */}
  //         <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
  //         <Route path='/classes' element={<RequireAuth> <Classes /> </RequireAuth>} />
  //         <Route path='/settings' element={<RequireAuth> <Settings /> </RequireAuth>}/>
          
  //         {/* Other */}
  //         <Route path='*' element={<Lost />} />
  //       </Routes>
  //     </Flex>
  //   </>
  // );
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
