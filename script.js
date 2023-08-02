// let & const - var

// tabList es un listado de tabs
let tabList = document.querySelectorAll(".tab-button");
let tabContentList = document.querySelectorAll(".tab-content");

//console.log(tabList);
//console.log(tabContentList);

tabList.forEach(
  //function
  //  function(parametros){instrucciones}
  //  (parametros)=>{instruccioes}
  (tab) => {
    tab.addEventListener("click", (event) => {
      // remover la clase active del resto
      tabList.forEach((tabElement) => {
        tabElement.classList.remove("active");
      });
      tabContentList.forEach((contentElement) => {
        contentElement.classList.remove("active");

        // = / == / ===
        // = define
        // == / === compara, si son 3 iguales, compara valor + tipo
        if (contentElement.id === `content-${event.target.id}`) {
          // `content-${event.target.id}`
          contentElement.classList.add("active");
        }
      });

      //console.log(event.target.id)

      //agrega la clase active al clickeado
      event.target.classList.add("active");
    });
  }
);
