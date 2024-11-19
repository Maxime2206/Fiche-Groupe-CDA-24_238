# Fiche Personnelle CDA 24_238

# Version Français
# Employee Showcase - Angular Project

Ce projet Angular est une application simple permettant d'afficher une liste d'employés, leurs rôles, et leurs langages favoris. Il illustre l'utilisation de la directive `*ngFor` pour parcourir et afficher des données dynamiques dans un composant.

## 🛠 Fonctionnalités

- Affiche une liste d'employés sous forme de cartes.
- Présente le rôle de chaque employé.
- Liste leurs langages de programmation favoris.

## ✨ Exemple de Composant

Voici un extrait de code représentant le composant principal utilisé dans ce projet :

```html
<div class="employee-container">
  <div class="employee-card" *ngFor="let employee of employees">
    <h3>{{ employee.name }}</h3>
    <p><strong>Rôle :</strong> {{ employee.role }}</p>
    <p><strong>Langages Favoris :</strong></p>
    <ul>
      <li *ngFor="let skill of employee.skills">{{ skill }}</li>
    </ul>
  </div>
</div>
```
# English Version
# Employee Showcase - Angular Project

This Angular project is a simple application that displays a list of employees, their roles, and their favorite programming languages. It demonstrates the use of the `*ngFor` directive to iterate over and display dynamic data in a component.

## 🛠 Features

- Displays a list of employees in card format.
- Shows each employee's role.
- Lists their favorite programming languages.

## ✨ Component Example

Here is the main component used in this project:

```html
<div class="employee-container">
  <div class="employee-card" *ngFor="let employee of employees">
    <h3>{{ employee.name }}</h3>
    <p><strong>Role:</strong> {{ employee.role }}</p>
    <p><strong>Favorite Languages:</strong></p>
    <ul>
      <li *ngFor="let skill of employee.skills">{{ skill }}</li>
    </ul>
  </div>
</div>
```