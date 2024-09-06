"use server";
export const getAllData = async () => {
  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/user_events"
    );

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
