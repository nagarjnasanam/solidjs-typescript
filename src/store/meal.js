import {createStore} from 'solid-js/store'
import  {createSignal} from 'solid-js'

const API_KEY='116f8790f37c49e2944ae148accd5b5c'

    const [meals,setMeals] = createSignal({
    })

export {API_KEY,meals,setMeals}