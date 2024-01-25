window.onload = async () => {

    const test2 = new AppTest2();

    test2.subscribe('test_data_loaded', data => {
        console.log("sub1", data)
    })
    test2.subscribe('test_data_loaded', (data) => {
        console.log("sub2", data)
     })
     console.log(`**********After two subscriptions *************`)

     test2.publish('test_data_loaded');
}


class AppTest2 {

    //lista de eventos
    events = [];

    constructor() {}

    subscribe(eventName, handler) {

        //se nesta lista de eventos não existir o evento "test_data_loaded"
        if(!this.events[eventName]) {
            //criar o tipo "test_data_loaded"
            this.events[eventName] = [];
        }
        // e adicionar à lista
        this.events[eventName].push(handler); }

    unsubscribe(event, handler) {
        if(this.events[event]) {
            const index = this.events[event].findIndex(item => item === handler);
            this.events[event].splice(index, 1);
        }
    }

    // this.events["test_load_data"] = [handler1, handler2, handler3...]

    publish(event, data) {
        if(this.events[event]) {
            this.events[event].forEach(async handler => {
                const req = await fetch("data.json");
                const res = await req.json();
                handler(res);
            });
        }
    }
}