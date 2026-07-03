import type { Handler } from "@netlify/functions";

const isLocalEnvironment = () => {
    return process.env.NETLIFY_DEV === "true" || process.env.CONTEXT === "dev";
};

const pickEnv = (localKey: string, productionKey: string, fallbackKey: string) => {
    const isLocal = isLocalEnvironment();
    const preferredKey = isLocal ? localKey : productionKey;
    return process.env[preferredKey] ?? process.env[fallbackKey];
};

export const handler: Handler = async (event) => {
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" })
        };
    }

    try {
        const airtablePat = pickEnv("AIRTABLE_PAT_LOCAL", "AIRTABLE_PAT_PROD", "AIRTABLE_PAT");
        const airtableBaseId = pickEnv("AIRTABLE_BASE_ID_LOCAL", "AIRTABLE_BASE_ID_PROD", "AIRTABLE_BASE_ID");
        const airtableTableId = pickEnv("AIRTABLE_TABLE_ID_LOCAL", "AIRTABLE_TABLE_ID_PROD", "AIRTABLE_TABLE_ID");

        if (!airtablePat || !airtableBaseId || !airtableTableId) {
            console.error("Airtable env vars are not fully configured");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Configuration Error" })
            };
        }

        let allRecords: any[] = [];
        let offset: string | undefined = undefined;

        do {
            const checkUrl = new URL(`https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableId)}`);
            checkUrl.searchParams.append("fields[]", "Rejs");
            if (offset) {
                checkUrl.searchParams.append("offset", offset);
            }

            const checkResponse = await fetch(checkUrl.toString(), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${airtablePat}`,
                },
            });

            if (!checkResponse.ok) {
                const errorText = await checkResponse.text();
                console.error("Failed to fetch records from Airtable", errorText);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: "Failed to fetch from Airtable" })
                };
            }

            const data = await checkResponse.json();
            if (data.records) {
                allRecords = allRecords.concat(data.records);
            }
            offset = data.offset;
        } while (offset);

        const spotsCount: Record<string, number> = {};
        for (const record of allRecords) {
            const rejs = record.fields?.Rejs;
            if (rejs) {
                spotsCount[rejs] = (spotsCount[rejs] || 0) + 1;
            }
        }

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(spotsCount)
        };
    } catch (error) {
        console.error("Error fetching from Airtable:", error);
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};
