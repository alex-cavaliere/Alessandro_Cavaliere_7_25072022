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
                const a = document.createElement('a');
                a.classList.add('dropdown-item');
                a.setAttribute('href', '#');
                a.textContent = obj.ingredient;
                ingredientsDropdown.append(a);
                p.classList.add('col');
                tables.forEach(table => {
                    if (obj.hasOwnProperty('ingredient')){
                        p.textContent = obj.ingredient;
                        p.style.fontFamily = 'DM Sans-s';
                    }if (obj.hasOwnProperty('quantity')){
                        p.textContent = obj.ingredient + ": " + obj.quantity;    
                    }if(obj.hasOwnProperty('unit')){
                        p.textContent = obj.ingredient + ": " + obj.quantity + " " + obj.unit;
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