"use server";

export const getAllData = async () => {
  try {
    const req = await fetch(process.env.API_BASE_URL + `/tags`);

    if (req.ok) {
      const res = await req.json();
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
};
