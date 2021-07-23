# Nuxt Template
This is a Nuxt template project setup with below functions / library:
- [x] Nuxt - Composition API
- [ ] Nuxt - Vuex Store
- [x] Typescript
- [x] Tailwindcss
- [x] MongoDB
- [x] Apollo Graphql Server
- [x] Apollo Graphql Client
- [ ] Proxy
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
