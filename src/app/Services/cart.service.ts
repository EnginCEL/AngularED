import { Injectable } from '@angular/core';
import { CartItem } from '../Models/cartItem';
import { CartItems } from '../Models/cartitems';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {

    let item = CartItems.find(c => c.product.id === product.id);
    if (item) {

      item.quantity += 1;
    }
    else {
      let cartitem= new CartItem();
      cartitem.quantity=1;
      cartitem.product=product;
      CartItems.push(cartitem);

    }
  }

  removeFromCart(product:Product){

    let item= CartItems.find(c=>c.product.id===product.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list(){

    return CartItems;
  }
}
