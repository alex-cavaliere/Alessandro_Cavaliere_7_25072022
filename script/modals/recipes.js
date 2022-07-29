const row = document.querySelector('section > .row');
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
                                ${this._time}
                            </p>
                        </div>
                        <div class="row" role="text">
                            <table>
                                <tr>
                                    <th>ingredient</th>
                                    <td>400ml</td>
                                </tr>
                            </table>
                            <p class="col-1"></p>
                            <p class="col-7 card-text text-truncate">${this._description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // iteration des ingredients des recettes
        this._ingredients.forEach(ingredient => {
           let frase = ingredient.ingredient.concat(": " + ingredient.quantity);
           if(ingredient.hasOwnProperty('unit')){
            let prova = frase.concat(" " + ingredient.unit);
            console.log(prova);
            }else{
                console.log(frase);
            }
        })
        wrapper.innerHTML = cardTemplate;
        return wrapper;
    }
}