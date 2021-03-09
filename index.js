const express = require("express");
const app = express();
const port = 3000;

// Configurar EJS como motor de vistas (templates)
// Vista -> "Una página"
// Template -> HTML con más cosas
app.set("view engine", "ejs");

// Rutas / Routes
app.get("/", (req, res) => {

    // TODO: lógica para revisar fecha
    let message = "PENDIENTE DE CONFIRMAR";
    let currentDate = new Date();
    // console.log('currentDate.getDay()', currentDate.getDay());
    // console.log('currentDate.getMonth()', currentDate.getMonth());
    // console.log('currentDate.getFullYear()', currentDate.getFullYear());
    // console.log('currentDate.getDate()', currentDate.getDate());

    // - Un día del año
    // Día de muertos
    let targetDayOfTheMonth = 1;
    let targetMonth = 10; //Noviembre
    let currentDayOfTheMonth = currentDate.getDate(); // base 1
    let currentMonth = currentDate.getMonth(); // base 0
    if (currentMonth === targetMonth && currentDayOfTheMonth === targetDayOfTheMonth) {
        message = "Sí";
    } else {
        message = "No";
    }

    // - Rango de fechas (verano)
    // Summer 2021 in Northern Hemisphere will begin on
    // Sunday, June 20
    // and ends on
    // Wednesday, September 22
    // All dates are in Mexican Pacific Time.
    // enero febrero marzo abril mayo junio julio agosto sep oct
    // 0     1       2     3     4    5     6     7      8
    // let dateRangeStart = new Date(2021, 5, 20); //20 de junio de 2021

    // let dateRangeStartByYear = {};
    // dateRangeStartByYear[2021] = new Date(2021, 5, 20);
    // dateRangeStartByYear[2022] = new Date(2021, 5, 21);
    // dateRangeStartByYear[2023] = new Date(2021, 5, 21);
    // dateRangeStartByYear[2024] = new Date(2021, 5, 20);
    // dateRangeStartByYear[2025] = new Date(2021, 5, 21);

    // let dateRangeEndByYear = {};
    // dateRangeEndByYear[2021] = new Date(2021, 8, 21);
    // dateRangeEndByYear[2022] = new Date(2021, 8, 22);
    // dateRangeEndByYear[2023] = new Date(2021, 8, 22);
    // dateRangeEndByYear[2024] = new Date(2021, 8, 21);
    // dateRangeEndByYear[2025] = new Date(2021, 8, 21);

    // let currentYear = currentDate.getFullYear();
    // let dateRangeStart = dateRangeStartByYear[currentYear];
    // let dateRangeEnd = dateRangeEndByYear[currentYear];
    // // (No consideramos horas y minutos)
    // if (currentDate >= dateRangeStart && currentDate <= dateRangeEnd) {
    //     message = "Sí";
    // } else {
    //     message = "No";
    // }

    // - Día de la semana - viernes
    // 0=domingo
    // 5=viernes
    // let currentDayOfTheWeek = currentDate.getDay();
    // let viernes = 5;
    // if (currentDayOfTheWeek === viernes) {
    //     message = "Sí";
    // } else {
    //     message = "No";
    // }
    


    // res.send('Hello World');
    // Se asume que se incluye views al inicio
    // views/pages/index.html
    // pages/index
    // - Omitir views al inicio
    // - Omitir la extensión del archivo
    res.render("pages/index", {
        // message: message
        message
    });
});
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});