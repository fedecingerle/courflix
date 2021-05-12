import connectDB from "../../../utils/connectDB";
import Films from "../../../models/Film";

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const film = await Films.findById(id);

        if (!film) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: film });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const film = await Films.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!film) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: film });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedFilm = await Films.deleteOne({ _id: id });

        if (!deletedFilm) {
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
