// api pour recuperer les donnes json
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');

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
            const Template = new Recipes(recipe)
            const tables = Array.from(document.getElementsByClassName('table'));
            // iteration des ingredients des recettes
            Template._ingredients.forEach(obj => {
                const p = document.createElement('p');
                // dropdown menu
                const a = document.createElement('a');
                a.classList.add('dropdown-item');
                a.setAttribute('href', '#');
                let ingredient = obj.ingredient;
                let quantity = obj.quantity;
                let unit = obj.unit;
                a.textContent = ingredient;
                ingredientsDropdown.append(a);
                p.classList.add('col', 'item');
                // iteration des tableaux des recettes
                tables.forEach(table => {
                    if (Object.hasOwnProperty.call(obj, 'ingredient')){
                        p.textContent = ingredient;
                    }if (Object.hasOwnProperty.call(obj,'quantity')){
                        p.textContent = ingredient + ": " + quantity;    
                    }if(Object.hasOwnProperty.call(obj,'unit')){
                        p.textContent = ingredient + ": " + quantity + " " + unit;
                    }
                    table.append(p);  
                })
            })
            const app = document.createElement('a');
            app.classList.add('dropdown-item');
            app.setAttribute('href', '#');
            app.textContent = Template._appliance;
            applianceDropdown.appendChild(app);

            const ust = document.createElement('a');
            ust.classList.add('dropdown-item');
            ust.setAttribute('href', '#');
            ust.textContent = Template._ustensils;
            ustensilsDropdown.appendChild(ust);
            
            section.append(Template.createCardDOM());
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