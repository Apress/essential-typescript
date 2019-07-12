import store, { StoreState } from "../store";

export function state<T extends keyof StoreState>(name: T) {
    return function(target: any, propKey: string): any {
        return {
            get: function() {
                return store.state[name];
            }
        }
    }
}

export function getter(name?: string) {
    return function(target: any, propKey: string): any {
        return {
            get: function() {
                return store.getters[name || propKey];
            }
        }
    }
}

export function mutation(name?: string) {
    return function(target: any, propKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = function(...args: any) {
            store.commit(name || propKey, ...args);
        }   
    }
}

export function action(name?: string) {
    return function(target: any, propKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = function(...args: any) {
            store.dispatch(name || propKey, ...args);
        }   
    }
}
