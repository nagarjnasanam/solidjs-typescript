import type { Component } from 'solid-js'
import {onMount,createRenderEffect,createSignal} from 'solid-js'
import axios from 'axios'
import {API_KEY,meals,setMeals} from '../store/meal.js'
import Card from '../components/Card'
import {createStore} from 'solid-js/store'


const MealPlan: Component = () => {
const [timeFrame, setTimeFrame] = createSignal("day");
const [diet, setDiet] = createSignal("vegetarian");
const [targetCalories, setTargetCalories] = createSignal(2000);
const [exclude, setExclude] = createSignal("pumpkin");



    const [searchparams,setSearchparams]=createStore({
        timeFrame:'day',
        diet : 'vegetarien',
        targetCalories:2000,
        exclude:'pumpkin'
    })
    function model(el, value) {
        console.log(el.value)
        console.log('el',el)
        console.log('value',value)
        const [field, setField] = value();
        createRenderEffect(() => (el.value = field()));
        el.addEventListener("input", (e) => setField(e.target.value));
      }
    const geneRateMeal = async()=>{
        console.log("generating meal")
        // https://api.spoonacular.com/mealplanner/generate?apiKey=116f8790f37c49e2944ae148accd5b5c&timeFrame=day&diet=vegetarien
       await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=${timeFrame()}&diet=${diet()}&targetCalories=${targetCalories()}&exclude=${exclude()}`).then((res)=>{
        console.log(res)
        
        setMeals(()=>[{meals:res.data.meals,nutrients:res.data.nutrients}])
        console.log(meals()[0].nutrients.fat)
    })
    }
   onMount(()=>{
    geneRateMeal()
   })
    return (
 <div>
            {/* <p>AO{API_KEY}</p> */}

            <h1>Meal Plan</h1>

 <div class="d-sm-inline-flex flex-column justify-content-center p-2">
     <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">TimeFrame</span>
      <input type="text" class="form-control"  use:model={[timeFrame, setTimeFrame]} placeholder="Ex.day or week"  aria-label="Username" aria-describedby="basic-addon1" />
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Diet</span>
        <input type="text" class="form-control" use:model={[diet, setDiet]} placeholder="Ex.Vegetatien,Gluten Free" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
    <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">targetCalories</span>
        <input type="text" class="form-control" use:model={[targetCalories, setTargetCalories]} placeholder="Ex.1000,2000 " aria-label="Username" aria-describedby="basic-addon1" />
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Exclude</span>
        <input type="text" class="form-control" use:model={[exclude, setExclude]} placeholder="Ex.fish,oil " aria-label="Username" aria-describedby="basic-addon1" />
    </div>


 </div>

 <p></p>
 <button onClick={geneRateMeal} class='btn btn-primary'>Generate Meal Plan</button>


            
            {meals().length>0 && <Card data={meals()} /> }

           
            


        </div>
    )
}

export default MealPlan