---
tags:
- HowTo
prev: ./lager
---
# Lager Datenmanagement
![icons_odoo_stock](assets/icons_odoo_stock.png)

Daten zu Lager exportieren und importieren.

## Produktverpackungen exportieren

Listenansicht: *Lager > Konfiguration > Produktverpackungen*

Felder:
```
product_id
name
barcode
```
Datei: `product.packaging.csv`

Calc-Formeln: `=CONCAT(F2," - ",G2)`
