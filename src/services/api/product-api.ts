import CallAPI from "./call-api";

const productRoutes = {
    getAllProduct: '/api/v1/products',
}

export default class ProductService {
    static getAllProduct = async()=>{
        try{
            const response = await CallAPI.call(productRoutes.getAllProduct,{
                method:'GET'
            })
            return response
        }
        catch(err){
            throw err;
        }
    }

    
}