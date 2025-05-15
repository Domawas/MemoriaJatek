import Kartya from "./Kartya.js";

export class JatekTer {
  #kartyaLista = [];
  #kivalasztottKartyaLista = [];

  constructor(kartyaLista) {
    this.#kartyaLista = [...kartyaLista, ...kartyaLista];
    this.#kivalasztottKartyaLista = [];

    window.addEventListener("kartyaFordit", (event) => {
        this.#kivalasztottKartyaLista.push(event.detail);
        if (this.#kivalasztottKartyaLista.length === 2) {
          this.ellenorzes();
        }
        console.log(event.detail)
      });
  }

  init() {
    this.kever();
    const szuloElem = document.querySelector('.tarolo');
    this.#kartyaLista.forEach((kartya, index) => {
      const ujKartya = new Kartya(index, kartya.fajlnev, szuloElem);
      
    });
  }

  kever() {
    
  }

  ellenorzes() {
    const [kartya1, kartya2] = this.#kivalasztottKartyaLista;
    if (kartya1.getFajlnev() === kartya2.getFajlnev()) {
      
    } 
  }
}
