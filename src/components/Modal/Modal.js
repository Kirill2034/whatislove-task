import React, {useState} from 'react';

const Modal = ({product, onSave, modalId}) => {
    const [inputValueProductName, setInputValueProductName] = useState(product ? product.name : "");
    const [inputValueProductImage, setInputValueProductImage] = useState(product ? product.image : "");
    const [inputValueProductDetail, setInputValueProductDetail] = useState(product ? product.detail : "");

    const handleChangeProductName = event => {
        setInputValueProductName(event.target.value);
    }
    const handleChangeProductImage = event => {
        setInputValueProductImage(event.target.value);
    }
    const handleChangeProductDetail = event => {
        setInputValueProductDetail(event.target.value);
    }

    

    const saveProduct = () => {
        onSave({
            name: inputValueProductName,
            image: inputValueProductImage,
            detail: inputValueProductDetail
        });
    }

    return (
        <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{product ? "Редактирование товара" : "Добавление товара"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Название продукта</label>
                        <input type="text" className="form-control" id="productName" onChange={handleChangeProductName} value={inputValueProductName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">Вставьте URL картинки продукта</label>
                        <input type="text" className="form-control" id="productImage" onChange={handleChangeProductImage} value={inputValueProductImage} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productDetail" className="form-label">Детальное описание продукта</label>
                        <input type="text" className="form-control" id="productDetail" onChange={handleChangeProductDetail} value={inputValueProductDetail} />
                    </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" className={product ? "btn btn-outline-info" : "btn btn-danger"} data-bs-dismiss="modal" onClick={saveProduct} disabled={!inputValueProductName}>{product ? "Сохранить" : "Добавить"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;