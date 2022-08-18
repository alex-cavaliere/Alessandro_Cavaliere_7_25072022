let dicos = [];
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');
const mainInput = document.getElementById('search-input');


// filtre recettes 

mainInput.addEventListener('keyup', function(e){
    let inputValue = e.target.value;
    section.innerHTML = '';
    if(inputValue.length >= 3){
        searchRecipe(inputValue);
    }
});

/* creare funione searchRecipe(), avrà come paramentro l'input dell'utente.
creare due array vuoti: filtres, result. 
percorrere il dizionario dicos con un ciclo for, verificare se l'elemento
include una ricetta nell'input utilizzatore e aggiungere l'elemento
allìarray filtres. Dopodiché bisogna percorrere l'array filtres, 
verificare se l'elemento esiste già ed aggiungerlo all'array result prima di 
percorre quest'ultimo per applicare la funzione displayRecipes(). */

function searchRecipe(recette){
    let filtres = [];
    let result = [];
    for(let element of dicos){
        if(element.cle.toLowerCase().includes(recette.toLowerCase())){
            filtres.push(element.recipe);
        }  
    }
    for(let i = 0; i < filtres.length; i++){
        if(result.length > 0){
            exist = false;
            for(let y = 0; y < result.length; y++){
                if(filtres[i] == result[y]){
                    exist = true;
                    break;
                }
            }
            if(!exist){
                result.push(filtres[i])
            }
        }else{
            result.push(filtres[i]);
        }
    }
    for(let element of result){
        displayRecipes(element, section);
    }
}

function displayRecipes(data, section){
    const Template = recipesFactory(data);
    section.append(Template.getRecipes());
}

// api pour recuperer les donnes json

const section = document.querySelector('section');
async function getData(){
    fetch('./data/recipes.json')
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        const recipes = data.recipes;
        recipes.forEach(recipe => {
            dicos.push({cle: recipe.name, recipe});
            dicos.push({cle: recipe.description, recipe});
            dicos.push({cle: recipe.appliance, recipe});
            recipe.ingredients.forEach(ing => {
                dicos.push({cle: ing.ingredient, recipe});
            })
            recipe.ustensils.forEach(ust => {
                dicos.push({cle: ust, recipe});
            })
            //console.log(dicos)
            displayRecipes(recipe, section);
        })
        
    })
    .catch(function(error){
        console.log(error);
    })
}

async function init(){
    await getData();
}
init();
