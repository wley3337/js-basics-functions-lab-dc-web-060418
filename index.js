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
  let distance = distanceTravelledInFeet(block1, block2);
  
  switch (distance) {
    case distance <= 400: 
      return "free sample";
    case 400 < distance <= 2000:
      return ((distance-400)*2*100).toFixed(2); 
    case 2000 < distance < 2500: 
      return  `$25`;
    case distance > 2500:
      return 'cannot travel that far';
  }
}