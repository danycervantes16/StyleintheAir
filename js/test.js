function apareceScroll(){
    var html = document.getElementsByTagName ("html")[0];
    // console.log(html)
    var elementoAparece = document.getElementsByClassName ("aparece");
    console.log(elementoAparece)
    document.addEventListener("wheel" , function(){
        var altura = html.scrollTop;
        console.log(altura)
        for (i=0; i < elementoAparece.length; i++){
            var alturaImagen = elementoAparece[i].offsetTop;
            if (altura > alturaImagen - 200 && altura < alturaImagen + 260){ //-400+460=60
                elementoAparece[i].style.opacity = 1;
            } else {
                elementoAparece[i].style.opacity = 0;
            }
        }
    })
}
apareceScroll();

let dany = { 
    'namer': 'daniel', 
    'nationality' : 'MX',
    'age' : 17,
    'hobby' : 'dance'
    }
let { namer, nationality, age} = dany
console.log(namer, nationality, age)
console.log(dany.namer, dany.nationality, dany.age)

let team1 = ['leo', 'daana', 'diana']
let team2 = ['javi','dany','alis']
let teamfinal = ['elena'].concat(team1, team2)
console.log(teamfinal)

let namer = 'dany'
let age = 17 
let obj = { namer, age}
console.log(obj)

const names = [
    {namer = }
]
}