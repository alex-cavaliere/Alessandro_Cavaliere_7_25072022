let dicos = [];
const body = document.querySelector('body');
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');
ingredientsDropdown.classList.add('dropdown');
applianceDropdown.classList.add('dropdown');
ustensilsDropdown.classList.add('dropdown');
const filterInput = document.getElementsByName('filter');
const filterDiv = document.getElementById('filter-div');
const input = document.querySelector('input');
const ingredientsFilter = document.getElementById('form1');
const applianceFilter = document.getElementById('form2');
const ustensilsFilter = document.getElementById('form3');
const allDropdowns = document.getElementsByName('dropdownMenuButton');
const chevrons = document.querySelectorAll('button > span > em');

chevrons.forEach(() => {
    allDropdowns.forEach(dropdown => dropdown.addEventListener('click', function(){
        this.chevron = this.children[0].children[0];
        if(this.parentElement.classList.contains('show')){
            this.chevron.style.transform = 'rotate(0deg)';
        }else{
            this.chevron.style.transform = 'rotate(180deg)';
        }
        body.addEventListener('click', function(){
            for(dropdown of allDropdowns){
                this.chevron = dropdown.children[0].children[0];
                console.log(this.chevron);
                if(dropdown.attributes[5].nodeValue && dropdown.parentElement.classList.contains('show')){
                    this.chevron.style.transform = 'rotate(0deg)';
                    console.log(dropdown.attributes[5].nodeValue);
                    break;
                }
            }
        });
    }));
});
// filtre recettes

//console.log(filterInput)
ingredientsFilter.addEventListener('input', function(){
    if(ingredientsFilter.value !== ''){
        let filters = Array.from(document.getElementsByClassName('dropdown-item'));
        filters.forEach(filter => {
            let txtValue = filter.textContent;
            if(txtValue.toLocaleLowerCase().indexOf(ingredientsFilter.value) > -1){
                filter.style.display = '';
            }else{
                filter.style.display = 'none';
            }
        });
    }
});
applianceFilter.addEventListener('input', function(){
    if(applianceFilter.value !== ''){
        let filters = Array.from(document.getElementsByClassName('dropdown-item'));
        filters.forEach(filter => {
            let txtValue = filter.textContent;
            if(txtValue.toLocaleLowerCase().indexOf(applianceFilter.value) > -1){
                filter.style.display = '';
            }else{
                filter.style.display = 'none';
            }
        });
    }
});
ustensilsFilter.addEventListener('input', function(){
    if(ustensilsFilter.value !== ''){
        let filters = Array.from(document.getElementsByClassName('dropdown-item'));
        filters.forEach(filter => {
            let txtValue = filter.textContent;
            if(txtValue.toLocaleLowerCase().indexOf(ustensilsFilter.value) > -1){
                filter.style.display = '';
            }else{
                filter.style.display = 'none';
            }
        });
    }
});

input.addEventListener('keyup', function(e){
    let inputValue = e.target.value;
    section.innerHTML = '';
    if(inputValue.length >= 3){
        searchRecipe(inputValue);
    }
    if(inputValue.length === 0){
        searchRecipe(inputValue);
    }
});

function searchRecipe(recette){
    let filters = [];
    dicos.filter((element) => {
        if (element.cle.toLowerCase().includes(recette.toLowerCase())){
            if(filters.indexOf(element.recipe) < 0){
                filters.push(element.recipe);
                displayRecipes(element.recipe, section);
            }
        }
    });
    if (filters.length < 1){
        section.innerHTML = '<h1> « Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc. </h1>';
    }
}

function displayRecipes(data, section){
    const Template = recipesFactory(data);
    section.append(Template.getRecipes());
}

// api pour recuperer les donnes json

const section = document.getElementById('recipes_cards');
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
                });
                recipe.ustensils.forEach(ust => {
                    dicos.push({cle: ust, recipe});
                });
                //console.log(dicos)
                displayRecipes(recipe, section);
            });
            
        })
        .catch(function(error){
            console.log(error);
        });
}

async function init(){
    await getData();
}
init();
