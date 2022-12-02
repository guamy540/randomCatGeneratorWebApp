let name = 'Gyrados-Blue'

function removeDash(n){
  let dash = n.indexOf('-')
  if (dash != -1){
    n = n.slice(0,dash)    
  }
  return n
}

console.log(removeDash(name))