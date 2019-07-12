declare interface Debug {
    (namespace: string): Debugger
}

declare interface Debugger {
    (...args: string[]): void;
    enabled: boolean;
}

declare var debug: { default: Debug };
export = debug;
