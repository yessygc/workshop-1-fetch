/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formaPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: "USD",
    }).format(price)

    return newPrice;
}

// Intl
// Forma modena

//web api
// conectar server
// promise -> asynk/await
window
    .fetch(`${baseUrl}/api/avo`)
    // proecesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> Renderizar info. browser
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
        //imagen
        const imagen = document.createElement("img");
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        // URL de la imagen
        imagen.src = `${baseUrl}${item.image}`;

        //title
        const title = document.createElement("h2");
        title.textContent = item.name;
        title.className = "text-lg";

        //price
        const price = document.createElement("div");
        price.className = "text-gray-600";
        price.textContent = formaPrice(item.price);

        const container = document.createElement("div")
        container.append(imagen, title, price);

        todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
});
