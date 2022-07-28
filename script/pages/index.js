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
            const Template = new Recipes(recipe)
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