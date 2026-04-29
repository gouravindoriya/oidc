import { readFileSync } from "node:fs";
import path from "node:path";

export const PRIVATE_KEY = readFileSync(path.resolve("certificates/private_key.pem"));
export const PUBLIC_KEY = readFileSync(path.resolve("certificates/public_key.pub"));