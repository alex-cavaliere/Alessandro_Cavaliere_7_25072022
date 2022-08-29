/*class Recipes {
    constructor(data){
        this._id = data.id
        this._name = data.name
        this._servings = data.servings
        this._ingredients = data.ingredients
        this._time = data.time
        this._description = data.description
        this._appliance = data.appliance
        this._ustensils = data.ustensils
    }
    get id(){
        return this._id
    }
    get name(){
        return this._name
    }
    get servings(){
        return this._servings
    }
    get ingredient(){
        return this._ingredients.ingredient
    }
    get quantity(){
        return this._ingredients.quantity
    }
    get unit(){
        return this._ingredients.unit
    }
    get time(){
        return this._time
    }
    get description(){
        return this._description
    }
    get appliance(){
        return this._appliance
    }
    get ustensils(){
        return this._ustensils
    }
}*/

/* filter tags

        for(let ingredient of filteredIngredients){
            const ing = document.createElement('button');
            ing.classList.add('dropdown-item', 'ingredients');
            ing.setAttribute('id', ingredient);
            ing.textContent = ingredient;
            ing.addEventListener('click', function(){
                //let tagList = Array.from(filterBtn);
                //console.log(tagList)
                const ingredientTag = document.createElement('div');
                const close = document.createElement('i');
                close.classList.add('fa-solid', 'fa-xmark')
                ingredientTag.classList.add('col-1', 'btn');
                ingredientTag.setAttribute('id', 'filter-btn');
                ingredientTag.setAttribute('name', 'filter-btn');
                ingredientTag.style.backgroundColor = '#3282F7';
                ingredientTag.textContent = ingredient;
                ingredientTag.append(close);
                close.addEventListener('click', function(){
                    ingredientTag.style.display = 'none';
                })
                filterDiv.append(ingredientTag);
                section.innerHTML = '';
                searchRecipe(ingredient);
            })
            ingredientsDropdown.append(ing);
        }
        
        // dropdown menu
        totAppliance.push(data.appliance);
        let filteredAppliace = [...new Set(totAppliance)];
        //console.log(filteredAppliace);
        applianceDropdown.innerHTML = '';
        filteredAppliace.forEach(appliance => {
            const app = document.createElement('button');
            app.classList.add('dropdown-item', 'appliance');
            app.setAttribute('id', appliance);
            app.textContent = appliance;
            app.addEventListener('click', function(){
                const applianceTag = document.createElement('div');
                const close = document.createElement('i');
                close.classList.add('fa-solid', 'fa-xmark')
                applianceTag.classList.add('col-1', 'btn');
                applianceTag.setAttribute('id', 'filter-btn');
                applianceTag.setAttribute('name', 'filter-btn');
                applianceTag.style.backgroundColor = '#68D9A4';
                applianceTag.textContent = appliance;
                applianceTag.append(close);
                close.addEventListener('click', function(){
                    applianceTag.style.display = 'none';
                })
                filterDiv.append(applianceTag);
                section.innerHTML = '';
                searchRecipe(appliance);
            })
            applianceDropdown.append(app);
        })
        


        data.ustensils.forEach(obj => {
            ustensil = obj;
            //console.log(dicUstensils)
            totUstensils.push(ustensil);     
        })
        let filteredUstensils = [...new Set(totUstensils)];
        //console.log(filteredUstensils);
        ustensilsDropdown.innerHTML = '';
        for(let ustensil of filteredUstensils){
            const ust = document.createElement('button');
            ust.classList.add('dropdown-item', 'ustensils');
            ust.setAttribute('id', ustensil)
            ust.textContent = ustensil;
            ust.addEventListener('click', function(){
                const ustensilsTag = document.createElement('div');
                const close = document.createElement('i');
                close.classList.add('fa-solid', 'fa-xmark')
                ustensilsTag.classList.add('col-1', 'btn');
                ustensilsTag.setAttribute('id', 'filter-btn');
                ustensilsTag.setAttribute('name', 'filter-btn');
                ustensilsTag.style.backgroundColor = '#ED6454';
                ustensilsTag.textContent = ustensil;
                ustensilsTag.append(close);
                close.addEventListener('click', function(){
                    ustensilsTag.style.display = 'none';
                })
                filterDiv.append(ustensilsTag);
                section.innerHTML = '';
                searchRecipe(ustensil);
            })
            ustensilsDropdown.append(ust);
        }


filters in index 

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
        })
    }
})
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
        })
    }
})



*/


