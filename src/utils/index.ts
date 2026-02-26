export const generateKey = (string: string):string => {
   return string + (Math.random() * string.length).toString();
}