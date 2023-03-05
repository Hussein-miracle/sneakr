class Sneaker{
  constructor(id,title,typeId,price,imageUrl,imgData,rating,short_description,detailed_description,productDetails = [],liked = false){
    this.typeId = typeId;
    this.title = title;
    this.id = id;
    this.price = price;
    this.rating = rating;
    this.imgData = imgData;
    this.short_description = short_description;
    this.detailed_description = detailed_description;
    this.imageUrl = imageUrl;
    this.productDetails = productDetails;
    this.liked = liked;
  }
}

export default Sneaker;