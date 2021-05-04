import connectDB from "../../../utils/connectDB";
import Tendencies from "../../../models/Tendencie";

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const tendencie = await Tendencies.findById(id);

        if (!tendencie) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: tendencie });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const tendencie = await Tendencies.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!tendencie) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: tendencie });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedTendencie = await Tendencies.deleteOne({ _id: id });

        if (!deletedTendencie) {
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
