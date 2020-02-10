var app = new Vue({
    el : '#app',
    data : {
        product: 'Socks',
        quantity: 3,
        description : 'premium quality of socks are in stock! Want some?',
        imageSrc : './assets/images/vmSocks-green-onWhite.jpg',
        stockInfo(){
            if(this.quantity <=10 && this.quantity > 0){
                return "Limited stock of " + this.quantity + " left!";
            }else if(this.quantity > 10){
                return "In stock : " + this.quantity;
            }else if(this.quantity === 0){
                return "Sorry, this is item is out of stock."
            }
        },
        onSale : true,
        discount : true
    }
})