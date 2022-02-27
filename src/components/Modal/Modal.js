import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal fade" id={props.modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Добавить продукт</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Название продукта</label>
                        <input type="text" className="form-control" id="productName" onChange={props.onChangeProductName} value={props.valueProductName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">Вставьте URL картинки продукта</label>
                        <input type="text" className="form-control" id="productImage" onChange={props.onChangeProductImage} value={props.valueProductImage} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productDetail" className="form-label">Детальное описание продукта</label>
                        <input type="text" className="form-control" id="productDetail" onChange={props.onChangeProductDetail} value={props.valueProductDetail} />
                    </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={props.onAddProduct} disabled={props.disabled}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;