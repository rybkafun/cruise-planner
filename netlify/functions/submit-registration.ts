import type { Handler } from "@netlify/functions";

type RegistrationPayload = {
    name?: string;
    email?: string;
    phone?: string;
    cruise?: string;
    captain?: string;
    message?: string;
};

const isLocalEnvironment = () => {
    return process.env.NETLIFY_DEV === "true" || process.env.CONTEXT === "dev";
};

const pickEnv = (localKey: string, productionKey: string, fallbackKey: string) => {
    const isLocal = isLocalEnvironment();
    const preferredKey = isLocal ? localKey : productionKey;

    return process.env[preferredKey] ?? process.env[fallbackKey];
};

export const handler: Handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" })
        };
    }

    try {
        const body = JSON.parse(event.body || "{}") as RegistrationPayload;
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

        const fields: Record<string, string> = {};
        const addFieldIfPresent = (key: string, value?: string) => {
            const normalizedValue = value?.trim();

            if (normalizedValue) {
                fields[key] = normalizedValue;
            }
        };

        addFieldIfPresent("ImieNazwisko", body.name);
        addFieldIfPresent("Email", body.email);
        addFieldIfPresent("Telefon", body.phone);
        addFieldIfPresent("Rejs", body.cruise);
        addFieldIfPresent("Kapitan", body.captain);
        addFieldIfPresent("OSobie", body.message);

        // Check current captain's reservations count for this specific cruise
        if (body.captain && body.cruise) {
            const formula = `AND({Kapitan}='${body.captain}', {Rejs}='${body.cruise}')`;
            const checkUrl = new URL(`https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableId)}`);
            checkUrl.searchParams.append("filterByFormula", formula);

            const checkResponse = await fetch(checkUrl.toString(), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${airtablePat}`,
                },
            });

            if (checkResponse.ok) {
                const checkData = await checkResponse.json();
                if (checkData.records && checkData.records.length >= 10) {
                    return {
                        statusCode: 409,
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            error: "CAPTAIN_FULL",
                            captain: body.captain
                        })
                    };
                }
            } else {
                const errorText = await checkResponse.text();
                console.error("Failed to check existing records in Airtable", errorText);

                // If it's a 404, it means the Base/Table is wrong, don't silently create records ignoring capacity.
                if (checkResponse.status === 404) {
                    return {
                        statusCode: 500,
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ error: "Airtable configuration error (NOT_FOUND)" })
                    };
                }
                // Otherwise proceed if it's a flaky network issue
            }
        }

        const response = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableId)}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${airtablePat}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                records: [{ fields }],
                typecast: true,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Airtable responded with status ${response.status}: ${errorBody}`);
        }

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Success" })
        };
    } catch (error) {
        console.error("Error submitting registration to Airtable:", error);
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};
