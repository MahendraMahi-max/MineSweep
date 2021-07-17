
function make2darray(cols,rows){
    var arr=new Array(cols);
    for (var=0; i<arr.length;i++){
        Array[i] = new Array(rows);
    }

}

var grid;
var rows;
var cols;
var w=20;

var totalBees=20;

function setup(){

createCanvas(201,201);
cols=floor(width/w);
rows=floor(height/w);
grid.make2darray(cols,rows);
for(var i=0; i<cols; i++){
    for(var j=0; j<rows; j++){
        grid[i][j] =new Cell(i,j,w);

    }
}
//pick total bees spots
var options=[];
for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
        options.push([i,j])

    }
}
console.log(options);


for(var n=0;n<totalBees;n++){
    var index=floor(random(options,length));
    var choice=options[index];

    var i=choice[0];
    var j=choice[1];
    options.splice(index,1);
    grid[i][j].bee=true;
}

for(var i=0; i<cols; i++){
    for(var j=0; j<rows; j++){
        grid[i][j].countBees();

    }
}

function gameOver(){

    for(var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j].revealed = true;
    
        }
    }

}

function mousePressed(){

    background(255);
    for(var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            if(grid[i][j].contains(mouseX,mouseY)){
                grid[i][j].reveal();
                if (grid[i][j].bee){
                    gameOver();
                }

            }
}

function draw(){

    background(255);
    for(var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j].show();
    

}
