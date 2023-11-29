import axios from "axios";

const baseUrl = "https://v2.jokeapi.dev/joke";

export async function getJoke(answers) {
  let { category, jokeType } = answers;
  jokeType = jokeType.length === 1 ? jokeType[0] : false;
  try {
    const url = `${baseUrl}/${category}${jokeType ? `?type=${jokeType}` : ""}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
  }
}
