/**
 * Sabbath Videos: copy new videos from GitHub into Google Drive.
 *
 * Checks the Morganmd7/sabbath-videos repo (the videos/ folder and any
 * Release attachments) and copies every video that isn't already in the
 * "Sabbath Videos" Drive folder. Files already in Drive are skipped, so it is
 * safe to run as often as you like.
 *
 * Setup (one time):
 *   1. Paste this into a new project at script.google.com
 *   2. Pick "setup" in the function menu and click Run
 *   3. Approve the permissions Google asks for
 * After that it runs every hour on its own.
 */

const REPO = 'Morganmd7/sabbath-videos';
const DRIVE_FOLDER_ID = '1e2cWKJ1cMKdbI_ct4P-UQ9V-PYtQEyEk'; // "Sabbath Videos"
const MAX_BYTES = 50 * 1024 * 1024; // Apps Script download limit

function setup() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('syncVideos').timeBased().everyHours(1).create();
  syncVideos();
}

function syncVideos() {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const have = new Set();
  const it = folder.getFiles();
  while (it.hasNext()) have.add(it.next().getName());

  getGithubVideos().forEach(v => {
    if (have.has(v.name)) return;
    if (v.size > MAX_BYTES) {
      console.warn('Skipped (over 50 MB): ' + v.name);
      return;
    }
    const blob = UrlFetchApp.fetch(v.url, { followRedirects: true })
      .getBlob().setName(v.name).setContentType('video/mp4');
    folder.createFile(blob);
    have.add(v.name);
    console.log('Copied: ' + v.name);
  });
}

function getGithubVideos() {
  const out = [];
  const opts = { muteHttpExceptions: true, headers: { Accept: 'application/vnd.github+json' } };

  const files = UrlFetchApp.fetch('https://api.github.com/repos/' + REPO + '/contents/videos', opts);
  if (files.getResponseCode() === 200) {
    JSON.parse(files.getContentText()).forEach(f => {
      if (/\.mp4$/i.test(f.name)) out.push({ name: f.name, size: f.size, url: f.download_url });
    });
  }

  const rels = UrlFetchApp.fetch('https://api.github.com/repos/' + REPO + '/releases?per_page=100', opts);
  if (rels.getResponseCode() === 200) {
    JSON.parse(rels.getContentText()).forEach(r => (r.assets || []).forEach(a => {
      if (/\.mp4$/i.test(a.name)) out.push({ name: a.name, size: a.size, url: a.browser_download_url });
    }));
  }
  return out;
}
