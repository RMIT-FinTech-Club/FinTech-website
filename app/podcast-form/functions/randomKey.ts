import crypto from "crypto";
export default function randomKey(bytes = 32) {
	return crypto.randomBytes(bytes).toString("hex");
}