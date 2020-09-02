var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`
}

function currentLine(katzDeliLine){
  let newArray = [];
  
  for (let i = 0; i < katzDeliLine.length; i++){
      let person = katzDeliLine[i];
      let num = i + 1;
      
      let inLine = `${num}. ${person}`;
      newArray.push(inLine);
    
  }
  let string = newArray.join(', ');
  
  return "The line is currently: " + string;
  
}

function nowServing(katzDeliLine){
  let beingServed  = katzDeliLine.shift();
  return `Currently serving ${beingServed}`
}