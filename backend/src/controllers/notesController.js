// through const 
export const controlOfGet = (req, res) => {
    res.status(200).send("get hit");
}
 // or through function
export function controlOfPOst(req, res) {
    res.status(201).json({ message : "post hit"})
}

export const controlOfPut = (req, res) => {
    res.status(200).json({ message: "put hit"})
}

export const controlOfDel = (req, res) => {
    res.status(200).json({ message : "delete hit"})
}