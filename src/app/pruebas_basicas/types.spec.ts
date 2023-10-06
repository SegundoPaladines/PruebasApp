import { increment } from "./types";

/* describe('nombre', funcion lamda)*/

/* la funcion para la prueba*/
describe('Prueba basica', ()=>{
  /* la prueba como tal */
  it('debe retornar 30',() => {

    /* variable en la cial llamamos a la funcion */
    const resultado = increment(29);

    /* se espera que retorne 30 */
    expect(resultado).toBe(30);
    /* muchas funciones toBe, en este caso exiten mas */
  });

   /* Otra prueba */
   it('no debe retornar 30',() => {

    /* variable en la cial llamamos a la funcion */
    const resultado = increment(10);

    /* se espera que no retorne 30 */
    expect(resultado).not.toBe(30);
    /* muchas funciones toBe, en este caso exiten mas */
  });

   /* ejm de prueba mala <- comentada para permitir que nos muestre las demas pruebas
   it('debe retornar 30',() => {

    variable en la cial llamamos a la funcion
    const resultado = increment(21);

    se espera que retorne 30
    expect(resultado).toBe(30);
    muchas funciones toBe, en este caso exiten mas
  });
  */
});

