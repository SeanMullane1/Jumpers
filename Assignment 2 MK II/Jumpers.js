/*Sean Mullane R00139622*/
/*Web Development Y2*/


var jumperOnePrice = 15;
var jumperTwoPrice = 20;
var jumperThreePrice = 25;
var jumperFourPrice = 30;
var jumperFivePrice = 35;

var imageOnePrice = 4;
var imageTwoPrice = 6;
var imageThreePrice = 8;
var imageFourPrice = 10;
var imageFivePrice = 12;

var smallPrice = 2;
var mediumPrice = 3;
var largePrice = 4;
var xlagrePrice = 5;
var xxlargePrice = 6;

var jesusprice = 20;
var santaprice = 15;
var rudolfprice = 25;
var christmasprice = 10;
var snowmanprice = 30;

function pickTop(option){
  if (option == "two"){
    document.getElementById('price').innerHTML = "";
    document.getElementById('JumperChosen').style.visibility = "hidden";
    document.getElementById('Images').style.visibility = "hidden";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('JumperChosen').src = '';
    document.getElementById('ImageChosen').src = '';
    document.getElementById('size').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
    document.getElementById('definedHoodie').style.visibility = "visible";

  }

  if(option == "Black"){
    document.getElementById('JumperChosen').src = 'black.jpg';
    document.getElementById('price').innerHTML = jumperOnePrice;
    document.getElementById('JumperChosen').style.visibility = "visible";
    document.getElementById('size').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('ImageChosen').src = '';
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('totalPrice').style.visibility = "hidden";
    document.getElementById('definedHoodie').style.visibility = "hidden";

  }

  if(option == "Blue"){
    document.getElementById('JumperChosen').src = 'blue.jpg';
    document.getElementById('price').innerHTML = jumperTwoPrice;
    document.getElementById('JumperChosen').style.visibility = "visible";
    document.getElementById('size').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('ImageChosen').src = '';
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('totalPrice').style.visibility = "hidden";
    document.getElementById('definedHoodie').style.visibility = "hidden";

  }

  if(option == "Red"){
    document.getElementById('JumperChosen').src = 'red.jpg';
    document.getElementById('price').innerHTML = jumperThreePrice;
    document.getElementById('JumperChosen').style.visibility = "visible";
    document.getElementById('size').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('ImageChosen').src = '';
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('totalPrice').style.visibility = "hidden";
    document.getElementById('definedHoodie').style.visibility = "hidden";
  }

  if(option == "Green"){
    document.getElementById('JumperChosen').src = 'green.jpg';
    document.getElementById('price').innerHTML = jumperFourPrice;
    document.getElementById('JumperChosen').style.visibility = "visible";
    document.getElementById('size').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('ImageChosen').src = '';
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('totalPrice').style.visibility = "hidden";
    document.getElementById('definedHoodie').style.visibility = "hidden";
  }

  if(option == "White"){
    document.getElementById('JumperChosen').src = 'white.jpg';
    document.getElementById('price').innerHTML = jumperFivePrice;
    document.getElementById('JumperChosen').style.visibility = "visible";
    document.getElementById('size').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('ImageChosen').src = '';
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('totalPrice').style.visibility = "hidden";
    document.getElementById('definedHoodie').style.visibility = "hidden";
  }

}

function pickdefined(option){
  if (option == "four"){
      document.getElementById('products').style.visibility = "visible";
      document.getElementById('JumperChosen').style.visibility = "hidden";
      document.getElementById('totalPrice').style.visibility = "hidden";
      document.getElementById('definedprice').innerHTML = "";

  }

    if(option == "DJJesus"){
      document.getElementById('JumperChosen').src = 'DJjesus.jpg';
      document.getElementById('definedprice').innerHTML = jesusprice;
      document.getElementById('JumperChosen').style.visibility = "visible";
      document.getElementById('size').style.visibility = "hidden";
      document.getElementById('products').style.visibility = "hidden";
      document.getElementById('ImageChosen').style.visibility = "hidden";
      document.getElementById('ImageChosen').src = '';
      document.getElementById('imagePrice').innerHTML = "";
      document.getElementById('totalPrice').style.visibility = "visible";
      document.getElementById('fullPrice').innerHTML = jesusprice;

    }

    if(option == "Santa"){
      document.getElementById('JumperChosen').src = 'santa.jpg';
      document.getElementById('definedprice').innerHTML = santaprice;
      document.getElementById('JumperChosen').style.visibility = "visible";
      document.getElementById('products').style.visibility = "hidden";
      document.getElementById('size').style.visibility = "hidden";
      document.getElementById('ImageChosen').style.visibility = "hidden";
      document.getElementById('ImageChosen').src = '';
      document.getElementById('imagePrice').innerHTML = "";
      document.getElementById('totalPrice').style.visibility = "visible";
      document.getElementById('fullPrice').innerHTML = santaprice;
    }

    if(option == "Rudolf"){
      document.getElementById('JumperChosen').src = 'rudolf.jpg';
      document.getElementById('definedprice').innerHTML = rudolfprice;
      document.getElementById('JumperChosen').style.visibility = "visible";
      document.getElementById('products').style.visibility = "hidden";
      document.getElementById('size').style.visibility = "hidden";
      document.getElementById('ImageChosen').style.visibility = "hidden";
      document.getElementById('ImageChosen').src = '';
      document.getElementById('imagePrice').innerHTML = "";
      document.getElementById('totalPrice').style.visibility = "visible";
      document.getElementById('fullPrice').innerHTML = rudolfprice;
    }

    if(option == "Christmas"){
      document.getElementById('JumperChosen').src = 'christmas.jpg';
      document.getElementById('definedprice').innerHTML = christmasprice;
      document.getElementById('JumperChosen').style.visibility = "visible";
      document.getElementById('products').style.visibility = "hidden";
      document.getElementById('size').style.visibility = "hidden";
      document.getElementById('ImageChosen').style.visibility = "hidden";
      document.getElementById('ImageChosen').src = '';
      document.getElementById('imagePrice').innerHTML = "";
      document.getElementById('totalPrice').style.visibility = "visible";
      document.getElementById('fullPrice').innerHTML = christmasprice;
    }

    if(option == "Snowman"){
      document.getElementById('JumperChosen').src = 'snowman.jpg';
      document.getElementById('definedprice').innerHTML = snowmanprice;
      document.getElementById('JumperChosen').style.visibility = "visible";
      document.getElementById('size').style.visibility = "hidden";
      document.getElementById('products').style.visibility = "hidden";
      document.getElementById('ImageChosen').style.visibility = "hidden";
      document.getElementById('ImageChosen').src = '';
      document.getElementById('imagePrice').innerHTML = "";
      document.getElementById('totalPrice').style.visibility = "visible";
      document.getElementById('fullPrice').innerHTML = snowmanprice;
    }

}

