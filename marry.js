function marry(man, woman) {
 woman.husband = man;
 man.wife = woman;
 return {
  father: man,
  mother: woman
 }
}

let family = marry({
 name: "john",
}, {
 name: "ana",
});
// console.log(family);
delete family.father;
delete family.mother.husband;
family = null;
console.log(family);