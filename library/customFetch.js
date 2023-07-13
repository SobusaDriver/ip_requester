import { TIMEOUT_LENGTH } from "../constants.js";
export default async function fetchWithTimeout(resource, options = {}) {
  const { timeout = TIMEOUT_LENGTH } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);

  return response;
}