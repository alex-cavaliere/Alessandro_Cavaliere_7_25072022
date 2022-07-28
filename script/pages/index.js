// api pour recuperer les donnes json

async function getData(){
    fetch('./data/recipes.json')
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        const recipes = data.recipes;
        console.log(recipes);
    })
    .catch(function(error){
        console.log(error);
    })
}

async function init(){
    await getData();
}
init();