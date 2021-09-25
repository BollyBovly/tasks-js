'use strict'

// 1.1
// es5

function Product(name, price) {
    this.price = price;
    this.name = name;
    
}

Product.prototype.make25PercentDiscount = function (){
    alert(this.price / 100 * 25);
}

let obj1 = new Product(150);
obj1.make25PercentDiscount();



// es6
class Product{
    constructor(price, name){
        this.price = price;
        this.name = name;        
    }

    make25PercentDiscount () {
        alert(this.price / 100 * 25);
    }
}

let obj1 = new Product(150);
obj1.make25PercentDiscount();


// 1.2
// es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function() {
    alert(this.text);
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}

let attachedPostObj = new AttachedPost('Bakman','text1');
attachedPostObj.edit();

// es6
 class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;         
     }
     edit(){
        alert(this.text);
    }

 }

 class AttachedPost extends Post {
     constructor(author, text, date){
         super(author, text, date);
         this.highlighted = false;
     }
     makeTextHighlighted() {
        this.highlighted = true;
     }
 }

let attachedPostObj = new AttachedPost('lermotnov','text2');
attachedPostObj.edit(); 