var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
});

let day = document.getElementById("day");
let month = document.getElementById("month");
let courseNow = document.getElementById("courseNow");
let coursesContent = document.getElementById("courses");

var date = new Date();

var months = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);

day.innerHTML = date.getDate();
month.innerHTML = months[date.getMonth()];

const courses = [
  {
    id: 2,
    name: "Proyecto Certificador de Desarrollo de Software III",
    teacher: "Marco Tulio Ortiz Alfaro",
    hour: "08:30 - 10:45",
    day: "MARTES",
  },
  {
    id: 2,
    name: "Seguridad Informatica Iso 27001",
    teacher: "Oscar David Murillo Briceño",
    hour: "10:45 - 12:15",
    day: "MARTES",
  },
  {
    id: 3,
    name: "Proyecto Certificador de Desarrollo de Software III",
    teacher: "Marco Tulio Ortiz Alfaro",
    hour: "07:45 - 09:00",
    day: "MIERCOLES",
  },
  {
    id: 3,
    name: "Desarrollo De Servicios Web II",
    teacher: "David Condori Ecos",
    hour: "09:15-11:30",
    day: "MIERCOLES",
  },
  {
    id: 4,
    name: "Proyecto Desarrollo Software II",
    teacher: "Jorge David Gonzales Maravi",
    hour: "08:30 - 12:15",
    day: "JUEVES",
  },
  {
    id: 6,
    name: "Desarrollo de Aplicaciones Móviles II",
    teacher: "Luis Angel Salvatierra Aquino",
    hour: "10:45 - 13:00",
    day: "SÁBADO",
  },
];

let template = "", coursesTemplate = "";

courses.forEach((data) => {
  if (date.getDay() === data.id) {
    template += `
    <li>
      <span>${data.hour}</span>
      <span>${data.name}</span>
    </li>
    `;
  }
  coursesTemplate += `
    <li>
        <span>${data.name}</span>
        <span>${data.teacher}</span>
        <span>${data.hour} | ${data.day}</span>
    </li>
  `;
});

courseNow.innerHTML = template;
coursesContent.innerHTML = coursesTemplate;
