// 1. Function to delete a user by ID
// deleteUser.js
async function deleteUser(userId) {
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`, {
        method: "DELETE",
      });
      console.log(`Response Status: ${response.status}`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  deleteUser(1);


//   2. Async function to make a POST request
// postData.js
async function createUser(data) {
    try {
      const response = await fetch("https://api.example.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", await response.json());
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
  createUser({ name: "John Doe", email: "john@example.com" });
  
  
//   3. Define the function with user data as a parameter.
//   Use fetch() with PUT and include updated data in the body..
//   Parse and log the response.
// updateUser.js
async function updateUser(userId, updatedData) {
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const result = await response.json();
      console.log("Updated User Data:", result);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  updateUser(1, { name: "Jane Doe", email: "jane@example.com" });

  
//  4. Use Promise.all to handle multiple fetch() requests.
// Combine the results and display them together.
// multipleFetch.js
async function fetchMultipleUsers() {
    try {
      const urls = [
        "https://api.example.com/users/1",
        "https://api.example.com/users/2",
      ];
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((res) => res.json()));
      console.log("Combined Results:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchMultipleUsers();

  
// 5.  Define an async function to handle the fetch request.
// Use fetch() with the specified URL (API endpoint).
// Call .then() on the promise returned by fetch() to extract JSON data.
// Log the data to console.

// fetchData.js
async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/users");
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();

  
//  7.  Fetch data from an API.
// Filter the results based on criterion (e.g., age > 20).
// Display the filtered data
// filterData.js
async function filterUsers() {
    try {
      const response = await fetch("https://api.example.com/users");
      const users = await response.json();
      const filtered = users.filter((user) => user.age > 20);
      console.log("Filtered Users:", filtered);
    } catch (error) {
      console.error("Error filtering users:", error);
    }
  }
  filterUsers();


// 10.  Wrap your fetch code in a try...catch block.
//   In the try block, await the fetch call and parse the JSON.
//   In the catch block, log any errors that occur during the request.
// errorHandling.js
  async function safeFetch(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error occurred during fetch:", error);
    }
  }
  safeFetch("https://api.example.com/users");
  


  



  