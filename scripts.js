




var view = {


napisGora: function(msg)
	{
	var napis = document.getElementById("messageArea");
	napis.innerHTML = msg;
	console.log(msg);
	},

trafiony: function(pole)
	{
	console.log(pole);
	var el = document.getElementById(pole);
	el.className = "hit";
	},
	
pudlo: function(pole)
	{
	console.log(pole);
	var el = document.getElementById(pole);
	el.className = "miss";
	}
	


};


var model = {
	
			
		sizeBoard: 7,
		numberShips: 3,
		lenghtShips: 3,
		hitShips: 0,
		shipTable: [{locations: ["10", "11", "12"], hits: ["", "", ""]},
					{locations: ["23", "33", "43"], hits: ["", "", ""]},
					{locations: ["64", "65", "66"], hits: ["", "", ""]},
		],
		
		fire: function(pole)
			{
				for(i=0; i<this.numberShips; i++)
				{
					var ship = this.shipTable[i];
					var locations = ship.locations;
					var spr = locations.indexOf(pole);
					console.log(spr, i)
					
				}
			}
		
	
	
	
	
}


model.fire("10");
model.fire("13");
model.fire("12"); 