var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`
}

function 