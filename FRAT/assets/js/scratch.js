this.addEventListener("DOMContentLoaded", () => {

    const add = (fratFidat) => {
        let par = document.createElement("p");
        var txt = document.createTextNode(fratFidat);
        par.appendChild(txt);
        containerFratFidat.append(par);
    }

    const show = (el) => {
        if(el.classList.contains("hide")) {
            el.classList.remove("hide");
            el.classList.add("show");
        }
    }

    const hide = (el) => {
        if(el.classList.contains("show")) {
            el.classList.remove("show");
            el.classList.add("hide");
        }
    }

    let addButton = document.querySelector(".container-add");
    let containerFratFidat = document.querySelector(".container-frat_fidat");
    let containerTextbox = document.querySelector(".container-textbox");
    let containerTextboxInput = document.querySelector(".container-textbox-input");
    let noFratFidat = document.querySelector(".container-frat_fidat-par");

    addButton.addEventListener("click", () => {
        containerTextboxInput.value = "";
        show(containerTextbox);
    });

    containerTextboxInput.addEventListener("keydown", (e) => {
        if(e.keyCode == 13) {
            if(containerFratFidat.childElementCount >= 1) {
                hide(noFratFidat);
            }
            
            add(containerTextboxInput.value);
            hide(containerTextbox);
        }
    });
    
});