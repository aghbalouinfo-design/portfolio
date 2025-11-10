---
title: "WebApp : Gestionnaire de classe"
description: "Un outil interne en Flask (Python) pour gérer le tirage au sort et le suivi des compétences."
date: 2024-03-10
tags: ["WebApp", "Python", "Flask", "Outil"]
image: ""
lien_demo: "https://votre-applet.fr"
lien_code: "https://github.com/votre-nom/applet-gestion"
---

### 1. Le Problème
Je voulais un système simple pour :
- Tirer au sort des élèves de manière équitable.
- Noter "à la volée" des évaluations formatives (ex: "passage au tableau").
- Suivre l'acquisition des compétences sur le trimestre.

### 2. La Solution (Technologie)
J'ai développé une application Web légère avec **Flask (Python)** et **SQLite**. Elle est hébergée localement sur un Raspberry Pi dans ma salle de classe, accessible uniquement depuis le réseau de l'établissement.

### 3. Impact sur l'Enseignement
Cet outil m'a libéré du "qui n'est pas passé ?". Les élèves apprécient le côté aléatoire et transparent. Je peux exporter les évaluations en CSV à la fin de chaque période pour les intégrer plus facilement dans Pronote.