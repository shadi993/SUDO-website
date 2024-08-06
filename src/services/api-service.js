class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, method = "GET", body = null, headers = {}) {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, config);
    if (!response.ok) {
      const error = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${error}`
      );
    }
    return response.json();
  }

  async get(endpoint, headers = {}) {
    return this.request(endpoint, "GET", null, headers);
  }

  async post(endpoint, body, headers = {}) {
    return this.request(endpoint, "POST", body, headers);
  }

  async put(endpoint, body, headers = {}) {
    return this.request(endpoint, "PUT", body, headers);
  }

  async delete(endpoint, headers = {}) {
    return this.request(endpoint, "DELETE", null, headers);
  }
}

const apiService = new ApiService("https://api.example.com");
export default apiService;
