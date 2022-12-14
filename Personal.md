---
tags:
- HowTo
prev: ./
---
# Personal
![icons_odoo_hr](assets/icons_odoo_hr.png)

Personalmanagement für moderne Unternehmen.

Website: <https://www.odoo.com/de_DE/app/employees>

## Bereiche

| Bereich                                           | Beschreibung                        |
| ------------------------------------------------- | ----------------------------------- |
| [Personal Aktivitäten](Personal%20Aktivitäten.md) | Aktivitäten für Personal verwalten. |
| [Personal Verträge](Personal%20Verträge.md)       | Personalverträge zentral verwalten. |

## Erweiterungen

| Erweiterung                                                         | Beschreibung                                                       |
| ------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Employee Vehicle Request](Employee%20Vehicle%20Request.md)         | Fahrzeug-Reservationen für Mitarbeitende verwalten.                |
| [HR Activity Date](HR%20Activity%20Date.md)                         | Plannungstypen mit Aktivitätsdatum basierend auf Arbeitsverträgen. |
| [HR Birthday Calender](HR%20Birthday%20Calender.md)                 | Kalenderansicht aller Geburtstage.                                 |
| [HR Employee Employ Like](HR%20Employee%20Employ%20Like.md)         | Neues Feld Anstellung wie auf Mitarbeitenden.                      |
| [HR Employee Skill](HR%20Employee%20Skill.md)                       | Übersicht der Mitarbeiterfähigkeiten.                              |
| [HR Shortname](HR%20Shortname.md)                                   | Zu jedem Mitarbeitenden ein Kürzel speichern.                      |
| [HR Vehicle Request Calendar](HR%20Vehicle%20Request%20Calendar.md) | Kalenderansicht und Terminbestätigung für Fahrzeuganfragen.        |
| [HR Vehicle Request](HR%20Vehicle%20Request.md)                     | Fahrzeuganfragen für Mitarbeitende verwalten.                      |

## Organisation

### Abteilungen anzeigen

Navigieren Sie nach *Personal > Abteilungen*.

### Mitarbeiter erfassen

Navigieren Sie nach *Personal* und wählen Sie *+ Anlegen*. Geben Sie den Vor- und Nachnamen des Mitarbeiters ein und öffnen Sie den Tab *HR Einstelungen*. Wählen Sie unter *Verknüpfter Benutzer* einen bestehenden Benutzer aus, falls der Mitarbeiter Zugriff auf Odoo haben soll.

Schliessen Sie den Vorgang mit *Speichern* ab.

Alternativ können Sie nach *Einstellungen > Benutzer > Benutzer verwalten* navigieren und hier den Odoo-Benutzer auswählen. Über den Knopf *Mitarbeiter anlegen* können Sie den Mitarbeiter erfassen. Dieser wird über den Smart-Link verknüpft.

![](assets/Peresonal%20Smart-Link%20Mitarbeiter.png)

::: tip
Odoo unterscheidet zwischen Benutzer und Mitarbeiter. Mitarbeiter müssen nicht zwingend einen Odoo-Account besitzen. Zur Verwendung von Apps wie die Zeiterfassung muss den Benutzern ein Mitarbeiter hinterlegt werden.
:::

### Vorgesetzte hinterlegen

Damit Prozesse korrekt Ablaufen, muss die *Organisations-Charta* konfiguriert werden. Öffnen Sie den Mitarbeitenden via *Personal* und wählen im Feld *Manager* den Vorgesetzten aus. Die Visualisierung der Organisationsstruktur wird aktualisiert, sobald die Anpassung gespeichert ist.

### Benutzer mit Mitarbeiter verknüpfen

Sie können einen bestehenden Benutzer mit einem Mitarbeitenden-Eintrag verknüpfen. Zeigen Sie den Eintrag via *Personal* an und öffnen Sie den Tab *HR Einstellungen*. Wählen Sie hier im Feld *Verknüpfter Benutzer* den entsprechenden Benutzer aus.

![](assets/Personal%20Verknüpfter%20Benutzer.png)

## Adressen

### Private Adresse hinterlegen

Bestimmte Unterlagen wie die Lohnabrechnung werden an die private Adresse des Mitarbeiters versandt. Dafür gibt es ein entsprechendes Feld in der Mitarbeiter-Ansicht.

Erstellen Sie eine private Adresse folgendermassen: *Personal > Mitarbeiter auswählen > Tab Private Information > Bearbeiten* und legen Sie private Adresse im Feld *Adresse* fest.

## Arbeitszeit

### Arbeitspensum festlegen

Um das Arbeitspensum für einen Mitarbeiter zu ändern, öffnen Sie das App *Personal* und wählen den Mitarbieter aus. Wählen Sie *Bearbeiten* und legen Sie im Tab *Arbeitsinformation* unter *Ausführungsplan* die *Arbeitsstunden* fest.

![](assets/Personal%20Arbeitsstunden.png)

### Arbeitspensum wechseln

::: tip
Heute ist es die Norm, dass Mitarbeiter unterhalb des Jahres ein Arbeitspensum reduzieren oder erhöhen können. Es muss sichergestellt werden, dass die Entlohnung, Feriensaldos und Überstunden entsprechend angepasst werden.
:::

Um das Pensum eines Mitarbeits zu wechseln, muss ein Endatum für die bestehenden Arbeitszeiten eingetragen werden und die neuen Arbeitszeiten werden im Arbeitspensum erfasst.

Erstellen Sie eine neues Pensum *Personal > Mitarbeiter auswählen > Tab Arbeitsinformation > Ausführungsplan > Anlegen und Bearbeiten*. Definieren Sie einen passenden Titel und legen Sie bei den bestehenden Arbeitszeiten das Enddatum fest.

![](assets/Personal%20Arbeitszeiten%20mit%20Enddatum.png)

## Offboarding

### Mitarbeiteraustritt ausführen

Ein Mitarbeiteraustritt bedeutet für Odoo eine Archivierung des Mitarbeitenden in der *Personal* App. Wählen Sie den/die Mitarbeitenden unter *Personal* aus und klicken auf *Aktion > Archiv*. Zusammenhängende Ressourcen zum Personaleintrag werden mit dier Aktion ebenfalls archiviert.

## Berechtigung

### Neue Berechtigungsgruppe Personalmanager anlegen

Gehen Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und erstellen Sie eine Kopie von *Personal / Personalsachbearbeiter*. Geben Sie als Namen *Personalmanager* ein und entfernen Sie die Einträge im Tab *Benutzer*, *Vererbt*, *Menüs* und *Rechte für Daten*. Benutzer in dieser Gruppe erhalten Zugriff auf Aktivitäten auf dem Mitarbeiter-Objekt.
