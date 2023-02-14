const trademarks = [
  {
    title: "Converse Trademark",
    id: "t1",
    imageUrl: require("../assets/images/converse-trademark.png"),
  },
  {
    title: "Nike Trademark",
    id: "t2",
    imageUrl: require("../assets/images/nike-trademark.png"),
  },
  {
    title: "Puma Trademark",
    id: "t3",
    imageUrl: require("../assets/images/puma-trademark.png"),
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
