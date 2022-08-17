// Tüm api call işlemleri burda gerçekleştirilecek.
import axios from "axios";

export const fetchCategoryList = async () => {
  const { data } = await axios.get(
    "https://store.vrunibex.com/mobile2/mbProduct/CategoryList"
  );
  return data;
};
