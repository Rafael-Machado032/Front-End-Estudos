const endpoint_todoscoloboradores = "http://localhost:1880/todosusuarios";

fetch(endpoint_todoscoloboradores)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })

    .then((data) => {
        console.log(data);
    })