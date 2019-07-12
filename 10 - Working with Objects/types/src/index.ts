type Person = {
    id: string,
    name: string, 
    city: string,
    getContact(field: string): string
};

type Employee = {
    id: string,
    company: string,
    dept: string
    getContact(field: number): number
};

type EmployedPerson = Person & Employee;

let person: EmployedPerson = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales", 
    getContact(field: string | number): any {
        return typeof field === "string" ? "Alice" : 6512346543;
    }  
};

let typeTest = person.getContact;
let stringParamTypeTest = person.getContact("Alice");
let numberParamTypeTest = person.getContact(123);

console.log(`Contact: ${person.getContact("Alice")}`);
console.log(`Contact: ${person.getContact(12)}`);
