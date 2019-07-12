import "reflect-metadata";

export const minimumValue = (propName: string, min: number) => 
    (constructor: any, methodName: string, descriptor: PropertyDescriptor): any => {
        const origFunction = descriptor.value;        
        descriptor.value = async function wrapper(...args) {
            let results = await origFunction.apply(this, args);
            return results.map(r => ({ ...r, [propName]: r[propName] < min 
                ? min : r[propName] }));
        }
    }

export const addClass = (selector: string, ...classNames: string[]) => 
    (constructor: any, methodName: string, descriptor: PropertyDescriptor): any => {
        if (Reflect.getMetadata("design:returntype", 
                constructor, methodName) === HTMLElement) {
            const origFunction = descriptor.value;        
            descriptor.value = function wrapper(...args) {        
                let content: HTMLElement = origFunction.apply(this, args);
                content.querySelectorAll(selector).forEach(elem => 
                    classNames.forEach(c => elem.classList.add(c)));
                return content;
            }
        } 
    }
