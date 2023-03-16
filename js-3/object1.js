const pedro = {
    nombre: "Pedro Perez",
    edad: "30",
    activo: "true",
    hobbies: ["programar", "squash", "piano"],
    saluda: function () {
        console.log("Hola, me llamo ", this.nombre ? this.nombre : 'John Doe');
    }

};
console.log(pedro["edad"]);

const estaturaObj = {
    estatura: 1.8
};

//const pedroWithEstatura = Object.assign({}, pedro, estaturaObj);
//console.log(pedroWithEstatura);

//delete pedro["activo"];

//console.log(pedro);

//console.log(pedro["nombre"]);
//console.log(pedro["edad"]);
//console.log(pedro["activo"]);
//console.log(pedro["hobbies"]);

console.log(pedro['saluda']);
pedro['saluda']();