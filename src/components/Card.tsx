import type { Component } from 'solid-js'
import {onMount} from 'solid-js'
// import { onError } from "solid-js";
const Card: Component = (props) => {
    
    onMount(()=>{
        console.log(" card component mounted")
        console.log(props.data)
    })
    return (
        <div>
            {/* <h1>Card page</h1>
            <p>{JSON.stringify(props.data[0])}</p> */}
                       <div class="d-inline-flex m-2 p-1 bg-secondary text-white justify-content-around flex-wrap">  

            <For each={props.data[0].meals} >
                {
                    (item)=>
                         <div class="card" style="width: 18rem;">
                        <div class="card-body p-2 m-1 bg-info justify-content-around">
                          <h5 class="card-title">{item.title}</h5>
                          <h6>readyInMinutes :<span>{item.readyInMinutes}</span></h6>
                          <h6>servings :<span>{item.servings}</span></h6>
                          <a href={item.sourceUrl} class="btn btn-primary">Read REsource</a>
                        </div>
                      </div>

                    // <div class="p-2 m-1 bg-info justify-content-around">Flex item 1</div>
                  
                    
                }

                
            </For>
            </div>


        </div>
    )
}

export default Card