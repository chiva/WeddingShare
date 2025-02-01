﻿class Localization extends BaseLocalization {
    constructor() {
        super('de-DE', {
			"Or": "Oder",
			"Code": "Code",
			"Next": "Nächste",
            "Loading": "Wird geladen...",
            "Review": "Überprüfen",
            "Approve": "Genehmigen",
            "Reject": "Ablehnen",
            "Create": "Erstellen",
            "Import": "Importieren",
            "Export": "Exportieren",
            "Wipe": "Löschen",
            "Remove": "Entfernen",
            "Reset": "Zurücksetzen",
            "Upload": "Hochladen",
            "Download": "Herunterladen",
            "Update": "Aktualisieren",
            "Cancel": "Abbrechen",
            "Close": "Schließen",
            "Delete": "Löschen",
            "Error": "Fehler",
            "Errors": "Fehler",
			"Validate": "Bestätigen",
            "Login": "Anmelden",
            "Login_Invalid_Username": "Bitte gib einen gültigen Benutzernamen ein",
            "Login_Invalid_Password": "Bitte gib ein gültiges Passwort ein",
            "Login_Invalid_Details": "Benutzername oder Passwort stimmt nicht",
            "Login_Failed": "Anmeldung nicht erfolgreich",
            "Identity_Check": "Wer bist du?",
            "Identity_Check_Name": "Name",
            "Identity_Check_Hint": "Sag uns, wer du bist, damit wir wissen, wer die Erinnerungen hochgeladen hat.",
            "Identity_Check_Placeholder": "z. B. Hans Mustermann, Stephen, Tante Claudia",
            "Identity_Check_Tell_Us": "Das bin ich!",
            "Identity_Check_Stay_Anonymous": "Lieber Anonym bleiben",
            "Identity_Check_Change_Identity": "Identität ändern",
            "Identity_Check_Change": "Ändern",
            "Identity_Check_Invalid_Name": "Ungültiger Name",
            "Identity_Check_Invalid_Name_Msg": "Bitte gib einen gültigen Namen ein",
            "Identity_Check_Set_Failed": "Dein Name konnte nicht festgelegt werden",
            "Gallery": "Galerie",
            "Gallery_Name": "Galeriename",
            "Gallery_Name_Hint": "Gib einen neuen Namen für die Galerie ein",
            "Gallery_Secret_Key": "Galerie-Schlüssel",
            "Gallery_Secret_Key_Hint": "Gib einen neuen Galerie-Schlüssel ein",
            "Gallery_Invalid_Name": "Bitte gib einen gültigen Galerienamen ein",
            "Gallery_Invalid_Secret_Key": "Ungültiger geheimer Schlüssel, bitte versuchen Sie es erneut",
            "Gallery_Missing_Id": "Galerie-ID darf nicht leer sein",
            "Gallery_Missing_Name": "Galeriename darf nicht leer sein",
            "Gallery_Create": "Galerie erstellen",
            "Gallery_Create_Success": "Galerie wurde erfolgreich erstellt",
            "Gallery_Create_Failed": "Galerie konnte nicht erstellt werden",
            "Gallery_Edit": "Galerie bearbeiten",
            "Gallery_Edit_Success": "Galerie wurde erfolgreich aktualisiert",
            "Gallery_Edit_Failed": "Galerie konnte nicht aktualisiert werden",
            "Gallery_Wipe": "Galerie-Inhalte löschen",
            "Gallery_Wipe_Message": "Willst du wirklich alle Inhalte der Galerie '{name}' löschen?",
            "Gallery_Wipe_Success": "Galerie-Inhalte wurden erfolgreich gelöscht",
            "Gallery_Wipe_Failed": "Galerie-Inhalte konnten nicht gelöscht werden",
            "Gallery_Delete": "Galerie löschen",
            "Gallery_Delete_Message": "Willst du die Galerie '{name}' endgültig löschen?",
            "Gallery_Delete_Success": "Galerie wurde erfolgreich gelöscht",
            "Gallery_Delete_Failed": "Galerie konnte nicht gelöscht werden",
            "Upload_Progress": "Lade Element {index} von {count} hoch...",
            "Upload_Success": "{count} Element(e) wurden erfolgreich hochgeladen",
            "Upload_Success_Pending_Review": "{count} Element(e) wurden erfolgreich hochgeladen, warten auf Überprüfung",
            "Upload_No_Files_Detected": "Keine Dateien zum Hochladen gefunden",
            "Upload_Invalid_Gallery_Detected": "Ungültige Galerie-ID gefunden",
            "Upload_Invalid_Upload_Url": "Upload-URL nicht gefunden",
            "Review_Id_Missing": "Element-ID fehlt",
            "Review_Failed": "Überprüfung des Elements ist fehlgeschlagen",
            "Bulk_Review": "Schnellcheck",
            "Bulk_Review_Approve_Failed": "Genehmigung aller Elemente fehlgeschlagen",
            "Bulk_Review_Reject_Failed": "Ablehnung aller Elemente fehlgeschlagen",
            "Bulk_Review_Message": "Möchtest du alle ausstehenden Elemente genehmigen oder ablehnen?",
            "Delete_Item": "Element löschen",
            "Delete_Item_Success": "Element wurde erfolgreich gelöscht",
            "Delete_Item_Failed": "Element konnte nicht gelöscht werden",
            "Delete_Item_Message": "Willst du '{name}' wirklich löschen?",
            "Delete_Item_Id_Missing": "ID darf nicht leer sein",
            "Import_Data": "Daten importieren",
            "Import_Data_Success": "Daten wurden erfolgreich importiert",
            "Import_Data_Failed": "Daten konnten nicht importiert werden",
            "Import_Data_Backup_File": "Sicherungsdatei",
            "Import_Data_Backup_Hint": "Bitte wähle eine WeddingShare-Sicherungsdatei aus",
            "Import_Data_Select_File": "Wähle eine Sicherungsdatei aus",
            "Export_Data": "Daten exportieren",
            "Export_Data_Success": "Daten wurden erfolgreich exportiert",
            "Export_Data_Failed": "Daten konnten nicht exportiert werden",
            "Export_Data_Message": "Bist du sicher, dass du fortfahren möchtest?",
            "Wipe_Data": "Daten löschen",
            "Wipe_Data_Message": "Willst du wirklich alle Daten löschen?",
            "Wipe_Data_Success": "Daten wurden erfolgreich gelöscht",
            "Wipe_Data_Failed": "Daten konnten nicht gelöscht werden",
            "Download_Failed": "Galerie konnte nicht heruntergeladen werden",
            "Browser_Does_Not_Support": "Dein Browser unterstützt diese Funktion leider nicht",
            "2FA_Setup": "2FA Aufstellen",
            "2FA_Scan_With_App": "Scannen Sie das folgende Bild mit Ihrer App",
            "2FA_Manually_Enter_Code": "Geben Sie den Code manuell ein:",
            "2FA_Code_Hint": "Bitte geben Sie den von Ihrer 2FA-App generierten Code ein",
            "2FA_Set_Successfully": "2FA erfolgreich eingerichtet",
            "2FA_Set_Failed": "2FA konnte nicht eingerichtet werden",
            "2FA_Reset_Successfully": "2FA erfolgreich zurückgesetzt",
            "2FA_Reset_Failed": "2FA konnte nicht zurückgesetzt werden"
        });
    }
}

const localization = new Localization();