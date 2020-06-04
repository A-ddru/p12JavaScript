/* 
    1.- crear una función que pida al usuario los siguientes datos:
    nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
    esa función debe devolver un objeto con la siguiente estructura:
    
    {
        nombre:
        apellidos:
        direccion:{
            calle:
            numero:
            colonia:
            cp:
            alcaldia:
        }
    }

*/


const userData = () => {
    let userName = prompt("Ingresa tu nombre por favor");
    let lastName = prompt("Ingresa tu apellido por favor");
    let streetUser = prompt("Ingresa el nombre de tu calle por favor");
    let numberUser = parseInt(prompt("Ingresa el numero de tu calle por favor"));
    let districtUser = prompt("Ingresa tu colonia por favor");
    let postalCodeUser = parseInt(prompt("Ingresa tu codigo postal por favor"));
    let countryUser = prompt("Ingresa tu alcaldia  municipio por favor");

    let userObjetData = {
        userName,
        lastName, 
        streetUser, 
        numberUser, 
        districtUser, 
        postalCodeUser, 
        countryUser 
    };
    console.log(userObjetData);
};
userData();



/*2.- crear una función que pida al usuario un año (2000, 1989, etc).
la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
por cada auto extraído, mostrar al usuario un mensaje que diga "Opción ${indice}: ${fabricante del auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"
*/

//crear un promp que reciba que año quiere el usuario
//extraer los modelos del carro con map
//por cada opcion que ingrese el usuario si pide 2000 mostrarle 2012 y 2015 y darle las opciones de los modelos con reduce 
//


cars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]



const yearOfTheUserCar = () => {
    let userCarYear = parseInt(prompt("Ingresa un año"));
    let choiceOfCarYear = getCar(cars, userCarYear);
    isNaN(userCarYear) ? (alert("Ingresa un número"), yearOfTheUserCar()) : (choiceOfCarYear,
    choiceOfCarYear.length == 0 ? alert(`No se encontraron autos mayores del año ${userCarYear} `) : null);
  };
  
  const getCar = (array, userCarYear) => {
    let getCar = array.filter((carObject, index) => {
      parseInt(carObject.year) > userCarYear 
      ? alert( `Opción ${index + 1}: ${carObject.maker} ${carObject.model} del año ${ carObject.year }, con ${carObject.hp} caballos de fuerza` )
      : null;
      return parseInt(carObject.year) >= userCarYear;
    });
    return getCar;
  };
  
  yearOfTheUserCar();

//////////////////////////////////////
/* 
//input
[
    {
        version:"1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },{
        version:"2.1.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2.1.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    }
]
//output
[
    {
        version:"1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"1.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"1.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"1.3",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    },
    {
        version:"2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"2.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },{
                version:"2.1.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"2.1.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    },
    {
        version:"3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"3.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"3.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"3.3",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    }
]

*/