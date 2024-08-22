"use server";

export const getAllData = async (id: string) => {
  try {
    const req = await fetch(process.env.API_BASE_URL + `/users/${id}/follows`);

    if (req.ok) {
      const res = await req.json();
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllDataFollowers = async (id: string) => {
  try {
    const req = await fetch(
      process.env.API_BASE_URL + `/channels/${id}/followers`
    );

    if (req.ok) {
      const res = await req.json();
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
};
