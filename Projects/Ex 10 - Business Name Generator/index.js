/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

function Generator (x, y, z) {
    let num = Math.floor(Math.random()*3);
    if(num == 0)
    {
        return x;
    }

    else if (num == 1) {
        return y;
    } else {
        return z;
    }
}

console.log("Generated name is " + Generator("Crazy", "Amazing", "Fire") + Generator("Engine", "Foods", "Garments") + Generator("Bros", "Limited", "Hub") + "."); // function call