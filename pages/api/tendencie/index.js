import connectDB from "../../../utils/connectDB";
import Tendencies from "../../../models/Tendencie";

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const tendencies = await Tendencies.find({});
        res.status(200).json({ success: true, data: tendencies });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const tendencie = await Tendencies.create(req.body);
        res.status(201).json({ success: true, data: tendencie });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