function pickSize(option){
  if (option == "three"){
    document.getElementById('sizePrice').innerHTML = "";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('Images').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
  }
  if (option == "small"){
    document.getElementById('sizePrice').innerHTML = smallPrice;
    document.getElementById('Images').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
  }

  if (option == "medium"){
    document.getElementById('ImageChosen').src = '';
    document.getElementById('sizePrice').innerHTML = mediumPrice;
    document.getElementById('Images').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
  }

  if (option == "large"){
    document.getElementById('ImageChosen').src = '';
    document.getElementById('sizePrice').innerHTML = largePrice;
    document.getElementById('Images').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
  }

  if (option == "xlarge"){
    document.getElementById('ImageChosen').src = '';
    document.getElementById('sizePrice').innerHTML = xlagrePrice;
    document.getElementById('Images').style.visibility = "visible";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
  }

}


function pickImage(option){
  if (option == "one"){
    document.getElementById('imagePrice').innerHTML = "";
    document.getElementById('ImageChosen').style.visibility = "hidden";
    document.getElementById('totalPrice').style.visibility = "hidden";
  }
  if (option == "Dog"){
    document.getElementById('ImageChosen').src = 'dog.png';
    document.getElementById('imagePrice').innerHTML = imageOnePrice;
    document.getElementById('ImageChosen').style.visibility = "visible";
    document.getElementById('fullPrice').innerHTML = (document.getElementById('imagePrice').innerHTML*1) + (document.getElementById('sizePrice').innerHTML*1) + (document.getElementById('price').innerHTML*1);
    document.getElementById('totalPrice').style.visibility = "visible";

  }

  if (option == "Apple"){
    document.getElementById('ImageChosen').src = 'apple.png';
    document.getElementById('imagePrice').innerHTML = imageTwoPrice;
    document.getElementById('ImageChosen').style.visibility = "visible";
    document.getElementById('fullPrice').innerHTML =(document.getElementById('imagePrice').innerHTML*1) + (document.getElementById('sizePrice').innerHTML*1) + (document.getElementById('price').innerHTML*1);
    document.getElementById('totalPrice').style.visibility = "visible";
  }

  if (option == "Tree"){
    document.getElementById('ImageChosen').src = 'tree.png';
    document.getElementById('imagePrice').innerHTML = imageThreePrice;
    document.getElementById('ImageChosen').style.visibility = "visible";
    document.getElementById('fullPrice').innerHTML = (document.getElementById('imagePrice').innerHTML*1) + (document.getElementById('sizePrice').innerHTML*1) + (document.getElementById('price').innerHTML*1);
    document.getElementById('totalPrice').style.visibility = "visible";
  }

  if (option == "Nike"){
    document.getElementById('ImageChosen').src = 'nike.png';
    document.getElementById('imagePrice').innerHTML = imageFourPrice;
    document.getElementById('ImageChosen').style.visibility = "visible";
    document.getElementById('totalPrice').style.visibility = "visible";
    document.getElementById('fullPrice').innerHTML = (document.getElementById('imagePrice').innerHTML*1) + (document.getElementById('sizePrice').innerHTML*1) + (document.getElementById('price').innerHTML*1);
  }

  if (option == "Kick"){
    document.getElementById('ImageChosen').src = 'kick.png';
    document.getElementById('imagePrice').innerHTML = imageFivePrice;
    document.getElementById('ImageChosen').style.visibility = "visible";
    document.getElementById('totalPrice').style.visibility = "visible";
    document.getElementById('fullPrice').innerHTML = (document.getElementById('imagePrice').innerHTML*1) + (document.getElementById('sizePrice').innerHTML*1) + (document.getElementById('price').innerHTML*1);
  }
}

function pickpayment(input){
    if (input == "cash"){
        document.getElementById('paymentType').style.visibility = "hidden";
        document.getElementById('paymentinfoOne').innerHTML = "";
        document.getElementById('paymentinfoTwo').innerHTML = "";
        document.getElementById('paymentinfoThree').innerHTML = "";

    }

     if (input == "credit"){
         document.getElementById('paymentType').style.visibility = "visible";
        document.getElementById('paymentinfoOne').innerHTML = "Name:";
        document.getElementById('paymentinfoTwo').innerHTML = "Card Number:";
        document.getElementById('paymentinfoThree').innerHTML = "Expiry Date:";
    }


}
