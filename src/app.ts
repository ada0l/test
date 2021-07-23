export class App {

    private name;

    constructor(name: string) {
        this.name = name;
    }

    public sayHello() {
        console.log(this.name);
    }
};