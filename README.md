# Cypress + Petstore Test Otomasyon Projesi (Allure Raporlamalı)

## UI Testi
- example.cypress.io üzerinde form testi

## API Testleri
- petstore.swagger.io → GET, POST, PUT, DELETE

## Raporlama
- Allure raporları üretir
- Çalıştır: `npm run test`
- Rapor aç: `npm run report`

## Kurulum
```
npm install
npm run test
npm run report
```

## Çalışmıyorsa yapılması gereken adım
```
rm -rf node_modules package-lock.json
npm install
npx cypress run --env allure=true
```
