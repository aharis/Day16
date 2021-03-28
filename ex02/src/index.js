// Only change code below this line
class Bok {
    constructor(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
}
// Only change code above this line
const littlePrince = new Bok("The Little Prince");
console.log(littlePrince.title);
littlePrince.title ="La Petit Prince";
console.log(littlePrince.title);

module.exports = Bok;