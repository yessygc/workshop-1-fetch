/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
// conectar server
window.fetch(url)
// proecesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
// JSON -> Data -> Renderizar info. browser
.then((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach((item) => {
        //imagen
        const imagen = document.createElement('img');

        //title
        const title = document.createElement("h2");

        //price
        const price = document.createElement("div");

        const container = document.createElement('div')
        container.append(imagen, title, price);

        todosLosItems.push(container);
    });

    document.body.append(...todosLosItems);
});
