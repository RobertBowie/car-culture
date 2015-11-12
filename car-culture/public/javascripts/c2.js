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
    '<h2>There are ' + vehicleCount + ' vehicles with relevant data!</h2>'
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
};

//-----------------------------------------------------------
// Functions for sorting DB info
//-----------------------------------------------------------
function sortByMileage() {

};

function sortByMods() {

};

function showMore() {

};


