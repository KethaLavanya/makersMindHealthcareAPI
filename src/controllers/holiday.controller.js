import Holiday from "../models/holiday.model.js";

// POST
export const addHoliday = async (req, res) => {
  const holiday = await Holiday.create(req.body);

  res.json({
    success: true,
    data: holiday,
  });
};

// GET
export const getHolidays = async (req, res) => {
  const holidays = await Holiday.find();

  res.json({
    success: true,
    data: holidays,
  });
};

// PATCH
export const updateHoliday = async (req, res) => {
  const holiday = await Holiday.findByIdAndUpdate(
    req.params.id,

    req.body,

    { new: true },
  );

  res.json({
    success: true,
    data: holiday,
  });
};

// DELETE
export const deleteHoliday = async (req, res) => {
  await Holiday.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Deleted",
  });
};
