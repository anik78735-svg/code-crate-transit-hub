#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

const HOST = "www.tubepilot.shop";
const KEY_FILE = resolve("public/a3becd9983474dd4996ced58c3720df5.txt");
const SITEMAP_FILE = resolve("public/sitemap.xml");
const ENDPOINT = "https://api.indexnow.org/indexnow";

function decodeXml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&apos;", "'");
}

function validateUrl(value) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname !== HOST || url.username || url.password || url.hash) {
    throw new Error(`Refusing URL outside https://${HOST} or with credentials/fragments: ${value}`);
  }
  return url.toString();
}

async function getUrls() {
  const requested = (process.env.INDEXNOW_URLS ?? "")
    .replaceAll(String.fromCharCode(13), "")
    .split(String.fromCharCode(10))
    .flatMap((line) => line.split(","))
    .map((value) => value.trim())
    .filter(Boolean);
  if (requested.length) return [...new Set(requested.map(validateUrl))];

  const sitemap = await readFile(SITEMAP_FILE, "utf8");
  const urls = [...sitemap.matchAll(new RegExp("<loc>(.*?)</loc>", "g"))]
    .map((match) => decodeXml(match[1].trim()))
    .map(validateUrl);
  return [...new Set(urls)];
}

async function main() {
  const key = (await readFile(KEY_FILE, "utf8")).trim();
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key) || basename(KEY_FILE) !== `${key}.txt`) {
    throw new Error("IndexNow key file name/content is invalid.");
  }
  const urlList = await getUrls();
  if (!urlList.length) throw new Error("No URLs found to submit.");
  if (urlList.length > 10000) throw new Error("IndexNow accepts at most 10,000 URLs per request.");

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
  });
  const body = await response.text();
  console.log(`IndexNow response: HTTP ${response.status} ${response.statusText}`);
  console.log(`Submitted ${urlList.length} URL(s) for ${HOST}.`);
  if (body) console.log(body);
  if (!response.ok && response.status !== 202) throw new Error("IndexNow submission failed.");
  if (response.status === 202) console.log("URLs accepted; key verification may still be pending.");
  else console.log("IndexNow accepted the submission. This does not guarantee indexing.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
