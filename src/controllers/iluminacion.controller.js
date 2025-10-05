export const postIluminacion = (req, res) => {
  try {
    const dato = req.body;
    console.log(dato);
    res.status(200).json(dato);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al recibir dato" });
  }
};
