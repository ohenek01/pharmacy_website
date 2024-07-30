const axios = require('axios');
const uuid = require('uuid');

const baseURL = 'https://sandbox.momodeveloper.mtn.com';
const subscriptionKey = 'ab2e513e6c3e44a880fb72fa5f3c4f08'; // Replace with your subscription key

// Generate a unique user ID
const userId = uuid.v4();

// Create a new API user
const createUser = async () => {
  try {
    await axios.post(
      `${baseURL}/v1_0/apiuser`,
      {
        providerCallbackHost: 'https://momodeveloper.mtn.com/collection', // Replace with your callback URL
      },
      {
        headers: {
          'X-Reference-Id': userId,
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('User created successfully. User ID:', userId);
    return userId;
  } catch (error) {
    console.error('Error creating user:', error.response.data);
    throw error;
  }
};

// Generate an API key for the created user
const generateApiKey = async (userId) => {
  try {
    const response = await axios.post(
      `${baseURL}/v1_0/apiuser/${userId}/apikey`,
      {},
      {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
      }
    );
    console.log('API Key generated successfully:', response.data.apiKey);
    return response.data.apiKey;
  } catch (error) {
    console.error('Error generating API key:', error.response.data);
    throw error;
  }
};

const setupUserAndApiKey = async () => {
  try {
    const userId = await createUser();
    const apiKey = await generateApiKey(userId);
    console.log('User ID:', userId);
    console.log('API Key:', apiKey);
  } catch (error) {
    console.error('Error setting up user and API key:', error);
  }
};

setupUserAndApiKey();
