import Leave from "../models/leave.model.js";

export const addLeave = async (req, res) => {
  const leave = await Leave.create(req.body);

  res.json(leave);
};

export const getLeaves = async (req, res) => {
  const leaves = await Leave.find();

  res.json(leaves);
};

export const updateLeave = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,

    req.body,

    { new: true },
  );

  res.json(leave);
};

export const deleteLeave = async (req, res) => {
  await Leave.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};
