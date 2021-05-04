import connectDB from "../../../utils/connectDB";
import Originals from "../../../models/Original";

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const original = await Originals.findById(id);

        if (!original) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: original });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const original = await Originals.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!original) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: original });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedOriginal = await Originals.deleteOne({ _id: id });

        if (!deletedOriginal) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
      break;
  }
};
