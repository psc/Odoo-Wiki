---
tags:
- HowTo
prev: ./
---
# Einstellungen
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo-Einstellungen aktivieren und konfigurieren.

## Bereiche

| Bereich                                                               | Beschreibung                                                       |
| --------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Auth TOTP IP Check](Auth%20TOTP%20IP%20Check.md)                     | Zwei-Faktor-Authentisierung für bestimmte IP-Netzwerke ignorieren. |
| [Authentication OpenID Connect](Authentication%20OpenID%20Connect.md) | Login mit OpenID Connect Provider.                                 |
| [Einstellungen Aktionen](Einstellungen%20Aktionen.md)                 | Odoo-Einstellungen automatisieren.                                 |
| [Einstellungen Berechtigungen](Einstellungen%20Berechtigungen.md)     | Einstellungen zur Zugriffsrechte und Gruppen.                      |
| [Einstellungen Datenmanagement](Einstellungen%20Datenmanagement.md)   | Daten zu Einstellungen exportieren und importieren.                |
| [Einstellungen E-Mail](Einstellungen%20E-Mail.md)                     | Odoo mit Plattformen von Dritten integrieren.                      |
| [Einstellungen Login](Einstellungen%20Login.md)                       | Odoo-Einstellungen zum Benutzer und Anmeldeverfahren.              |
| [Einstellungen OAuth](Einstellungen%20OAuth.md)                       | OAuth-Integration mit Odoo.                                        |
| [Einstellungen Technisch](Einstellungen%20Technisch.md)               | Technische Einstellungen zur Odoo-Datenbank.                       |
| [Einstellungen Übersetzung](Einstellungen%20Übersetzung.md)           | Einstellungen zu Sprachpakete und Übersetzungen.                   |
| [Mail Service Users](Mail%20Service%20Users.md)                       | Service-Benutzer von Lizenzvertrag ausschliessen.                  |

## Erweiterungen

| Erweiterung                                           | Beschreibung                                                         |
| ----------------------------------------------------- | -------------------------------------------------------------------- |
| [Auth OAuth Keycloak](Auth%20OAuth%20Keycloak)        | Ermöglich Keycloak Integration mit Odoo OAuth.                       |
| [Home Background Image](Home%20Background%20Image.md) | Den Odoo-Startbildschirm gestalten.                                  |
| [Impersonate](Impersonate.md)                         | Schnelles Wechseln zwischen Benutzer-Accounts.                       |
| [Show DB Name](Show%20DB%20Name.md)                   | Zeigt den Datenbanknamen oben rechts an.                             |
| [Web Editor Show Code](Web%20Editor%20Show%20Code.md) | Aktion "Code anzeigen" im HTML-Editor ohne Entwicklermodus anzeigen. |
| [Web Responsive](Web%20Responsive.md)                 | Responsive Anzeige der Odoo-Oberfläche.                              |

## Entwicklermodus

### Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwicklertools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

Eine weitere Möglickeit ist die Installation der Browser-Addon [Odoo Debug](https://www.droggol.com/odoo-tools). Installieren Sie deses Addon in ihrem Browser. Anschliessend erscheint das folgende Icon in der Toolbar:

![Einstellungen Odoo Debug](assets/Einstellungen%20Odoo%20Debug.png)

Mit einem Mausklick können Sie damit den Entwicklermodus ein- und ausschalten.

### Superuser werden

Aktivieren Sie den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren).

Klicken Sie *Entwicklertools > Superuser werden*. Das Layout von Odoo ändert sich, Sie sind nun Superuser. Um zum normalen Benutzer zu wechseln, müssen Sie sich abmelden.

::: warning
Im Superuser-Modus werden alle Berechtigungen ignoriert. Das System kann unabsichtlich in einen inkonsistenten Zustand gebracht werden.
:::

### Tour deaktivieren

Aktivieren Sie den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren).

Klicken Sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen Sie *Tour deaktivieren*.

## Berichte

### Neues Papierformat einrichten

Navigieren Sie nach *Einstellungen > Technisch > Berichtswesen > Papieformat*. Wir nehmen an, es braucht ein neues Papieformat für einen Etikettendrucker. Erstellen Sie einen neuen Eintrag:

![](assets/Neues%20Papierformat.png)

::: tip
Für einen exakten Druck, müssen Sie die Seitengrösse in Inch und Milimeter kennen
:::

### Dokumentlayout konfigurieren

Die Darstellung der generierten Dokumente kann einfach angepasst werden. Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Geschäftsunterlagen* und wählen Sie *Dokumentlayout konfigurieren* aus. Die hier ausgewählte Dokumentvorlage wird für alle Berichte übernommen.

![](assets/Einstellungen%20Dokumentlayout.png)

### Papierformat für Bericht anpassen

Angenommen Sie möchten das Papieformat für den ISR-Einzahlungsschein ändern, öffnen Sie im Entwicklermodus *Einstellungen > Technisch > Berichtswesen > Papierformat.*

Duplizieren Sie das Papierformat *European A4 without borders* als *European A4 for ISR Report*.

Passen Sie das Papierformat an, beispielsweise mit *Linker Rand (mm)* `5.00`.

Im Entwicklermodus öffnen Sie *Einstellungen > Technisch > Berichtswesen > Berichte*, wählen den Bericht *ISR* und legen Sie das neue Papieformat fest.

## Standardwerte

### Standardwerte setzen

Für jedes Geschäftsobjekt können Sie Standardwerte mit Bedingungen festlegen. Öffnen Sie im Entwicklermodus ein Objekt, beispielsweise ein Angbot und legen Sie für ein Feld einen neuen Wert fest. Bevor Sie das Angebot speichern, navigieren Sie zum Entwicklermenu und wählen *Standardwert setzen*. Im Dialog wählen Sie das Feld und den Wert sowie die passende Bedingung. Wenn Sie den Standardwert gespeichert haben, wir dieser bei der Erstellung eines neuen Geschäftsobjekts angwendet.

![Einstellungen Standardwerte festlegen](assets/Einstellungen%20Standardwerte%20festlegen.gif)

### Datumsformat ändern

Für jede installierte Sprache kann das angezeigte Datumsformat überschrieben werden. Öffnen Sie das Sprachpaket via *Einstellungen > Allgemeine Einstellungen > Sprachen > Sprachen verwalten*. Bearbeiten Sie das Feld *Datumsformat* und geben Sie dort `%d.%m.%Y` ein.

![](assets/Einstellung%20Datumsformat.png)

### Sequenz anpassen

Um die Nummerierung einer Sequenz anzupassen, öffnen Sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen*. Wählen Sie die Sequenz aus und setzen die beispielsweise das Feld *Nächste Nummer zuweisen*.

## Lizenz

### Odoo-Datenbank verlängern

Wenn eine Datenbank abgelaufen ist, erscheine eine entsprechende Meldung. Diese ist aber nur symbolisch, mit der richtigen URL können Sie in den *Systemparameter* von Odoo das Ablaufdatum der Datenbank verlängern. Am einfachsten ist es, wenn das Testsystem und das produktive System unter einer ähnlichen URL erreichbar sind.

![Einstellungen Odoo-Datenbank verlängern](assets/Einstellungen%20Odoo-Datenbank%20verlängern.gif)