


const displayItem = () => {

const button =  document.getElementById('input').value
  fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${button}`)
  .then(res => res.json())
  .then(data => displayCountries(data.meals))
  
  const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = "";
   countries.forEach(country => {
    // const country = countries[i];
        // const countryDiv = document.createElement('div');
    
      
    // countryDiv.className = 'country';
    
    countriesDiv.innerHTML +=  `
<div class="country">
      <img src ="${country.strMealThumb}"
     <h3 class='meal-name'>${country.strMeal}</h3>
     <p>${country.strArea} </p>
      <button onclick="displayIngredients('${country.idMeal}')"> intgredients</button>
  
      </div>

    `

    // countryDiv.innerHTML = countryInfo ;
    
    
    // countriesDiv.appendChild(countryDiv);
     
   });
    
  }
  
}


const displayIngredients = id => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  // console.log(url);

  fetch(url)
  .then(res => res.json())
  .then(data => food(data.meals[0]));
  


function food (item){
   const lastDiv = document.createElement('div');
   lastDiv.innerHTML ="";
console.log(item);
const ingerdinetDiv = document.getElementById("initem") ;
  // const lastDiv = 
  ingerdinetDiv.innerHTML ="";

  ingerdinetDiv.innerHTML +=

  `
<img src="${item.str}
  <h2> ${item.strMeal}</h2>
    <ul>

    <li>${item.strIngredient1}</li>
    <li>${item.strIngredient2}</li>
    <li>${item.strIngredient3}</li>
    <li>${item.strIngredient4}</li>
    <li>${item.strIngredient5}</li>
    <li>${item.strIngredient6}</li>
    <li>${item.strIngredient7}</li>
    <li>${item.strIngredient8}</li>
    <li>${item.strIngredient9}</li>



    
    </ul>
  
   
 `
  

// lastDiv.innerHTML = lastDivInfo;
//  ingerdinetDiv.appendChild(lastDiv);
}

}


   
// item.insertAdjacentHTML ("beforebegin" ,  `<li>${data.meals[0].strIngredient1},${data.meals[0].strIngredient2},${data.meals[0].strIngredient3} </li>`


  // console.log(data.meals[0])

  // console.log(data.meals[0].strIngredient1);

//  const ingerdinet = item => {
//    data.meals[0] = item;
//    alert(.strIngredient1);
//  }




  //   inGredients(data.meals[0]) );


  // const inGredientsItem = inGredients => {

  //     alert(inGredients[0]);

  // }console.log(data.meals[0].strIngredient1)
  //console.log(data.meals[0])
  // const ingerdinetDiv = document.createElement('div');












// for(let i = 3; i < value.length; i++){
//   if(value[i] === null || value[i] === " "){
//       break;
//   }
//   else{
//       console.log(value[i])
//   }
// }