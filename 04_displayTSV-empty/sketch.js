function setup(){
	createCanvas(windowWidth,windowHeight);
	loadTable('data/LaborInNonAgricultSector.tsv','tsv','header',showData)
}

function showData(data){
	console.log(data.get(7,3));
	var rows = data.getRowCount();
	var cols = data.getColumnCount();
	var raw,col,min,max;

	for(row = 0 ; row < rows ; row++){

			for(col = 3 ; col < cols ; col++){
					val = data.get(row, col);
					val = float(val);

					ellipse((width/25)*col,val,20,20)
					console.log( val);
			}
	}


}
// function draw(){
// 	background(255);
//
// 	var x = 20;
// 	var y = 20;
// 	var w = 400;
// 	var h = 200;
// 	fill(200);
// 	rect(x,y,w,h);
//
//
// 	fill(0);
// 	ellipse(mouseX,mouseY,20,20);
// 	ellipse(
// 		map(mouseX,0,width,x,w+x),
// 		map(mouseY,0,width,y,w+y),
// 		20,
// 		20
// 	)
//
// }
