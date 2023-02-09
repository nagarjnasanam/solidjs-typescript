import type { Component } from 'solid-js'
import Store from '../store'
import { For,onMount } from 'solid-js'
const Users: Component = () => {
    const [store,setStore] = Store
    onMount(()=>{
        if(store.users.length){
            setStore('users',[...store.users,'us2'])
        }
    })
    return (
        <div>
            <h1>Users page</h1>
            <For each={store.users}>
                {
                   (user,i)=> {
                    return <div>
                        <p>{i() +1}:{user}</p>
                    </div>
                   } 
                }
            </For>

        </div>
    )
}

export default Users