export default class Kartya {
  #fajlnev = "";
  #allapot = false;
  #blokkolt = false; //ha true akkor nem lehet kattintani
  #divElem;
  #imgElem;
  #id

  constructor(id, fajlnev, szuloElem) {
    this.#id = id;
    this.#fajlnev = fajlnev;
    this.#allapot = false;
    this.#blokkolt = false;
    this.#divElem = szuloElem;
    this.#megjelenit();
    this.#kattintasTrigger();
    window.addEventListener("gameBlock", () => {
      this.#blokkolt = true;
    });

    window.addEventListener("gameUnblock", () => {
      this.#blokkolt = false;
    });


  }

  #megjelenit() {
    let html = `
      <div class="kartya">
        <img src="kepek/hatter.jpg" alt="kép">
      </div>
      `;
    this.#divElem.insertAdjacentHTML("beforeend", html);


  }

  setAllapot() {
    this.#allapot = !this.#allapot;
    this.setLap();
  }

  setLap() {
    /* Modositja a kép src attributumát */

    if (this.#allapot) {
      this.#imgElem.src = this.#fajlnev;
    } else {
      this.#imgElem.src = "kepek/hatter.jpg";
    }



  }

  getFajlnev() {
    return this.#fajlnev;
  }

  blokkol() {
    this.#blokkolt = true;
    this.#divElem.classList.add("blokkolt");
  }

  #kattintasTrigger() {
    /*itt hozzuk létre a saját eseményt */
    this.#imgElem = document.querySelector(".kartya:last-child img");

    this.#imgElem.addEventListener("click", () => {

      if (!this.#blokkolt) {
        const e = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(e);
        this.setAllapot()
      }
    });


  }
}
