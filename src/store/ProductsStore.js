import { makeAutoObservable} from 'mobx';
import ProductImage1 from '../images/001.jpg';
import ProductImage2 from '../images/002.jpg'
import ProductImage3 from '../images/003.jpg'

class ProductsStore {
    
    products = [
        {id: '1', name: 'test 1', image: ProductImage1, detail: ''},
        {id: '2', name: 'test 2', image: ProductImage2, detail: ''}, 
        {id: '3', name: 'test 3', image: ProductImage3, detail: ''}
    ];

    constructor() {
        makeAutoObservable(this)
    }
    
    addProduct(product) {
        this.products.push(product);
        console.log(product)
    }

    deleteProductById(productId) {
        const idDelitingProduct = this.products.findIndex(product => product.id === productId);
        this.products.splice(idDelitingProduct, 1);
        console.log(this.products)
    }

    getProduct() {
        return this.products;
    }

    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }
} 


const productsStore = new ProductsStore();
export {productsStore};
