# Errata for *Book Title*

On **page xx** [Summary of error]:
 
Details of error here. Highlight key pieces in **bold**.

***

On **page xx** [Summary of error]:
 
Details of error here. Highlight key pieces in **bold**.

***

On **page 102** [Summary of error]:
 
Node version 8.x.x does not support spread operator used in objects. See error gotten from the otherHat example.

let otherHat = {...hat };
                ^^^

SyntaxError: Unexpected token ...
    at createScript (vm.js:74:10)
    at Object.runInThisContext (vm.js:116:10)
    at Module._compile (module.js:533:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Function.Module.runMain (module.js:605:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:575:3

Upgrade Node to 9.7.1 resolves this issue.
***