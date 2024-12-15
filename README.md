# Gestion des États en React

Ce projet a pour objectif d'apprendre et de comparer différentes approches pour gérer l'état dans une application React. Trois branches distinctes ont été créées pour explorer chaque méthode : `main` (useState), `useReducer`, et `context-api`.

---

## Contenu des branches

### 1. Branche `main` : **useState**
La branche principale utilise le hook `useState` pour la gestion de l'état local.

#### Points abordés :
- Comprendre le fonctionnement de `useState`.
- Manipuler des états simples et complexes.
- Gérer les effets secondaires liés aux changements d'état avec `useEffect`.

#### Exemple de code :
```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};
```

---

### 2. Branche `useReducer` : **useReducer**
Dans cette branche, le hook `useReducer` est utilisé pour gérer des états plus complexes, souvent dans des cas où plusieurs états sont interconnectés.

#### Points abordés :
- Implémentation de `useReducer` avec une fonction réductrice (reducer).
- Avantages de `useReducer` dans des applications où la logique de mise à jour de l'état est complexe.

#### Exemple de code :
```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

const increment = () => {
  dispatch({ type: 'increment' });
};
```

---

### 3. Branche `context-api` : **Context API**
Cette branche explore l'utilisation de l'API Context de React pour partager l'état globalement dans une application.

#### Points abordés :
- Création de contextes avec `React.createContext`.
- Fourniture d'état global à travers le composant `Context.Provider`.
- Consommation de l'état global avec le hook `useContext`.

#### Exemple de code :
```jsx
const CountContext = React.createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## Comment naviguer entre les branches

1. **Cloner le projet :**
```bash
git clone <url-du-repo>
```

2. **Changer de branche :**
```bash
# Branche main (useState)
git checkout main

# Branche useReducer
git checkout useReducer

# Branche context-api
git checkout context-api
```

---

## Objectifs d'apprentissage

- Comprendre les cas d'utilisation pour `useState`, `useReducer` et Context API.
- Savoir choisir la méthode de gestion d'état appropriée selon la complexité de l'application.
- Appliquer les principes de React pour maintenir un code lisible et performant.

---

## Contribution

Si vous avez des idées d'amélioration ou des suggestions, n'hésitez pas à ouvrir une pull request ou à soumettre une issue dans le dépôt GitHub.

---

## Ressources utiles

- [Documentation officielle de React](https://reactjs.org/docs/)
- [useState](https://reactjs.org/docs/hooks-state.html)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Context API](https://reactjs.org/docs/context.html)

