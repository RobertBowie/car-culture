var dbSim = function(options, cb) {
  setTimeout(function() {
    cb( {
      "userID1": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "wagon",
          "mileage": 135000,
          "mods": [],
          "events": 
            {
              "22500": "replaced air freshener",
              "25500": "window cleaned",
              "55500": "wheel issue (bent rim)",
              "105000": "Transmission replaced",
              "125255": "Fuel smell fixed (TSB)"
            }
        },
      "userID2": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "sedan",
          "mileage": 155000,
          "mods": ["cai"],
          "events": 
            {
              "22500": "drivetrain issue",
              "25500": "window issue",
              "35425": "AC went out.",
              "47030": "Paint flaking from hood",
              "55500": "wheel issue (corrosion)",
              "108272": "Had to replace the head-gasket",
              "152777": "Timing belt snapped - severe engine damage"
            }
        },
      "userID3": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "wagon",
          "mileage": 175000,
          "mods": ["cai", "exhaust"],
          "events": 
            {
              "33425": "Rust on exhaust - replaced",
              "48030": "Power steering pump replaced",
              "110200": "Transmission grinding - replaced fluid",
              "115700": "Turbo seal leaking - upgraded to STI turbo"
            }
        },
      "userID4": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "sedan",
          "mileage": 115000,
          "mods": ["cai", "exhaust", "intercooler", "turbo"],
          "events": 
            {
              "22500": "drivetrain issue",
              "25500": "window issue",
              "35555": "Seat springs worn out - replaced under warranty",
              "47130": "Stock tires - replaced",
              "105500": "Blown turbo - dealer replaced",
              "110800": "Worn struts upgraded"
            }
        },
      "userID5": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "sedan",
          "mileage": 110000,
          "mods": ["cai", "exhaust", "intercooler", "wheels"],
          "events": 
            {
              "22500": "drivetrain issue",
              "25500": "window issue",
              "35425": "Spark plugs replaced",
              "47030": "Stock tires - replaced",
              "55500": "wheel issue - replaced",
              "105000": "Noisy lifter - replaced"
            }
        },
      "userID6": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "wagon",
          "mileage": 192050,
          "mods": ["cai", "exhaust", "intercooler", "pipes", "bolt-ons"],
          "events": 
            {
              "22500": "drivetrain issue",
              "25500": "window issue",
              "35425": "General tune-up required",
              "47030": "Brakes replaced",
              "55500": "wheel issue",
              "107800": "Full service due to cold start problems",
              "110000": "Engine blew up - replaced/upgraded",
              "120222": "Too much power - smiled on accident"
            }
        },
      "userID7": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "wagon",
          "mileage": 107000,
          "mods": ["cai", "exhaust", "intercooler"],
          "events": 
            {
              "22500": "drivetrain issue",
              "25500": "window issue",
              "35425": "Right rear wheel bearing - replaced",
              "47030": "Split join hex gear mod - replaced",
              "55500": "wheel issue",
              "107111": "Considering an upgrade to E83 due to fuel issues"
            }
        },
      "userID8": 
        {
          "year": 2002,
          "make": "Subaru",
          "model": "Impreza",
          "trim": "WRX",
          "body-type": "sedan",
          "mileage": 108000,
          "mods": ["cai", "exhaust", "intercooler"],
          "events": 
            {
              "22500": "drivetrain issue",
              "25500": "window issue",
              "35425": "A thing broke - fixed it",
              "47030": "Stock tires - replaced",
              "55500": "wheel issue",
              "112000": "Fuel lines clogged - flushed clear"
            }
        }
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