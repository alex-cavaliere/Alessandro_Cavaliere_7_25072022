```tefcha
Start 
dicos = ensemble des recettes, ingredients, ustensils et appliance 
entry User_input
if User_input >= 3 
    function searchRecipe(User_input){
    filtres = array_1
    result = array_2
    for(element of dicos)
    if element.includes(User_input)
        filtres.push(element)
    else 
        User_input
    
    for(let i = 0; i < filtres.length; i++)
    if result.length > 0
        exist = false
        for(let y = 0; y < result.length; y++)
        if filtres[i] == result[y] 
            exist = true
        else
            Do Nothing    
        if exist = false
            result.push(filtres[i])
        else 
        Do Nothing
    else
        result.push(filtres[i])

    for(element of result)
    displayRecipes
        
else
    User_input
End
    


```
