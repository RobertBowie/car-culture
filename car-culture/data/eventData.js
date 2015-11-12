var dbSim = function(options, cb) {
  setTimeout(function() {
    cb( {
      "userID1": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 102053, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID2": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 55000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID3": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 75000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID4": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 105000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID5": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 110000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID6": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 92050, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID7": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 107000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
      "userID8": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 108000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}}
    } );
  }, 200);
};

module.exports = dbSim;
// Structure:
//   {year: 2002, make: Subaru, model: WRX, mileage: 102000, mods: [cai, exhaust, ic, etc], 
  //   events: {50000: 'rim rust issue', 55000: 'replaced a thing'}}
// {
//   "userID1": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 102053, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID2": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 55000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID3": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 75000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID4": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 105000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID5": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 110000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID6": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 92050, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID7": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "wagon", "mileage": 107000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}},
//   "userID8": {"year": 2002, "make": "Subaru", "model": "Impreza", "trim": "WRX", "body-type": "sedan", "mileage": 108000, "mods": ["cai", "exhaust", "intercooler"], "events": {"22500": "drivetrain issue", "25500": "window issue", "55500": "wheel issue", "105000": "consider a nested obj for issue storage"}}
// }