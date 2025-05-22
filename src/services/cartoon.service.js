"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllCartoonsService = async () => {
  try {
    const res = await fetch(`${baseUrl}/cartoon`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonByIdService = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/cartoon/${id}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonByTitleService = async (title) => {
  try {
    const res = await fetch(`${baseUrl}/cartoon?search=${title}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCartoonGenresService = async () => {
  try {
    const res = await fetch(`${baseUrl}/cartoon_genre`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getCartoonGenresByIdService = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/cartoon_genre/search?genre=${id}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonsByGenreIdService = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/cartoon?genre=${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
