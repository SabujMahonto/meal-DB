
// Search meals 
const searchMeals = () =>{
    const input = document.getElementById('input_fill');
    const inputText = input.value;
        input.value = '';
    // console.log(inputText)

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

// Search for  display meals 
const displayMeals = (meals) =>{
    const showMeals = document.getElementById('show_meals');
        showMeals.textContent = '';

    meals.forEach(meal =>{
        // console.log(meal)
        const div = document.createElement('div');
            div.classList.add('card');

            div.innerHTML = `<div onclick="displayById(${meal.idMeal})" >
                             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p>${meal.strInstructions.slice(0,200)}</p>
                            </div>
                            </div>
            
            `;
            showMeals.appendChild(div)
    
    })
}

const displayById = (mealId) =>{
    // console.log(mealId)
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

fetch(url)
.then(res => res.json())
.then(data => singleMeal(data.meals[0]))

}

// click to show single meal item 

const singleMeal = (singleMeal) =>{
    // console.log(singleMeal)
    const singleMealDetails = document.getElementById('show_single_meal')
    singleMealDetails.textContent = '';
    const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `<div>
                            <img src="${singleMeal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${singleMeal.strMeal}</h5>
                            <p>${singleMeal.strInstructions.slice(0,150)}</p>
                            <a href="${singleMeal.strYoutube}" class="btn btn-primary">Go somewhere</a>
                             </div>
                        </div>`;
                        singleMealDetails.appendChild(div) ;            

    

}