"use server";

import { currentUser } from "@clerk/nextjs/server";

export const getAllData = async () => {
  const user = await currentUser();
  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + `/users/${user?.id}/follows`
    );

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllDataFollowers = async (id: string) => {
  try {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + `/channels/${id}/followers`
    );

    if (req.ok) {
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

// export const followChannels = async (channel_id: string) => {
//   let user = await currentUser();

//   if (user) {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/follow/channels`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ channel_id, user_id: user.id }),
//         }
//       );

//       const res = await response.text();

//       if (!response.ok) {
//         throw new Error("Failed to follow channel");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error following channel:", error);
//       return null;
//     }
//   }
// };

export const followChannel = async (channel_id: string) => {
  let user = await currentUser();

  if (user) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/follow/channels`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ channel_id, user_id: user.id }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to follow channel");
      }

      const data = await response.json();
      return { message: "success" };
    } catch (error) {
      console.error("Error following channel:", error);
      return null;
    }
  }
};
