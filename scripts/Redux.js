const createSubscriber=(initialValue = null)=>{
    let value = initialValue;
    let subscribers = [];
    return {
        subscribe: (subscriber) => {
            subscribers.push(subscriber);
            subscriber(value);
            return () => {
                subscribers = subscribers.filter(s => s !== subscriber);
            }
        },
        next: (value) => {
            subscribers.forEach(subscriber => subscriber(value));
        }
    }
}
export const Store = {
    state: {
        ['AppName']: createSubscriber('app'),
        ['Version']: createSubscriber('1.0.0'),
    },
    changeState(attribute, value) {
        this.state[attribute].next(value)
    },
    getState(attribute) {
        return this.state[attribute]
    }
};


