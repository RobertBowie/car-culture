var url = '/eventData';
$("#getVehicleData").on('click', function(event) {
  console.log('getVehicleData button clicked!');
  event.preventDefault();
  $.get(url, {data: 'wrx'}, function(resp) {
    for (var key in resp) {
      console.log('User ID: ', key, ' Body Style: ', resp[key]['body-type'], ' Mileage: ', resp[key].mileage);
    }
  });
});
