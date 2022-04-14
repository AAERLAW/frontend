import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getRules(data) {
  const url = `${endpoint}/rules/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function getSingleRule(data) {
  const url = `${endpoint}/rules/${data.id}`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postRule(data) {
  const url = `${endpoint}/rules`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function deleteRule(data) {
  const url = `${endpoint}/rules/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}

export async function getCourts(data) {
  const url = `${endpoint}/courts/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCourts(data) {
  const url = `${endpoint}/courts`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function deleteCourt(data) {
  const url = `${endpoint}/courts/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}

export async function getCourtForms(data) {
  const url = `${endpoint}/court-forms/paginated`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCourtForms(data) {
  const url = `${endpoint}/court-forms`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function deleteCourtForm(data) {
  const url = `${endpoint}/court-forms/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}

export async function getCourtFormsItem(data) {
  const url = `${endpoint}/court-form-items/paginated`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCourtFormsItem(data) {
  const url = `${endpoint}/court-form-items`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function deleteCourtFormItem(data) {
  const url = `${endpoint}/court-form-items/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}

export async function getForms(data) {
  const url = `${endpoint}/forms/paginated`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function getSingleForm(data) {
  const url = `${endpoint}/forms/${data.id}`;
  return await request({ url, method: "GET" });
}

export async function postForms(data) {
  const url = `${endpoint}/forms`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function deleteForm(data) {
  const url = `${endpoint}/forms/${data.id}`;
  return await request({
    url,
    method: "DELETE",
  });
}
