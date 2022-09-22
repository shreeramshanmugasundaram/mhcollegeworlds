import collegelist from "../main/main.js";

const userCollege = (req, res) => {
  const {
    percentile,
    exam,
    category,
    branch,
    district,
    gender,
    dist1,
    dist2,
    dist3,
  } = req.body;
  if (
    !percentile ||
    !exam||
    !category ||
    !gender ||
    !branch ||
    !district ||
    !dist1 ||
    !dist2 ||
    !dist3
  ) {
    return res.status(400).json({ message: "insufficient Inputs" });
  }
console.log(branch)
  const result = collegelist(
    percentile,
    category,
    gender,
    branch,
    district,
    dist1,
    dist2,
    dist3
  );
  return res.status(200).json(result);
};

export default userCollege;
