import { Product } from "./Product";
import { ResponseModel } from "./ResponseModel";

export interface ProductResponseModel extends ResponseModel{

    data:Product[];
  
}