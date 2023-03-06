class CartItem{
  constructor(id,title,imgUrl,price,quantity,color){
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.imageUrl = imgUrl;
    this.color = color;
  }
}

export default CartItem;