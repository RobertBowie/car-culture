var url = '/eventData';
var userVehicle = {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 102053, "mods": ["cai", "exhaust", "intercooler"], "events": {} };
$("#getVehicleData").on('click', function(event) {
  console.log('getVehicleData button clicked!');
  event.preventDefault();
  $.get(url, {data: 'wrx'}, function(resp) {
    for (var key in resp) {
      console.log('User ID: ', key, ' Body Style: ', resp[key]['body-type'], ' Mileage: ', resp[key].mileage);
    }
  });
});

//-----------------------------------------------------------
// Page manipulation:
//-----------------------------------------------------------

function appendVepInfo(data) {

};