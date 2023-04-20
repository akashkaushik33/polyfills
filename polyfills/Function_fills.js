Function.prototype.$bind = function (context, ...args1) {
    const functionCtx = this;    
    return function (...args2) {
        const args = [...args1, ...args2];        
        return functionCtx.apply(context, args);
    }
}