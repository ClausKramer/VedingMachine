/// <reference path="coin.ts" />
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />


enum VendingMachineSize {
    small = 6, medium = 9, large = 12
}

/**
 * Cell
 */
class Cell {

    constructor(public product: CocaCola) {
       
    }

    stock = ko.observable(3);
    sold = ko.observable(false);
}


/**
 * VendingMachine
 */
class VendingMachine {
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new CocaCola()))
    cells = ko.observableArray([]);
    acceptedCoins: Coin[] = [new Dime(), new Quarter(), new Half(), new Dollar()];
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >=0 )

    set size(givenSize: VendingMachineSize) {
        this.cells([])

        for (let index = 0; index < givenSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        } 
    }

select = (cell: Cell): void => {
    cell.sold(false);
    this.selectedCell(cell);
}


    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
        //this.paid += coin.Value;
        //var element = document.getElementById("total");
        //element.innerHTML = this.paid.toString()
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1){
            alert("I'm sorry, we're out of them")
            return
        }
        let currentPaid = this.paid()
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100)
        let currentStock = this.selectedCell().stock()
        this.selectedCell().stock(currentStock -1)
        this.selectedCell().sold(true)
    }
}