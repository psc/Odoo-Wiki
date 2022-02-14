---
tags:
- HowTo
- Drittanbieter
prev: ./fertigung
---
# Manufacturing BoM Consumption
![icon_oms_box](assets/icon_oms_box.png)

Definieren Sie eine Stückliste, die bei der Lieferung verbraucht wird.

Technischer Name: `mrp_bom_consumption`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_bom_consumption>

## Stückliste für Lagerschwund erstellen

Öffnen sie ein Produkt und erstellen sie eine Stückliste. Als *Stücklisten Typ* geben sie *Scrap* an. Als Lagerquelle geben sie *WH/Stock* und als Ziellager *Virtual Locations/Scrap* ein.

Fügen sie der Komponenteliste Produkte und deren zu verbrauchende Menge ein.

![](assets/Manufacturing%20BoM%20Consumption%20BoM.png)

## Lot Lagerschwund erstellen

Damit der Verbrauch richtig verfolgt werden kann, erstellen sie für die zu verbrauchenden Produkte ein Lot. Öffnen sie das Produkt und erstellen sie ein Lot. Hinterlegen sie das Lot bei den Stücklisten zum Verbrauch.

![](assets/Manufacturing%20BoM%20Consumption%20Lot.png)

## Lieferung mit Lagerschwund erstellen

Haben sie ein Produkt mit einer Scrap-Stückliste erstellt, wird bei der Bestätigung der Lieferung automatisch eine Lagerbuchung und Produktlieferung für den Lagerschwund erstellt.

![Manufacture BoM Scrap Lagerschwund](assets/Manufacture%20BoM%20Scrap%20Lagerschwund.gif)

## Lieferung mit mehrfachem Lagerschwund erstellen

Angenommen sie verbrauchen zur Lieferung von 1 Kg *Zander Ganz*: 0.5 Kg *Filet ohne Haut* und zur Lieferung von 1 Kg *Filet ohne Haut*:  2 Kg *Zander Ganz*, dann wird für jedes Produkt ein Lagerschwund registriert.

![Manufacturing BoM Scrap doppelt](assets/Manufacturing%20BoM%20Scrap%20mehrfach.gif)

## Verbrauch anzeigen

Öffnen sie das Produkt via *Lager > Produkte > Produkte* und drücken sie auf *Produktlieferungen*. Hier sehen sie alle Lagerbewegungen des Produkts.

![](assets/Manufacturing%20BoM%20Scrap%20Produktlieferungen.png)

## Lieferung Lagerschwund abbrechen

Beim erledigen einer Lieferung mit Lagerschwund, wird eine zusätzlicher Lagerbuchung erstellt. Wird die Lieferung abgebrochen, dann wird die zusätzliche Lagerbuchung auf Null gesetzt.

![Manufacture BoM Scrap abbrechen](assets/Manufacture%20BoM%20Scrap%20abbrechen.gif)

## Verkaufsauftrag mit Lagerschwund abbrechen

Beim Abbrechen eines Verkaufsauftrags mit Lagerschwund wird die entsprechende Lagerbuchung abgebrochen.

![Manufacturing BoM Scrap Verkauf abbrechen](assets/Manufacturing%20BoM%20Scrap%20Verkauf%20abbrechen.gif)