# Nuxt Template
This is a Nuxt template project setup with below functions / library:
- [x] Nuxt - Composition API
- [ ] Nuxt - Vuex Store
- [x] Typescript
- [x] Tailwindcss
- [x] MongoDB
- [ ] Apollo Graphql Server
- [ ] Apollo Graphql Client
- [ ] Proxy
- [ ] Vercel (Deployment)

---
## Dependency Setup
```bash
# create database
$ docker-compose up -d

# install dependencies
$ yarn
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
