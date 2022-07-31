const row = document.querySelector('section > .row');
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const applianceDropdown = document.getElementById('appliance-dropdown');
const ustensilsDropdown = document.getElementById('ustensils-dropdown');

class Recipes {
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
    createCardDOM(){
        const wrapper = document.createElement('div');
        wrapper.classList.add('card-wrapper', 'col-4');
        const cardTemplate = 
        `
            <div id="card">
                <div class="card mt-4">
                    <img src="./logo/img.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-text row p-0">
                            <h2 class="col-8">${this._name}</h2>
                            <p id="time" class="col">
                                <span>
                                    <img src="./logo/time_vector.png" alt="time vector">
                                </span>
                                ${this._time} min
                            </p>
                        </div>
                        <div class="row" role="text">
                            <div class="table">
                            </div>
                            <p class="col-7 card-text">${this._description}</p>
                        </div>
                    </div>
                </div>
            </div>

        `;
        const tables = Array.from(document.getElementsByClassName('table'));
        // iteration des ingredients des recettes
        this._ingredients.forEach(obj => {
            const p = document.createElement('p');
            const a = document.createElement('a');
            a.classList.add('dropdown-item');
            a.setAttribute('href', '#');
            a.textContent = obj.ingredient;
            ingredientsDropdown.appendChild(a);
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
                table.appendChild(p);  
            })
        })
            const app = document.createElement('a');
            app.classList.add('dropdown-item');
            app.setAttribute('href', '#');
            app.textContent = this._appliance;
            applianceDropdown.appendChild(app);

            const ust = document.createElement('a');
            ust.classList.add('dropdown-item');
            ust.setAttribute('href', '#');
            ust.textContent = this._ustensils;
            ustensilsDropdown.appendChild(ust);

        wrapper.innerHTML = cardTemplate;
        return wrapper;
    }
}
