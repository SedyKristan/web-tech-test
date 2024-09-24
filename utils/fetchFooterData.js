//This is used for fetching data from external source
export const fetchFooterData = async () => {
  try {
    const response = await fetch(
      "https://aukxvllqxhmbkzecdrgf.supabase.co/rest/v1/footer",
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_BEARER}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching footer data: ", error);
  }
};
