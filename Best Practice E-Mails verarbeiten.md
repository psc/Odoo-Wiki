---
tags:
- Best-Practice
prev: ./best-practice
---
# Best Practice: E-Mails verarbeiten

## Allgemein

Auf bestimmten Odoo-Objekten können Sie E-Mail-Adressen einrichten. Wurden E-Mails im Postfach von Odoo mit der entsprechenden Adresse gefunden, ordnet Odoo den Inhalt und Anhang des E-Mails dem entsprechendne Odoo-Objekt zu.

## E-Mail Kopfzeilen

Odoo koordiniert die Kommunikation zwischen Geschäftsobjekten und den E-Mail-Empfängen mit verschiedenen Header im E-Mail. Dazu die wichtigsten:

* **reply-to**: Antworten an den E-Mail-Absender werden an diese Adresse umgeleitet. Es handelt sich um die sog. Catchall-Adresse.
* **from**: Normalerweise der/die BenutzerIn, welche die E-Mail verschickt hat.
* **x-odoo-objects**: Eindeutige Referenz auf das Geschäftsobjekt.

 Dazu ein Beispiel:

![](assets/Infomaniak%20Kopfzeilen.png)

Diese Header werden beim Empfang der Antwort-Mail von Odoo verarbeitet und entsprechend an das Geschäftsobjekt zugeordnet.

## Finanzen

Es macht Sinn, dass man Rechnungen per E-Mail empfangen kann. Dazu braucht zwei Einstellungen. Erstens muss man den [eingehenden Mail-Server konfigurieren](Diskussion%20E-Mail.md#Eingehender%20Mail-Server%20konfigurieren). Zweitens muss man [Rechnung per E-Mail empfangen](Finanzen.md#Rechnung%20per%20E-Mail%20empfangen).

Wurde alles eingerichtet könne Sie mit [Nachrichten abrufen](Diskussion.md#Nachrichten%20abrufen) den Abruf der E-Mails aus dem Odoo-Postfach forcieren.

