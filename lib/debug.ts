export function debugParams(arg:any) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error("This can use on development only")
      }
    console.log('debugParams',arg)
    return arg
}
export const debugFunction =(fn:any)=>(...args:any)=> {
    if (process.env.NODE_ENV === 'production') {
        throw new Error("This can use on development only")
      }
    console.log('debugFunction','fn',fn)
    console.log('debugFunction','f...argsn',...args)
    const result =fn(...args)
    console.log('debugFunction','result',result)
    return result
}