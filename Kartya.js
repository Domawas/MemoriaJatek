export default class Kartya {
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;
  
    constructor(id, fajlnev, szuloElem) {
      this.id = id;
      this.#fajlnev = fajlnev;
      this.#allapot = false;
      this.#blokkolt = false;
  
      this.#divElem = document.createElement("div");
      this.#divElem.classList.add("kartya");
  
      this.#imgElem = document.createElement("img");
      this.#imgElem.src = "kepek/hatter.jpg";
      this.#divElem.appendChild(this.#imgElem);
      szuloElem.appendChild(this.#divElem);
  
      this.#divElem.addEventListener("click", () => {
        if (!this.#blokkolt && !this.#allapot) {
          this.setAllapot(true);
          this.kattintasTrigger();
        }
      });
    }
  
    setAllapot(ujAllapot) {
      this.#allapot = ujAllapot;
      this.setLap();
    }
  
    setLap() {
      if (this.#allapot) {
        this.#imgElem.src = this.#fajlnev;
      } 
    }
  
    getFajlnev() {
      return this.#fajlnev;
    }
  
    blokkol() {
      this.#blokkolt = true;
      this.#divElem.classList.add("blokkolt");
    }
  
    kattintasTrigger() {
      const event = new CustomEvent("kartyaFordit", { detail: this });
      window.dispatchEvent(event);
    }
  }
  