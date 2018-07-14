// Code your solution in this file!


function distanceFromHqInBlocks(block){
  return Math.abs(block- 42);
}

function distanceFromHqInFeet(blocks){
  return( distanceFromHqInBlocks(blocks)* 264);
}

function distanceTravelledInFeet(block1, block2){
  return( Math.abs(block1-block2)*264)
}

function calculatesFarePrice(block1, block2){
  let distance = distanceTravelledInFeet(block1, block2)
  
  switch(distance){
    case distance <= 400 
      return "free sample"
    case 400 < distance <= 2000
      return ((distance-400)*2*100).to 
  400-2000 feet 2cents perfoot not including first 400 
  over 2000 and under 2500  $25
  
  2500 and over return 'cannot travel that far'
  }
}