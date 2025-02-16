Documentation du projet React Admin
Démarrage du projet
Pour démarrer le projet, vous devez lancer deux processus :



Le serveur d'API mock/backend :
bash
npm run api


L'application React :
bash
npm start

Ces commandes doivent être exécutées dans des terminaux séparés et maintenues actives pendant le développement.
Installation complète

Clonez le dépôt :
git clone https://github.com/diarietoudiop/react-admin-test

Installez les dépendances :
bash :
npm install

Démarrez le serveur d'API mock :
bash:
npm run api
Dans un nouveau terminal, démarrez l'application :
bash :
npm start

Accédez à l'application dans votre navigateur à l'adresse http://localhost:3000

Structure et fonctionnement
Le composant PostList est construit sur React Admin et utilise le pattern de contexte. Tous les composants qui dépendent de ListContext (comme FilterButton) sont rendus à l'intérieur du composant List.
Configuration de l'API
Le projet utilise probablement json-server ou une solution similaire pour simuler une API REST. Le fichier de configuration se trouve généralement à la racine du projet ou dans un dossier /server.
Vérifiez le script api dans package.json pour comprendre exactement comment l'API mock est configurée.
Résolution des problèmes courants
Si vous rencontrez l'erreur "useListContext must be used inside a ListContextProvider" :

Assurez-vous que tous les composants qui utilisent le contexte de liste (comme FilterButton) sont rendus à l'intérieur du composant List
Vérifiez que vous utilisez la dernière version des composants comme illustré dans l'exemple corrigé

Contribution

Créez une branche pour votre fonctionnalité
Effectuez vos modifications
Testez vos changements en exécutant les deux commandes de démarrage
Soumettez une pull request
