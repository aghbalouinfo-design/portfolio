---
title: "WebApp : Planificateur de Leçons"
description: "Un web app pour centraliser et facilté le travail de redaction des fiche pédagogique."
date: 2025-03-10
tags: ["WebApp", "Html/CSS/JS", "App Script", "Outil"]
image: "public/images/default-project.webp"
lien_demo: "https://votre-applet.fr"
lien_code: "https://github.com/votre-nom/applet-gestion"
---

### 1. Le Problème
Je voulais un système simple pour :
- Centraliser toutes mes fiches pédagogiques
- Noter "à la volée" des évaluations formatives (ex: "passage au tableau").
- Suivre l'acquisition des compétences sur le trimestre.

### 2. La Solution (Technologie)
J'ai développé une application Web légère avec **Flask (Python)** et **SQLite**. Elle est hébergée localement sur un Raspberry Pi dans ma salle de classe, accessible uniquement depuis le réseau de l'établissement.

### 3. Impact sur l'Enseignement
Cet outil m'a libéré du "qui n'est pas passé ?". Les élèves apprécient le côté aléatoire et transparent. Je peux exporter les évaluations en CSV à la fin de chaque période pour les intégrer plus facilement dans Pronote.