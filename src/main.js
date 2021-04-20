class main {
    constructor(options = {global: true}) {
        this.test = options.test;
        if(!options.da) throw new Error("You must enter a test value!")

    }
    getTest(){
        return this.test;
    }
}
module.exports = main;