let dicos = [];
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');
const mainInput = document.getElementById('search-input');
const filterDiv = document.getElementById('filter-div');
const filterInput = document.getElementsByName('filter');

// filtre recettes 

mainInput.addEventListener('keyup', function(e){
    let inputValue = e.target.value;
    section.innerHTML = '';
    if(inputValue.length >= 3){
        searchRecipe(inputValue);
    }else{
        searchRecipe(inputValue);
    }
})
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
        if(this.parentElement.id === 'ingredients-dropdown'){
            itemCol.style.backgroundColor = '#3282F7';
        }else if(this.parentElement.id === 'appliance-dropdown'){
            itemCol.style.backgroundColor = '#68D9A4'
        }else if(this.parentElement.id === 'ustensils-dropdown'){
            itemCol.style.backgroundColor = '#ED6454';
        }
        close.addEventListener('click', function(){
            if(itemCol.classList.contains('actived')){
                itemCol.classList.remove('actived');
            }if(!itemCol.classList.contains('actived')){
                itemCol.classList.add('actived');
                itemCol.style.display = 'none';
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
