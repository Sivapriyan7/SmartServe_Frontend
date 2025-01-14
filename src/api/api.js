import axios from 'axios';

const BASE_URL = "3.111.57.60:8000";

export const getMenuItems = async (restaurantName) => {
  try {
    console.log(restaurantName);
    const response = await axios.get(`${BASE_URL}/get-menu-items/${restaurantName}`);
    console.log("in getting menu items");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};

export const placeOrder = async (restaurantName, orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/${restaurantName}/place-order`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    return { message: "Error placing order" };
  }
};

export const getUserId = async (restaurantName, username, mobileNumber) => {
  const response = await fetch(`${BASE_URL}/${restaurantName}/user-id`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, mobileNumber }),
  });
  const data = await response.json();
  if (data.success) {
    return data.user_id;
  } else {
    throw new Error(data.message);
  }
};
export const getUserOrders = async (restaurantName, userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${restaurantName}/orders/${userId}`);
    console.log("API Response:", response.data); // Debug response
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const addUser = async (restaurantName, username, mobileNumber) => {
  const response = await axios.post(`${BASE_URL}/${restaurantName}/add-user`, {
    username,
    mobileNumber,
  });
  return response.data;
};
