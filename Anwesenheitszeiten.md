---
tags:
- HowTo
prev: ./
---
# Anwesenheitszeiten
![icons_odoo_hr_attendance](assets/icons_odoo_hr_attendance.png)

Mitarbeitende erfassen selbständig ihre Präsenzzeit.

## Bereiche

| Bereich                                                               | Beschreibung                        |
| --------------------------------------------------------------------- | ----------------------------------- |
| [Anwesenheitszeiten Überstunden](Anwesenheitszeiten%20Überstunden.md) | Überstundenmanagement ganz einfach. | 

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden. Ideal für Überzeitenmanagement. |
| [Überzeitenmanagement](Überzeitenmanagement.md)                                           | Verwalten Sie die Überzeiten der Mitarbeitenden.                                                                   |
| [HR Attendance Kiosk Mode Color](HR%20Attendance%20Kiosk%20Mode%20Color.md)               | An- und Abmelden bei Anwesenheit farblich markieren.                                                               |

::: tip
Odoo unterscheidet Anwesenheit und Projektzeit. Die Zeiterfassung für Anwesenheit erfolgt mit der App Anwesenheit. Für das Erfassen der Projektzeit nutzt man die App Zeiterfassung.
:::

![Anwesenheitszeiten An- und Abmelden](assets/Anwesenheitszeiten%20An-%20und%20Abmelden.png)

## Konfiguration

### Ausweis ID hinterlegen

Für jeden Mitarbeitenden kann eine Ausweis ID hinterlegt werden. Navigieren Sie dazu nach *Personal > Mitarbeitende auswählen > Tab HR Einstellungen*. Geben Sie im Feld *Ausweis ID* die gewünschte Nummer ein oder wählen Sie *Erzeugen.*

![](assets/Anwesenheitszeiten%20Ausweis%20ID.png)

::: warning
Die Ausweis ID ist ist für die Anmeldung im Kioskmodus relevant.
:::

### PIN Code für anmeldung festlegen

Wenn Sie die Anmeldung der Anwesenheit mit einem PIN Code validieren möchten, können Sie diesen auf den Mitarbeitenden hinterlegen. Navigieren Sie dazu nach *Personal > Mitarbeitende auswählen > Tab HR Einstellungen*. Geben Sie den PIN im Feld *PIN Code* ein.

![](assets/Anwesenheitszeiten%20PIN%20Code.png)

::: warning
Der PIN Code wird bei der Anmeldung über den Kioskmodus abgefragt.
:::

## Verwaltung

### Kioskmodus starten

Starten Sie den Kioskmodus von Odoo über *Anwesenheitszeiten > Kioskmodus*.

![](assets/Anwesenheitszeiten%20Kioskmodus.png)

Mitarbeitende können nun ohne Odoo-Benutzer die Anwesenheit registrieren.

::: warning
Stellen Sie sicher, dass der verwendete Benutzer für den Kioskmodus eingeschränkte Berechtigungen hat.
:::

### Anwesenheit anmelden

Navigieren Sie nach *Anwesenheitszeiten* und klicken Sie auf den Knopf *Anmelden*.

![Anwesenheitszeiten Anmeldung](assets/Anwesenheitszeiten%20Anmeldung.png)

Es erscheint ein Willkommensgruss mit Angabe der Uhrzeit.

![Anwesenheitszeiten Bestätigung Anmeldung](assets/Anwesenheitszeiten%20Best%C3%A4tigung%20Anmeldung.png)

### Anwesenheit abmelden

Navigieren Sie nach *Anwesenheitszeiten* und klicken Sie auf den Knopf *Abmelden*.

![Anwesenheitszeiten Abmeldung](assets/Anwesenheitszeiten%20Abmeldung.png)

Es erscheint eine Verabschiedung mit Angabe der geleisteten Arbeitszeit.

![Anwesenheitszeiten Bestätigung Abmeldung](assets/Anwesenheitszeiten%20Best%C3%A4tigung%20Abmeldung.png)

## Auswertung

### Anwesenheitszeiten anzeigen

Der kürzeste Weg zur Anzeige der rapportierten Arbeitszeit führt über *Mein Profil*.
Navigieren Sie zum Knopf mit ihrem Namen auf dem Bildschirm oben rechts.
Dort wählen Sie *Vorname Nachname > Mein Profil*. Es erscheint die folgende Maske:

![Anwesenheitszeiten Zeitrapport](assets/Anwesenheitszeiten%20Zeitrapport.png)

Ein Klick auf den Smart-Link *XX.XX Stunden* zeigt eine Tabelle mit den Details.

![Anwesenheitszeiten Zeitrapport Detail](assets/Anwesenheitszeiten%20Zeitrapport%20Detail.png)

Ausführlichere Informationen bietet das Berichtswesen in der App Zeiterfassung.
Navigieren Sie nach *Zeiterfassung > Berichtswesen* und wählen Sie das Menü *Zeiterfassung / Anwesenheit*.

![Zeiterfassung Anwesenheitsbericht](assets/Zeiterfassung%20Anwesenheitsbericht.png)

Mit dem Knopf *Werte* können Spalten ein- und ausgeblendet werden.

::: tip
Das detaillierte Protokoll der An- und Abmeldungen zeigt die Übersicht *Anwesenheitszeiten > Manager > Anwesenheitszeiten*. (Die Berechtigung Personalsachbearbeiter ist notwendig.)
:::

### Anwesenheitszeiten bearbeiten

Mitarbeiter können standardmässig ihre Anwesenheitszeiten nachbessern. Dazu navigieren Sie über das Menu oben-rechts nach *Vorname Nachname > Mein Profil > Smart-Link XX.XX Stunden*. Hier werden die Checkins und Checkouts aufgelistet.

Um einen Eintrag zu bearbeiten, klick man entweder auf *Einchecken* oder *Abmeldung*.

![](assets/Anwesenheitszeiten%20bearbeiten.png)

### Zeitüberschreitungen filtern

Wenn Sie wissen möchten, welche Mitarbeitenden nicht korrekt ausgestempelt oder zu viel Zeit gestempelt haben, können Sie die Einträge via *Anwesenheitszeiten > Manager > Anwesenheitszeiten* filtern. Erstellen Sie einen Filter für das Feld *Arbeitsstunden*:

![](assets/Anwesenheitszeiten%20Arbeitsstunden%20filtern.png)

Natürlich können Sie die Auswertung auf ihrem Dashboard hinzufügen und sehen so, ob eine Fehlbuchung entstanden ist.

![](assets/Anwesenheitszeiten%20Dashboard.png)

## Aktionen

### Aktion "Überstunden aktualisieren" hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Überstunden aktualisieren`\
Modell: `hr.attendance`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record._update_overtime()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Anwesenheitszeiten erscheint nun in der Auswahl *Aktion* das Menu *Überstunden aktualisieren*.
