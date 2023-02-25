const trademarks = [
  {
    title: "Converse Trademark",
    id: "t1",
    imageUrl: require("../assets/images/converse-trademark.png"),
    typeId: "converse",
  },
  {
    title: "Nike Trademark",
    id: "t2",
    imageUrl: require("../assets/images/nike-trademark.png"),
    typeId: "nike",
  },
  {
    title: "Puma Trademark",
    id: "t3",
    imageUrl: require("../assets/images/puma-trademark.png"),
    typeId: "puma",
  },
];


const mappedTrademarks = trademarks.map((item,index) => {
  if(index === 0){
    item.elevate = 9;
  }else{
    item.elevate = 1;
  }
  return item;
})


export default mappedTrademarks;
