const createObservable = (initialValue = null) => {
    let value = initialValue;
    let subscribers = [];
    return {
        subscribe: (subscriber) => {
            subscribers.push(subscriber);
            subscriber(value);
            return () => { //unsubscribe
                subscribers = subscribers.filter(s => s !== subscriber);
            }
        },
        notify: (v) => {
            value = v;
            subscribers.forEach(subscriber => subscriber(v));
        }
    }
}
export const Store = {
    state: {
        ['AppName']: createObservable('app'),
        ['Version']: createObservable('1.0.0'),
    },
    changeState(attribute, value) {
        this.state[attribute].next(value)
    },
    getState(attribute) {
        return this.state[attribute]
    }
};


