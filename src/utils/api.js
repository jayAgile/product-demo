import axios from "axios";

// simple api call
export async function getProductData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    return json;
  } catch (error) {}
}

// axios api call
export async function getAxiosData() {
  try {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Fetch post api call
export async function postData(bodyData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(bodyData),
      // body: JSON.stringify({
      //   title: "foo",
      //   body: "bar",
      //   userId: 1,
      // }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
