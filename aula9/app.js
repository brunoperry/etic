window.onload = async () => {

    const test = new AppTest();
    test.addEventListener('test_data_loaded', (event) =>{
        console.log(event.detail);
    })
    test.loadData();
}

class AppTest extends HTMLElement {
    constructor() {
        super();
    }
    async loadData() {
        const req = await fetch("data.json");
        const res = await req.json();
        this.dispatchEvent(new CustomEvent("test_data_loaded", {detail:res}));
    }
}
customElements.define('app-test', AppTest);