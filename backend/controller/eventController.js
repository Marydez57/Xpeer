import data from "../data.js";

 export const getAllEvent = (req, res) => {
    res.status(200).json(data)
}

export const getEventById = (req, res) => {
    const event = data.find((n) => n._id === req.params.id)
    res.send(event)
    console.log(event)
}