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
$("#getVehicleData").on('click', function(event) {
  console.log('getVehicleData button clicked!');
  event.preventDefault();
  $.get(url, {data: 'wrx'}, function(resp) {
    // Remove button?

    // Use what we get back from the server to build VEP
    appendVepInfo(resp);
  });
});

//-----------------------------------------------------------
// Page manipulation:
//-----------------------------------------------------------

function appendVepInfo(data) {
  for (var key in data) {
    console.log('User ID: ', key, ' Body Style: ',
      data[key]['body-type'], ' Mileage: ', data[key].mileage);
  }
};