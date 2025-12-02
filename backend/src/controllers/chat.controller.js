export const doChatWithAi = async (req, res) => {
  try {
    res.send("hello");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error From Chat" });
  }
};
