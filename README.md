# Nuxt Template
This is a Nuxt template project setup with below functions / library:
- [x] Nuxt - Composition API
- [x] Nuxt - Vuex Store
- [x] Vuex Persist
- [x] Typescript
- [x] Tailwindcss
- [x] MongoDB
- [x] Apollo Graphql Server
- [x] Apollo Graphql Client
- [x] Proxy
- [ ] Vercel (Deployment)

---
## Dependency Setup
```bash
# create database
$ docker-compose up -d

# install dependencies
$ yarn

# generate GraphQL
$ yarn graphql

# create .env (If env file does not exist)
$ cp .env.example .env
```

## Deployment (Vercel)
1. install `Vercel CLI`
2. run `vercel` in the project (if need env variable, set at `vercel.json`)
3. connect to your vercel workspace
---
## Potential Issue
```bash
# to fix mongoDB not master
$ sh fix-mongo-not-master.sh
```
---
## Development Tips
```bash
# to build a global style from tailwindCSS as plugin
$ npx tailwindcss build ./assets/css/main.css -o tailwindcss.generated.css
```
