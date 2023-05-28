import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // webpack uses file-loader to handle font files
import './index.css'; // our app's CSS
let calenderEvent= [
  {
    title: 'All Day Event',
    start: '2022-01-01',
  },
  {
    title: 'Long Event',
    start: '2022-01-07',
    end: '2022-01-10'
  },
  {
    groupId: 999,
    title: 'Repeating Event',
    start: '2022-01-09T16:00:00'
  },
  {
    groupId: 999,
    title: 'Repeating Event',
    start: '2022-01-16T16:00:00'
  },
  {
    title: 'Conference',
    start: '2022-01-11',
    end: '2022-01-13'
  },
  {
    title: 'Meeting',
    start: '2022-01-12T10:30:00',
    end: '2022-01-12T12:30:00'
  },
  {
    title: 'Lunch',
    start: '2022-01-12T12:00:00'
  },
  {
    title: 'Meeting',
    start: '2022-01-12T14:30:00'
  },
  {
    title: 'Happy Hour',
    start: '2022-01-12T17:30:00'
  },
  {
    title: 'Dinner',
    start: '2022-01-12T20:00:00'
  },
  {
    title: 'Birthday Party',
    start: '2022-01-13T07:00:00'
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: '2022-01-28'
  }
]
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: '2022-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events:calenderEvent,
    
  });
  calendar.render();
});
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let eventTitle = document.getElementsByName("eventTitle")[0].value;
  let eventDay = document.getElementsByName("eventDay")[0].value;
  let eventDate = new Date();
  let endDate= new Date();
 let currentDay = endDate.getDate();
  endDate.setDate(currentDay + parseInt( eventDay)-1);
  calenderEvent.push({
    title:eventTitle,
    start:eventDate,
    end:endDate
  })
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialDate: '2022-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events:calenderEvent
  });
  calendar.render();
  document.getElementsByName("eventTitle")[0].value='';
  document.getElementsByName("eventDay")[0].value='';
  menu.classList.remove("menuOn");
  menu.classList.add("menuOff");
  form.classList.remove('formOn');
  form.classList.add('formOff');
});

let menu = document.getElementById('menu');
let addBtn= document.getElementById('addBtn');
let remBtn= document.getElementById('remBtn');
let form = document.getElementById('myForm');
let GoBack= document.getElementById('GoBack')
let GoBack2= document.getElementById('GoBack2')
let remForm = document.getElementById('remForm')
addBtn.addEventListener("click", function() {
  menu.classList.remove("menuOff");
  menu.classList.add("menuOn");
  form.classList.remove('formOff');
  form.classList.add('formOn');
});
GoBack.addEventListener("click", function() {
  menu.classList.remove("menuOn");
  menu.classList.add("menuOff");
  form.classList.remove('formOn');
  form.classList.add('formOff');
  remForm.classList.remove('formOn');
  remForm.classList.add('formOff');
});
GoBack2.addEventListener("click", function() {
  menu.classList.remove("menuOn");
  menu.classList.add("menuOff");
  form.classList.remove('formOn');
  form.classList.add('formOff');
  remForm.classList.remove('formOn');
  remForm.classList.add('formOff');
});
remBtn.addEventListener("click", function() {
  menu.classList.remove("menuOff");
  menu.classList.add("menuOn");
  remForm.classList.remove('formOff');
  remForm.classList.add('formOn');
});

document.getElementById("remForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let remTitle = document.getElementsByName("remTitle")[0].value;
  let newEvents=[];
  for (let i of calenderEvent){
    if(i.title!==remTitle){
      newEvents.push(i);
    }
  }
  calenderEvent=newEvents
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialDate: '2022-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events:newEvents
  });
  calendar.render();
  document.getElementsByName("remTitle")[0].value='';
  menu.classList.remove("menuOn");
  menu.classList.add("menuOff");
  remForm.classList.remove('formOn');
  remForm.classList.add('formOff');
});
