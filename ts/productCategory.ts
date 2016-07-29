
/**
 * ProductCategory
 */
abstract class ProductCategory {
    protected imgPath = "img/"
    name: string;
    abstract getImageUrl(): string;
}

/**
 * SodaCategory
 */
class SodaCategory extends ProductCategory {
    name = "Soda";
    getImageUrl() {
        return this.imgPath + "soda.jpg";
    }
}