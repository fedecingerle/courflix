import connectDB from "../../../utils/connectDB";
import Originals from "../../../models/Original";

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const originals = await Originals.find({});
        res.status(200).json({ success: true, data: originals });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const original = await Originals.create(req.body);
        res.status(201).json({ success: true, data: original });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
