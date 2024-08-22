"use server";

export const getAllData = async (id: string) => {
  try {
    const req = await fetch(
      process.env.API_BASE_URL + `/users/${id}/favorites`
    );

    if (req.ok) {
      const res = await req.json();
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
};
