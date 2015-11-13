//-----------------------------------------------------------
// Environment variables:
//-----------------------------------------------------------
var url = '/eventData';
var userVehicle = {"year": 2002,
                   "make": "Subaru",
                  "model": "Impreza",
                   "trim": "WRX",
              "body-type": "wagon",
                "mileage": 102053,
                   "mods": ["cai", "exhaust", "intercooler"],
                 "events": {}
                  };
var dbData = {};
//-----------------------------------------------------------
// AJAX request for DB entries
//-----------------------------------------------------------
$("#getVehicleData").on('click', function(event) {
  console.log('getVehicleData button clicked!');
  event.preventDefault();
  $.get(url, {data: 'wrx'}, function(resp) {
    // Remove button?

    // Use what we get back from the server to build VEP
    dbData = resp;
    appendVepInfo(dbData);
  });
});

//-----------------------------------------------------------
// Page manipulation:
//-----------------------------------------------------------

//-----------------------------------------------------------
// Add the info in it's most basic form:
//-----------------------------------------------------------
function appendVepInfo(data) {
  var $dbEvents = $('.dbevents');
  var vehicleCount = 0;
  for (var key in data) {
    vehicleCount++;
  }
  $dbEvents.append($(
    '<h2>There are <span class="count-span">' + vehicleCount + '</span> vehicles with relevant data!</h2>'
  ));
  $dbEvents.append($(
    '<h3>Here are some things that users mention happening in the coming miles:</h3>'
  ));
  for (var key in data) {
    var vehicle = data[key];
    console.log('User ID: ', key, ' Body Style: ',
      vehicle['body-type'], ' Mileage: ', vehicle.mileage);
    if ( vehicle.mileage > userVehicle.mileage ) {
      for (var eventMileage in vehicle.events) {
        if ( eventMileage > userVehicle.mileage ) {
          $dbEvents.append($(
            '<ul><li class="eventli">Mileage: ' + eventMileage + ' - ' +
             vehicle.events[eventMileage] + ' <a>see full event</a>' +
             '</li></ul>'
          ));
        }
      }
    }
  }
  $dbEvents.append($(
    '<div class="filterdiv">' +
    '<button id="mileagefilter" type="button" class="btn btn-primary btn-xs">' + 
    'Mileage</button>' +
    '<button id="modsfilter" type="button" class="btn btn-primary btn-xs">' + 
    'Mods</button>' +
    '<button id="showmore" type="button" class="btn btn-primary btn-xs">' + 
    'Show More</button>' +
    '<button id="cleardata" type="button" class="btn btn-primary btn-xs">' + 
    'Clear Data</button>' +
    '</div>'
  ));
};

//-----------------------------------------------------------
// Functions for sorting DB info
//-----------------------------------------------------------
function sortByMileage() {
  var $dbEvents = $('.dbevents');
  var $eventLi = $('.eventli');
  var $filterDiv = $('.filterdiv');
  var entries = [];
  // Take dbData and arrange it by mileage:
  $eventLi.remove();
  $filterDiv.remove();
  for (var key in dbData) {
    var vehicle = dbData[key];
    console.log('User ID: ', key, ' Body Style: ',
      vehicle['body-type'], ' Mileage: ', vehicle.mileage);
    if ( vehicle.mileage > userVehicle.mileage ) {
      for (var eventMileage in vehicle.events) {
        if ( eventMileage > userVehicle.mileage ) {
          entries.push({eventMileage: eventMileage, event: vehicle.events[eventMileage]});
        }
      }
    }
  }
  var sortedEntries = entries.sort(function(a,b) {
    if ((a.eventMileage) < (b.eventMileage)) {
      return - 1;
    }
    if ((a.eventMileage) > (b.eventMileage)) {
      return 1;
    }
    return 0;
  });

  sortedEntries.forEach(function(entry) {
    $dbEvents.append($(
      '<ul><li class="eventli">Mileage: ' + entry.eventMileage + ' - ' +
      entry.event + ' <a>see full event</a>' +
      '</li></ul>'
    ));
  });

  $dbEvents.append($(
    '<div class="filterdiv">' +
    '<button id="mileagefilter" type="button" class="btn btn-primary btn-xs">' + 
    'Mileage</button>' +
    '<button id="modsfilter" type="button" class="btn btn-primary btn-xs">' + 
    'Mods</button>' +
    '<button id="showmore" type="button" class="btn btn-primary btn-xs">' + 
    'Show More</button>' +
    '<button id="cleardata" type="button" class="btn btn-primary btn-xs">' + 
    'Clear Data</button>' +
    '</div>'
  ));
  // $dbEvents.append($(
  //   '<ul><li class="eventli">Mileage: ' + eventMileage + ' - ' +
  //    vehicle.events[eventMileage] + ' <a>see full event</a>' +
  //    '</li></ul>'
  // ));
};

function sortByMods() {
  var $dbEvents = $('.dbevents');
  // Take dbData and arrange it by and display number of mods:
  $dbEvents.html('');
};

function showMore() {
  var $dbEvents = $('.dbevents');
  // Take dbData and show all events (remove mileage conditions):
  $dbEvents.html('');
};

function clearData() {
  var $dbEvents = $('.dbevents');
  // Take dbData and show all events (remove mileage conditions):
  $dbEvents.html('');
};

//-----------------------------------------------------------
// Event listeners for buttons:
//-----------------------------------------------------------

$(document.body).on('click', '#mileagefilter', function() {
  console.log('mileagefilter clicked')
  sortByMileage();
});
$(document.body).on('click', '#modsfilter', function() {
  console.log('modsfilter clicked')
  sortByMods();
});
$(document.body).on('click', '#showmore', function() {
  console.log('showmore clicked')
  showMore();
});
$(document.body).on('click', '#cleardata', function() {
  console.log('cleardata clicked')
  clearData();
});
