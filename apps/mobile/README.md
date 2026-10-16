# Skudot AgentX Mobile

Separate Expo + React Native + TypeScript workspace. It does not modify the existing Next.js app.

## Run

```bash
cd apps/mobile
cp .env.example .env
npm install
npm run start
```

Set `EXPO_PUBLIC_API_BASE_URL` to the FastAPI host reachable by the device. For a physical phone, use your development computer's LAN IP instead of `localhost`.

## Integration status

The repository inspected for this change contains only placeholder `.gitkeep` files under `apps/api` and `apps/web`; it does not contain FastAPI source, OpenAPI schema, auth handlers, lead/customer models, notification routes, or quotation/payment document routes. Therefore this commit provides the isolated mobile shell and a typed HTTP transport, but deliberately does not guess endpoint names, create fake records, or claim OTP, lead actions, documents, or push notifications work.

Before wiring live flows, provide the backend repository or commit its FastAPI source and `/openapi.json`. Then map the existing OTP session shape, tenant context, assignment/authorization rules, active lead rules, AgentX pause/instruction/resume operations, customer duplicate matching, history, and authenticated PDF routes. Add backend routes only after documenting concrete gaps. Never connect mobile directly to Odoo, databases, Redis, Razorpay, Meta, or object storage.
