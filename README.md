---

## Description

Ce projet fournit des opérations CRUD (Create, Read, Update, Delete) de base pour gérer les produits stockés dans un fichier JSON en utilisant Node.js. Il montre comment gérer les opérations de fichiers avec le module `fs` de Node.js et fournit des fonctions utilitaires pour gérer efficacement les données des produits.

### Fonctionnalités

- **Lire les produits** : Récupérer tous les produits d'un fichier JSON.
- **Écrire les produits** : Sauvegarder les produits mis à jour dans le fichier JSON.
- **Créer un produit** : Ajouter un nouveau produit avec des attributs uniques.
- **Lire un produit par ID** : Récupérer un produit spécifique en utilisant son identifiant unique.
- **Mettre à jour un produit par ID** : Mettre à jour les attributs d'un produit existant en utilisant son identifiant unique.
- **Supprimer un produit par ID** : Supprimer un produit de la liste en utilisant son identifiant unique.

### Aperçu du Code

#### `readProducts()`
Lit le fichier JSON de manière synchrone et analyse son contenu pour récupérer le tableau des produits.

#### `writeProducts(datas)`
Convertit l'objet JavaScript en chaîne JSON formatée et l'écrit dans le fichier JSON.

#### `createProduct(name, price, quantity)`
Crée un nouvel objet produit avec un `id` unique et l'ajoute au tableau existant des produits.

#### `readProduct(id)`
Trouve et retourne un produit du tableau en fonction de son `id`.

#### `updateProduct(id, updatedProduct)`
Trouve l'index du produit dans le tableau en fonction de son `id`. Si trouvé, fusionne les données existantes du produit avec `updatedProduct`, met à jour le produit dans le tableau, et écrit le tableau mis à jour dans le fichier.

#### `deleteProduct(id)`
Filtre le produit avec l'`id` spécifié du tableau des produits. Si un produit a été supprimé, écrit le tableau mis à jour dans le fichier.

### Exemple d'Utilisation

Démontre l'utilisation des fonctions définies (`createProduct`, `readProduct`, `updateProduct`, `deleteProduct`) et enregistre les résultats dans la console.

```javascript
console.log('Produit créé :', createProduct('Produit 1007', 1073, 143));
console.log('Produit :', readProduct(1719660266034));
console.log('Produit supprimé :', deleteProduct(1719662279494));
console.log('Produit mis à jour :', updateProduct(1719660855289, { price: 140, quantity: 14, name: 'Ordinateur' }));
console.log(readProducts());
```

### Comment Exécuter

1. **Installer Node.js** : Assurez-vous que Node.js est installé sur votre système.
2. **Cloner le Dépôt** : Clonez ce dépôt sur votre machine locale.
3. **Installer les Dépendances** : Naviguez dans le répertoire du projet et exécutez `npm install` si vous avez des dépendances.
4. **Exécuter le Script** : Exécutez le fichier JavaScript en utilisant Node.js.

```bash
node votre_script.js
```

Remplacez `votre_script.js` par le nom de votre fichier JavaScript.

### Structure des Fichiers

- `data.json` : Le fichier JSON où les données des produits sont stockées.
- `votre_script.js` : Le fichier JavaScript principal contenant les opérations CRUD.

---
