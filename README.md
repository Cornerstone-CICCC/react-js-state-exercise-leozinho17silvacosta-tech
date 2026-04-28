# React.js - State Exercise

**Goal:** To practice managing and updating state in React using the `useState` hook.

## Instructions

Setup your React project by running `npm create vite@latest state-exercise`
Create an application with **three buttons** and corresponding outputs.  
All outputs should appear in the main `App.tsx` file.

You will create **three components**:

1. `LightToggle`
2. `LottoNumbers`
3. `ClickCounter`

Each component will render a button, but the outputs will be handled in `App.tsx`.

## Tasks

### 1. Toggle “On/Off” the Lights

- Create a button labeled **"Toggle Lights"**.
- When clicked:
  - Toggle **isLightsOn** boolean state between `true` and `false`.
  - Update the background color of a **div**:
    - White for **lights on**.
    - Black for **lights off**.

### 2. Lotto Numbers

- Create a button labeled **"Generate Lotto Numbers"**.
- When clicked:
  - Generate **7 random numbers** between **1 and 50**.
  - Update `lottoNumbers` array state and display in a **div**.

### 3. Click Counter

- Create a button labeled **"Click Counter"**.
- When clicked:
  - Increment a **counter** by 1.
  - Update the `count` state and display the updated count in a **div**.

## Requirements

1. Use React's `useState` hook and create the states inside `App.tsx`.
2. Each button should be its own component:
   - `LightToggle`
   - `LottoNumbers`
   - `ClickCounter`
3. Pass setters to the components which will update the states on `App.tsx`.

### App.tsx

```tsx
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  /* Your states here */

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle />
      <div>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers />
      <div className="output"></div>

      <h2>Click Counter</h2>
      <ClickCounter />
      <div className="output"></div>
    </div>
  );
};

export default App;
```

Commit and push your changes once you are done!
