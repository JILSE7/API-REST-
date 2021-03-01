/* Clase que representa una petición de compra de un auto */

class PurchaseRequest {
    constructor(id, creationDate, status, purchaserID, carID) {
        this.id = id;
        this.creationDate = creationDate;
        this.status = status;
        this.purchaserID = purchaserID;
        this.carID = carID;
    }
}

module.exports = PurchaseRequest;