FROM node:22.19.0-alpine
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY ./public ./public
COPY ./package.json ./package.json

COPY  --chown=nextjs:nodejs ./.next/standalone ./
COPY  --chown=nextjs:nodejs ./.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "--max-old-space-size=7500", "server.js"]
