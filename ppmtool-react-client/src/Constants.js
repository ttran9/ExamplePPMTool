export const BASE_URL =
  process.env.MANAGEMENT_BASE_URL || "http://localhost:8085/api/project";
export const GET_ALL_PROJECTS = `${BASE_URL}/all`;
export const GET_PROJECT = `${BASE_URL}/`;
