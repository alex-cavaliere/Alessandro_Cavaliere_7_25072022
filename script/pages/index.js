let dicos = [];
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');
const filterInput = document.getElementsByName('filter');
const filterDiv = document.getElementById('filter-div');
const input = document.querySelector('input');
const ingredientsFilter = document.getElementById('form1')
const applianceFilter = document.getElementById('form2')
const ustensilsFilter = document.getElementById('form3')
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
        })
    }
})


/*filterInput.forEach(filter => filter.addEventListener('keyup', function(e){
    let inputValue = e.target.value.toLowerCase();
    let filters = Array.from(document.getElementsByClassName('dropdown-item'));
    filters.forEach(item => item.addEventListener('click', function(){
        item.addEventListener('click', function(){
            console.log(item.id)
            section.innerHTML = '';
            searchRecipe(item.id)
        })
        /*
        const itemCol = document.createElement('div');
        const close = document.createElement('i');
        close.classList.add('fa-solid', 'fa-xmark');
        itemCol.classList.add('col-1', 'btn', 'actived');
        itemCol.setAttribute('id', 'filter-btn');
        if(item.classList.contains('ingredients')){
            itemCol.style.backgroundColor = '#3282F7';
        }if(item.classList.contains('appliance')){
            itemCol.style.backgroundColor = '#68D9A4'
        }if(item.classList.contains('ustensils-dropdown')){
            itemCol.style.backgroundColor = '#ED6454';
        }
        itemCol.textContent = item.textContent;
        itemCol.append(close);
        filterDiv.innerHTML = '';
        filterDiv.append(itemCol);
        close.addEventListener('click', function(){
            if(itemCol.classList.contains('actived')){
                itemCol.classList.remove('actived');
                itemCol.style.display = 'none';
            }if(!itemCol.classList.contains('actived')){
                itemCol.classList.add('actived');
            }
        })
        section.innerHTML = '';
        searchRecipe(item.textContent, section)
        /*dicos.forEach(element => {
            if (element.cle.toLowerCase().includes(item.textContent.toLowerCase())){
                //section.innerHTML = '';
                console.log(item.textContent)
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
*/

input.addEventListener('keyup', function(e){
    let inputValue = e.target.value;
    section.innerHTML = '';
    if(inputValue.length >= 3){
        searchRecipe(inputValue);
    }
    if(inputValue.length === 0){
        searchRecipe(inputValue)
    }
})

function searchRecipe(recette){
    let filters = [];
    let exist = false;
    console.log(recette)
    dicos.forEach(element => {
        if (element.cle.toLowerCase().includes(recette.toLowerCase())){
            exist = true;
            if(filters.indexOf(element.recipe) < 0){
                filters.push(element.recipe);
                displayRecipes(element.recipe, section);
            }else{
                exist = false;
            }
        }else{
            console.log(recette);
        }
    })
    if (!exist){
        section.innerHTML = 'Error';
    }
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
