import { Player } from "./clases";

describe('Pruebas Clase Player', ()=>{

  /*Declarar un objeto de tipo player*/
  let player1: Player;

  /*Cada vez que se ejecuten las pruebas se instancie denuevo, es decir, se resetea */
  beforeEach(() => {
    player1 = new Player();
  });

  it('Deberia retornar 2000 de vida si el jugador recibe 2000 de daño',()=>{
    const damage = player1.takeDamage(2000);
    expect(damage).toBe(2000);
  });

  it('Deberia retornar 3500 de vida si el jugador recibe 500 de daño',()=>{
    const damage = player1.takeDamage(500);
    expect(damage).toBe(3500);
  });
});

