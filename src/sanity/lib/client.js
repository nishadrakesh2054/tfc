import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

// Read-only client for fetching data
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  perspective: "published",
});

// Write client for mutations (create, update, delete)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token, // Required for write operations
  // Don't use perspective for write operations
});
