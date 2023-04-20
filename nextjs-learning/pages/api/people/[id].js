import { people } from "../../../data";

export default function personHandler(req, res) {
    const { id } = req.query;
    const person = people.find((p) => p.id === id);

    // User with id exists
    return person
        ? res.status(200).json(person)
        : res.status(404).json({ message: `User with id: ${id} not found.` });
}
