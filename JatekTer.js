import Kartya from "./Kartya.js";


export default class JatekTer {
  #kartyaLista = [];
  #szuloElem = document.querySelector('.jatekter');
  #kivalasztottKartyaLista = [];

  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    this.#init();
  }

  #init() {
    this.#kever();
    this.#kartyaLista.forEach((element, index) => {
      const kartya = new Kartya(index, element, this.#szuloElem);
    });
    this.#ellenorzes();
  }

  #kever() {
    /* listakezelo metodussal keverdd  sort()*/
    this.#kartyaLista.sort((a, b) => {
      return Math.random() - 0.5;
    });
  }

  #ellenorzes() {
    /* itt iratkozunk fel a fordit eseményre */
    window.addEventListener("fordit", (event) => {
      console.log(event.detail);
      /* meg kell nezni hogy a két kiválasztott kártya egyforma e? */
      
      console.log(this.#kivalasztottKartyaLista);
      if (this.#kivalasztottKartyaLista.length < 2) {
        this.#kivalasztottKartyaLista.push(event.detail);
      }

      if (this.#kivalasztottKartyaLista.length === 2) {
        this.#triggerBlock();
        /* osssze kell hasonlitani a két elemnek a fájlnevét */
        /*ki kell üríteni a listát */
        /* vissza kell fordítani a kártyákat */
        let f1 = this.#kivalasztottKartyaLista[0];
        let f2 = this.#kivalasztottKartyaLista[1];
        if (f1.getFajlnev() === f2.getFajlnev()) {
          console.log("Egyezés van!");
          createStars();
          this.#triggerUnblock();
        } else {
          console.log("Nincs egyezés!");
          /* vissza kell forditani a kartyakat */
          setTimeout(() => {
            f1.setAllapot();
            f2.setAllapot();
            this.#triggerUnblock();
          
          }, 2000);
        }
       
        this.#kivalasztottKartyaLista.splice(0);
      }
      console.log(this.#kivalasztottKartyaLista);
    });
  }

  #triggerBlock() {
    const e = new CustomEvent("gameBlock");
    window.dispatchEvent(e);
  }

  #triggerUnblock() {
    const e = new CustomEvent("gameUnblock");
    window.dispatchEvent(e);
  }
}





