let dicIngredients = {};
let dicUstensils = {};
let totIngredients = [];
let totUstensils = [];


function recipesFactory(data){
    const recipe = new Recipes(data);

    function getRecipes(){
        //console.log(recipe)
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper', 'col');
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', 'mt-4');
        const img = document.createElement('img');
        img.setAttribute('src', './logo/img.jpg');
        img.classList.add('card-img-top');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const cardText = document.createElement('div');
        cardText.classList.add('card-text', 'row');
        const h2 = document.createElement('h2');
        h2.classList.add('col-8');
        h2.textContent = recipe._name;
        const time = document.createElement('p');
        time.setAttribute('id', 'time');
        time.classList.add('col');
        const spanImg = document.createElement('span');
        const spanTime = document.createElement('span');
        spanTime.textContent = recipe._time + ' min';
        spanTime.classList.add('time-icon');
        spanImg.classList.add('time-text');
        const timeImg = document.createElement('img');
        timeImg.setAttribute('src', './logo/time_vector.png');
        timeImg.setAttribute('alt', 'time vector');
        const recipeContainer = document.createElement('div');
        const table = document.createElement('div');
        const description = document.createElement('p');
        description.classList.add('col-6', 'card-text');
        description.textContent = recipe._description;
        table.classList.add('table', 'col');
        //iteration des toutes les ingredients
        recipe._ingredients.forEach(obj => {
            const p = document.createElement('p');
            let ingredient = obj.ingredient;
            let quantity = obj.quantity;
            let unit = obj.unit;
            dicIngredients.cle = ingredient;
            p.classList.add('col', 'item');

            const a = document.createElement('a');
            a.classList.add('dropdown-item');
            a.setAttribute('href', '#');
            //console.log(dicIngredients)
            
            // iteration des tableaux des recettes
            if (Object.hasOwnProperty.call(obj, 'ingredient')){
                p.innerHTML = `<span>${ingredient}</span>`;
            }if (Object.hasOwnProperty.call(obj,'quantity')){
                p.innerHTML = `<span>${ingredient}: </span> ${quantity}`;    
            }if(Object.hasOwnProperty.call(obj,'unit')){
                p.innerHTML = `<span>${ingredient}: </span>${quantity} ${unit}`;
            }
            table.append(p);             
              
            totIngredients.push(dicIngredients.cle);
            console.log(totIngredients);
            for(let x of totIngredients){
                //console.log(totIngredients.indexOf(x), x)
            }
        });
        //console.log(dicIngredients);
    
        
        // dropdown menu
        
        const app = document.createElement('a');
        app.classList.add('dropdown-item');
        app.setAttribute('href', '#');
        app.textContent = recipe._appliance;
        applianceDropdown.appendChild(app);

        recipe._ustensils.forEach(obj => {
            dicUstensils.cle = obj;
            const ust = document.createElement('a');
            ust.classList.add('dropdown-item');
            ust.setAttribute('href', '#');
            ust.textContent = obj;
            ustensilsDropdown.appendChild(ust);
            totUstensils.push(dicUstensils.cle);
            //console.log(totUstensils);    
        })

        recipeContainer.classList.add('row');
        recipeContainer.setAttribute('role', 'text');
        recipeContainer.append(table);
        recipeContainer.append(description);
        time.append(spanImg);
        time.append(spanTime);
        spanImg.append(timeImg);
        cardText.append(h2);
        cardText.append(time);
        cardText.append(recipeContainer);
        cardBody.append(cardText);
        recipeCard.append(img);      
        recipeCard.append(cardBody);  
        wrapper.append(recipeCard);
        return wrapper;
    }
    return {getRecipes};
}
