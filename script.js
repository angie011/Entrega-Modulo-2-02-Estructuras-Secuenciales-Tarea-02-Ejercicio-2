let metros = 0;
let pulgadas = 0;

metros = Number(prompt('Cantidad de metros de tela: '));
pulgadas = Math.round((metros*1)/0.0254);

alert(`Debe pedir al extranjero ${pulgadas} pulgadas`);