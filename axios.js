import axios from "axios";

const request = (
  url,
  endpoint,
  requestType,
  data,
  authenticated,
  successCallback = null,
  errorCallback = null
) => {
  let headers = null;
  if (authenticated) {
    headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
  }

  const requestObject = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    patch: axios.patch,
  };

  let request = null;
  if (data) {
    request = requestObject[requestType](url, data, headers);
  } else {
    request = requestObject[requestType](url, headers);
  }
  request
    .then((response) => {
      if (successCallback) {
        successCallback(response);
      }
    })
    .catch((error) => {
      if (!errorCallback) {
        //code
      } else {
        errorCallback(error);
      }
    });
};

const sendRequest = (
  endpoint,
  requestType,
  data = null,
  authenticated,
  successCallback = null,
  errorCallback = null
) => {
  const url = `https://masaratpipe-001-site2.atempurl.com/api/${endpoint}`;
  request(
    url,
    endpoint,
    requestType,
    data,
    authenticated,
    successCallback,
    errorCallback
  );
};

export { sendRequest };
