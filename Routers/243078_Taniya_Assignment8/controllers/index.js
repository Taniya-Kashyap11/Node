const {getUser,getUserId,addUser,updateUser,deleteUser}=require("./userController");
const {getProducts,getProductById,addProduct,deleteProduct,updateProduct}=require("./productController");
const {getOrder,getOrderById,addOrder,deleteOrder}=require("./orderController");
module.exports={
    getUser,
    getUserId,
    addUser,addProduct,addOrder,
    getProducts,
    getProductById,
    getOrder,getOrderById,
    deleteOrder,deleteProduct,deleteUser,updateProduct,updateUser

}