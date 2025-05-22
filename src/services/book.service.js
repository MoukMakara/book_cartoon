"use server";

export const getAllBooksService = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getBookByIdService = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getBookByNameService = async (name) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book?search=${name}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllBookCategoriesService = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book_category`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getBookCategoryByIdService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book_category/search?query=${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getBooksByCategoryIdService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book?query=${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
