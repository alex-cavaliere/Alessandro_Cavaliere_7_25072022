let dicos = [];
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');
const filterInput = document.getElementsByName('filter');
const filterDiv = document.getElementById('filter-div');
const input = document.querySelector('input');

// filtre recettes

filterInput.forEach(filter => filter.addEventListener('keyup', function(e){
    let inputValue = e.target.value.toLowerCase();
    let filters = Array.from(document.getElementsByClassName('dropdown-item'));
    filters.forEach(item => item.addEventListener('click', function(){
        const itemCol = document.createElement('div');
        const close = document.createElement('i');
        close.classList.add('fa-solid', 'fa-xmark');
        itemCol.classList.add('col-1', 'btn', 'actived');
        itemCol.setAttribute('id', 'filter-btn');
        itemCol.textContent = item.textContent;
        itemCol.append(close);
        filterDiv.innerHTML = '';
        filterDiv.append(itemCol);
        close.addEventListener('click', function(){
            if(itemCol.classList.contains('actived')){
                filterDiv.remove(itemCol);
                itemCol.classList.remove('actived');
            }if(!itemCol.classList.contains('actived')){
                filterDiv.append(itemCol);
                itemCol.classList.add('actived');
            }
        })
        dicos.forEach(element => {
            if (element.cle.toLowerCase().indexOf(item.textContent.toLowerCase()) > -1){
                section.innerHTML = '';
                searchRecipe(item.textContent);
            }
        })
    }))
    filters.forEach(filter => {
        let txtValue = filter.textContent;
        if(txtValue.toLocaleLowerCase().indexOf(inputValue) > -1){
            filter.style.display = '';
        }else{
            filter.style.display = 'none';
        }
    })}
))

input.addEventListener('keyup', function(e){
    let inputValue = e.target.value;
    section.innerHTML = '';
    if(inputValue.length >= 3){
        searchRecipe(inputValue);
    }if(inputValue.length === 0){
        searchRecipe(inputValue)
    }
})

function searchRecipe(recette){
    let filters = [];
    dicos.forEach(element => {
        if (element.cle.toLowerCase().indexOf(recette.toLowerCase()) > -1){
            if(filters.indexOf(element.recipe) < 0){
                filters.push(element.recipe);
                displayRecipes(element.recipe, section);
            }
        }
    })
};

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
