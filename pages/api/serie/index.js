import connectDB from "../../../utils/connectDB";
import Series from "../../../models/Serie";

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const series = await Series.find({});
        res.status(200).json({ success: true, data: series });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const serie = await Series.create(req.body);
        res.status(201).json({ success: true, data: serie });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
