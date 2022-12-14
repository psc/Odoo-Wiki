---
tags:
- HowTo
prev: ./
---
# Odoo.sh
![icons_odoo_app](assets/icons_odoo_app.png)  

The Odoo Cloud Platform.

Website: <https://www.odoo.sh/>

## Einstellungen

### Projekt mit Github-Benutzer teilen

Odoo.sh Projekte sind an ein Github-Repository gekoppelt, wenn Sie einem Benutzer Zugriff auf das Projekt geben möchten, müssen Sie den Github-Benutzernamen in den Projekteinstellungen hinterlegen.

Öffnen Sie das Odoo.sh Projekt und navigieren Sie nach *Settings > Collaborators*. Tragen Sie hier den Benutzernamen und die enstprechenden Berechtigungen ein.

![](assets/Odoo.sh%20Benutzer%20hinzuf%C3%BCgen.png)

### Eigene Domain konfigurieren

Damit ihre Odoo-Installation oder Website unter einer eigenen Domain erreichbar sind, müssen Sie im Besitz der Domäne sein und einen DNS-Eintrag machen. Der DNS-Eintrag zeigt wo man den Odoo-Server für eine bestimme Domain findet. 

Angenommen ihr Odoo.sh-Projekt heisst `acme` und ihre Domain  ist `example.com`, dann müssen Sie diesen DNS-Eintrag erstellen: `www.example.com ALIAS acme.odoo.com` oder `www.example.com CNAME acme.odoo.com`.

::: tip
Die DNS-Einträge können Sie im Normalfall dort machen, wo Sie die Domain erworben und registriert haben. Verantwortlich für die DNS-Einträge sind die sog. *Nameserver*.
:::

In den Einstellung findet Sie den Abschnitt *Custom domains*, hier fügen Sie den Namen ihrer Domain ein.

![](assets/Odoo.sh%20Custom%20domains.png)

### Branch entfernen

Für jede Staging-Phase können Sie eine bestimmte Azahl Branches haben. Möchten Sie einen Branch entfernen so wählen Sie diesen aus und klicken oben rechts auf *Delete*.

![](assets/Odoo.sh%20Delete.png)

### Build-Verhalten bei Commit festlegen

Wenn Sie auf einen Staging- oder Entwicklungs-Branch committen, erstellt Odoo.sh standardmässig einen neuen Build. In bestimmten Fällen ist dies nicht erwünscht. Das Verhalten können Sie unter *Branch > Settings* festlegen.

![](assets/Odoo.sh%20Behavior%20Commit.png)