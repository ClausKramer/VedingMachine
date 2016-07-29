/**
 * Coin
 */
abstract class Coin {
    //protected value: number
    constructor(protected value: number) {
        this.value = value    
    }
    abstract getImageUrl(): string
}

/**
 * Quarter
 */
class Quarter extends Coin {
    constructor() {
        super(.25)
    }
    //private value: number = .25;
    getImageUrl(): string {
        return "img/coin.png";
    }

    get Value() {
        return this.value;
    }

}

/**
 * Dime
 */
class Dime extends Coin {
    constructor() {
        super(.25)
    }
    
    //private value: number = .10;
    getImageUrl(): string {
        return "img/coin.png";
    }

    get Value() {
        return this.value;
    }

}

/**
 * Dime
 */
class Half extends Coin {
    constructor() {
        super(.5)
    }
    
    //private value: number = .10;
    getImageUrl(): string {
        return "img/coin.png";
    }

    get Value() {
        return this.value;
    }

}

/**
 * Dime
 */
class Dollar extends Coin {
    constructor() {
        super(1)
    }
    
    //private value: number = .10;
    getImageUrl(): string {
        return "img/coin.png";
    }

    get Value() {
        return this.value;
    }

}
