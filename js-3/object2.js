let persona = {
    nombre: "Paola Briceno",
    edad: "25",
    ciudad: "Villavicencio",
    profesion: "Ingeniero Químico",
};

console.log(persona);

function presentacion(persona){
    return `${persona.nombre} ${persona.edad} ${persona.ciudad} ${persona.profesion}`;
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["compatir con mi hijo", "estudiar", "montar bicicleta"];
console.log("\nHobbies:");
for(let i=0; i<persona.hobbies.length; i++){
    console.log(persona.hobbies[i]);
}