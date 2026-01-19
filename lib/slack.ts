function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export async function postToSlack(message: string) {
  const webhookUrl = requireEnv("SLACK_WEBHOOK_URL");

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Slack webhook failed: ${res.status} ${text}`);
  }
}
