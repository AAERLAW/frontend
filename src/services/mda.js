import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getRegulations(data) {
  const url = `${endpoint}/regulations/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCreateRegulation(data) {
  const url = `${endpoint}/regulations`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}
export async function deleteRegulation(data) {
  const url = `${endpoint}/regulations/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}

export async function getRegulationItems(data) {
  const url = `${endpoint}/regulationitems/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}
export async function getSingleRegulationItem(data) {
  const url = `${endpoint}/regulationitems/${data.id}`;
  return await request({
    url,
    method: "GET",
  });
}

export async function postCreateRegulationItem(data) {
  const url = `${endpoint}/regulationitems`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function deleteRegulationItem(data) {
  const url = `${endpoint}/regulationitems/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}
