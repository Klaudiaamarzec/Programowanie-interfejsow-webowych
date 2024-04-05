"use strict"   

const closingButton = document.getElementById("close");
const emptyList = document.getElementById("empty-list");
const list = document.getElementById("todo-list");
let lastDeletedItem = null; // Zmienna do przechowywania ostatnio usuniętego elementu

const addToList=() => {    
    
    const inputToDo = document.getElementById("todoInput");   

    let value = inputToDo.value;
    
    if(value === "")
    {
        console.log("Pole jest puste");
        const modal = document.getElementById("emptyBox");
        modal.showModal();

        closingButton.addEventListener("click", () => {
            emptyBox.close();
        });

        return;
    }
    else
    {
        console.log("Wpisano: ", value);

        const listItem = document.createElement("div");  /*element listy*/
        listItem.classList.add("list-item"); 

        // Usuniecie pola empty-list
        if (emptyList) {
            emptyList.style.display = "none";
        }

        // Stworzenie elementu dla tekstu zadania
        const taskText = document.createElement("p");
        taskText.classList.add("textItem");
        taskText.innerText = value;
 
        // Stworzenie przycisku do usuwania elementu
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";

        // Stworzenie elementu daty
        const doneDate = document.createElement("p");
        doneDate.classList.add("dateItem");
        doneDate.innerText = "date";
 
        // Dodanie tekstu zadania i przycisku do elementu div
        listItem.appendChild(taskText);
        listItem.appendChild(doneDate);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);  /*dodanie do listy*/

        // Wyczyszczenie zawartości pola input
        inputToDo.value = "";

        taskText.addEventListener("click", () =>
        {
            if(taskText.style.textDecoration != "line-through")
            {
                taskText.style.textDecoration = "line-through";
                taskText.style.backgroundColor = "#f2f2f2"; // Dodanie szarego tła

                // Dodanie daty zrobienia zadania
                const now = new Date();
                const day = String(now.getDate()).padStart(2, '0'); // Dodanie 0 na poczatku
                const month = String(now.getMonth() + 1).padStart(2, '0'); 
                const year = now.getFullYear();
                const formattedDate = `${day}.${month}.${year}`;
                //const formattedDate = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
                doneDate.innerText = ` ${formattedDate}`;
                doneDate.style.display = "inline";
            }
            else
            {
                // Cofniecie zmian
                taskText.style.textDecoration = "none";
                taskText.style.backgroundColor = "initial";

                // // Usunięcie daty
                doneDate.style.display = "none";
            }
        })

        listItem.addEventListener("mouseover", (event) => {
            event.target.style.cursor = "pointer"; // Zmiana kursora na łapkę
        })

        deleteButton.addEventListener("click", () => {
            const modal = document.getElementById("deleteBox");
            const yesButton = document.getElementById("buttonYes");
            const noButton = document.getElementById("buttonNo");
            const delItem = document.getElementById("deleteItem");
            delItem.innerText = taskText.innerText;

            modal.showModal();

            noButton.addEventListener("click", () => {
                modal.close();
            })

            yesButton.addEventListener("click", () => {
                modal.close();

                // Nasłuchiwanie klawisza Ctrl+Z tylko dla ostatnio usuniętego elementu
                document.addEventListener("keydown", (event) => {
                    if (event.ctrlKey && event.key === "z" && lastDeletedItem) {
                        list.appendChild(lastDeletedItem); 
                        lastDeletedItem = null; // Wyczyszczenie zmiennej, aby zapobiec wielokrotnemu przywracaniu
                    }
                });

                lastDeletedItem = listItem;
                listItem.remove();
            })
        })
    }
}

