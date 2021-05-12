import connectDB from "../../../utils/connectDB";
import Series from "../../../models/Serie";

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const serie = await Series.findById(id);

        if (!serie) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: serie });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const serie = await Series.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!serie) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: serie });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedSerie = await Series.deleteOne({ _id: id });

        if (!deletedSerie) {
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
