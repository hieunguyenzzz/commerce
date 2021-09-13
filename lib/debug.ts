export function debugParams(arg:any) {
    if (process.env.NODE_ENV === 'production') {
        console.error("This can use on development only")
      }
      console.log('debugParams',JSON.stringify({arg},null,2))
    return arg
}
export const debugFunction =(fn:any)=>(...args:any)=> {
    if (process.env.NODE_ENV === 'production') {
        console.error("This can use on development only")
      }
    console.log('debugFunction','fn',fn)
    console.log('debugFunction',JSON.stringify({args},null,2))
    const result =fn(...args)
    console.log('debugFunction',JSON.stringify({result},null,2))
    return result
}