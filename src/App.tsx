import type { Component } from 'solid-js';
import {Routes,Route,A} from '@solidjs/router'
import Store from './store';
import logo from './logo.svg';
import styles from './App.module.css';
// import Home from './views/Home';
// import Users from './views/Users';
import { lazy,onMount } from 'solid-js';
//lazy loading
const Home = lazy(()=> import('./views/Home'))
const Users = lazy(()=> import('./views/Users'))
const SearchMeal = lazy(()=> import('./views/SearchMeal'))
// const MealPlan = lazy(()=> import('./views/MealPlan'))
import MealPlan from "./views/MealPlan"

import Header from './components/Nav.tsx'
import Footer from "./components/Footer.tsx"
const {localStorage} =window;
const App: Component = () => {
  const [store,setStore] = Store;
  onMount(()=>{
    if(store.users.length==0){
      //save to ls
      const users = JSON.stringify(['user01','us3'])
      localStorage.setItem('users',users)
    }
    //save to globalstate
    const usersString = localStorage.getItem('users')
    if(usersString!== null){
    setStore('users',JSON.parse(usersString));
    }
  })
  return (
    <>
    <Header />
    {/* <nav class={styles.navigation}>
      <A href='/'>Home</A>
      <A href='/users'>Users</A>
      <A href="/search">Seach</A>
     </nav> */}
   <Routes>
    <Route path='/' component={Home} />
    <Route path='/users' component={Users} />
    <Route path='/search' component={SearchMeal} />
    <Route path='/meal' component={MealPlan} />

    <Route path={['login','sign-up']} element={<h1>This is the login/signup screen</h1>} />
   </Routes>
   {/* <Footer /> */}
   </>
  );
};

export default App;
