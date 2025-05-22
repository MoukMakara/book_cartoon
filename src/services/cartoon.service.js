"use server";

export const getAllCartoonsService = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonByIdService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonByTitleService = async (title) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon?search=${title}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCartoonGenresService = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getCartoonGenresByIdService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre/search?genre=${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonsByGenreIdService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon?genre=${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
