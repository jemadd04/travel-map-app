const API_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:1337'
    : 'https://james-adventures-q199bc9ge.now.sh';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createLogEntry(entry) {
  const response = await fetch(`${API_URL}/api/logs`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(entry)
  });
  return response.json();
}
