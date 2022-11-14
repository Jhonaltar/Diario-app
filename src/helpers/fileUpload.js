export const fileUpload = async (file) => {
  if (!file) {
    throw new Error("No tenemos ningun archivo a subir");
  }

  const cloudUrl = "https://api.cloudinary.com/v1_1/dzpqjw7oy/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-diario");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
