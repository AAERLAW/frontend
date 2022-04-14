import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getLaws(data) {
  const url = `${endpoint}/laws/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCreateLaw(data) {
  const url = `${endpoint}/laws`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function getSingleLaw(data) {
  const url = `${endpoint}/laws/${data.id}`;
  return await request({
    url,
    method: "GET",
  });
}

export async function deleteLaw(data) {
  const url = `${endpoint}/laws/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}
