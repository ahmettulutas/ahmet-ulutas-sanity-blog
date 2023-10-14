  export const generatePathName = (path:string): string => {
    if(!path) return "";
    const splittedPath = path.split("/").filter(item => !!item)
    if(splittedPath.length === 1) return ""
    return splittedPath.slice(1, splittedPath.length).join("/")
  }