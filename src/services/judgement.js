import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getReports(data) {
  const url = `${endpoint}/reports/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}
export async function getSingleReport(data) {
  const url = `${endpoint}/reports/${data.id}`;
  return await request({
    url,
    method: "GET",
  });
}

export async function postReports(data) {
  const url = `${endpoint}/reports`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function putReports(data) {
  const url = `${endpoint}/reports`;
  return await request({
    url,
    method: "PUT",
    data,
    formatData: true,
  });
}

export async function deleteReport(data) {
  const url = `${endpoint}/reports/${data.id}`;
  return await request({
    url,
    method: "DELETE",
    formatData: false,
  });
}
