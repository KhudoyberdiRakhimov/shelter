(function() {
  var carousels = document.querySelectorAll('.js-product-carousel');
  
  [].forEach.call(carousels, function(carousel) {
    carouselize(carousel);
  });
  
})();

function carouselize(carousel) {
  var productList = carousel.querySelector('.js-product-list');
  var productListWidth = 0;
  var productListSteps = 0;
  var products = carousel.querySelectorAll('.product');
  var productAmount = 0;
  var productAmountVisible = 3

  if (screen.availWidth >= 768 && screen.availWidth < 1200) {
    productAmountVisible = 2
  } else if (screen.availWidth < 768) {
    productAmountVisible = 1;
  }
  var carouselPrev = carousel.querySelector('.js-carousel-prev');
  var carouselNext = carousel.querySelector('.js-carousel-next');

  //Count all the products
  [].forEach.call(products, function(product) {
    productAmount++;
    productListWidth += 300;
    productList.style.width = productListWidth+"px";
  });

  carouselNext.onclick = function() {
    if(productListSteps === productAmount-productAmountVisible) {
      productList.style.transform = "translateX(-0px)"
      productListSteps = 0
    } else if (productListSteps < productAmount - productAmountVisible) {
      productListSteps++;
      moveProductList();
    }
  }
  
  carouselPrev.onclick = function() {
    if(productListSteps > 0) {
      productListSteps--;
      moveProductList();
    } else {
      if (screen.availWidth >= 768 && screen.availWidth < 1200) {
        productList.style.transform = "translateX(-"+310*6+"px)";
        productListSteps = 6
      } else if (screen.availWidth <768) {
        productList.style.transform = 'translateX(-' + 310 * 7 + 'px)';
        productListSteps = 7
      }
       else {
        productList.style.transform = "translateX(-"+310*5+"px)";
        productListSteps = 5
      }
    }
  }
  
  // Move the carousels product-list
  function moveProductList() {
    productList.style.transform = "translateX(-"+310*productListSteps+"px)";
  }
}