import connectDB from "../../../utils/connectDB";
import Films from "../../../models/Film";

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const films = await Films.find({});
        res.status(200).json({ success: true, data: films });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const film = await Films.create(req.body);
        res.status(201).json({ success: true, data: film });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
