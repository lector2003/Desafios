export default class ProductsDto{
    constructor({name,price,description}){
        this.name=name,
        this.price=price,
        this.description=description 
    }
}

export function asDto(prods){
    if(Array.isArray(prods)){
        return prods.map(p=>new  ProductsDto(p))
    }else{
        return new ProductsDto(prods)
    }
}