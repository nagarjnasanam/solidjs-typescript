import type { Component } from 'solid-js'
// import { onError } from "solid-js";
const Home: Component = () => {
    
    // onError(()=>{
    //     console.log("onError")
    // })
    return (
        <div>
            <h1>Home page</h1>
            <button type="button" class="btn btn-primary">Primary</button>

        </div>
    )
}

export default Home