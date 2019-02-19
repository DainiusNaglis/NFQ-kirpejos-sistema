var nativePicker = document.querySelector('.nativeDateTimePicker');
var fallbackPicker = document.querySelector('.fallbackDateTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

var test = document.createElement('input');
test.type = 'datetime-local';

if(test.type === 'text') {
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  populateDays(monthSelect.value);
  populateYears();
}

//menesio dienu skaiciu funkcija
function populateDays(month) {
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  var dayNum;

  if(month === 'January' | month === 'March' | month === 'May' | month === 'July' | month === 'August' | month === 'October' | month === 'December') {
    dayNum = 31;
  } else if(month === 'April' | month === 'June' | month === 'September' | month === 'November') {
    dayNum = 30;
  } else {
  //vasario men dienu skaicius pagal metus
    var year = yearSelect.value;
    (year - 2016) % 4 === 0 ? dayNum = 29 : dayNum = 28;
  }

  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  //jei diena jau pasirinkta, keiciant menesi skaicius negrizta i 1
  if(previousDay) {
    daySelect.value = previousDay;

    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

//einanciu metu rodymas
function populateYears() {
  var date = new Date();
  var year = date.getFullYear();

  for(var i = 0; i < 1; i++) {
    var option = document.createElement('option');
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

var previousDay;

daySelect.onchange = function() {
  previousDay = daySelect.value;
}

function pr() {
    var man = new Array();
    man[0] = "January";
    man[1] = "February";
    man[2] = "March";
    man[3] = "April";
    man[4] = "May";
    man[5] = "June";
    man[6] = "July";
    man[7] = "August";
    man[8] = "September";
    man[9] = "October";
    man[10] = "November";
    man[11] = "December";

    var d = new Date();
    var n = man[d.getMonth()];

    var dien = [];
    var skaics=0;
    for (var i = 0; i<=30; i++)
    {
       dien[i]=skaics++;
    }

    var nau = new Date();
    var kint = dien[nau.getDate()];
  
    if (document.getElementById('one').value ==="" || document.getElementById('two').value ==="") 
    {
        alert("Please fill empty fields");
        return false;
    }
    else if (document.getElementById('month').value != n && document.getElementById('month').value != man[d.getMonth()+1])
    {
        alert("You can choose only between current or next months");
        return false;
    }
    else if(document.getElementById('day').value < kint && document.getElementById('month').value === n)
    {
        alert("You have chosen wrong day");
        return false;
    }
    else
    {
        document.getElementById("result").innerHTML = "Reservation added:<br/>" + "<br/>Name: " + document.getElementById('one').value +  "<br/>Surname: " + document.getElementById('two').value + "<br/>Phone No.: " + document.getElementById('three').value + "<br/>Day: " + document.getElementById('day').value + "<br/>Month: " + document.getElementById('month').value + "<br/>Year: " + document.getElementById('year').value + "<br/>Time: " + document.getElementById('hour').value + ":" + document.getElementById('minute').value;
    }     
    
    if (document.getElementById('day').value == document.getElementById('day').value && document.getElementById('month').value == document.getElementById('month').value && document.getElementById('hour').value == document.getElementById('hour').value && document.getElementById('minute').value == document.getElementById('minute').value)
    {
      var x = document.getElementById("minute");
      x.remove(x.selectedIndex);
    }
  }